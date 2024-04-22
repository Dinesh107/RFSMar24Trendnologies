// console.log("Welcome To JavaScript");

// console.log("It really good language");

// window.alert("I really want to learn javascript");

// let age; // declaration

// age = 20; // assignment or initalization

// let age = 20;  //  declaration + initalization

// let firstName = "Rahul"; // string data

// let age = 20;  // numbers data

// let student = true;  // boolean data

// age = age + 1;

// console.log("Hello", firstName);

// console.log("You are", age, "years old");

// console.log("Enrolled:-",student);

// document.getElementById("p1").innerHTML = "Hello " + firstName

// document.getElementById("p2").innerHTML = "You are " + age +   " Years old";

// document.getElementById("p3").innerHTML = "Enrolled:- " + student;

let customer = 20;

// customer = customer + 1;

// customer = customer - 1;

// customer = customer * 2;

// customer = customer / 2;

// customer = customer % 2;

// customer += 1; // agumented assignment operators

// customer -= 1;

// customer *= 1;

// customer /= 1;

// customer %= 1;

// console.log(customer);

// let username = window.prompt("What is Your Name?");

// console.log("Your name is",username);

// let username;

// document.getElementById("myButton").onclick = function() {

//     username = document.getElementById("myText").value;

//     console.log(username);

//     document.getElementById("myLabel").innerHTML = "Hello " + username;

// }

// let age = window.prompt("How old are you?");

// console.log(typeof age);

// age = Number(age);

// console.log(typeof age);

// age += 1;

// console.log("Happy birthday!!! You are", age, "years old");

// let i;

// let j;

// let k;

// i = Number("3.45");

// j = String(3.43);

// k = Boolean("Mushrooms");

// console.log(i, typeof i);
// console.log(j, typeof j);
// console.log(k, typeof k);

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle");

// radius = Number(radius);

// //9PI = 430.68;

// circumference = 2 * PI * radius;

// console.log("The circumference of the circle is " + circumference);

// Below code is for string

// let userName = "Rahul Student";

// let usernameLength = userName.length;

// console.log(usernameLength);

// length Based

// starts from 1, L = n

// L = 5 = n

// Index Based

// 0 to n-1

// let characterFunc = userName.charAt(4);

// console.log(characterFunc);

// let indexofFunc = userName.indexOf("u");

// console.log(indexofFunc);

// let lastIndexOfFunc = userName.lastIndexOf("u");

// console.log(lastIndexOfFunc);

// let trimFunc = userName.trim();

// console.log(userName);

// console.log(trimFunc);

// let uc = userName.toUpperCase();

// console.log(uc);

// let lc = userName.toLowerCase();

// console.log(lc);

// let phoneNumber = "91-99940-45654";

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);

// String Slicing

// let fullName = "Siva Parvathy";

// let firstName;

// let lastName;

// lastName = fullName.slice(6);

// console.log(lastName);

// firstName = fullName.slice(0, 5);

// console.log(firstName);

// firstName = fullName.slice(0, fullName.indexOf(" "))

// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);

// console.log(lastName);

// userName = "rahul";

// let letter = userName.charAt(0);

// letter = letter.toUpperCase();

// let letter = userName.charAt(0).toUpperCase();

// console.log(letter);

// let x;

// let y = 6;

// let z = 7;

// let maximum;

// let minimum;

// x = Math.round(x);

// console.log(x);

// x = Math.floor(x);

// x = Math.ceil(x);

// x = Math.pow(x, 3);

// x = Math.sqrt(x);

// x = Math.abs(x);

// maximum = Math.max(x, y, z);

// console.log(maximum);

// minimum = Math.min(x, y, z);

// console.log(minimum);

// x = Math.PI;

// console.log(x);

// let a;

// let b;

// let c;

// document.getElementById("submitButton").onclick = function() {

//    a = document.getElementById("aTextBox").value;

//    a = Number(a);

//    b = document.getElementById("bTextBox").value;

//    b = Number(b);

//    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//    document.getElementById("cLabel").innerHTML = "Side C: " + c;

// }

// let age = 20;

// if(age >= 18) {

//    console.log("You are an adult!!!");

// }

// let age = 10;

// if(age >= 18) {

//    console.log("You are an adult!!!");

// } else {

//    console.log("You are a child!!!");

// }

// let age = -1;

// if(age >= 18) {

//    console.log("You are an adult!!!");

// } else if(age < 0) {

//    console.log("You Haven't been born yet!!!");

// } else {

//    console.log("You are a child!!!");

// }

// let online = false;

// if(online) {

//    console.log("You are online");

// } else {

//    console.log("You are offline");

// }

// document.getElementById("myButton").onclick = function() {

//    const myCheckBox = document.getElementById("myCheckbox");

//    if(myCheckBox.checked) {

//       console.log("You are subscribed");

//    } else {

//       console.log("You are not subscribed");

//    }

// }

// let grade = "B";

// if(grade == "A") {

//    console.log("You did great!!!");

// } else if(grade == "B") {

//    console.log("You did good!!!");

// } else if(grade == "C") {

//    console.log("You have just passed!!!");

// } else if(grade == "D") {

//    console.log("OOPS YOU FAILED!!!");

// } else {

//    console.log("Invaild Input");

// }

// let grade = "B";

// switch (grade) {

//   case "A":
//     console.log("You did great!!!");

//     break;

//   case "B":
//     console.log("You did good!!!");

//     break;

//   case "C":
//     console.log("You passed!!!");

//     break;

//   case "D":
//     console.log("You failed!!!");

//     break;

//   default:

//     console.log("Invaild Input");

// }


// let grade = 10;

// switch (true) {

//   case grade >= 90:
//     console.log("You did great!!!");

//     break;

//   case grade >= 70:
//     console.log("You did good!!!");

//     break;

//   case grade >= 60:
//     console.log("You passed!!!");

//     break;

//   case grade < 60:
//     console.log("You failed!!!");

//     break;

//   default:

//     console.log("Invaild Input");

// }


// let mark = 90;

// if(mark < 50) {

//    console.log("Your grade is D");

// } else if(mark >= 50 && mark < 60) {

//   console.log("Your grade is C");

// } else if(mark >=60 && mark < 80) {

//   console.log("Your grade is B");

// } else if(mark >= 80 && mark <= 100) {

//   console.log("Your grade is A");

// } else {

//   console.log("Invaild mark");

// }


// let temp = -15;

// if(!(temp > 0)) {

//    console.log("It is warm outside");

// } else {

//    console.log("It is cold outside");

// }

// let sunny = true;


// if(!sunny) {

//   console.log("It is sunny outside");

// } else {

//     console.log("It is cloudy outside");

// }




// print 1 to 10


// let i = 1;

// while(i < 11) {  // i = 1, i = 2, i = 3, i = 4, i = 5

//    console.log(i);

//    i = i + 1;

// }

// let i = 1;

// do {

//     console.log(i);

//     i = i + 1;

// } while(i <= 5);


//    1          2      4step
// for(let i = 1; i <= 4; i++) {

//     // 3step 
//   console.log(i);

//   console.log("*");
// }

// print 10 to 1

// for(let i = 10; i >= 1; i--) {

//   console.log(i);

// }

// Task 1

// 1
// 1
// 1
// 1
// 1
// 5
// 5
// 5
// 5
// 5

// Task 2

// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 1

// task 3

// x 
// x
// x
// x
// x
// x
// i 
// i 
// i 
// i 
// i 

// task 4 

// t 
// t 
// t 
// t 
// t
// l l l l l


// for(let i = 1; i <= 10; i++) {

// console.log(i);

// if(i == 3) {

//    break;

// }

// }

// for(let i = 1; i <= 10; i++) {

//     if(i == 7) {
    
//        continue;
    
//     }

//     console.log(i);
    
// }


//  1step        2step    8thstep
// for(let i = 1; i <= 3;    i++) { // outer loop is responsible how many number of times the loop need to run

//     //3rd


//  //     4th        5th     7th   
//   for(let j = 1; j <= 2; j = j + 1) { // inner loop is responsible print the values or data

//     // 6th step 

//     document.write(j + " ");

//   }

//    document.write("<br>");

// }

// Below code is for functions 


// startProgram();

// function startProgram() {

//     let userName = "Rahul";

//     let age = 23;
   
//     happyBirthday(userName, age);

// }

// function happyBirthday(userName, age) {
//    console.log("Happy Birthday to you");
//    console.log("Happy Birthday to you");
//    console.log("Happy Birthday dear",  userName );
//    console.log("Happy Birthday to you");
//    console.log("You are",age, "years old!!!!");
// }




// let area;

// let width;

// let height;

// width = window.prompt("Enter Width:- ");

// height = window.prompt("Enter Height:- ");

// area = getArea(width, height);

// console.log("The area is: " + area);

// function getArea() {
 
// //    let result = width * height;

// //    return result;

//      return width * height;

// }



// let adult = checkAge(10);

// console.log(adult);

// function checkAge(age) {
 
//     // if(age >= 18) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return age >= 18 ? true : false;

// }

// checkWinner(false);

// function checkWinner(win) {

//     win ? console.log("You Win") : console.log("you Loose");

// }

// function doSomething() {



// }

// var name = "rahul";

// nextedVar();

// console.log(name);


// function nextedVar() {

//     for(var i = 1; i <= 3; i+=1) {

//     }  
// }


let userName = "rahul";

let products = 3;

let total = 100;


// console.log("Hello", userName);

// console.log("You have ", products, "products in your cart");

// console.log("Your total is: ", total);

// console.log(`Hello ${userName} `);

// console.log(`You have ${products} products in your cart`);

// console.log(`Your total is: ${total}`);

let para = 

`Hello ${userName}  <br>

You have ${products} products in your cart <br>

Your total is: ${total}`;

console.log(para);

document.getElementById("myLabel").innerHTML = para;
