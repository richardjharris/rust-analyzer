use parking_lot::Mutex;

use std::{
    hash::Hash,
    sync::Arc,
};

use rustc_hash::FxHashMap;

use crate::{
    hir::{SourceItemId, ModuleId},
    input::SourceRootId,
};

/// There are two principle ways to refer to things:
///   - by their locatinon (module in foo/bar/baz.rs at line 42)
///   - by their numeric id (module `ModuleId(42)`)
///
/// The first one is more powerful (you can actually find the thing in question
/// by id), but the second one is so much more compact.
///
/// `Loc2IdMap` allows us to have a cake an eat it as well: by maintaining a
/// bidirectional mapping between positional and numeric ids, we can use compact
/// representation wich still allows us to get the actual item
#[derive(Debug)]
pub(crate) struct Loc2IdMap<L, ID>
where
    ID: NumericId,
    L: Clone + Eq + Hash,
{
    loc2id: FxHashMap<L, ID>,
    id2loc: FxHashMap<ID, L>,
}

impl<L, ID> Default for Loc2IdMap<L, ID>
where
    ID: NumericId,
    L: Clone + Eq + Hash,
{
    fn default() -> Self {
        Loc2IdMap {
            loc2id: FxHashMap::default(),
            id2loc: FxHashMap::default(),
        }
    }
}

impl<L, ID> Loc2IdMap<L, ID>
where
    ID: NumericId,
    L: Clone + Eq + Hash,
{
    pub fn loc2id(&mut self, loc: &L) -> ID {
        match self.loc2id.get(loc) {
            Some(id) => return id.clone(),
            None => (),
        }
        let id = self.loc2id.len();
        assert!(id < u32::max_value() as usize);
        let id = ID::from_u32(id as u32);
        self.loc2id.insert(loc.clone(), id.clone());
        self.id2loc.insert(id.clone(), loc.clone());
        id
    }

    pub fn id2loc(&self, id: ID) -> L {
        self.id2loc[&id].clone()
    }
}

pub(crate) trait NumericId: Clone + Eq + Hash {
    fn from_u32(id: u32) -> Self;
    fn to_u32(self) -> u32;
}

macro_rules! impl_numeric_id {
    ($id:ident) => {
        impl NumericId for $id {
            fn from_u32(id: u32) -> Self {
                $id(id)
            }
            fn to_u32(self) -> u32 {
                self.0
            }
        }
    };
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub(crate) struct FnId(u32);
impl_numeric_id!(FnId);

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub(crate) struct DefId(u32);
impl_numeric_id!(DefId);

#[derive(Clone, Debug, PartialEq, Eq, Hash)]
pub(crate) enum DefLoc {
    Module {
        id: ModuleId,
        source_root: SourceRootId,
    },
    Item {
        source_item_id: SourceItemId,
    },
}

#[derive(Debug, Default, Clone)]
pub(crate) struct IdMaps {
    inner: Arc<IdMapsInner>,
}

impl IdMaps {
    pub(crate) fn fn_id(&self, item_id: SourceItemId) -> FnId {
        self.inner.fns.lock().loc2id(&item_id)
    }
    pub(crate) fn fn_item_id(&self, fn_id: FnId) -> SourceItemId {
        self.inner.fns.lock().id2loc(fn_id)
    }

    pub(crate) fn def_id(&self, loc: DefLoc) -> DefId {
        self.inner.defs.lock().loc2id(&loc)
    }
    pub(crate) fn def_loc(&self, def_id: DefId) -> DefLoc {
        self.inner.defs.lock().id2loc(def_id)
    }
}

#[derive(Debug, Default)]
struct IdMapsInner {
    fns: Mutex<Loc2IdMap<SourceItemId, FnId>>,
    defs: Mutex<Loc2IdMap<DefLoc, DefId>>,
}
