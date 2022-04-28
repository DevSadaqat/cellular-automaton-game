// (world: boolean[][]) => boolean[][]
// implement your state transition logic here
export const next = (world) => {
  return world;
};
// (pattern: string) => boolean[][]
// implement your lexicon parsing logic here

export const parse = (pattern) => {
  const filterPattern = pattern.split('\n');
  const playerState = filterPattern.map((item) => item.split(''));

  playerState.forEach((col, x) => {
    col.forEach((row, y) => {
      row == '.' ? col[y] = false : col[y] = true;
    })
  });

  return playerState;
  
};

