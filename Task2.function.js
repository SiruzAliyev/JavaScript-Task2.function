// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".


//Taks2.function.1

// let A=+prompt("Enter the number:");
// function findNumber(A) {
//     if(A===0) {
//         alert('This operation is not scheduled');
//     }
//     else{
//         for(let i=1; i<=1000; i++) {
//             if (i%A==0){
//                 console.log(i);
//             }
//         }
//     }
// }
// findNumber(A);



// Taks2.function.2

// let A=+prompt("Enter the number:");
// function findNumbers(A) {
//     if(A==0){
//         alert("number will not 0");
//     }
//     else {
//         for(let i=1; i<A; i++) {
//             if(Math.pow(i,2)<A) {
//                 console.log(i);
//             }
//         }
//     }
// }
// findNumbers(A);



// Taks2.function.3

// let A=+prompt("Enter the number:");
// function findNumber(A) {
//     let divisor=0;
//     for(let i=1; i<=A/2; i++) {
//         if (A%i==0) {
//             divisor=i;
//         }
//     }
// return divisor;
// }
// findNumber(A);


// Taks2.function.4

// let A=+prompt("Enter the number for A");
// let B=+prompt("Enter the number for B");
// function calculateSum(A,B) {
//     let sum=0;
//     let C;
//     if(A>B) {
//         C=A;
//         A=B;
//         B=C;
//     }
//     for(i=A; i<=B; i++){
//         if(i%7==0) {
//             sum=sum+i;
//         }
//     }
// return sum;
// }
// calculateSum(A,B);



// Taks2.function.5

// let N=+prompt("Enter the number:");
// function findFibonacNum(N) {
//     while (isNaN(N) || N==""){  
//         N=+prompt("Value must be a number.Please try again.:");  
//     }  
//     let num1=1;  
//     let num2=1;  
//     let result;  
//     let count=2;  
//     if(N==2 || N==1){  
//         result=1;  
//         console.log(result);  
//     }  
//     for (let i = 0; i < N; i++) {  
//         result=num1+num2;  
//         num1=num2;  
//         num2=result;  
//         count++;  
//         if (count==N) {  
//         console.log(`The ${N}th Fibonacci number is ${result}`);          
//         }        
//     }
// }
// findFibonacNum(N);



// Taks2.function.6

// const A = +prompt('Please give a number for A');
// const B = +prompt('Please give a number for B');
// function findCommon(A, B) {
// let a = Math.abs(A);
// let b = Math.abs(B);
// while (a && b && a !== b) {
//     if(a > b){
//         [a, b] = [a - b, b];
//     }else{
//         [a, b] = [a, b - a];
//     };
// };
// return a || b;
// };
// findCommon(A, B);



// Taks2.function.7

// let num = +prompt("Enter the number: ");
// function findMirrorNum(A) {
//     let reverse = 0; 
//     let reminder = 0; 
//     while (num>0) {  
//         reminder = num % 10;   
//         reverse = reverse*10 + reminder;  
//         num = ((num-reminder)/10);  
//     } 
//     return reverse;
// }
// findMirrorNum(num);





// Taks2.function.8

// let A = +prompt("Please, enter the number");
// let B = +prompt("Please, enter the number");
// function haveSameDigit(A, B) {
//   let digita = 0;
//   let digitb = 0;
//   let differentDigit = true;
//   while (A) {
//     digita = A % 10;
//     A = A / 10;
//     while (B) {
//       digitb = m % 10;
//       B = parseInt(B / 10);
//       if (digitA === digitB) {
//         console.log("yes");
//         differentDigit = false;
//         break;
//       }
//     }
//   }

//   if (differentDigit) {
//     console.log("no");
//   }
// }
// haveSameDigit(A, B)