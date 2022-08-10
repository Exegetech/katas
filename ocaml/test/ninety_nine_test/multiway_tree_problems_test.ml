open Ninety_nine

let test_nnodes () =
  Alcotest.(check int)
    __LOC__ 2
    (Multiway_tree_problems.nnodes Multiway_tree_problems.mtree2)
