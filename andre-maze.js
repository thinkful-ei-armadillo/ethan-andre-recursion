/* LEGEND
  ' ' = empty
  '*' = wall
  'e' = exit
  'c' = current pos
  'r', 'l', 'u', 'd' = directional marker
*/

let maze = [
  ['r', 'r', 'd', '*', ' ', ' ', ' '],
  ['*', '*', 'c', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const findPath = (maze) => {
  let currentX, currentY, foundExit = false;
  const ignore = ['r', 'l', 'u', 'd', '*'];
  // base case: fn finds cell 'e' with 'c'
  // counterintuitive, but the x value would actually be represented by the cell
  // and the y value would be represented by the row
  // but to keep things simple we'll just use (y, x) instead of traditional (x,y) notation
  maze.forEach((row, x) => {
    row.forEach((cell, y) => {
      if(cell.indexOf('e') !== -1) {
        console.log('DEBUG: found exit cell');

        if(cell.indexOf('c') !== -1) {
          // the exit cell is also the current cell; maze complete
          console.log('DEBUG: maze complete');
          foundExit = true;
        }
      } else if(cell.indexOf('c') !== -1) {
        // found the current cell, but maze is not complete
        console.log(`X: ${x}, Y: ${y}`);
        currentX = y; currentY = x;
      }
    });
  });

  if(foundExit) return true;

  /*
    CURRENTPOS: [1, 2](y, x)
    left: [1, 1](y, x - 1)
    right: [1, 3](y, x + 1)
    up: [0, 2](y - 1, x)
    down: [2, 2](y + 1, x)
  */

  // step 1: look in all 4 directions
  const
    x = currentX,
    y = currentY,
    yBound = 5 - 1,
    xBound = 6;

  const
    lookLeft  = (x > 0) ? maze[y][x - 1] : '*',
    lookRight = (x < xBound) ? maze[y][x + 1] : '*',
    lookUp    = (y > 0 && y < yBound) ? maze[y - 1][x] : '*',
    lookDown  = (y >= 0 && y < yBound) ? maze[y + 1][x] : '*';
    
  let cell = null;
  
  if(! ignore.includes(lookLeft)) {
    //console.log('can move left');
    cell = maze[y][x - 1];
    maze[y][x - 1] = cell === 'e' ? 'ec' : 'c'; // set the new current position marker
    maze[y][x] = 'l'; // set the directional marker
  } else if(! ignore.includes(lookRight)) {
    //console.log('can move right');
    cell = maze[y][x + 1];
    maze[y][x + 1] = cell === 'e' ? 'ec' : 'c'; 
    maze[y][x] = 'r';
  } else if(! ignore.includes(lookUp)) {
    //console.log('can move up');
    cell = maze[y - 1][x];
    maze[y - 1][x] = cell === 'e' ? 'ec' : 'c'; 
    maze[y][x] = 'u';
  } else if(! ignore.includes(lookDown)) {
    //onsole.log('can move down');
    cell = maze[y + 1][x];
    maze[y + 1][x] = cell === 'e' ? 'ec' : 'c';
    maze[y][x] = 'd';
  }

  console.log(maze);


  // step 2: mark which direction to go
  // step 3: move current position to a new location
  // step 4: pass the modified maze into fn
  return findPath(maze);
};


findPath(maze);