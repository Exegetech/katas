open Aoc_2021

let test_day_2 () =
  let directions =
    [
      Day_2.Forward 5;
      Day_2.Down 5;
      Day_2.Forward 8;
      Day_2.Up 3;
      Day_2.Down 8;
      Day_2.Forward 2;
    ]
  in

  Alcotest.(check int) __LOC__ 150 (Day_2.calculate directions)
