let is_low_point height_map row col =
  let is_low = ref true in

  for r = -1 to 1 do
    for c = -1 to 1 do
      let exclude = r = c || r = -1 * c in
      if not exclude then
        let row' = row + r in
        let col' = col + c in
        let within_bounds =
          row' >= 0
          && row' <= Array.length height_map - 1
          && col' >= 0
          && col' <= Array.length height_map.(0) - 1
        in

        if within_bounds then
          let lower = height_map.(row).(col) < height_map.(row').(col') in
          is_low := !is_low && lower
    done
  done;

  !is_low

let calculate height_map =
  let risk = ref 0 in

  for r = 0 to Array.length height_map - 1 do
    for c = 0 to Array.length height_map.(0) - 1 do
      if is_low_point height_map r c then risk := !risk + height_map.(r).(c) + 1
    done
  done;

  !risk
