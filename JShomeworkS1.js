// ex. 1

function trueOrFalse (n1 , n2) {
	if (n1 === n2) {
		return("true");
	} else {
		return("false");
	}
}
console.log(trueOrFalse(5,5));
console.log(trueOrFalse(5,8));


// ex. 2
function compare (n1 , n2) {
	if (n1 < n2) {
		return(-1);
	} else {
		if (n1 === n2) {
			return(0);
		} else {
			return(1);
		}
	}
}

console.log(compare(3,5));
console.log(compare(5,5));
console.log(compare(8,5));


// ex. 3
function maximum (n1 , n2){
	if (n1>n2) {
		return(n1);
	} else {
		return(n2);
	}
}

console.log(maximum(5,8));


// ex. 4
function minimum (n1 , n2){
	if (n1<n2) {
		return(n1);
	} else {
		return(n2);
	}
}

console.log(minimum(15,30));


// ex. 5
function sumOfNumbers (n) {
	var s = 0;
	for(var i=1 ; i<n; i++){
		s=s+i;
	}
	return s;
}
console.log(sumOfNumbers(5));


// ex. 6
function primeNumber(n) {
	var divide = 0;
	var d = 1;
	while (d <= n) {
		if (n % d === 0) {
			divide= divide+1;
		}
		if (divide === 3) {
			d = n + 1;
		} else {
			d=d+1;
		}
	}
	if (divide === 2) {
		return true;
	} else {
		return false;
	}
}

console.log(primeNumber(11));
console.log(primeNumber(8));


// ex. 7
function sumPrimeNumber(n) {
	var sum = 0;
	var nr = 0;
	var x= 2;
	while (nr < n) {
		if (primeNumber(x)) {
			 sum = sum + x;
			nr = nr + 1;
		}
		x = x+1;
	}
	return sum;
}
console.log(sumPrimeNumber(3));

function sumPrimes (n) {
	var sum = 0;
	var nr=0;
	for (var x=2; nr<n; x++) {
		if (primeNumber(x)){
			sum = sum+x;
			nr = nr + 1;
		}
		
	} 
	return sum;
}

console.log(sumPrimes(3));


// ex. 8
function reverseString (str) {
	var s = "";
	for(var i=str.length-1; i>=0; i--) {
		s+=str[i];
	}
	return s;
}

console.log(reverseString("Invatam sa programam"));


// ex. 9
function produsulNrImpare (n) {
	var p = 1;
	var nr = 1; 
	while (nr <= n) {
		if (nr%2 != 0) {
			p= p * nr;
			
		}
		nr = nr +1;
	}
	return p;
	}

	console.log(produsulNrImpare(5));

//ex. 10

function arrayDeNumere (arr, nr) {
	for (var i = 0; i<arr.length; i++){
		if (arr[i]===nr){
			return i;
		}
	}
}

console.log(arrayDeNumere([5,8,9],9));


// ex. 11
function maxFromArray (arr) {
	var max = arr[0];
	for (var i = 0; i<arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}	
	}
	return max;
}

	console.log(maxFromArray([5,2,7]));


// ex. 12

function maxMinSum (arr) {
	var max = arr[0];
	var min = arr[0];
	for (var i = 0; i<arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	return max + min; 
}

console.log(maxMinSum([7,3,2,8]));

// ex. 13

function duplicate (arr) {
	for (i=0; i<arr.length;i++) {
		for (j = i+1; j<arr.length; j++) {
			if ( arr [i] === arr[j]) {
				return true;			
			}
		}
		}
		return false;
	}


console.log(duplicate([4,5,8,1,8]));
console.log(duplicate([2,5,8]));

// ex 14
function prodPositiveNumArr (arr) {
	var p = 1;
	for (var i = 0; i<arr.length; i++) {
		if (arr[i] > 0) {
			p = p * arr[i];
		}
	}
	return p;
}

console.log (prodPositiveNumArr([5,3]));

// ex 15

function palindrom (str) {
	for (i=0; i < str.length/2; i++){
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
}

console.log(palindrom("ana"));
console.log(palindrom("mere"));
