open Aoc_2021.Day_7

let test_day_7 () =
  let crabs = [ 16; 1; 2; 0; 4; 2; 7; 1; 2; 14 ] in

  Alcotest.(check int) __LOC__ 37 (calculate crabs)
