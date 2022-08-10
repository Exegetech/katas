type binary = Zero | One

let rec pow a = function
  | 0 -> 1
  | 1 -> a
  | n ->
      let b = pow a (n / 2) in
      b * b * if n mod 2 = 0 then 1 else a

let ( ^ ) = pow

let binary_to_decimal binary_arr =
  let total_decimal = ref 0 in

  for i = 0 to Array.length binary_arr - 1 do
    let idx = Array.length binary_arr - 1 - i in
    let bit = binary_arr.(idx) in

    let decimal = match bit with Zero -> 0 | One -> 2 ^ i in

    total_decimal := !total_decimal + decimal
  done;

  !total_decimal

type common_bit = { least : binary; most : binary }

let get_common_bit reports idx =
  let zero_count = ref 0 in
  let one_count = ref 0 in

  for i = 0 to Array.length reports - 1 do
    let el = reports.(i).(idx) in
    match el with
    | Zero -> zero_count := !zero_count + 1
    | One -> one_count := !one_count + 1
  done;

  if zero_count < one_count then { least = Zero; most = One }
  else { least = One; most = Zero }

let get_common_bits reports =
  let common_bits = Array.make 5 { least = Zero; most = Zero } in

  for i = 0 to 4 do
    common_bits.(i) <- get_common_bit reports i
  done;

  common_bits

let calculate reports =
  let common_bits = get_common_bits reports in
  let gamma_bits = Array.make 5 Zero in
  let epsilon_bits = Array.make 5 Zero in

  for i = 0 to 4 do
    gamma_bits.(i) <- common_bits.(i).most;
    epsilon_bits.(i) <- common_bits.(i).least
  done;

  let gamma = binary_to_decimal gamma_bits in
  let epsilon = binary_to_decimal epsilon_bits in

  gamma * epsilon
