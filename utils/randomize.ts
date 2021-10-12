function randomIndex(array: any[]): number {
  return Math.floor(Math.random() * array.length);
}

function rand<T>(...args: T[]): T {
  return args[randomIndex(args)];
}

function shuffle<T>(array: T[]): void {
  for (let i = 0, j: number; i < length; i++) {
    j = randomIndex(array);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export { rand, shuffle };
