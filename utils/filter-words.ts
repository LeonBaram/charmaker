function hasBadWords(input: string, badwords: string[]): boolean {
  input = input.toLowerCase();
  return badwords.some(word => input.includes(word.toLowerCase()));
}

export { hasBadWords };
