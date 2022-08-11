open Aoc_2021.Day_6

let test_day_6 () =
  let fish = [ 3; 4; 3; 1; 2 ] in

  Alcotest.(check int) __LOC__ 5934 (calculate fish)
