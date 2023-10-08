var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr2 = arr.filter((num) => (num > 5 ? num : null));
console.log(arr);
console.log(arr2);

var studentAges = [18, 19, 20, 22, 21, 25, 26, 30];
var greaterThan20 = studentAges.filter((age) => (age % 2 == 0 ? age : null));
console.log(greaterThan20);

var names = ["misbah", "fasiha", "sania", "namrita"];
var filterNames = names.filter((n) => n.length == 6);
console.log(filterNames);

var students = [
  { name: "misbah", age: "22" },
  { name: "fasiha", age: "21" },
  { name: "sania", age: "23" },
  { name: "namrita", age: "22" },
];
var findName = students.find((n) => n.name == "fasiha");
var findIndexOfAge = students.findIndex((a) => a.age == 21);
console.log(findIndexOfAge);
console.log(findName);

var product = [
  { pCategory: "Watch", stock: "18", pName: "Rolex", price: "500$" },
  { pCategory: "Cosmetics", stock: "20", pName: "FaceWash", price: "100$" },
  { pCategory: "Clothes", stock: "50", pName: "Mens", price: "200$" },
  { pCategory: "Clothes", stock: "55", pName: "Womens", price: "250$" },
];
var search = product.find((n) => n.stock == 55 && n.pCategory == "Clothes");
console.log(search);

num = 10;
clockFor10Sec = setInterval(()=>{
    num--;
    if(num == 0)
    {clearInterval(clockFor10Sec)}
    else{
        console.log(num)
    }
},1000)

function delayGreeting(name, callback) {
  setTimeout(function () {
    console.log(`hello,${name}!`);
    callback();
  }, 500);
}
function sayGoodbye() {
  console.log("goodbye!");
}

delayGreeting("namrita", sayGoodbye);