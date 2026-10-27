const testCase1 = {
  id: "TC10",
  password: "abcdefghijklmno",
  expected: "Valid"
};
const testCase2 = {
  id: "TC11",
  password: "abcdefghijklmnop",
  expected: "Invalid"
};
console.log(testCase1.id);
console.log(testCase1.password);
console.log(testCase1.expected);
console.log(testCase1.password.length);

console.log(testCase2.id);
console.log(testCase2.password);
console.log(testCase2.expected);
console.log(testCase2.password.length);