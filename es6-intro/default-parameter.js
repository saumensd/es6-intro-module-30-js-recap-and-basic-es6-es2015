// default parameter

function fullName (first, last='Chowdhury'){
    const name = first + ' ' + last;
    return name;
}






// option 1
// function add (num1, num2){
//     console.log(num1, num2);
// if (num2 == undefined){
//     num2 = 0;
// }

//     const total = num1 + num2;
//     return total;
// }
// const result = add(15);
// console.log(result);

// option 2
// function add (num1, num2){
//     // option  2
//     // num2 = num2 || 0; 
// // if (num2 == undefined){
// //     num2 = 0;
// // }

//     const total = num1 + num2;
//     return total;
// }
// const result = add(15);
// console.log(result);

// es6

// function add (num1, num2 = 33){  // default parameter
//     // option  2
//     // num2 = num2 || 0; 
// // if (num2 == undefined){
// //     num2 = 0;
// // }

//     const total = num1 + num2;
//     return total;
// }
// const result = add(15 , 0);
// console.log(result);


