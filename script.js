/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  let profession = arr.map((test)=>{
    if(test.profession === "developer"){
      console.log(test);
    }
  })
}
PrintDeveloperswithMap();


function PrintDeveloperbyForEach() {
  //Write your code here
  let dev = arr.forEach((item)=>{
  if(item.profession === "developer"){
    console.log(item);
  }
})
}
PrintDeveloperbyForEach();


function addData() {
  //Write your code here
  let add = {
    id : 4 ,
    name : "boman",
    age : "20",
    profession : "bussiness"

  }
  let added = arr.push(add);
  console.log(arr);
}
addData();

function removeAdmin() {
  //Write your code here
  const index = arr.slice(2);
  console.log(arr);
}
removeAdmin();

function concatenateArray() {
  //Write your code here
  let newarr = [
    { id: 4, name: "Brav", age: "18", profession: "tester" },
    { id: 5, name: "janny", age: "25", profession: "analyst" },
    { id: 6, name: "gaurav", age: "44", profession: "employee" },
  ];
  const array = arr.concat(newarr);
  console.log(array);
}
concatenateArray();