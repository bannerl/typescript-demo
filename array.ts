// 「类型 + 方括号」表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];
// 数组泛型
let fibonacci1: number[] = [1, 1, 2, 3, 5];
// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}   
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];
// any 在数组中的应用
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
// 注意： 类数组不是数组，例如arguments