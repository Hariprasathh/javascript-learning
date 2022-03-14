let person=
{
    firstname:"Jhon",
    lastname:"smith",
    age:25,
    weight:60,
}
// accessing object properties

// console.log(person.firstname);
// console.log(person["lastname"]);

// add new property to the existing property

//person.height=6.6;

//console.log(person.height);

// update existing property

// person["weight"]=75;
// console.log(person["weight"]);

// remove the property from the object

// delete person.age;
// console.log(person.age);


//for in loop for reading all the properties of the object

for(let x in person){
   // console.log(x);// prints only properties names
   //console.log(person[x]);// prints only the values of properties
  console.log(x+"  "+person[x]);  
}

let persons ={
  emp:1,
  empno:3,
  empno2:4,

}

for(let x in persons){
  // console.log(x);// prints only properties names
  //console.log(person[x]);// prints only the values of properties
 console.log(x+"  "+persons[x]);  
}








