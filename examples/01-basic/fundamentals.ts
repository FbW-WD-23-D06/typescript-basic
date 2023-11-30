// TypeScript: Fundamentals

// Basic Types
// let isDone: boolean = false;
// let decimal: number = 6;
// isDone = 3;
// isDone = "oliver";
// isDone = false;
// Tuple
// let arr: [number, string] = [1, "a"]; // arr must be an array of number and string, where the first element is a number and the second element is a string
// arr = [2, "b"];
// arr = [1];
// arr = ["a", 2];

// Union
// let union: number | string | boolean = 1;
// union = "a";
// union = true;

// special types
// any
// let anyType: any = 1; // any Type can be any type
// anyType = "a";
// anyType = true;

//unknown

// let value: unknown = 10;

// // Error: Object is of type 'unknown'.
// // Need a type assertion or type guard to access properties.
// // console.log(value.property);

// // Type assertion is required to tell TypeScript about the type.
// if (typeof value === "number") {
//   let numberValue: number = value; // No error now
// }

// void
// let voidType: void = undefined;
// voidType = null;

// const warnUserVoid = (): void => {
//   // void means the function does not return anything
//   console.log("This is my warning message");
// };

// const warnUserNotVoid = (): void => {
//   // Error: Type 'string' is not assignable to type 'void', because the function is not supposed to return anything
//   return "This is my warning message";
// };

// Type

// type Name = string;
// const name2: Name = "";
// const name3 = "Maria";

// type Status = "loading" | "success" | "error";
// const requestStatus: Status = "success";

// type Admin = "james" | "john" | "peter" | "maria";
// let admins: Admin[] = ["james", "john", "peter"];
// admins.push("maria");

// Interface

interface BasicPerson {
  name: string;
  age: number;
}

interface Address {
  street: string | undefined; //  it can be undefined or string but must be defined as undefined (sorry, I don't know how to explain it better)
  city?: string; // ? means optional property/key, it can be not defined
}

interface Person extends BasicPerson {
  job: string;
  address: Address;
}

const person: Person = {
  name: "James",
  age: 25,
  job: "developer",
  address: {
    street: undefined,
    city: "berlin",
  },
};

console.log("person.address.city:", person.address.city);
console.log("person.address.street:", person.address.street);
