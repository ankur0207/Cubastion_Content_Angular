// Define the structure of the object using type annotations
// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// };

// // Create an object based on the defined structure
// let student: Person = {
//     name: "Alice",
//     age: 25,
//     isStudent: true
// };


//Interface

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
  }
  
  let person1: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  
  let person2: Person = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
  };