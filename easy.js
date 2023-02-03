function addUp(num) {
    /*
    Source: https://edabit.com/challenge/4gzDuDkompAqujpRi
    Create a function that takes a number as an argument. 
    Add up all the numbers from 1 to the number you passed to the function.
    For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    */
	
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
}


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
}


function countVowels(str) {
	/*
    Source: https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
    Create a function that takes a string and returns the number (count) of vowels contained within it.
    Examples: 
        countVowels("Celebration") ➞ 5
        countVowels("Palm") ➞ 1
        countVowels("Prediction") ➞ 4
    */
}


function tuckIn(arr1, arr2) {
	/*
    Source: https://edabit.com/challenge/7ysTEDruHz2prcJQ9
    Create a function that takes two arrays and insert the second array in the middle of the first array.
    Examples:
        tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
        tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
    Notes:
        The first array always has two elements.
        Use the spread syntax to solve this challenge.
    */
}


function timeForMilkAndCookies(date) {
	/*
    Source: https://edabit.com/challenge/hPWnaSckJke5FXNEH
    Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
    Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
    Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
    Examples:
        timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
        timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
        timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
    Notes:
        Dates are zero based (see resources).
        All test cases contain valid dates.
    */
}


function isFirstSuperior(arr1, arr2) {
	/*
    Source: https://edabit.com/challenge/xtHTBXjumRg5AhsT5
    You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart 
    (which means that evaluating the value > the other value will return true).
    Create a function that returns whether the first array is slightly superior to that of the second.
    Examples: 
        isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
        // The pair of items at each index are compared in turn.
        // 1 from the first array is the same as 1 from the second array.
        // 2 is the same as 2.
        // However, 4 is greater than 3, so first array is superior.

        isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
        isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
        isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
        isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
    Notes:
        Both arrays will be the same length.
        All values and their counterparts will always be of the same data type.
        If the two arrays are the same, return false.
    */
}


function potatoes(str) {
	/*
    Source: https://edabit.com/challenge/u6iaymtE4eYXQ2ZWR
    Create a function to return the amount of potatoes there are in a string.
    Examples:
        potatoes("potato") ➞ 1
        potatoes("potatopotato") ➞ 2
        potatoes("potatoapple") ➞ 1
    */
}


function highestDigit(number) {
    /*
    Source: https://edabit.com/challenge/YJuhHKSmNCaKNHcD3
    Create a function that takes a number as an argument and returns the highest digit in that number.
    Examples:
        highestDigit(379) ➞ 9
        highestDigit(2) ➞ 2
        highestDigit(377401) ➞ 7
    */
}


function removeVowels(str) {
	/*
    Source: https://edabit.com/challenge/DbLp2kHgwQbridSSy
    Create a function that takes a string and returns a new string with all vowels removed.
    Examples:
        removeVowels("I have never seen a thin person drinking Diet Coke.")
        ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
        removeVowels("We're gonna build a wall!")
        ➞ "W'r gnn bld  wll!"
        removeVowels("Happy Thanksgiving to all--even the haters and losers!")
        ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
    */
}


function getOnlyEvens(nums) {
	/*
    Source: https://edabit.com/challenge/6MZx5RqKYkFaogeAQ
    Given an array of numbers, return an array which contains all the even numbers in the original array, 
    which also have even indices.
    Examples:
        getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
        getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
        getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
    */
}


function amplify(num) {
	/*
    Source: https://edabit.com/challenge/FPHnbisnLwrQFYyAg
    In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, 
    up to a variable given higher bound (including the bounds in the sequence).
    Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).
    Given a higher bound num, implement a function that returns an array with the sequence of numbers, 
    after that every multiple of 4 has been amplified.
    Examples: 
        amplify(4) ➞ [1, 2, 3, 40]
        // Create a sequence from 1 to 4
        // 4 is exactly divisible by 4, so it will be 4*10 = 40
        amplify(3) ➞ [1, 2, 3]
        // Create a sequence from 1 to 3
        // There are no numbers that can be exactly divided by 4
        amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
        // Create a sequence from 1 to 25
        // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
    Notes:
        The given parameter num will always be equal to or greater than 1.
        Remember to include the num as the higher bound of the sequence (see the Examples) above.
        A number a amplified by a factor b can also be read as: a * b.
        A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
    */
}


function whichIsLarger(f, g) {
	/*
    Source: https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
    Your function will be passed two functions, f and g, that don't take any parameters. 
    Your function has to call them, and return a string which indicates which function returned the larger number.
        If f returns the larger number, return the string f.
        If g returns the larger number, return the string g.
        If the functions return the same number, return the string neither.
    Examples:
        whichIsLarger(() => 5, () => 10) ➞ "g"
        whichIsLarger(() => 25,  () => 25) ➞ "neither"
        whichIsLarger(() => 505050, () => 5050) ➞ "f"
    Notes:
    This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).
    */
}


function sortDrinkByPrice(drinks) {
	/*
    Source: https://edabit.com/challenge/nuXdWHAoHv9y38sn7
    You will be given an array of drinks, with each drink being an object with two properties: name and price. 
    Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
    Assume that the following array of drink objects needs to be sorted:
        drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
        ]
    The output of the sorted drinks object will be:
        sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
    */
}


function factorial(int) {
	/*
    Source: https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd
    Create a function that takes an integer and returns the factorial of that integer. 
    That is, the integer multiplied by all positive lower integers.
    Examples: 
        factorial(3) ➞ 6
        factorial(5) ➞ 120
        factorial(13) ➞ 6227020800
    Notes:
        Assume all inputs are greater than or equal to 0.
    */
}


function numberToArrayOfDigits(int) {
    /*
    Source: https://www.jschallenger.com/javascript-practice/javascript-fundamentals/split-number-into-digits
    Write a function that takes a number (int) as argument. Split int into its individual digits and return them in an array. 
    Tipp: you might want to change the type of the number for the splitting.
    */
}


function sumOfDigits(int) {
    /*
    Write a function that takes a number (int) as argument. Split int into its individual digits and return the sum of them. 
    */
}