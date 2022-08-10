let last xs =
  match xs with
  | [] -> None
  | xs ->
      let head = xs |> List.rev |> List.hd in
      Some head

let last2 xs =
  let rev = List.rev xs in
  match rev with x :: y :: _ -> Some (x, y) | _ -> None

let rec kth ~list ~idx =
  match (list, idx) with
  | [], _ -> None
  | x :: _, 1 -> Some x
  | _ :: xs, idx -> kth ~list:xs ~idx:(idx - 1)

let rec length xs = match xs with [] -> 0 | _ :: xs -> 1 + length xs
let rec rev xs = match xs with [] -> [] | x :: xs -> rev xs @ [ x ]
let is_palindrome xs = List.equal ( = ) xs (rev xs)

type 'a nested = Elem of 'a | List of 'a nested list

let rec flatten nested =
  match nested with
  | Elem x -> [ x ]
  | List xs ->
      List.fold_left
        (fun acc nested ->
          let sub = flatten nested in
          acc @ sub)
        [] xs

let nested1 = Elem 5
let nested2 = List [ Elem 1; List [ Elem 2; List [ Elem 3; Elem 4 ]; Elem 5 ] ]
let nested3 = List []

let rec compress xs =
  match xs with
  | [] -> []
  | [ x ] -> [ x ]
  | x :: y :: xs -> if x = y then compress (y :: xs) else x :: compress (y :: xs)

let pack xs =
  List.rev
  @@ List.fold_left
       (fun acc el ->
         match (acc, el) with
         | [], el -> [ [ el ] ]
         | (x :: xs as acc), el ->
             let hd = List.hd x in
             if hd = el then (el :: x) :: xs else [ el ] :: acc)
       [] xs

let encode xs =
  let packed = pack xs in
  List.map (fun group -> (List.length group, List.hd group)) packed

type 'a encoded = Single of 'a | Multiple of (int * 'a) [@@deriving show]

let encoded_equal_check a b =
  match (a, b) with
  | Single a, Single b -> a = b
  | Multiple (na, a), Multiple (nb, b) -> na = nb && a == b
  | _, _ -> false

let encode_modified xs =
  let encoded = encode xs in
  List.map
    (fun group -> match group with 1, el -> Single el | _ -> Multiple group)
    encoded

let rec decode_modified xs =
  let rec repeat el n = match n with 0 -> [] | n -> el :: repeat el (n - 1) in

  match xs with
  | [] -> []
  | x :: xs ->
      let sub =
        match x with Single a -> [ a ] | Multiple (n, a) -> repeat a n
      in

      sub @ decode_modified xs

let encode_direct xs =
  List.fold_right
    (fun el acc ->
      match (el, acc) with
      | el, [] -> [ Single el ]
      | el, Single el' :: xs ->
          if el = el' then Multiple (2, el) :: xs
          else Single el :: Single el' :: xs
      | el, Multiple (n, el') :: xs ->
          if el = el' then Multiple (n + 1, el) :: xs
          else Single el :: Multiple (n, el') :: xs)
    xs []

let rec duplicate xs =
  match xs with [] -> [] | x :: xs -> x :: x :: duplicate xs

let replicate ~list ~n =
  let rec repeat el n = match n with 0 -> [] | n -> el :: repeat el (n - 1) in
  let repeated = List.map (fun el -> repeat el n) list in

  List.fold_right (fun el acc -> el @ acc) repeated []

let drop_every ~list ~n = List.filteri (fun idx _ -> 0 <> (idx + 1) mod n) list

let split ~list ~len =
  let with_idx = List.mapi (fun idx el -> (idx, el)) list in

  let before_rev =
    List.fold_left
      (fun acc el ->
        let idx, el = el in
        let fst, snd = acc in

        if idx + 1 <= len then (el :: fst, snd) else (fst, el :: snd))
      ([], []) with_idx
  in

  let fst, snd = before_rev in

  (List.rev fst, List.rev snd)

let slice ~list ~from_idx ~to_idx =
  let filter idx _ = idx + 1 >= from_idx && idx + 1 <= to_idx in
  List.filteri filter list

let rec rotate ~list ~pivot =
  let len = List.length list in
  if pivot < 0 then rotate ~list ~pivot:(pivot + len)
  else if pivot > len then rotate ~list ~pivot:(pivot - len)
  else
    let fst, snd = split ~list ~len:pivot in
    snd @ fst

let remove_at ~list ~idx = List.filteri (fun _idx _ -> idx - 1 <> _idx) list

let insert_at ~el ~list ~idx =
  let fst, snd = split ~list ~len:(idx - 1) in
  fst @ [ el ] @ snd

let rec range ~from_n ~to_n =
  if from_n = to_n then [ to_n ] else from_n :: range ~from_n:(from_n + 1) ~to_n

let rec rand_select ~list ~n =
  if n = 0 then []
  else
    let rec select_at list idx =
      if idx = 1 then List.hd list
      else
        let tail = List.tl list in
        select_at tail (idx - 1)
    in

    let len = List.length list in
    let rand_idx = Random.full_int len + 1 in
    let new_list = remove_at ~list ~idx:rand_idx in

    select_at list rand_idx :: rand_select ~list:new_list ~n:(n - 1)

let rec rand_select2 ~amount ~upper_bound =
  if amount = 0 then []
  else
    let rand = Random.full_int (upper_bound + 1) in
    let adjusted = rand + 1 in

    adjusted :: rand_select2 ~amount:(amount - 1) ~upper_bound

let rand_permutation list = rand_select ~list ~n:(List.length list)
