
// Time Complexity: O(n), because we iterate from 1 to n.
const sum_to_n_a = (n: number): number =>  {
	let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Time Complexity: 𝑂 ( 𝑛 ) because it performs n recursive calls
const sum_to_n_b = (n: number): number =>  {
  if (n < 0) return 0;
  return n + sum_to_n_b(n -1);
}

// Time Complexity: O(1) (constant), as it uses a direct mathematical formula.
const sum_to_n_c = (n: number): number =>  {
    return (n * (n + 1)) / 2;

}

const n = 5;
const resultA = sum_to_n_a(n)
console.log({resultA});

const resultB = sum_to_n_b(n)
console.log({resultB});

const resultC = sum_to_n_c(n)
console.log({resultC});