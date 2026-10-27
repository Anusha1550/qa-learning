const passwords = [
  "abcdefg",
  "abcdefgh",
  "abcdefghi",
  "abcdefghijklmn",
  "abcdefghijklmno",
  "abcdefghijklmnop"
];

for (const password of passwords) {
  const length = password.length;

  if (length >= 8 && length <= 15) {
    console.log(`${length} characters: Valid`);
  } else {
    console.log(`${length} characters: Invalid`);
  }
}