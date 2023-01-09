window.SIDEBAR_ITEMS = {"enum":[["Adjust",""],["AutoBorrow",""],["BindingMode","Binding modes inferred for patterns. https://doc.rust-lang.org/reference/patterns.html#binding-modes"],["CallableDefId",""],["ImplTraitId",""],["ImplTraitLoweringMode",""],["InferenceDiagnostic",""],["Mutability","Whether a type is mutable or not."],["ParamKind",""],["PointerCast",""],["Safety","Whether a function is safe or not."],["Scalar","Types of scalar values."],["TyDefId",""],["TyVariableKind","Represents some extra knowledge we may have about the type variable."],["ValueTyDefId",""]],"fn":[["all_super_traits","Returns an iterator over the whole super trait hierarchy (including the trait itself)."],["associated_type_shorthand_candidates",""],["autoderef",""],["callable_sig_from_fnonce",""],["could_coerce",""],["could_unify",""],["from_assoc_type_id",""],["from_chalk_trait_id",""],["from_foreign_def_id",""],["from_placeholder_idx",""],["is_fn_unsafe_to_call",""],["lt_from_placeholder_idx",""],["param_idx","Return an index of a parameter in the generic type parameter list by it’s id."],["replace_errors_with_variables","‘Canonicalizes’ the `t` by replacing any errors with new variables. Also ensures there are no unbound variables or inference variables anywhere in the `t`."],["static_lifetime",""],["to_assoc_type_id",""],["to_chalk_trait_id",""],["to_foreign_def_id",""],["to_placeholder_idx",""]],"macro":[["has_interner",""]],"mod":[["consteval","Constant evaluation details"],["db","The home of `HirDatabase`, which is the Salsa database containing all the type inference-related queries."],["diagnostics","Type inference-based diagnostics."],["display","The `HirDisplay` trait, which serves two purposes: Turning various bits from HIR back into source code, and just displaying them for debugging/testing purposes."],["lang_items","Functions to detect special lang items"],["layout","Compute the binary representation of a type"],["method_resolution","This module is concerned with finding methods that a given type provides. For details about how this works in rustc, see the method lookup page in the rustc guide and the corresponding code mostly in rustc_hir_analysis/check/method/probe.rs."],["primitive","A few helper functions for dealing with primitives."],["traits","Trait solving using Chalk."]],"struct":[["Adjustment","Represents coercing a value to a different type of value."],["AdtId","The id for an Abstract Data Type (i.e. structs, unions and enums)."],["BoundVar","Identifies a particular bound variable within a binder. Variables are identified by the combination of a [`DebruijnIndex`], which identifies the binder, and an index within that binder."],["CallableSig","A function signature as seen by type inference: Several parameter types and one return type."],["DebruijnIndex","References the binder at the given depth. The index is a de Bruijn index, so it counts back through the in-scope binders, with 0 being the innermost binder. This is used in impls and the like. For example, if we had a rule like `for<T> { (T: Clone) :- (T: Copy) }`, then `T` would be represented as a `BoundVar(0)` (as the `for` is the innermost binder)."],["FnSubst","A wrapper for the substs on a Fn."],["InferenceResult","The result of type inference: A mapping from expressions and patterns to types."],["Interner",""],["OverloadedDeref","An overloaded autoderef step, representing a `Deref(Mut)::deref(_mut)` call, with the signature `&'a T -> &'a U` or `&'a mut T -> &'a mut U`. The target type is `U` in both cases, with the region and mutability being those shared by both the receiver and the returned reference."],["ReturnTypeImplTraits",""],["TyBuilder","This is a builder for `Ty` or anything that needs a `Substitution`."],["TyLoweringContext",""]],"trait":[["Cast","The `Cast` trait is used to make annoying upcasts between logically equivalent types that imply wrappers. For example, one could convert a `DomainGoal` into a `Goal` by doing:"],["ProjectionTyExt",""],["TraitRefExt",""],["TyExt",""],["TypeWalk","This allows walking structures that contain types to do something with those types, similar to Chalk’s `Fold` trait."]],"type":[["AliasEq",""],["AliasTy",""],["AssocTypeId",""],["Binders","Represents generic parameters and an item bound by them. When the item has parent, the binders also contain the generic parameters for its parent. See chalk’s documentation for details."],["Canonical",""],["CanonicalVarKinds",""],["ChalkTraitId",""],["ClosureId",""],["ConcreteConst",""],["Const",""],["ConstData",""],["ConstValue",""],["ConstrainedSubst",""],["DomainGoal",""],["DynTy",""],["Environment",""],["FnDefId",""],["FnPointer",""],["FnSig",""],["ForeignDefId",""],["GenericArg",""],["GenericArgData",""],["Goal",""],["Guidance",""],["InEnvironment",""],["InferenceVar",""],["Lifetime",""],["LifetimeData",""],["LifetimeOutlives",""],["OpaqueTy",""],["OpaqueTyId",""],["PlaceholderIndex",""],["PolyFnSig","A polymorphic function signature."],["ProjectionTy",""],["QuantifiedWhereClause",""],["QuantifiedWhereClauses",""],["Solution",""],["Substitution","Interned list of generic arguments for an item. When an item has parent, the `Substitution` for it contains generic arguments for both its parent and itself. See chalk’s documentation for details."],["TraitRef",""],["Ty",""],["TyKind",""],["VariableKind",""],["VariableKinds",""],["WhereClause",""]]};