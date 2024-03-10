// Define a type alias named "Person" representing an object with "name", "age", and "gender" properties.
type Person = {
    name: string;
    age?: number; // Age is optional
    gender: "male" | "female" | "other"; // Gender is a required property with specific values
  };
  
  // Declare a variable "person" of type "Person" and initialize it with an object.
  let person: Person = {
    name: "John",
    gender: "male"
  };
  



  export{}