// 声明引用
// 我们可以定义全局的变量文件，例如新增一个jquery.td.ts
/**
 *  declare var 声明全局变量
    declare function 声明全局方法
    declare class 声明全局类
    declare enum 声明全局枚举类型
    declare namespace 声明（含有子属性的）全局对象
    interface 和 type 声明全局类型
    export 导出变量
    export namespace 导出（含有子属性的）对象
    export default ES6 默认导出
    export = commonjs 导出模块
    export as namespace UMD 库声明全局变量
    declare global 扩展全局变量
    declare module 扩展模块
    /// <reference /> 三斜线指令
 */
jQuery('#foo'); // 没报错的原因是在 jquery.td.ts 中定义了
// jQuery2('#foo');   
// ERROR: Cannot find name 'jQuery2'.
   
declare let jQuery1: (selector: string) => any;
    
jQuery1('#foo');   
