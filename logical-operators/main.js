//EXTENDED

//1.Write a function called areValidCredentials that takes name and password as a parameter and returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise, it returns false.
let areValidCredentials=(name,password)=> name.length>3 && password.length>8 ? true:false 
//2.Write a function called findMinLengthOfThreeWords that takes three words as parameters and returns the length of the shortest word.
let findMinLengthOfThreeWords=function (string1, string2, string3){
    let min=string1.length
    if(string2.length<string1.length){
      min=string2.length 
    }
    else if (string3.length<=string1.length){
         min=string3.length
    }
return min 
}
//3.Write a function called findMaxLengthOfThreeWords that takes three words as parameters and returns the length of the longest word.
let findMaxLengthOfThreeWords=function (string1, string2, string3){
    let min=string1.length
    if(string2.length>string1.length){
      min=string2.length 
    }
    else if (string3.length>=string1.length){
         min=string3.length
    }
return min 
}
//4.Write a function called guessMyNumber that takes a number as a parameter and compares it to a random number between 0 and 5, and returns one of the following strings: 'You guessed my number!' if the number matches the random number. 'Nope! That wasn't it!' if the number did not match the random number. HINT: Look at these functions on MDN to learn how they work: Math.random, Math.floor and Math.ceil.
let guessMyNumber=(number)=>{
    
    let variable=Math.floor(Math.random() *6)
    if (number===variable){
        return true
    }
  }


