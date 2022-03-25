const hasBadWords = (input: string, badwords: string[]): boolean =>
  badwords.some((word) => input.toLowerCase().includes(word.toLowerCase()));

export { hasBadWords };
