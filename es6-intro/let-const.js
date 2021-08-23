//if i declare a variable and i do  not change its value , i will declare a variable with const
const balance = 1240;
balance = 1340; //will give error because i am declaring variable with const
//if i change variable value , then i will declare a variable with let
let balance = 1240;
balance = 1340;

const userName = 'janpahi potas potas';
const weTogether = 'ami' + userName;
console.log(weTogether);
userName = 'moyna pakhi'; //will give error because i am declaring variable with const


const numbers = [45, 23, 89, 60];
//numbers = [99, 145,3];   //re-asign  not allowed
numbers.push(555); 
numbers[1]= 333;
let sum = 0; //if you declare a variable with const, it would  give an error 
for (let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    sum = sum + number; // since the value of the sum variable has changed ,here it has been declared with let variable. if  you declare variable with const it would give error
}

const student = {roll: 101, name:'mofij', job:'intern'};
student.name = 'MOfazzol'; //Declaring an array or object with const can change or modify any one part
//student = {name: ' mofazzol'};// re-asign not allowed

