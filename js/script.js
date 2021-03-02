// create numbers from 1 to 100 
for (var i = 1; i <= 100; i++){
  // For numbers that are multiples of 3 and 5 print "FizzBuzz"
  if (i % 3 == 0 && i % 5 == 0){
   console.log("FizzBuzz");
   // for multiples of 5 Buzz print "buzz"
 } else if (i % 5 == 0){
   console.log("Buzz");
 }
 // for multiples of 3 print “Fizz”
 else if (i % 3 == 0) {
   console.log("Fizz");
   // For numbers that are NOT multiples of 3 and 5 print the actual number
 }else{
   console.log(i)
 }
}
