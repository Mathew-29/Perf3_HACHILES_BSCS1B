//Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Combined array:", combinedArr);

//Use push() to add an element to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);

//Use unshift() to add numbers to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);

//Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits after pop:", fruits);

//Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift:", array2);

//Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Fruits after sort:", fruits);

//Use slice() to create a new array from the fruits array
let slicedFruits = fruits.slice(1, 3); // Takes elements from index 1 to 2
console.log("Sliced fruits:", slicedFruits);

//Use splice() to insert and remove elements in the months array
let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // Insert "February" at index 1
months.splice(4, 1, "May"); // Replace element at index 4 with "May"
console.log("Months after splice:", months);