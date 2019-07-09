// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
/**
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */

class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom


// 抽象类 
// 抽象类是作为一种子类的基类
/**
 * 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。
 * 抽象类中的抽象方法必须在子类中被实现
 * 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。
 * 接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */
// 定义抽象类 Amimal1
abstract class Animal1 {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
// 不注释会报错
// let a1 = new Animal1('Jack');

abstract class Animal2 {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal2 {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom');