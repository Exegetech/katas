open Ninety_nine

let test_last_none () =
  Alcotest.(check (option int)) __LOC__ None (List_problems.last [])

let test_last_some () =
  Alcotest.(check (option int))
    __LOC__ (Some 3)
    (List_problems.last [ 1; 2; 3 ])

let test_last2_none () =
  Alcotest.(check (option (pair int int))) __LOC__ None (List_problems.last2 [])

let test_last2_none2 () =
  Alcotest.(check (option (pair int int)))
    __LOC__ None
    (List_problems.last2 [ 1 ])

let test_last2_some () =
  Alcotest.(check (option (pair int int)))
    __LOC__
    (Some (3, 2))
    (List_problems.last2 [ 1; 2; 3 ])

let test_kth_none () =
  Alcotest.(check (option int)) __LOC__ None (List_problems.kth ~list:[] ~idx:0)

let test_kth_none2 () =
  Alcotest.(check (option int)) __LOC__ None (List_problems.kth ~list:[] ~idx:1)

let test_kth_some () =
  Alcotest.(check (option int))
    __LOC__ (Some 1)
    (List_problems.kth ~list:[ 1 ] ~idx:1)

let test_length_zero () =
  Alcotest.(check int) __LOC__ 0 (List_problems.length [])

let test_length_non_zero () =
  Alcotest.(check int) __LOC__ 3 (List_problems.length [ 1; 2; 3 ])

let test_rev_empty () =
  Alcotest.(check (list int)) __LOC__ [] (List_problems.rev [])

let test_rev_non_empty () =
  Alcotest.(check (list int))
    __LOC__ [ 3; 2; 1 ]
    (List_problems.rev [ 1; 2; 3 ])

let test_is_palindrome_empty () =
  Alcotest.(check bool) __LOC__ true (List_problems.is_palindrome [])

let test_is_palindrome_non_empty () =
  Alcotest.(check bool) __LOC__ false (List_problems.is_palindrome [ 1; 8; 2 ])

let test_is_palindrome_non_empty2 () =
  Alcotest.(check bool)
    __LOC__ true
    (List_problems.is_palindrome [ 1; 8; 8; 1 ])

let test_is_palindrome_non_empty3 () =
  Alcotest.(check bool) __LOC__ true (List_problems.is_palindrome [ 1; 8; 1 ])

let test_nested_non_empty () =
  Alcotest.(check (list int))
    __LOC__ [ 5 ]
    (List_problems.flatten List_problems.nested1);
  Alcotest.(check (list int))
    __LOC__ [ 1; 2; 3; 4; 5 ]
    (List_problems.flatten List_problems.nested2)

let test_nested_empty () =
  Alcotest.(check (list int))
    __LOC__ []
    (List_problems.flatten List_problems.nested3)

let test_compress_empty () =
  Alcotest.(check (list int)) __LOC__ [] (List_problems.compress [])

let test_compress_non_empty () =
  Alcotest.(check (list int))
    __LOC__ [ 1; 2 ]
    (List_problems.compress [ 1; 2; 2 ])

let test_compress_non_empty2 () =
  Alcotest.(check (list int))
    __LOC__ [ 1; 2; 3 ]
    (List_problems.compress [ 1; 2; 3 ])

let test_pack () =
  Alcotest.(check (list (list char)))
    __LOC__
    [
      [ 'a'; 'a'; 'a'; 'a' ];
      [ 'b' ];
      [ 'c'; 'c' ];
      [ 'a'; 'a' ];
      [ 'd' ];
      [ 'e'; 'e'; 'e'; 'e' ];
    ]
    (List_problems.pack
       [ 'a'; 'a'; 'a'; 'a'; 'b'; 'c'; 'c'; 'a'; 'a'; 'd'; 'e'; 'e'; 'e'; 'e' ])

let test_encode () =
  Alcotest.(check (list (pair int char)))
    __LOC__
    [ (4, 'a'); (1, 'b'); (2, 'c'); (2, 'a'); (1, 'd'); (4, 'e') ]
    (List_problems.encode
       [ 'a'; 'a'; 'a'; 'a'; 'b'; 'c'; 'c'; 'a'; 'a'; 'd'; 'e'; 'e'; 'e'; 'e' ])

let test_encode_modified () =
  let encoded_formatter = List_problems.pp_encoded Fmt.char in
  let encoded_check =
    Alcotest.testable encoded_formatter List_problems.encoded_equal_check
  in

  Alcotest.(check (list encoded_check))
    __LOC__
    [
      Multiple (4, 'a');
      Single 'b';
      Multiple (2, 'c');
      Multiple (2, 'a');
      Single 'd';
      Multiple (4, 'e');
    ]
    (List_problems.encode_modified
       [ 'a'; 'a'; 'a'; 'a'; 'b'; 'c'; 'c'; 'a'; 'a'; 'd'; 'e'; 'e'; 'e'; 'e' ])

let test_decode_modified () =
  Alcotest.(check (list char))
    __LOC__
    [ 'a'; 'a'; 'a'; 'a'; 'b'; 'c'; 'c'; 'a'; 'a'; 'd'; 'e'; 'e'; 'e'; 'e' ]
    (List_problems.decode_modified
       [
         Multiple (4, 'a');
         Single 'b';
         Multiple (2, 'c');
         Multiple (2, 'a');
         Single 'd';
         Multiple (4, 'e');
       ])

let test_encode_direct () =
  let encoded_formatter = List_problems.pp_encoded Fmt.char in
  let encoded_check =
    Alcotest.testable encoded_formatter List_problems.encoded_equal_check
  in

  Alcotest.(check (list encoded_check))
    __LOC__ [ Single 'a' ]
    (List_problems.encode_direct [ 'a' ]);

  Alcotest.(check (list encoded_check))
    __LOC__
    [ Multiple (4, 'a') ]
    (List_problems.encode_direct [ 'a'; 'a'; 'a'; 'a' ]);

  Alcotest.(check (list encoded_check))
    __LOC__ [ Single 'a'; Single 'b' ]
    (List_problems.encode_direct [ 'a'; 'b' ]);

  Alcotest.(check (list encoded_check))
    __LOC__
    [ Multiple (4, 'a'); Single 'b' ]
    (List_problems.encode_direct [ 'a'; 'a'; 'a'; 'a'; 'b' ]);

  Alcotest.(check (list encoded_check))
    __LOC__
    [
      Multiple (4, 'a');
      Single 'b';
      Multiple (2, 'c');
      Multiple (2, 'a');
      Single 'd';
      Multiple (4, 'e');
    ]
    (List_problems.encode_direct
       [ 'a'; 'a'; 'a'; 'a'; 'b'; 'c'; 'c'; 'a'; 'a'; 'd'; 'e'; 'e'; 'e'; 'e' ])

let test_duplicate_empty () =
  Alcotest.(check (list int)) __LOC__ [] (List_problems.duplicate [])

let test_duplicate_non_empty () =
  Alcotest.(check (list int))
    __LOC__ [ 1; 1; 2; 2; 3; 3 ]
    (List_problems.duplicate [ 1; 2; 3 ])

let test_replicate () =
  Alcotest.(check (list char))
    __LOC__
    [ 'a'; 'a'; 'a'; 'b'; 'b'; 'b'; 'c'; 'c'; 'c' ]
    (List_problems.replicate ~list:[ 'a'; 'b'; 'c' ] ~n:3)

let test_drop_every () =
  Alcotest.(check (list int))
    __LOC__
    [ 1; 2; 4; 5; 7; 8; 10; 11 ]
    (List_problems.drop_every ~list:[ 1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11 ] ~n:3)

let test_split () =
  Alcotest.(check (pair (list char) (list char)))
    __LOC__
    ([ 'a'; 'b'; 'c' ], [ 'd'; 'e'; 'f'; 'g'; 'h'; 'i'; 'j'; 'k' ])
    (List_problems.split
       ~list:[ 'a'; 'b'; 'c'; 'd'; 'e'; 'f'; 'g'; 'h'; 'i'; 'j'; 'k' ]
       ~len:3)

let test_slice () =
  Alcotest.(check (list int))
    __LOC__ [ 3; 4; 5; 6; 7 ]
    (List_problems.slice
       ~list:[ 1; 2; 3; 4; 5; 6; 7; 8; 9; 10 ]
       ~from_idx:3 ~to_idx:7)

let test_rotate () =
  Alcotest.(check (list char))
    __LOC__
    [ 'd'; 'e'; 'f'; 'g'; 'h'; 'a'; 'b'; 'c' ]
    (List_problems.rotate
       ~list:[ 'a'; 'b'; 'c'; 'd'; 'e'; 'f'; 'g'; 'h' ]
       ~pivot:3);

  Alcotest.(check (list char))
    __LOC__
    [ 'g'; 'h'; 'a'; 'b'; 'c'; 'd'; 'e'; 'f' ]
    (List_problems.rotate
       ~list:[ 'a'; 'b'; 'c'; 'd'; 'e'; 'f'; 'g'; 'h' ]
       ~pivot:(-2))

let test_remove_at () =
  Alcotest.(check (list int))
    __LOC__ [ 1; 2; 4; 5 ]
    (List_problems.remove_at ~list:[ 1; 2; 3; 4; 5 ] ~idx:3)

let test_insert_at () =
  Alcotest.(check (list char))
    __LOC__
    [ 'a'; 'x'; 'b'; 'c'; 'd' ]
    (List_problems.insert_at ~el:'x' ~list:[ 'a'; 'b'; 'c'; 'd' ] ~idx:2)

let test_range () =
  Alcotest.(check (list int))
    __LOC__ [ 1; 2; 3; 4; 5 ]
    (List_problems.range ~from_n:1 ~to_n:5)
