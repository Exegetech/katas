let () =
  let open Alcotest in
  run "AoC 2021"
    [
      ("Day 1", [ test_case "Check day 1" `Quick Day_1_test.test_day_1 ]);
      ("Day 2", [ test_case "Check day 2" `Quick Day_2_test.test_day_2 ]);
      ("Day 3", [ test_case "Check day 3" `Quick Day_3_test.test_day_3 ]);
    ]