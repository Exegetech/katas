let calculate fish =
  let fish_ref = ref fish in
  let new_fish_count = ref 0 in

  for _ = 1 to 80 do
    let subtracted =
      List.map
        (fun age ->
          if age = 0 then (
            new_fish_count := !new_fish_count + 1;
            6)
          else age - 1)
        !fish_ref
    in

    let new_fish = List.init !new_fish_count (fun _ -> 8) in
    new_fish_count := 0;

    fish_ref := subtracted @ new_fish
  done;

  List.length !fish_ref
