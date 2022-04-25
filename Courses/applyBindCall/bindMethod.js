const coordinate_home = {
  x: 35,
  y: 71,
};

const coordinate_work = {
  x: 10,
  y: 100,
};

function printCoordinates() {
  console.log(this);
  console.log(this.x + ", " + this.y);
}

// const printCoordinates = () => {
//   console.log(this.x + ", " + this.y);
// };

// printCoordinates(); // Undefined, Undefined

const printHomeCoordinate = printCoordinates.bind(coordinate_home);
const printWorkCoordinate = printCoordinates.bind(coordinate_work);

printHomeCoordinate(); // 35, 71
printWorkCoordinate(); // 10, 100
