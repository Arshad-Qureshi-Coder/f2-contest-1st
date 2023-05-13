
/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function (arr){
      if(arr.marks > 50){
        console.log(arr);
        
      }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function (arr){
      if(arr.marks >50){
        console.log(arr);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({
      id:4, name:"parul", age: "20", marks: 55
    });
    console.log(arr);
  }


  function removeFailedStudent() {
    //Write your code here, just console.log
    let passedStudentsArray = arr.filter(student => student.marks >= 50);
    let failedStudentsArray = arr.filter(student => student.marks < 50);
    arr = passedStudentsArray;
    console.log(arr);
  }

  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArrays =[
        { 
          id: 15, name: "arshad", age: "24", marks: 85 
        },
        { 
          id: 15, name: "love", age: "23", marks: 80 
        },
        { 
          id: 15, name: "piyush", age: "22", marks: 75 
        }
      ];
       arr = arr.concat(newArrays);
      console.log(arr);
    }
