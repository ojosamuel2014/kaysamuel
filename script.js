/*A JavaScript Program to Store your name in a varibale, Store your courses in an array, 
Display your name and courses and display all odd numbers from 1 - 200*/
var name = 'Samuel Ojo';
console.log("My Name is: " + name);

console.log("My Courses are: ");
var courseName = ["HTML", "CSS", "JavaScript"];
console.log(courseName);

console.log("All odd numbers from 1 - 200 are: ");

for (var x = 0; x <= 200; x++) {
    if (x % 2 !== 0) {
        console.log(x + " is an odd number");
    }

}