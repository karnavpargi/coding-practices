
// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
function symOfTwo(...args) {
  let output = []
  const [args0, args1] = args

  for (let i = 0; i < args0.length; i++) {
    if (!output.includes(args0[i]) && !args1.includes(args0[i])) {
      output.push(args0[i])
    }
  }

  for (let i = 0; i < args1.length; i++) {
    if (!output.includes(args1[i]) && !args[0].includes(args1[i])) {
      output.push(args1[i])
    }
  }

  return output;
}

function sym(...args) {

  let arr = args[0];
  for (let i = 1; i < args.length; i++) {
    arr = symOfTwo(arr, args[i]);
  }
  return arr.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 1, 4]));;