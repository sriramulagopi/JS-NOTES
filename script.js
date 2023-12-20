let x = 10;
console.log(typeof x);
let x1 = null;
console.log(typeof x1);
let x2 = ()=>{};
console.log(typeof x2);
let x3 = undefined;
console.log(typeof x3);


// Arrays
let arr = [10,20,30,40,50];
let arr1 = [10,20,30,[1,2,3,4],40];
console.log(arr);
console.log(arr1.length)
console.log(arr1);
console.log(arr1[3].length);
console.log(arr1[3]);
arr.push(60,70,80,90);
console.log(arr);
arr.unshift(7,8,9);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
