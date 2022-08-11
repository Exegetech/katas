exception Impossible

let calculate lines =
  let illegal_parentheses = ref 0 in
  let illegal_brackets = ref 0 in
  let illegal_curly_braces = ref 0 in
  let illegal_arrows = ref 0 in

  let stack = Stack.create () in

  List.iter
    (fun line ->
      try
        for i = 0 to String.length line - 1 do
          let ch = line.[i] in

          match ch with
          | '(' | '[' | '{' | '<' -> Stack.push ch stack
          | _ -> (
              match (Stack.top stack, ch) with
              | '(', ')' | '[', ']' | '{', '}' | '<', '>' ->
                  let _ = Stack.pop stack in
                  ()
              | _, ')' ->
                  illegal_parentheses := !illegal_parentheses + 1;
                  raise Exit
              | _, ']' ->
                  illegal_brackets := !illegal_brackets + 1;
                  raise Exit
              | _, '}' ->
                  illegal_curly_braces := !illegal_curly_braces + 1;
                  raise Exit
              | _, '>' ->
                  illegal_arrows := !illegal_arrows + 1;
                  raise Exit
              | _ -> raise Impossible)
        done
      with Exit ->
        ();

        Stack.clear stack)
    lines;

  (!illegal_parentheses * 3) + (!illegal_brackets * 57)
  + (!illegal_curly_braces * 1197)
  + (!illegal_arrows * 25137)
