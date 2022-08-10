let () =
  let open Alcotest in
  run "99 Problems"
    [
      ( "last",
        [
          test_case "Empty list gives None" `Quick
            List_problems_test.test_last_none;
          test_case "Non-empty list gives Some" `Quick
            List_problems_test.test_last_some;
        ] );
      ( "last2",
        [
          test_case "Empty list gives None" `Quick
            List_problems_test.test_last2_none;
          test_case "One item list gives None" `Quick
            List_problems_test.test_last2_none2;
          test_case "Two item list gives Some" `Quick
            List_problems_test.test_last2_some;
        ] );
      ( "kth",
        [
          test_case "Empty list gives None" `Quick
            List_problems_test.test_kth_none;
          test_case "List with not enough items gives None" `Quick
            List_problems_test.test_kth_none2;
          test_case "List with enough items gives Some" `Quick
            List_problems_test.test_kth_some;
        ] );
      ( "length",
        [
          test_case "Empty list gives 0" `Quick
            List_problems_test.test_length_zero;
          test_case "Non empty list gives correct length" `Quick
            List_problems_test.test_length_non_zero;
        ] );
      ( "rev",
        [
          test_case "Reverse empty list" `Quick
            List_problems_test.test_rev_empty;
          test_case "Reverse non empty list" `Quick
            List_problems_test.test_rev_non_empty;
        ] );
      ( "is_palindrome",
        [
          test_case "Check empty list" `Quick
            List_problems_test.test_is_palindrome_empty;
          test_case "Check non empty list" `Quick
            List_problems_test.test_is_palindrome_non_empty;
          test_case "Check non empty list" `Quick
            List_problems_test.test_is_palindrome_non_empty2;
          test_case "Check non empty list" `Quick
            List_problems_test.test_is_palindrome_non_empty3;
        ] );
      ( "nested",
        [
          test_case "Check non empty list" `Quick
            List_problems_test.test_nested_non_empty;
          test_case "Check empty list" `Quick
            List_problems_test.test_nested_empty;
        ] );
      ( "compress",
        [
          test_case "Check empty list" `Quick
            List_problems_test.test_compress_empty;
          test_case "Check non empty list" `Quick
            List_problems_test.test_compress_non_empty;
          test_case "Check non empty list" `Quick
            List_problems_test.test_compress_non_empty2;
        ] );
      ("pack", [ test_case "Check list" `Quick List_problems_test.test_pack ]);
      ( "encode",
        [ test_case "Check list" `Quick List_problems_test.test_encode ] );
      ( "encode_modified",
        [
          test_case "Check list" `Quick List_problems_test.test_encode_modified;
        ] );
      ( "decode_modified",
        [
          test_case "Check list" `Quick List_problems_test.test_decode_modified;
        ] );
      ( "encode_direct",
        [ test_case "Check list" `Quick List_problems_test.test_encode_direct ]
      );
      ( "duplicate",
        [
          test_case "Duplicate empty list" `Quick
            List_problems_test.test_duplicate_empty;
          test_case "Duplicate non empty list" `Quick
            List_problems_test.test_duplicate_non_empty;
        ] );
      ( "replicate",
        [ test_case "Duplicate list" `Quick List_problems_test.test_replicate ]
      );
      ( "drop_every",
        [
          test_case "Check drop every" `Quick List_problems_test.test_drop_every;
        ] );
      ("split", [ test_case "Check split" `Quick List_problems_test.test_split ]);
      ("slice", [ test_case "Check slice" `Quick List_problems_test.test_slice ]);
      ( "rotate",
        [ test_case "Check rotate" `Quick List_problems_test.test_rotate ] );
      ( "remove_at",
        [ test_case "Check remove at" `Quick List_problems_test.test_remove_at ]
      );
      ( "insert_at",
        [ test_case "Check insert at" `Quick List_problems_test.test_insert_at ]
      );
      ("range", [ test_case "Check range" `Quick List_problems_test.test_range ]);
      ( "count_leaves",
        [
          test_case "Check count leaves" `Quick
            Binary_tree_problems_test.test_count_leaves;
        ] );
      ( "leaves",
        [
          test_case "Check leaves" `Quick Binary_tree_problems_test.test_leaves;
        ] );
      ( "internals",
        [
          test_case "Check internals" `Quick
            Binary_tree_problems_test.test_internals;
        ] );
      ( "nnodes",
        [
          test_case "Check nnodes" `Quick
            Multiway_tree_problems_test.test_nnodes;
        ] );
    ]
