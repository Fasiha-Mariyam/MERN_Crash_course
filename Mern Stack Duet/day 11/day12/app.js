// var name="fasiha"
// var str = `${name} earns               
// ${(2500+4000+4000)}`
// console.log(str);


 
// var arr1=[1,2,3,4,5];
// // var arr2 = arr1  //because of refrence if arr1 changes arr2 automatically changes
// var arr2 =[...arr1]; // to break this refrence we use spread operator
// arr1.push(6)
// console.log(arr1)
// console.log(arr2)


const students =[
    {name:"fasiha",year:"3rd",department:"BSCS"},
    {name:"Misbah",year:"3rd",department:"BSCS"},
    {name:"Sania",year:"3rd",department:"BSCS"},
    {name:"namrita",year:"3rd",department:"BSCS"}
]
var names = students.map((students) => {return {namenyear:`${students.name} , ${students.year}`}});
console.log(names)
console.log(students);