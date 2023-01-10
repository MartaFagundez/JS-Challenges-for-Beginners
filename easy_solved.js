function addUp(num) {
    /*
    Source: https://edabit.com/challenge/4gzDuDkompAqujpRi
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
    Source: https://edabit.com/challenge/Q3n42rEWanZSTmsJm
    Create a function that takes an array of numbers and return both the minimum and maximum numbers, 
    in that order.
    Examples:
    minMax([1, 2, 3, 4, 5]) return [1, 5]
    minMax([2334454, 5]) return [5, 2334454]
    minMax([1]) return [1, 1]
    */
    return [Math.min(...arr), Math.max(...arr)];
}


function matchHouses(step) {
    /*
    Source: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
    This challenge will help you interpret mathematical relationships both algebraically and geometrically.
    Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
    See step 1, 2 and 3 in this image: https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
    Examples: 
    matchHouses(1) return 6
    matchHouses(4) return 21
    matchHouses(87) return 436
    */
   return step===0 ? 0 : (step * 5) + 1;
}


function sumOfCubes(arr) {
    /*
    Source: https://edabit.com/challenge/XdAR3KohR5w7rjrFg
    Create a function that takes in an array of numbers and returns the sum of its cubes.
    Examples:
    sumOfCubes([1, 5, 9]) return 855
    Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    sumOfCubes([3, 4, 5]) return 216
    sumOfCubes([2]) return 8
    sumOfCubes([]) return 0
    */
    let sum = 0;
    arr.forEach(element => sum += Math.pow(element, 3));
    return sum;
}


function repetition(txt, n) {
	/*
    Source: https://edabit.com/challenge/MjqneMZ7aZa8AxXZG
    Create a recursive function that takes two parameters and repeats the string n number of times. 
    The first parameter txt is the string to be repeated and the second parameter is the number of times 
    the string is to be repeated.
    String.prototype.repeat() is not allowed.
    Examples:
    repetition("ab", 3) returns "ababab"
    repetition("kiwi", 1) returns "kiwi"
    repetition("cherry", 2) returns "cherrycherry"
     */
    // 1) base case of recursion to stop calling itself
    if (n === 1) {
        return txt;
    // 2) recursively calling itself with new value 
    } else {
        return txt + repetition(txt, n-1);
    }
}


function cardHide(card) {
	/*
    Source: https://edabit.com/challenge/rtpvAqFT3koqMoFCJ
    Write a function that takes a credit card number and only displays the last four characters. 
    The rest of the card number must be replaced by ************.
    Examples:
        cardHide("1234123456785678") ➞ "************5678"
        cardHide("8754456321113213") ➞ "************3213"
        cardHide("35123413355523") ➞ "**********5523"
    Notes: 
        Ensure you return a string.
        The length of the string must remain the same as the input.
    */
   let numbers = card.slice(-4);
   let asterisks = card.slice(0, -4).replace(/[0-9]/g, "*");
   return asterisks.concat("", numbers);
}


// 1- Solved using nested for loops
function findLargestNums(arr) {
	/*
    Source: https://edabit.com/challenge/h7LTMAFeNz79rXB2Y
    Create a function that takes an array of arrays with numbers. 
    Return a new (single) array with the largest numbers of each.
    Examples:
        findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
        findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
        findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
    Notes:
        Watch out for negative integers (numbers).
    */
   let mayor;
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
        mayor = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > mayor) {
                mayor = arr[i][j];
            }
        }
        newArr.push(mayor);
   }
   return newArr;
}


// 2- Solved using nested forEach loops
function findLargestNums(arr) {
	/*
    Source: https://edabit.com/challenge/h7LTMAFeNz79rXB2Y
    Create a function that takes an array of arrays with numbers. 
    Return a new (single) array with the largest numbers of each.
    Examples:
        findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
        findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
        findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
    Notes:
        Watch out for negative integers (numbers).
    */
    let mayor;
    let newArr = [];
    arr.forEach(element => {
        mayor = element[0];
        element.forEach(subElement => {
            if (subElement > mayor) {
                mayor = subElement;
            }
        });
        newArr.push(mayor);
    }); 
    return newArr;
}