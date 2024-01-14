// let obj = {
//   first: "Monday",
//   second: "Tuesday",
//   third: "Wednesday",
//   fourth: "Thursday",
//   fifth: "Friday",
//   sixth: "Saturday",
//   seventh: "Sunday",
// };

// console.log(obj.seventh);

// ----------------------------------

// let str = "abcde";
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);

// ----------------------------------

// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// ----------------------------------

// let obj = {
//   Минск: "Беларусь",
//   Москва: "Россия",
//   Киев: "Украина",
// };

// for (let key in obj) {
//   console.log(key + " - это " + obj[key]);
// }

// ----------------------------------

let arr = [];
let i = 0;
while (i < 10) {
  i++;
  let random = Math.floor(Math.random() * 10);
  arr.push(random);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
