function greet(name: string, age?: number) {
    console.log(`Hello, ${name}! You are ${age ? age : 'unknown'} years old.`);
}

greet("Alice"); // Output: Hello, Alice! You are unknown years old.
greet("Bob", 30); // Output: Hello, Bob! You are 30 years old.
