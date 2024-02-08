function canSmoke(age) {
  return age >= 18;
}

const canSmoke1 = (age) => {
  return age >= 18;
};

let canSmoke2 = function () {
  console.log("You can smoke if your age is 18+");
};

console.log(canSmoke(13));
console.log(canSmoke(18));

console.log(canSmoke1(13));
console.log(canSmoke1(18));

canSmoke2();

const allowedToIn = (name, age, department) => {
  if (name == "Ihor") {
    return console.log("Sorry, Ihor, you're not allowd");
  }
  if (age < 18) {
    return console.log("Sorry, you're too young");
  }
  if (department != "QA") {
    return console.log("Sorry, you're not from our team");
  }
  return console.log("Welcome!");
};

const allowedToIn1 = (name, age, department) => {
  return name != "Ihor" && age >= 18 && department == "QA";
};

allowedToIn("Ihor", 33, "QA");
allowedToIn("Ivan", 12, "QA");
allowedToIn("Ivan", 22, "DEV");
allowedToIn("Ivan", 22, "QA");

console.log(allowedToIn1("Ihor", 33, "QA"));
console.log(allowedToIn1("Ivan", 12, "QA"));
console.log(allowedToIn1("Ivan", 22, "DEV"));
console.log(allowedToIn1("Ivan", 22, "QA"));
