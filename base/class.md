# Class
```dart
class Person{
  String name = '张三';
  int age = 20;
  void getName(){
    print(name);
  }
}
void main() async {
  Person person = new Person();
  person.getName();
  print(person.age);
}
```
## 普通构造函数
```dart
class Point {
  late num x, y;

  Point(num x, num y) {
    print('point');
    this.x = x;
    this.y = y;
  }
}
```
```dart
class Point {
  late num x, y;

  Point(this.x, this.y);
}
```
