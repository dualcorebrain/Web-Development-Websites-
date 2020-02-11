/*Video 5*/
A= "Hello World";
document.write(A);

//var

var x = "Hello World";
document.write(x);
//lets assign x to another value
x= "new world";
document.write(x);

//The Value of Z is now changed from "Hello World"
// to "new world"
// knowns as over-writing

//Right Ways Naming Conventions
// firstname, first_name, firstName

//let and const

let y = "Y:the last man";
//lets decalre it again over-writing it
y = "Another value"
document.write(y);
//This is fine


//let y ="Another value";
//This throws an error. 
// with 'let' we cannot declare the value again
//we can do this with 'var' 

//constant variable (const)
const second = "Hello";
document.write(second);

//we cant declare this again or change this again

/*Video 7- Data Types*/

var words = "Hellow World"; // <------- String
var numerical_value = 25; // <------- Number
var trueOrFalse_Value = true; // <------- Boolean
var array_values = ["HTML", "CSS", "JS"]; // <------- Array
var object_values = {first:"Jane", last:"Doe"}; // <------- Object
var no_value; // <------- Undefined

var y_value = "Y";
document.write(y_value);
document.write("<br>"); //This is how we add a new line
document.write(typeof y_value);  //Tells us type of the variable! Useful!