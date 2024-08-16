//4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
function sumEveryOther(array) {
    let res = 0
    for (let i = 0; i < array.length; i = i + 2) {
        res = res + array[i]
    }
    return res
}
//2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.
function arrayWhile(array) {
    let i = 0
    while (i < array.length) {
        console.log(array[i])
        i++
    }
}
//3.Write a function called shortestString that takes an array of strings as a parameter and returns the length of the shortest string in the given array.
function shortestString(array) {
    let minLength = array[0].length
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < minLength) {
            minLength = array[i].length

        }
    }
    return minLength
}
//8.Write a function called multiplyByIndex that takes an array as a parameter, and multiplies each element with their corresponding index values then returns that array.
function multiplyByIndex(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(i * array[i])
    }
    return result
}
//1.Write a function called filterEvenLengthWords that takes an array of strings as a parameter, and returns an array containing only the elements of the given array whose length is an even number.
function filterEvenLengthWords(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length % 2 !== 0) {
            array.splice(i,1)
        }
    }
    return array
}