type 'a btree

val btree1 : char btree
val btree2 : char btree
val btree3 : int btree
val btree4 : int btree

(* 61 *)
val count_leaves : 'a btree -> int

(* 61a *)
val leaves : 'a btree -> 'a list

(* 62 *)
val internals : 'a btree -> 'a list
