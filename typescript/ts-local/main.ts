function helperDec(target: any, key: string, descriptor: PropertyDescriptor) {
  // target.printMsg();
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
// obj.printMsg();{...obj}
let a = { name: "vivek" };
let b = { ...a };
b.name = "sss";
console.log(a);
console.log(b);
document.getElementById("btn")?.addEventListener("click", obj.printMsg);
