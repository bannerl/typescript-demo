// 泛型
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function createArray(length: number, value: any): any[] {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

// 我们期望上面传入x，而返回的数组中也是x，而泛型就是为了此需求

// 例子
function createArray1<T>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray1<string>(3, 'x'); // ['x', 'x', 'x']

// 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch2: SearchFunc;
mySearch2 = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};