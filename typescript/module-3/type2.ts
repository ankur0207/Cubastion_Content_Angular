type alphaNumeric = string | number;

let num:alphaNumeric = 10;
let str:alphaNumeric = "ten";

type Point = {
  x: number;
  y: number;
};

let pt:Point = {x: 10, y: 20};

// obj type variable can have any one of the below value
type obj = {val: 1} | {val: 2}; 

// obj type variable can have any one of the below value
type func = (() => string) | (() => void);



