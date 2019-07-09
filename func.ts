function sum(x: number, y: number): number {
  return x + y;
}
// sum(1, 2, 3); // 注意，输入多余的（或者少于要求的）参数，是不被允许的

// 对左侧进行定义
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 可选参数
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tomcat1 = buildName('Tom');

// 剩余参数
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let axaxa = []; // 防重名
push(axaxa, 1, 2, 3);
console.log(axaxa);

// 重载
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
// 使用重载定义多个 reverse 的函数类型：
function reverse1(x: number): number;
function reverse1(x: string): string;
function reverse1(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}