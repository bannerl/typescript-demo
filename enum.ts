enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 常量枚举enum
const enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
// let d: Color = Color[Color[Green]];
// 常数枚举不能出现计算属性，因为他不会计算的
// const enum Color {Red, Green, Blue = "blue".length};

// 外部枚举
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
