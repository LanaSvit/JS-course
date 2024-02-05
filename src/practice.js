/*data types*/
let nothing;
theNull = null;
myName = "Svit";
mySurname = Symbol("H");
myAge = 35;
mySoulAge = 100000n;
myBook = { bookName: "Madam Bovary", authorName: "Flaubert" };

console.log(typeof nothing);
console.log(theNull);
console.log(typeof myName);
console.log(typeof mySurname);
console.log(typeof myAge);
console.log(typeof mySoulAge);
console.log(typeof (myAge == mySoulAge));
console.log(typeof myBook);

/*data comparison*/
students = [
  { name: "Mary", age: 20 },
  { name: "Ann", age: 20 },
  { name: "Ann", age: "20" },
];

console.log(students[0].name == students[1].name);
console.log(students[0].name === students[1].name);

console.log(students[1].name == students[2].name);
console.log(students[1].name === students[2].name);

console.log(students[0].age == students[1].age);
console.log(students[0].age === students[1].age);

console.log(students[1].age == students[2].age);
console.log(students[1].age === students[2].age);
