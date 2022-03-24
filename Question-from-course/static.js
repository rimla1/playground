class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }
  // Static method can be called on class name
  static isEqual(a, b) {
    return a.width * a.height === b.width * b.height;
  }
}

const square1 = new Square(8);
const square2 = new Square(8);

const resultForConsole = Square.isEqual(square1, square2);
console.log(resultForConsole);
