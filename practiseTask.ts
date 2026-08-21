const problem1 = (userName: string, userAge: number): number | string => {
  return `${userName} is ${userAge} years old.`;
};
// console.log(problem1("Abdullah Amir", 32));

const problem2 = (
  name: string,
  price: number,
  isAvailable: boolean,
): number | string | boolean => {
  return `${name} cost ${price} is available: ${isAvailable}`;
};
// console.log(problem2("Laptop", 45000, true));

const problem3: string[] = ["Amina", "Karim"];
// console.log(problem3);

// option_1
// const problem4 = (name:string, age:number):string | number => {
//     return `${name} is ${age} years old`
// }
// const user: [string, number] = ['Amina', 20];
// console.log(problem4(...user));
// option_2
const problem4 = (user: [string, number]): string => {
  const [name, age] = user;
  return `${name} is ${age} years old`;
};
const user: [string, number] = ["Amina", 20];
// console.log(problem4(user));

const problem5: { name: string; email?: string } = {
  name: "Amina Begum",
  // email: "abcd@gmail.com"
};
if (problem5.email) {
  // console.log(problem5.email);
} else {
  // console.log("Not Provided");
}
// console.log(`Name: ${problem5.name}, Email: ${problem5.email}`);

const problem6 = (even: number) => {
  if (even % 2 === 0) {
    return "the number is even";
  } else {
    return "the number is not a even number...";
  }
};
// console.log(problem6(22));

const problem7 = (...rest: number[]): number => {
  let sum = 0;
  for (const s of rest) {
    // console.log(s);
    sum += s;
  }
  return sum;
};
const sum = problem7(1, 2, 3, 4);
// console.log(sum);

const problem8 = (arr1: number[], arr2: number[]): number[] => {
  const margeArray = [...arr1, ...arr2];
  return margeArray;
};
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// console.log(problem8(array1, array2));

// problem-9:
const problem9 = (num: number): string => {
  return num > 0 ? "Positive" : "Negative";
};
// console.log(problem9(5));

const problem10 = (s = "Guest"): string => {
  return s;
};
const userName: string | undefined = undefined;
// console.log(problem10(userName));

const problem11 = (v: unknown) => {
  if (typeof v === "string") {
    // console.log(v.toUpperCase());
  }
};
let value: unknown = "Ronit";
// problem11(value);

const problem12 = (user: User): string => {
  return `
  Name: ${user.name}
  Age: ${user.age}
  Email: ${user.email}
  Skills: ${user.skills.join(", ")}
  Active: ${user.active}`;
};
type User = {
  name: string;
  age: number;
  email: string;
  skills: string[];
  active: boolean;
};
const users = {
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true,
};
// console.log(problem12(users));

// create a shopping cart with user type of typescript:
type ShoppingCart = {
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};
const shoppingCart = {
  name: "Pant-shirt",
  print: 2000,
  quantity: 3,
  totalPrice: 2000,
};
// console.log(shoppingCart);

// ekta function diye user er login check koro:
const userLogin = (user: boolean): string => {
  return user ? "user is loogin" : "usr is not loogin";
};
const userLoggedIn: boolean = true;
// console.log(userLogin(userLoggedIn));

const arrayFilter = (filter: number[]): number[] => {
  return filter.filter((f) => f >= 10);
};
const filterNumber = [12, 2, 33, 4, 55, 6];
// console.log(arrayFilter(filterNumber));

// nested object theke country ber koro;
const countryObj = (user1: User1): string => {
  const {
    name,
    address: { country },
  } = user1;
  return country.toUpperCase();
};
type User1 = {
  name: string;
  age: number;
  email: string;
  address: {
    city: string;
    country: string;
    postalCode: number;
  };
};
const user1 = {
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    postalCode: 1207,
  },
};
// console.log(countryObj(user1));

const calculateTotalPrice = (product:Product[]):string => {
  const totalPrice = product.map(p => {
    return p.price * p.quantity;
  
  })
  const reduceTotalPrice = totalPrice.reduce((sum, item) => sum + item, 0)
  return `The total price is ${reduceTotalPrice}`;
}
type Product = {
  name:string;
  price:number;
  quantity:number;
}
const product:Product[] = [
  {
    name: "T-Shirt",
    price: 500,
    quantity: 2,
  },
  {
    name: "Pant",
    price: 1000,
    quantity: 1,
  },
  {
    name: "Shoes",
    price: 2000,
    quantity: 1,
  },
];
console.log(calculateTotalPrice(product));
