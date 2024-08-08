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


//2.Write a function called budgetStatus that takes a number as a parameter, and returns a string stating the status of your budget. If the number is greater than 250, the result should be an "over budget", If the number is less than or equal to 250, the result should be an "Under budget".

