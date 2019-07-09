interface Person3 {
  readonly name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom4: Person3 = {
  name: '00',
  age: 1111,
  gender: 'sdfs'
};

// tom4.name = 2222
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom: Person = {
//   name: 'Tom',
//   gender: 'male'
// };

// tom.id = 89757;
// 报错