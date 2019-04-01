let startingMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const cloneMaze = function (maze) {

  return maze.map((row) => {
    return row.map((col) => {
      return col;    // not a reference value
    });
  });
};


const escape = function (maze, startRow, startCol) {

  const blockingValues = ['*', 'v'];

  const newMaze = cloneMaze(maze);

  // Get up,down,left,right
  let up    = (startRow > 0) ? newMaze[startRow-1][startCol] : null;
  let left  = (startCol > 0) ? newMaze[startRow][startCol-1] : null;
  let right = (startCol < newMaze[startRow].length-1) ? newMaze[startRow][startCol+1] : null;
  let down  = (startRow < newMaze.length-1) ? newMaze[startRow+1][startCol] : null;

  // Success Base Case
  if (newMaze[startRow][startCol] === 'e') {
    return console.log('Exit Reached');
  }

  // Failure Base Case
  if (blockingValues.includes(up) && blockingValues.includes(down) &&
      blockingValues.includes(left) && blockingValues.includes(right)) {
    return console.log('Dead End');
  }

  // mark position as visited
  newMaze[startRow][startCol] = 'v';

  if (up === ' ') {
    console.log('U');
    return escape(newMaze, startRow-1, startCol);
  }
  if (right === ' ') {
    console.log('R');
    return escape(newMaze, startRow, startCol+1);
  }
  if (down === ' ') {
    console.log('D');
    return escape(newMaze, startRow+1, startCol);
  }
  if (left === ' ') {
    console.log('L');
    return escape(newMaze, startRow, startCol-1);
  }
};

escape(startingMaze, 0, 0);





// escape (maze, startRow, startCol)
  // current = maze[startRow][startCol]
  // up      = maze[startRow-1][startCol]
  // right   = maze[startRow][startCol+1]
  // down    = maze[startRow+1][startCol]
  // left    = maze[startRow][startCol-1]

  // if current === 'e'
    // success, we found the exit

  // if up,right,down,left are ALL non-navigable (blocked or visited)
    // failure, we reached a dead end

  // otherwise
    // (one or more of up,right,down,left is navigable)

    // loop clockwise looking for first navigable space and move to it
      // recurse with updated maze an start position
