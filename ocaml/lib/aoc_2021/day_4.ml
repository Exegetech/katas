type cell = { value : int; marked : bool }

let create_unmarked_board board =
  let col_mapper el = { value = el; marked = false } in
  let mapper row = Array.map col_mapper row in
  Array.map mapper board

let mark_board board num =
  for r = 0 to Array.length board - 1 do
    let row = board.(r) in

    for c = 0 to Array.length row - 1 do
      let cell = row.(c) in
      if cell.value = num then row.(c) <- { (row.(c)) with marked = true }
    done
  done

let check_if_win board =
  let has_filled_row = ref false in

  for i = 0 to Array.length board - 1 do
    let row = board.(i) in
    let row_filled = Array.for_all (fun x -> x.marked) row in
    has_filled_row := !has_filled_row || row_filled
  done;

  let has_filled_col = ref false in

  for i = 0 to Array.length board.(0) - 1 do
    let col_filled = ref true in

    for j = 0 to Array.length board - 1 do
      col_filled := !col_filled && board.(j).(i).marked
    done;

    has_filled_col := !has_filled_col || !col_filled
  done;

  !has_filled_row || !has_filled_col

let calculate_total_score board last_num =
  let unmarked = ref 0 in

  for r = 0 to Array.length board - 1 do
    let row = board.(r) in

    for c = 0 to Array.length row - 1 do
      let cell = row.(c) in

      if cell.marked = false then unmarked := !unmarked + cell.value
    done
  done;

  !unmarked * last_num

let calculate draw_sequence board_1 board_2 board_3 =
  let board_1 = create_unmarked_board board_1 in
  let board_2 = create_unmarked_board board_2 in
  let board_3 = create_unmarked_board board_3 in

  let winning_board = ref 0 in
  let total_score = ref 0 in

  try
    for i = 0 to Array.length draw_sequence - 1 do
      let num = draw_sequence.(i) in

      mark_board board_1 num;

      if check_if_win board_1 then (
        winning_board := 1;
        total_score := calculate_total_score board_1 num;
        raise Exit);

      mark_board board_2 num;

      if check_if_win board_2 then (
        winning_board := 2;
        total_score := calculate_total_score board_2 num;
        raise Exit);

      mark_board board_3 num;

      if check_if_win board_3 then (
        winning_board := 3;
        total_score := calculate_total_score board_3 num;
        raise Exit)
    done;

    (!winning_board, !total_score)
  with Exit -> (!winning_board, !total_score)
