function generateRandomTSCode() {
  const rand = Math.random();
  if (rand < 0.5) return "1 + 2 * 3";
  else return "4 - 6 / 8";
}
