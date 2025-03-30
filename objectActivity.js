//Activity 3: Working with Objects
let car = {
  type: "Vti",
  model: "Honda",
  color: "Blue"
};
console.log("Initial car object:", car);

console.log("Type of car object:", typeof car);

car.type = "Vti";
console.log("Updated car object:", car);

car.wheels = 4;
console.log("Car object after adding wheels:", car);