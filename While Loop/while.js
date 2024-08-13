//ESSENTIALS
//1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it.
function sumOfN(n) {
    let res=0
    while(n>=0){
        res=res+n
        n=n-1
    }
    return res
}
//2.Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number.
function factorialOfN(n) {
    let res=1
    while(n>0){
        res=res*n
        n=n-1
    }
    return res
}
//3.Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter.
let repeatString=(string,number)=>{
    res=""
    while(number>0){
        res=res+string
        number--
    }
    return res
}
//4.Write a function called countMinMax that takes two numbers as parameters and returns the range.
let countMinMax=(min,max)=>{
    while (min>max){
        let change=min
        min=max
        max=change
    }
    return max-min

}
//5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers beginning at the num1 and excluding num2.
let sumMinToMax=(min,max)=>{
    while (min>max){
        let change=min
        min=max
        max=change
    }
    let res=0
    while(min<max){
        res=res+min
        min=min+1
    }
    return res

}
//6.Write a function called productMinToMax that takes two numbers as parameters and returns the product between the two integers beginning at the num1 and excluding num2.
let productMinToMax=(min,max)=>{
    while (min>max){
        let change=min
        min=max
        max=change
    }
    let res=1
    while(min<=max){
        res=res*min
        min=min+1
    }
    return res

}
//7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.
function multiplyBy10NTimes(num, n) {
    let count=0
    while(count<n){
        num=num*10 //or num=num+"0"
        count++
    }
    return num

}
//8.Write a function called countCharAtIndex that takes three parameters, a string, an index, and another string. This function should use the index to find the corresponding character in the first string and loop through the second string and count how many times that character occurs.


//Didn't inderstand



//EXTENDED
//1.Write a function called reverseString that takes a string as an input and returns that string in reverse.
function reverseString(string) {
    let index=-1
    let reverse=string[index]
    res=""
    while(reverse<=string.length){
        res=res+reverse
        index=index+1
    }
    return res
}//FAAAALSE
//2.Write a function called getIndexOf that takes two parameters, a string, and a character, and returns the first position of the character in that string.
function getIndexOf(string, char) {
    let counter=0
    let res=""
    while(counter<=string.length){
        if(char=!string[counter]){
            counter=counter+1
        }
        else{
            res=counter
            
        }


    }
    return res
//FAAAAALSE
}
//IMMERSIVE
//1.Write a function called sumEven that takes two numbers as parameters and returns the sum of all even numbers starting from num1 and excluding num2.
function sumEven(number1, number2) {
    let sum=0
    while(number1<number2){
        if (number1 % 2 == 0 ){
            sum+=number1
        }
        number1++

    }
    return sum

}   
//2.Write a function called primeCounter that takes a number as a parameter and returns the amount of prime numbers that occur before it.
function primeCounter(number) {
    //DIDN'T UNDERSTAAAND

}
//3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.
function getValidMove() {
    
}

