
Vue.directive('permission', { // 權限指令
  inserted: function (el) { // 第一次插入父節點的時候執行
    console.log(el);
  },
  bind (el, binding) { // 指令第一次綁定到元素上調用 执行一次，通常执行初始化操作
    console.log('哈哈');
  }
});