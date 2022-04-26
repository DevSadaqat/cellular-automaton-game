// (world: boolean[][]) => boolean[][]
// implement your state transition logic here
export const next = (world) => {
  return world;
};
// (pattern: string) => boolean[][]
// implement your lexicon parsing logic here
export const parse = (pattern) => {
  const alive = '0';
  const dead = '.';
  const nextRow = '/n'
  let playerState = Array.from(pattern);
  let initialState = [];
  for(var i = 0; i < playerState.length; i++){
    if(playerState[i] === alive){
      initialState.push(true);
    } else if (playerState[i] === dead){
      initialState.push(false);
    }
  }
  console.log(initialState)
  return initialState;
};

const make2DArray = (cols, rows) => {
  var arr = new Array(cols);
  for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
 return arr;
}