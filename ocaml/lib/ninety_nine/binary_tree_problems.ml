type 'a btree = Empty | Branch of 'a * 'a btree * 'a btree

let btree1 =
  Branch
    ( 'a',
      Branch ('b', Branch ('d', Empty, Empty), Branch ('e', Empty, Empty)),
      Branch ('c', Empty, Branch ('f', Branch ('g', Empty, Empty), Empty)) )

let btree2 = Branch ('a', Empty, Empty)
let btree3 = Empty

let btree4 =
  Branch
    (1, Branch (2, Empty, Branch (4, Empty, Empty)), Branch (2, Empty, Empty))

let rec count_leaves btree =
  match btree with
  | Empty -> 0
  | Branch (_, Empty, Empty) -> 1
  | Branch (_, ltree, rtree) -> count_leaves ltree + count_leaves rtree

let rec leaves btree =
  match btree with
  | Empty -> []
  | Branch (x, Empty, Empty) -> [ x ]
  | Branch (_, ltree, rtree) -> leaves ltree @ leaves rtree

let rec internals btree =
  match btree with
  | Empty | Branch (_, Empty, Empty) -> []
  | Branch (x, ltree, rtree) -> [ x ] @ internals ltree @ internals rtree
