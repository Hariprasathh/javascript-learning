// let cars=["bmw","volvo","audi"];
// console.log(cars);


let cars=new Array("BMW","volvo","Audi");
console.log(cars);
console.log(cars[2]);// accessing elements

cars[0]="Maruthi"; // cchange the value

console.log(cars);

// we can store different data types in a variable

let myarray=[100,"welcome",10.49,true];
console.log(myarray);

//we can have objects in an array

let person1={
    name:"Jhon",
    age:30,
};

let person2={
    name:"George",
    age:40,
};

let array1=[person1,person2];
console.log(array1);

console.log(array1[0]);

// how to find the length of an array

let fruits=["apple","orange","Mango","berry"];
console.log(fruits.length);

// looping elements from array

for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}

//looping elements from array using for of loop

for(let fruit of fruits){

    console.log(fruit);
}

//How to recognize that a variable is array or not

console.log(typeof fruits);// array is also an object

console.log(Array.isArray(fruits));


console.log("second commit");

