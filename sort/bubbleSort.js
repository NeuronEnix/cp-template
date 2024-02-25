const arr = [1, 2, 3, 4, 5, 6]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] <= arr[j]) continue
      const t = arr[i]
      arr[i] = arr[j]
      arr[j] = t
    }
  }
  return arr
}

const testCases = [
  { input: [5, 3, 8, 4, 2], expected: [2, 3, 4, 5, 8] },
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
  { input: [1, 1, 1, 1, 1], expected: [1, 1, 1, 1, 1] },
  { input: [], expected: [] }
];

testCases.forEach((testCase, index) => {
  const { input, expected } = testCase;
  const result = bubbleSort(input);
  const resultString = JSON.stringify(result);
  const expectedString = JSON.stringify(expected);
  if (resultString !== expectedString) {
    console.error(`Test case ${index + 1} failed! Expected: ${expectedString}, Actual: ${resultString}`);
  } else {
    console.log(`Test case ${index + 1} passed!`);
  }
});
