var numbers = [];
 // create a array of numbers from 1 to 100
for (var i = 0; i < 100; i++){
numbers[i] =  i + 1;
}


for (var i = 0; i < numbers.length; i++){
  // For numbers that are multiples of 3 and 5 print "FizzBuzz"
  if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
   console.log("FizzBuzz");
   // for multiples of 5 Buzz print "buzz"
 } else if (numbers[i] % 5 == 0){
   console.log("buzz");
 }
 // for multiples of 3 print “Fizz”
 else if (numbers[i] % 3 == 0) {
   console.log("Fizz");
   // For numbers that are NOT multiples of 3 and 5 print the actual number
 }else{
   console.log(numbers[i])
 }
}
