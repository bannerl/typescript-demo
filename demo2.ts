// 注意 其他文件中的Person声明会影响到本文Person
interface Person1 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom3: Person1 = {
  name: 'Tom',
  gender: 'male'
};

console.log(tom3);