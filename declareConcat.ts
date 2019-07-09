// 声明 合并
// 函数合并
// 好处
/**
 * 直观的看到输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串
 */
function reverse11(x: number): number;
function reverse11(x: string): string;
function reverse11(x): any {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
reverse1(222);
// 接口的合并
interface Alarm3 {
  price: number;
}
interface Alarm3 {
  weight: number;
}
// 相当于
interface Alarm3 {
  price: number;
  weight: number;
}
// 注意，合并的属性的类型必须是唯一的