// const addID = (obj: object) => {
//     let id = Math.floor(Math.random() * 1000);
  
//     return { ...obj, id };
//   };
  
//   let person1 = addID({ name: 'John', age: 40 });
  
//   console.log(person1.id); // 271
//   console.log(person1.name); // ERROR: Property 'name' does not exist on type '{ id: number; }'.


// <T> is just the convention - e.g. we could use <X> or <A>
const addID = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);
  
    return { ...obj, id };
  };





  export{}