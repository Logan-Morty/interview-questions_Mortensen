// Write a function called isPrime that returns a boolean based on whether the input number is prime or not.

function isPrime(num){
  let isPrime = true;
  
  // 0 and 1 are not considered primes
  if(num == 1 || num == 0){
	return false;
  }
  
  // loop through all numbers between 2 and half of num + 1
  for(let i = 2; i < num/2+1; i++){
	// if the division of num by the looped number returns a whole number, the number is not prime
    if(num % i === 0){
      isPrime = false;
    }
  }
  //return the result
  return isPrime;
}

console.log("Is number 0 prime? " + isPrime(0));
console.log("Is number 1 prime? " + isPrime(1));
console.log("Is number 2 prime? " + isPrime(2));
console.log("Is number 3 prime? " + isPrime(3));
console.log("Is number 4 prime? " + isPrime(4));
console.log("Is number 5 prime? " + isPrime(5));
console.log("Is number 6 prime? " + isPrime(6));
console.log("Is number 7 prime? " + isPrime(7));
console.log("Is number 8 prime? " + isPrime(8));
console.log("Is number 9 prime? " + isPrime(9));
console.log("Is number 10 prime? " + isPrime(10));
console.log("Is number 11 prime? " + isPrime(11));

// ex.
// const num = 6;
// isPrime(num) == false;

// ex
// const num = 7;
// isPrime(num) == true;