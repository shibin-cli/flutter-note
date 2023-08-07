# 函数
## 声明函数
### 直接声明
```dart
void main() {
// ...
}

int fn() {
  return 1;
}
```
### 箭头函数
* 函数体只能写一行且不能带有分号
* 只是函数的一种简写
```dart
List<int> list = [1,2,3,4,5];

list.forEach((el)  => {
  print(el)
});

list.forEach((el) print(el));
```
### 匿名函数
```dart
List<int> list = [1,2,3,4,5];

list.forEach((el)  => {
  print(el)
});

```
### 立即执行函数
```dart
(int n){
  print(n);
}(1);
```
## 参数
* 必填参数
* 可选参数，必须放到必填参数后面，通过 [] 包裹起来
* 命名参数，命名参数名称与声明函数中的名称保持一致

```dart
String userInfo(String name, [int age = 10, String address = 'beijing']) {
  return 'name: $name, 年龄：$age， 地址：$address';
}
void main() {
  String name = '张三';
  print(userInfo(name, age: 20,address: 'bj'));
}
```
命名参数
```dart
String userInfo(String name, {int age = 10, String address = 'beijing'}) {
  return 'name: $name, 年龄：$age， 地址：$address';
}
void main() {
  String name = '张三';
  print(userInfo(name, age: 20,address: 'bj'));
}
```

## 闭包
```dart
int Function() fn() {
  int count = 0;
  return () {
    count++;
    print(count);
    return count;
  };
}

void main() {
  String name = '张三';
  // print(userInfo(name, age: 20,address: 'bj'));
  var add = fn();
  add();
  add();
}
```
## 异步函数
### .then
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';
Future getTitle(){
  var url = Uri.https('jsonplaceholder.typicode.com', '/todos/1');
  return http.get(url).then((res) {
    String title = jsonDecode(res.body)['title'];
    return title;
  });
}
void main() {
  getTitle().then((title) => print(title));
}
```
### async
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

Future getTitle() async {
  final url = Uri.https('jsonplaceholder.typicode.com', '/todos/1');
  try {
    final res = await http.get(url);
    String title = jsonDecode(res.body)['title'];
    return title;
  } catch (err) {
    print(err);
  }
}

void main() async {
  String title = await getTitle();
  print('title:' + title);
}
```