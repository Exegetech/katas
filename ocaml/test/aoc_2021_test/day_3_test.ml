open Aoc_2021.Day_3

let test_day_3 () =
  let reports =
    [|
      [| Zero; Zero; One; Zero; Zero |];
      [| One; One; One; One; Zero |];
      [| One; Zero; One; One; Zero |];
      [| One; Zero; One; One; One |];
      [| One; Zero; One; Zero; One |];
      [| Zero; One; One; One; One |];
      [| Zero; Zero; One; One; One |];
      [| One; One; One; Zero; Zero |];
      [| One; Zero; Zero; Zero; Zero |];
      [| One; One; Zero; Zero; One |];
      [| Zero; Zero; Zero; One; Zero |];
      [| Zero; One; Zero; One; Zero |];
    |]
  in
  Alcotest.(check int) __LOC__ 198 (calculate reports)
