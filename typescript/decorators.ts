//CLASS DECORATORS

function Logger(target: Function) {
    console.log("Class:", target);
}

// @Logger
// class MyClass {
//     // Class implementation
// }


//METHOD DECORATORS
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Method ${key} is called with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} returned: ${result}`);
        return result;
    };

    return descriptor;
}

class MyClass {
    @Log
    myMethod() {
        console.log("Executing myMethod");
        return 42;
    }
}

const obj = new MyClass();
obj.myMethod();






