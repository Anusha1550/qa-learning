const tests = [
  { id: "BV01", password: "abcdefg", expected: "Invalid" },
  { id: "BV02", password: "abcdefgh", expected: "Valid" },
  { id: "BV03", password: "abcdefghi", expected: "Valid" },
  { id: "BV04", password: "abcdefghijklmn", expected: "Valid" },
  { id: "BV05", password: "abcdefghijklmno", expected: "Valid" },
  { id: "BV06", password: "abcdefghijklmnop", expected: "Invalid" }
];

for (const test of tests) {
  const length = test.password.length;
  let actual;

  if (length >= 8 && length <= 15) {
    actual = "Valid";
  } else {
    actual = "Invalid";
  }

  if (actual === test.expected) {
    console.log(`${test.id}: Pass (expected ${test.expected}, actual ${actual})`);
  } else {
    console.log(`${test.id}: Fail (expected ${test.expected}, actual ${actual})`);
  }
}