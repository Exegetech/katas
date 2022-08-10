open Ninety_nine

let test_count_leaves () =
  Alcotest.(check int)
    __LOC__ 2
    (Binary_tree_problems.count_leaves Binary_tree_problems.btree4)

let test_leaves () =
  Alcotest.(check (list int))
    __LOC__ [ 4; 2 ]
    (Binary_tree_problems.leaves Binary_tree_problems.btree4)

let test_internals () =
  Alcotest.(check (list int))
    __LOC__ [ 1; 2 ]
    (Binary_tree_problems.internals Binary_tree_problems.btree4)
