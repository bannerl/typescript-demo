/**
 * vue use 用法
 */
declare let Vue: any;
// vue 原型上挂载方法和属性
// 方法一 直接挂载
Vue.prototype.$alert = function (msg: string): void {
  alert(msg);
};

Vue.prototype.$console = function (msg: string): void {
  console.log(msg);
};

Vue.prototype.$comfirm = function (msg: string): void {
  console.log(msg);
};

// 方法二 使用Vue提供的方式 install方法
const instanceFunc = {
  install (Vue, options): void { // options是Vue.use的第二个参数
    Vue.func1 = function () {

    };
    Vue.func2 = function () {

    };
    Vue.prototype.func3 = function () {

    };
    Vue.prototype.func4 = function () {

    };
  }
};

Vue.use(instanceFunc, {size: 20});
// use文件会默认调用instanceFunc对象上的install方法，并且将Vue和第二个参数传进去
// 相对于第一个方法来说，第二个方法做了一个包装，引入入口文件中直接用Vue.use使用，
// 第一种方法是直接把js引进来