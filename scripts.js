//Question 1//

let name = "Denys";
let age = 18;
console.log(name, age);


//Question 2//

let stringVar = "Coding";
let numberVar = 90;
let booleanVar = true
let underfinedVar;
console.log("Class:", stringVar)
console.log("Grade:", numberVar)
console.log("boolean:", booleanVar)
console.log("Undefined:", underfinedVar)

//Question 3//

let RollNumber = 15;
if (RollNumber > 10) {
    console.log("The RollNumber is greater than 10")
}

//Question 4//

let isMember = true;
if (isMember) {
    console.log("Member discount applied")
}

//Question 5//

let startValue = 50;
if (startValue > 0) {
    console.log("The startValue is positive")
}
else if (startValue < 0) {
    console.log("The startValue is negative")
}
else console.log("The startValue is zero")

//Question 6//

let a=10 , b=20
console.log(a == b, a === b, a != b, a > b, a < b, a >= b, a <= b);

//Question 7//

let firstname = "Denys", lastname = "Stefaniv" , age2=18;
console.log("Hello", firstname, lastname, "you are", age, "years old")

//Question 8//

let num=50
if (num > 0 && num < 100) console.log("The number is within range");

//Question 9//

let hasCar = true, hasLicense = true, hasInsurance = true;
if (hasCar && hasLicense && hasInsurance) console.log("You can drive legally");
else console.log("Check your driving eligibility");

//Question 10//

let num2 = 21
console.log(num2 % 2 === 0 ? "The number is even." : "The number is odd.");

// Qusetion 11/
let score = 85;
if (score >= 90) console.log("Grade A");
else if (score >= 80) console.log("Grade B");
else console.log("Grade C");