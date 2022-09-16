// function friends(name){
//       console.log( "hello", name);
   
// }

// friends("salman");
// friends("sakib");
// friends("masfari");

// function numberAdd(num1 , num2){
//     var result = num1 + num2;
//    return result;
// }
// var finalsum= numberAdd(10,15) +10;
// console.log(finalsum);


// function oddEven(num){
//     if(num % 2 == 0){
//        return"It is even";
//     }
//     else{
//         return"It is odd";
//     }
// }
// var checknumber = oddEven(20);
// console.log(checknumber);

function findLargeNumber(num1, num2, num3){

    if (num1 > num2 && num1 > num3){
        return ( num1)
       }  
    else if (num1 <num2 && num2 > num3){
         return (num2)
       } 
    else{
          return ( num3);
       }
}
 var result =findLargeNumber(30,200,10);
 console.log(result);