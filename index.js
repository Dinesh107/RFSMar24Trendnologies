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


let x;

let y = 6;

let z = 7;

let maximum;

let minimum;

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

let a;

let b;

let c;


document.getElementById("submitButton").onclick = function() {

   a = document.getElementById("aTextBox").value;

   a = Number(a);

   b = document.getElementById("bTextBox").value;

   b = Number(b);

   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

   document.getElementById("cLabel").innerHTML = "Side C: " + c;

}









