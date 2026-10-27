const password = "abcdefghijklmno";
const length = password.length;

if (length >= 8 && length <= 15) {
  console.log(`Valid: ${length} characters`);
} else {
  console.log(`Invalid: ${length} characters`);
}