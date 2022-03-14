let fruits=["apple","mango","orange","banana"];

//tostring and join methods

console.log(fruits.toString());
console.log(fruits.join("**"));

//pop() It will remove the last element of an array
fruits=["apple","mango","orange","banana"];
console.log(fruits.pop());
console.log(fruits);

//push() this method adds a new element at the end of the array and It will provide 
// length of the array
fruits=["apple","mango","orange","banana"];
console.log(fruits.push("Kiwi"));
console.log(fruits);

//shift() It will remove the first element and place other elements to lower order index
fruits=["apple","mango","orange","banana"];
console.log(fruits.shift());
console.log(fruits);

//unshift opposite of shift()
fruits=["apple","mango","orange","banana"];
console.log(fruits.unshift("lemom"));
console.log(fruits);

//delete
fruits=["apple","mango","orange","banana"];
delete fruits[1];
console.log(fruits);

//concat() merging or joining 2 or more arrays

let arr1=[10,20,30];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2));

let arr3=["X","Y","Z"];
console.log(arr1.concat(arr2,arr3));

//slice It will not remove the elements of source array.It will create an array
//from where the index number we pass.

fruits=["apple","mango","orange","banana"];
console.log(fruits.slice(1));//[ 'mango', 'orange', 'banana' ]
console.log(fruits);// [ 'apple', 'mango', 'orange', 'banana' ]

// sort() sorts into alhabetical order

fruits=["apple","mango","orange","banana"];
console.log(fruits.sort());

let numbers=[10,40,20,80,79];
console.log(numbers.sort());

//reverse()
fruits=["apple","mango","orange","banana"];
console.log("original array of elements"+fruits);
console.log("After reversing elements"+fruits.reverse());


