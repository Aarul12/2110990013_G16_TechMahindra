// SetInterval
// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3)
// }, 3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3)
// }, 5000)
// console.log(6);

// for(var i = 1; i<=6; i++){
//     setTimeout(()=>{
//         console.log(i);
//     });
// }
// output is 7

// for(let i = 1; i<=6; i++){
//     setTimeout(()=>{
//         console.log(i);
//     });
// }
// output is 1 2 3 4 5 6

// for(var i = 1; i<=6; i++){
//     (function(j){
//         setTimeout(()=>{
//             console.log(j);
//     }, 1000);
//     })(i);
// }


// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// Important Case of Closure

// var count = 0;
// function increment(){
//     count++;
// }

// increment();
// increment();
// increment();

// console.log(count);

// function outside(){
//     var count = 0;
//     function increment(){
//         count++;
//     }
//     console.log(count);
// }
// outside();


// if we want to increase from  outside

// function counter(){
//     var count = 0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();
// counter1();

// now we have to make decrement function also but there is a problem that we can only use return one time
// so we have to use this keyword 

// function counter(){
//     var count = 0;
//     this.increment = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrement = function(){
//         count--;
//         console.log(count);
//     }


// }
// var counter1 = new counter();
// counter1.increment();
// counter1.decrement();
// counter1.increment();