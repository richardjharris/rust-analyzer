window.SIDEBAR_ITEMS = {"enum":[["AdtId","A Data Type"],["AssocItemId",""],["AttrDefId",""],["DefWithBodyId","The defs which have a body."],["GenericDefId",""],["GenericParamId","A generic param"],["ItemContainerId",""],["MacroExpander",""],["MacroId","A macro"],["ModuleDefId","The defs which can be visible in the module."],["VariantId",""]],"fn":[["macro_id_to_def_id",""]],"mod":[["adt","Defines hir-level representation of structs, enums and unions"],["attr","A higher level attributes based on TokenTree, with also some shortcuts."],["body","Defines `Body`: a lowered representation of bodies of functions, statics and consts."],["builtin_attr","Builtin attributes resolved by nameres."],["builtin_type","This module defines built-in types."],["child_by_source","When constructing `hir`, we start at some parent syntax node and recursively lower the children."],["data","Contains basic data about various HIR declarations."],["db","Defines database & queries for name resolution."],["dyn_map","This module defines a `DynMap` – a container for heterogeneous maps."],["expr","This module describes hir-level representation of expressions."],["find_path","An algorithm to find a path to refer to a certain item."],["generics","Many kinds of items or constructs can have generic parameters: functions, structs, impls, traits, etc. This module provides a common HIR for these generic parameters. See also the `Generics` type and the `generics_of` query in rustc."],["import_map","A map of all publicly exported items in a crate."],["intern","Global `Arc`-based object interning infrastructure."],["item_scope","Describes items defined or visible (ie, imported) in a certain scope. This is shared between modules and blocks."],["item_tree","A simplified AST that only contains items."],["keys","keys to be used with `DynMap`"],["lang_item","Collects lang items: items marked with `#[lang = \"...\"]` attribute."],["layout","Definitions needed for computing data layout of types."],["nameres","This module implements import-resolution/macro expansion algorithm."],["path","A desugared representation of paths like `crate::foo` or `<Type as Trait>::bar`."],["per_ns","In rust, it is possible to have a value, a type and a macro with the same name without conflicts."],["resolver","Name resolution façade."],["src","Utilities for mapping between hir IDs and the surface syntax."],["type_ref","HIR for references to types. Paths in these are not yet resolved. They can be directly created from an ast::TypeRef, without further queries."],["visibility","Defines hir-level representation of visibility (e.g. `pub` and `pub(crate)`)."]],"struct":[["AssocItemLoc",""],["BlockId",""],["BlockLoc",""],["ConstId",""],["ConstParamId","A TypeOrConstParamId with an invariant that it actually belongs to a const"],["EnumId",""],["EnumVariantId",""],["ExternBlockId",""],["FieldId",""],["FunctionId",""],["ImplId",""],["ItemLoc",""],["LifetimeParamId",""],["Macro2Id",""],["Macro2Loc",""],["MacroRulesId",""],["MacroRulesLoc",""],["ModuleId",""],["ProcMacroId",""],["ProcMacroLoc",""],["StaticId",""],["StructId",""],["TraitId",""],["TypeAliasId",""],["TypeOrConstParamId",""],["TypeParamId","A TypeOrConstParamId with an invariant that it actually belongs to a type"],["UnionId",""]],"trait":[["AsMacroCall","A helper trait for converting to MacroCallId"],["HasModule",""],["Lookup",""]],"type":[["EnumLoc",""],["LocalEnumVariantId",""],["LocalFieldId",""],["LocalLifetimeParamId",""],["LocalModuleId","An ID of a module, local to a specific crate"],["LocalTypeOrConstParamId",""],["StaticLoc",""],["TraitLoc",""],["UnionLoc",""]]};