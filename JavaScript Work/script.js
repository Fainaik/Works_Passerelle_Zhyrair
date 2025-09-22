// console.log("Hello");

// const button = document.createElement("button");

// button.className = "btn";

// button.style.height = "100px";
// button.style.width = "100px";

// document.body.appendChild(button);

let x = 2;
console.log(x);

console.log(typeof x);

num = "0";
console.log(num);
console.info(typeof num);

let bool = false;
console.log(bool);
console.info(typeof bool);

let arr = [99, "Illa", "2"];

console.log(arr[1]);

obj = {
  name: "Ivan",
  age: 12,
};

console.log(obj.name);
console.log(typeof obj.name);

obj.lastName = "Ivanovich";

console.log(obj.lastName);

a = 10;
b = 11;

console.log(a == b);

if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else {
  console.log(a, " + ", b);
}

function myFunc(a, b) {
  return a + b;
}
console.log(myFunc(10, 12));
// try {
//   let result = 10 / x;
//   console.log(result);
// } catch (error) {
//   console.log("Error", error.message);
// }
