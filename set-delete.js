var mySet = new Set();

mySet.add("Bangladesh");
mySet.add("India");
mySet.add("Pakistan");
mySet.add("USA");
mySet.add("Russia");
mySet.add("Bangladesh");
mySet.add("Bangladesh");

mySet.delete("USA");

console.log(mySet);
