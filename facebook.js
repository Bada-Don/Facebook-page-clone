// console.clear();
// alt = alert("This page ain't real.");
// pr = prompt("Don't enter real details");
// function max2(number1, number2) {
//     if (number1 > number2) {
//         return number1;
//     } else if (number2 > number1) {
//         return number2;
//     } else {
//         return "Both numbers are equal.";
//     }
// }
// let num1 = 2;
// let num2 = 9;
// let result = max2(num1, num2);
// console.log(`The greater integer is: ${result}`);
// // *****************************************************
// console.clear();
// function max3(number1, number2, number3) {
//     if (number1 > number2) {
//         if (number1 > number3) {
//             return number1;
//         }
//         else { return number3; }
//     }
//     else if (number2 > number3) {
//         return number2;
//     }
//     else { return number3 };
// }
// num1 = 10;
// num2 = 3;
// num3 = 11;
// result = max3(num1, num2, num3);
// console.log(`The greater integer is: ${result}`);

//***************************************************************************** */

// function rectangle(){
//     let length=prompt('Enter the Length of Rectangle');
//     let breadth=prompt('Enter the Breadth of Rectangle');
//     return{

//         area(){
//             console.log(length*breadth);
//         }
//     }
// }

//****************************FACTORY FUNCTIONS************************************ */

// function factrect(length, breadth) {
//     const area = length * breadth;

//     return {
//         area() {
//             console.log(area);
//         }
//     };
// }
//****************************CONSTRUCTOR FUNCTIONS************************************ */

// function ConstRect(length, breadth) {
//     this.length = length;
//     this.breadth = breadth;
//     this.area = function () {
//         console.log(this.length * this.breadth);
//     };
// }

//**************************** Sorting ************************************ */
// const coursesNew = [
//     { id: 1, name: "Node.js", author: "Jane" },
//     { id: 2, name: "React.js", author: "David" },
//     { id: 3, name: "Angular.js", author: "John" },
//     { id: 4, name: "Vue.js", author: "John" },
// ];
// coursesNew.sort(function (a, b)){
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if (nameA < nameB) { return -1; }
//     if (nameA > nameB) { return 1; }
//     if (nameA === nameB) {
//         if (nameA.) {

//         }
//     }


// }

//**************************** ********** ************************** */
// Fuction to output an array with the name of employees with salary greater than 40000
let employees = [
    {
        id: 11,
        name: "Abhinav",
        salary: 75000,
    },
    {
        id: 2131,
        name: "Gaurav",
        salary: 62000,
    },
    {
      id: 3012,
      name: "Raj",
      salary: 32000,
    },
];

let highSalaries = employees.filter((employee) => employee.salary > 40000)
.map((employee) => employee.name)
console.table("High Salary Employees");
console.table(highSalaries);


//************************** Array operations *********************** */
// let arr = [1, 2, 3];
// arr.push(6); // Adds 6 to the end of the array, arr is now [1, 2, 3, 6]

// arr = [1, 2, 3];
// const lastElement = arr.pop(); // Removes and returns 3, arr is now [1, 2]

// arr = [1, 2, 3];
// const firstElement = arr.shift(); // Removes and returns 1, arr is now [2, 3]

// arr = [2, 3];
// arr.unshift(1); // Adds 1 to the beginning of the array, arr is now [1, 2, 3]

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combinedArray = arr1.concat(arr2); // Creates a new array [1, 2, 3, 4]

// arr = [1, 2, 3, 4, 5];
// const slicedArray = arr.slice(1, 4); // Creates a new array [2, 3, 4]

// arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 6); // Inserts 6 at index 2, arr is now [1, 2, 6, 3, 4, 5]


// //**************************** ********** ************************** */
// let namesArray = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// const greetings = namesArray.map((name) => {
//   return `Hi ${name}, how are you?`;
// });

// console.log(greetings);

// //**************************** 08-10-2023 ************************** */
// console.log(document.getElementById(""));
// console.log(document.querySelector(""));
// Console.log(document.getElememtByTagName(""));

// ul.firstElementChild.textContent = "Hello World";

// document.querySelector("body").classList.add("");