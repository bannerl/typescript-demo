// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 语法
// <类型>值
// 或
// 值 as 类型
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种

// 我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
// function getLength(something: string | number): number {
//   if (something.length) {
//       return something.length;
//   } else {
//       return something.toString().length;
//   }
// }  
      
// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
// index.ts(3,26): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
// 会报错
function getLength1(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
}