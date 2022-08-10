type line = { x1 : int; y1 : int; x2 : int; y2 : int }

let total_overlap matrix =
  let total = ref 0 in
  for r = 0 to Array.length matrix - 1 do
    for c = 0 to Array.length matrix.(r) - 1 do
      let cell = matrix.(r).(c) in
      if cell >= 2 then total := !total + 1
    done
  done;

  !total

let calculate lines =
  let rows = 10 and cols = 10 in
  let matrix = Array.make_matrix rows cols 0 in

  for i = 0 to Array.length lines - 1 do
    let line = lines.(i) in

    if line.x1 = line.x2 then
      if line.y1 < line.y2 then
        for j = line.y1 to line.y2 do
          matrix.(j).(line.x1) <- matrix.(j).(line.x1) + 1
        done
      else
        for j = line.y2 to line.y1 do
          matrix.(j).(line.x1) <- matrix.(j).(line.x1) + 1
        done
    else if line.y1 = line.y2 then
      if line.x1 < line.x2 then
        for j = line.x1 to line.x2 do
          matrix.(line.y1).(j) <- matrix.(line.y1).(j) + 1
        done
      else
        for j = line.x2 to line.x1 do
          matrix.(line.y1).(j) <- matrix.(line.y1).(j) + 1
        done
  done;

  total_overlap matrix
