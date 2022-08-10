type direction = Forward of int | Down of int | Up of int
type position = { horizontal : int; vertical : int }

let calculate directions =
  let start = { horizontal = 0; vertical = 0 } in

  let folder el acc =
    match el with
    | Forward x -> { acc with horizontal = acc.horizontal + x }
    | Down x -> { acc with vertical = acc.vertical + x }
    | Up x -> { acc with vertical = acc.vertical - x }
  in

  let finish = List.fold_right folder directions start in

  finish.horizontal * finish.vertical
