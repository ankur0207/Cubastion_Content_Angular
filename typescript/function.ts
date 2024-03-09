// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
    return 'The circumference is ' + Math.PI * diam;
  }
  
  console.log(circle(10)); // The circumference is 31.41592653589793

  const add = (a: number, b: number, c?: number | string) => {
    console.log(c);
  
    return a + b;
  };
  
  console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
  // I could pass a number, string, or nothing here!
  // 9