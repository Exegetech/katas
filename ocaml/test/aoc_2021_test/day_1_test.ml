open Aoc_2021

let test_day_1 () =
  let measurements = [ 199; 200; 208; 210; 200; 207; 240; 269; 260; 263 ] in

  Alcotest.(check int) __LOC__ 7 (Day_1.increase_count measurements)
