// 布尔值
let isDone1: boolean = false;
// 注意，使用构造函数 Boolean 创造的对象不是布尔值，事实上 new Boolean() 返回的是一个 Boolean 对象
// let createdByNewBoolean: boolean = new Boolean(1);
// 直接调用 Boolean 也可以返回一个 boolean 类型
let  createdByBoolean: boolean = Boolean(1);

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 联合类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); // 编译时报错
// 接口
interface Person {
  name: string;
  age: number;
}
let tom: Person = {
  name: 'Tom',
  age: 25    
};
  
interface Person1 {
  name: string;
  age?: number;  // 可选
}

let tom1: Person1 = {
  name: 'Tom'
};

interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any; // 接口允许有任意的属性
}
