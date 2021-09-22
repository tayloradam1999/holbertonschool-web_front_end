function countPrimeNumbers() {
	let primes = [];
	for (var counter = 2; counter <= 100; counter++) {
    	var not_prime = false;
    	for (var div = 3; div <= (counter - 1); div++)  {
        	if (counter % div === 0) {
				not_prime = true;
			}
    	}
    if (not_prime === false) {
		primes.push(counter);
	}
	}
}

let x = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + x + " milliseconds");
