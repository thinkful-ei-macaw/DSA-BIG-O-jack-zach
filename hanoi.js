function hanoi(n, src, dest, temp) {
  if (n === 1) {
    print(src, dest);
  }

  if (n > 1) {
    hanoi(n - 1, src, temp, dest);
    print(src, dest);
    hanoi(n - 1, temp, dest, src);
  }
}

function print(a, b) {
  console.log(`Moving ${a} to -> ${b}`);
}

// hanoi(2, 'A', 'C', 'B');
hanoi(5, 'A', 'C', 'B');
// hanoi(5, 'A', 'C', 'B');
