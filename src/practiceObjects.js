let fruit = {
  apple: 10,
  pine: 2,
  kiwi: 6,
};

let shoppingList = {
  rise: 1,
  buckweat: 2,
  fruit,
  eat: () => {
    console.log("Nyam");
  },
};

let flowers = {
  roses: "red",
  tulips: "pink",
  mimosa: "yellow",
};

console.log(fruit);
console.log(shoppingList);
console.log(flowers);

let bird = new Object();
bird.name = "Sparrow";
bird.color = "Brown";

console.log(bird);

function Wood(height, radius, isBlossom) {
  this.height = height;
  this.radius = radius;
  this.isBlossom = isBlossom;
}

let cherry = new Wood(4, 0.2, true);
let pine = new Wood(5, 0.4, false);
let magnolia = new Wood(2.5, 0.1, true);

console.log(cherry);
console.log(pine);
console.log(magnolia);

let person = {
  alive: true,
  introduce: function () {
    console.log(`My name is ${this.firstName}`);
  },
};

let user = Object.create(person);
user.id = 1111;
user.firstName = "Alya";
user.introduce();

console.log(user.firstName);
console.log(user.id);
console.log(user.alive);

let teacher = {
  subject: "math",
  __proto__: person,
};

let student = {};
student.__proto__ = person;

teacher.introduce();
console.log(teacher);
console.log(teacher.alive);

student.introduce();
console.log(student);
console.log(student.alive);

let engineer = Object.create(person);
engineer.department = "Engineering";
engineer.firstName = "Lina";

let qaEngineer = Object.create(person);
qaEngineer.firstName = "Alex";
qaEngineer.testingTool = "Playwright";

console.log(person);
console.log(engineer);
console.log(qaEngineer);

person.introduce();
engineer.introduce();
qaEngineer.introduce();
