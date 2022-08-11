let () =
  let open Alcotest in
  run "AoC 2021"
    [
      ("Day 1", [ test_case "Check day 1" `Quick Day_1_test.test_day_1 ]);
      ("Day 2", [ test_case "Check day 2" `Quick Day_2_test.test_day_2 ]);
      ("Day 3", [ test_case "Check day 3" `Quick Day_3_test.test_day_3 ]);
      ("Day 4", [ test_case "Check day 4" `Quick Day_4_test.test_day_4 ]);
      ("Day 5", [ test_case "Check day 5" `Quick Day_5_test.test_day_5 ]);
      ("Day 6", [ test_case "Check day 6" `Quick Day_6_test.test_day_6 ]);
      ("Day 7", [ test_case "Check day 7" `Quick Day_7_test.test_day_7 ]);
    ]
