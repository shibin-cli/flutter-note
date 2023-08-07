---
outline: deep
---
# Set 和 Map
## Set
set 是一个无序的元素唯一的集合

### 声明 set
声明 set 的两种方式
```dart
Set<int> nums1 = new Set();
Set<int> nums2 = {};
```
### 转列表
```dart
List<int> list1 = nums1.toList();
```
### 列表转 set
```dart
List<int> list2 = [1, 2, 3];
Set<int> nums3 = list2.toSet();
```
### addAll
```dart
nums.addAll([3,4,5,6]);
```
### 交集
```dart
Set<int> nums1 = {1, 2, 3};
Set<int> nums2 = {3, 4, 5};
print(nums1.intersection(nums2)); // 3
```
### 并集
```dart
Set<int> nums1 = {1, 2, 3};
Set<int> nums2 = {3, 4, 5};
print(nums1.union(nums2)); // {1,2,3,4,5}
```
### 差集
```dart
Set<int> nums1 = {1, 2, 3};
Set<int> nums2 = {3, 4, 5};
print(nums1.difference(nums2)); // {1,2}
print(nums2.difference(nums1)); // {4,5}
```
### first 和 last
```dart
Set<int> nums = {1, 2, 3};
print(nums.first); // 第一个元素
print(nums.last); // 最后一个元素
```
## Map
Map 是一个无序的键值对映射。通常被称作哈希或字典
### 声明 Map
```dart
Map<String, String> person = {
  'name': '张三',
  'age': '20',
};
print(person);
```
```dart
Map<String, String> person = {};
person['name']='张三';
person['age'] = '20';
print(person);
```
### 访问属性
```dart
print(person['name']);
```
判断属性是否存在
```dart
person.containsKey('name');
```
### 赋值
```dart
person['name']='张三';
person['age'] = '20';
```
属性不存在时才赋值
```dart
person.putIfAbsent("address", () => "beijing");
print(person);
```
### 获取所有 key
```dart
person.keys
```
###dart
```dart
person.values
```
### 删除 key
#### 根据 key 直接删除

```dart
person.remove('name');
```
#### 根据条件删除

```dart
person.removeWhere((key, value) => key == 'age');
```