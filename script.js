                        //    Advance Java script Array Methods

//  Map 

let numbers = [1, 2, 3, 4, 5];

let mapArray = numbers.map(function(num) {
    return num * 3;
});

console.log("Task 01" ,mapArray);

//          Filter

let number = [12, 5, 8, 130, 44];

let result = number.filter(function(num) {
    return num > 10;
});

console.log("Task 02" ,result);


//                  forEach
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
    console.log("Task 03" ,fruit);
});


//                       map

const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

let names = users.map(function(user) {
    return user.name;
});

console.log("Task 04" ,names);


//                       filter


const user = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

let adults = user.filter(function(user) {
    return user.age >= 18;
});

console.log("Task 05" ,adults);


//                          find


const products = [
  { id: 1, name: "Laptop"},
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

let product = products.find(function(item) {
    return item.id === 2;
});

console.log("Task 06" ,product);


//                          every


const scores = [70, 85, 90, 60]; 

let resulty = scores.every(function(score) {
    return score > 50;
});

console.log("Task 07" ,result);


//                      some

const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"];

let hasGmail = emails.some(email => email.includes("@gmail.com"))

console.log("Task 08" , hasGmail);






