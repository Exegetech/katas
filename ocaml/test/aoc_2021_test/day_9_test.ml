open Aoc_2021.Day_9

let test_day_9 () =
  let height_map =
    [|
      [| 2; 1; 9; 9; 9; 4; 3; 2; 1; 0 |];
      [| 3; 9; 8; 7; 8; 9; 4; 9; 2; 1 |];
      [| 9; 8; 5; 6; 7; 8; 9; 8; 9; 2 |];
      [| 8; 7; 6; 7; 8; 9; 6; 7; 8; 9 |];
      [| 9; 8; 9; 9; 9; 6; 5; 6; 7; 8 |];
    |]
  in

  Alcotest.(check int) __LOC__ 15 (calculate height_map)
