// 对象
let boo: boolean = true;
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r = /[a-z]/;

// DOM 和 BOM 的内置对象
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});

// 这是 addEventListener 全局定义
interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
  addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}

// 越界元素
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
xcatliu.push('http://xcatliu.com/');
// xcatliu.push(true);