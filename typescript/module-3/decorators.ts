function helperDec(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("target---->>>", target);
    console.log("key--->>", key);
    console.log("descriptor---->>>>", descriptor);
  
    const prev = descriptor.value;
    const newMethod = {
      configurable: true,
      enumerable: false,
      get() {
        return prev.bind(this);
      },
    };
    return newMethod;
  }
  



class MyClass {
    private msg: string;
  
    constructor(msg: string) {
      this.msg = msg;
    }
  
    @helperDec
    printMsg() {
      console.log(this.msg);
    }
  
    setMsg(newMsg: string) {
      this.msg = newMsg;
    }
  }
  

const obj = new MyClass("Helllo world!");
document.getElementById("btn")?.addEventListener("click", obj.printMsg);
