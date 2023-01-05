function addUp(num) {
    /*
    Create a function that takes a number as an argument. 
    Add up all the numbers from 1 to the number you passed to the function.
    For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    */
	let sum = 0;
	for(let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}


function minMax(arr) {
	/*
    Create a function that takes an array of numbers and return both the minimum and maximum numbers, 
    in that order.
    Examples:
    minMax([1, 2, 3, 4, 5]) return [1, 5]
    minMax([2334454, 5]) return [5, 2334454]
    minMax([1]) return [1, 1]
    */
    return [Math.min(...arr), Math.max(...arr)];
}