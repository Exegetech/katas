let calculate crabs =
  let max = List.fold_left Int.max 0 crabs in
  let min = 0 in

  let cheapest = ref (max * List.length crabs) in

  for i = min to max do
    let folder acc el = acc + Int.abs (el - i) in
    let cost = List.fold_left folder 0 crabs in

    cheapest := Int.min cost !cheapest
  done;

  !cheapest
