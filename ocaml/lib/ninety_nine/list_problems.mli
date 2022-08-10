(* 1 *)
val last : 'a list -> 'a option

(* 2 *)
val last2 : 'a list -> ('a * 'a) option

(* 3 *)
val kth : list:'a list -> idx:int -> 'a option

(* 4 *)
val length : 'a list -> int

(* 5 *)
val rev : 'a list -> 'a list

(* 6 *)
val is_palindrome : 'a list -> bool

(* 7 *)
type 'a nested

val flatten : 'a nested -> 'a list
val nested1 : int nested
val nested2 : int nested
val nested3 : int nested

(* 8 *)
val compress : 'a list -> 'a list

(* 9 *)
val pack : 'a list -> 'a list list

(* 10 *)
val encode : 'a list -> (int * 'a) list

(* 11 *)
type 'a encoded = Single of 'a | Multiple of (int * 'a) [@@deriving show]

val encoded_equal_check : 'a encoded -> 'a encoded -> bool
val encode_modified : 'a list -> 'a encoded list

(* 12 *)
val decode_modified : 'a encoded list -> 'a list

(* 13 *)
val encode_direct : 'a list -> 'a encoded list

(* 14 *)
val duplicate : 'a list -> 'a list

(* 15 *)
val replicate : list:'a list -> n:int -> 'a list

(* 16 *)
val drop_every : list:'a list -> n:int -> 'a list

(* 17 *)
val split : list:'a list -> len:int -> 'a list * 'a list

(* 18 *)
val slice : list:'a list -> from_idx:int -> to_idx:int -> 'a list

(* 19 *)
val rotate : list:'a list -> pivot:int -> 'a list

(* 20 *)
val remove_at : list:'a list -> idx:int -> 'a list

(* 21 *)
val insert_at : el:'a -> list:'a list -> idx:int -> 'a list

(* 22 *)
val range : from_n:int -> to_n:int -> int list

(* 23 *)
val rand_select : list:'a list -> n:int -> 'a list

(* 24 *)
val rand_select2 : amount:int -> upper_bound:int -> int list

(* 25 *)
val rand_permutation : 'a list -> 'a list
