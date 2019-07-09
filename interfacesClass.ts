// 类实现接口
interface Alarm {
  alert();
}
class Door {
}
class SecurityDoor extends Door implements Alarm {
  public alert() {
    console.log('SecurityDoor alert');
  }
}
class Car implements Alarm {
  public alert() {
    console.log('Car alert');
  }
}

// 接口继承接口
interface Alarm1 {
  alert();
}

interface LightableAlarm extends Alarm1 {
  lightOn();
  lightOff();
}

// 接口继承类
class Point {
  public x: number;
  public y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

// 混合类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch1: SearchFunc;
mySearch1 = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};