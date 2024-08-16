//5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers beginning at the num1 and excluding num2.
function sumMinToMax(min, max) {
    let result = 0
    for (i = min; i < max; i++) {
        result = result + i
    }
    return result
}
//7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.
function multiplyBy10NTimes(num, n) {
    let res = num
    for (i = 1; i <= n; i++) {
        res = res * 10
    }
    return res
}
//1.Write a function called reverseString that takes a string as an input and returns that string in reverse.
function reverseString(string) {
    let result = ""
    for (let i = string.length - 1; i >= 0; i--) {
        result = result + string[i]
    }
    return result
}
//1.Write a function called sumEven that takes two numbers as parameters and returns the sum of all even numbers starting from num1 and excluding num2.
function sumEven(number1, number2) {
    let result = 0
    for (i = number1; i < number2; i++) {
        if (!(i % 2)) {
            result = result + i
        }
    }
    return result
}





//3.Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter.
function repeatString(string, num) {
    let res = ""
    for (let i = 1; i <= num; i++) {
        res = res + string
    }
    return res
}

//EXERCICE
function search (arr,n){
    for (i=0;i<=arr.length;i++){
        if(arr[i]===n){  
            
        }
    }
    return arr
}