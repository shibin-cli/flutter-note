# 运算符
* 地板除 `~/`
* 类型推断运算符 `is`  `is!`
* 避空 `??`
## 地板除
```dart
7 ~/ 4 // 1
```
## 避空
```dart
dynamic a = 100;
print(a ?? 2);
```
## 级联运算符
```dart
Set<String> s = new Set();
s
  ..add('aa')
  ..add('bb')
  ..add('cc');
```