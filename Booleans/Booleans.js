//Essentials

//3.Write a function called isEven that takes a number as a parameter and returns true if the number is even and false if it is odd.
function isEven(number) {
    if (number%2===0){
        return true
    }
    else {
        return false
    }
} 
//4.Write a function called isValidPassword that takes a password as a parameter and returns true if that password is equal to or longer than 8 characters and false if the password is less than 8. HINT: Use “.length”.
function isValidPassword(password) {
    if (password.length>=8){
        return true
    }
    else {
        return false
    }
}
//5.Write a function called longerString that takes two strings as parameters and returns the longest string and returns “both” if they are the same length.

let longerString=(stringOne,stringTwo)=>{
    return stringOne.length>stringTwo.length? stringOne
           :stringOne.length<stringTwo.length? stringTwo
           :"both"

}
//6.Write a function called isLessThan30 that takes a number as a parameter and returns true if the number is less than 30 and false if it is not.
let isLessThan30=(number)=> number<30 ? true:false

//7.Write a function called isEqualTo10 that takes a number as a parameter and returns true if the number is equal to 10 and false if it is not
let isEqualTo10=(number)=> number===10 ? true:false
 //8.Write a function called isGreaterOrEqualTo15 that takes a number as a parameter and returns true if the given number is greater than or equal to 15 and false if it is not.
 let isGreaterOrEqualTo15=(number)=> number>=15 ? true:false


 //ETENDED
//1.Write a function called isLessThan that takes two numbers as parameters and returns true if num1 is less than num2 and false if otherwise.
let isLessThan=function(num1,num2){
    return num1<num2 ? true:false
}

//IMMERSIVE
//1.Write a function called rectAreaGreaterThan50 that takes the length and width of a rectangle and returns true if its area is greater than or equal to 50, and false if it's less than 50.
let rectAreaGreaterThan50=(length,width)=> length*width>50 ? true:false


















//2.Write a function called budgetStatus that takes a number as a parameter, and returns a string stating the status of your budget. If the number is greater than 250, the result should be an "over budget", If the number is less than or equal to 250, the result should be an "Under budget".

