//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

type Person = {
  name: string;
  age: number;
};

let age: number = 24;

let userName: string | string[] = "Park";

let isInstructor: boolean = true;

let hobbies: string[] = ["Sports", "Cooking"];

let person: Person;

//Type inference

let people: Person[];

let course: string | number = "React - The Complete Guide";
course = 1234;

//Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning<number>(demoArray, -1);
