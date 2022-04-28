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

    // arr.filter((i) => {
    //   if(i == alive){
    //     item[i].push(true);
    //   } else {
    //     item[i].push(false);
    //   }
    // })


  console.table(playerState);
  return playerState;
  
  // for(var i = 0; i < playerState.length; i++){
  //   if(playerState[i] == 0) {
  //     initialState.push(false);
  //   } else {
  //     initialState.push(true);
  //   }
  // }
  // console.log(initialState)
  // return initialState;
};

const make2DArray = (cols, rows) => {
  var arr = new Array(cols);
  for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
 return arr;
}