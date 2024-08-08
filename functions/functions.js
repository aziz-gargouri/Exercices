//ESSENTIALS

//2.Write a function called helloWorld that prints “Hello World” to the console and invoke it. HINT: Use “console.log()”.
function helloWorld(){
    console.log("Hello World");
    
}
//3.Write a function called returnFive that takes no parameters and returns the number 5 when invoked. HINT: Use “console.log()”.
let returnFive=()=>"5"
//4.Write a function called helloWorldAgain that takes no parameters and returns the string “Hello World Again” when invoked.
let helloWorldAgain=function (){
    return "Hello World Again"
}
//5. Write a function called returnParameter that takes one parameter and returns the parameter when invoked.
function returnParameter(name){
    return name
}
//6.Write a function called add that takes two numbers as parameters and when invoked adds them together then return the result.
let add=function(firstNumber,secondNumber){
    return firstNumber+secondNumber
}
//7.Write a function called subtract that takes two numbers as parameters and when invoked subtracts them from each other then returns the result.
let substract=function(firstNumber,secondNumber){
    return firstNumber-secondNumber
}
//8.Write a function called multiply that takes two numbers as parameters and when invoked multiplies them together then returns the result.
let multiply=function(firstNumber,secondNumber){
    return firstNumber*secondNumber
}
//9.Write a function called stringLength that takes a string as a parameter and when invoked returns the length of the string as a number. HINT: use “.length”.
let stringLength=(name)=>name.length
//10.Write a function called concatTwoStrings that takes two strings as parameters and returns a combined (concatenated) string when invoked.
let concatTwoStrings=function(firstString,secondString){
    return firstString+secondString
}

//11.Write a function called fullName that takes two strings as parameters and when invoked returns a combined (concatenated) string as full name with a white space in between.
let fullName=function(firstString,secondString){
    return firstString+" "+secondString
}


//EXTENDED
//1.Write a function called square that takes a number as a parameter, squares it and returns the result.
function square(number){
    return number * number
}
//2.Write a function called cube that takes a number as a parameter, cube it and returns the result
function cube(number){
    return number * number * number
}
//3.Write a function called charAtIndex that takes a string and an integer as parameters and returns the the character at the index of the number. HINT: Use “.charAt”.
let charAtIndex = (word, number) => word.charAt(number)
//4.Write a function called addFourNums that takes four numbers as four parameters and returns the summation of the numbers.
let addFourNums=function(Num1,Num2,Num3,Num4){
    return Num1+Num2+Num3+Num4
}
//5.Write a function called perimeterRect that takes a numerical width and length as parameters and returns the perimeter of the rectangle.
let perimeterRect=function(width,length){
    perimeter=(width *width)+(length * length) 
    return Math.sqrt(perimeter)
}
//6.Write a function called areaRect that takes a numerical width and length as parameters and returns the area of the rectangle.
function areaRect(width,length){
    return length*width


}
//7.Write a function called perimeterTriangle that takes the numerical length of each side as parameters and returns the perimeter of the triangle.
function perimeterTriangle(side1, side2, side3) {
    return side1 + side2 + side3;
}
//8.Write a function called areaTriangle that takes the numerical base and height of a triangle as parameters and returns the area of the triangle.
let areaTriangle=(base,height)=> 0.5 * base * height
//9.Write a function called tripleArea that takes the numerical width and length of a rectangle as parameters and returns the rectangle's area, multiplied by 3.
function tripleArea(width, length) {
    const area = width * length;
    return area * 3;
}









