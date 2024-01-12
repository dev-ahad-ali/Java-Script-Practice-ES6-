var myMap = new Map();
myMap.set("Key1", "Bangladesh");
myMap.set("Key2", "India");
myMap.set("Key3", "Pakistan");
myMap.set("Key4", "Canada");
myMap.set("Key5", "USA");
myMap.set("Key6", "Russia");
myMap.set("Key7", "Australia");

for (let mapValue of myMap.values()) {
  console.log(mapValue);
}
for (let mapKey of myMap.keys()) {
  console.log(mapKey);
}
