let rec zip xs ys =
  match (xs, ys) with
  | [], [] -> []
  | x :: xs, [] -> (Some x, None) :: zip xs []
  | [], y :: ys -> (None, Some y) :: zip [] ys
  | x :: xs, y :: ys -> (Some x, Some y) :: zip xs ys

let increase_count measurements =
  let zipped = zip measurements (List.tl measurements) in
  let folder el acc =
    match el with
    | None, None -> acc
    | None, Some _ -> acc
    | Some _, None -> acc
    | Some x, Some y -> if x < y then acc + 1 else acc
  in
  List.fold_right folder zipped 0
