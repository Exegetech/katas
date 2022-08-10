type 'a mtree = Node of 'a * 'a mtree list

let mtree1 = Node ('a', [])
let mtree2 = Node ('a', [ Node ('b', []) ])
let mtree3 = Node ('a', [ Node ('b', [ Node ('c', []) ]) ])
let mtree4 = Node ('b', [ Node ('d', []); Node ('e', []) ])

let mtree5 =
  Node
    ( 'a',
      [
        Node ('f', [ Node ('g', []) ]);
        Node ('c', []);
        Node ('b', [ Node ('d', []); Node ('e', []) ]);
      ] )

let rec nnodes mtree =
  match mtree with
  | Node (_, []) -> 1
  | Node (_, xs) ->
      let rest = List.map (fun sub -> nnodes sub) xs in
      let total = List.fold_left (fun acc el -> acc + el) 0 rest in
      1 + total
