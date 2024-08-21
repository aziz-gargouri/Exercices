//9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
function addFullNameProperty‌‌(object) {
    object.fullName = object.firstName + " " + object.lastName
}
//4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.


//11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
function printAllProperties(object) {
    for (key in object) {
        console.log(object[key])
    }

}

//1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.
function removeNumbersLargerThan(number, object) {
    for (key in object) {
        if (object[key] > number) {
            delete object[key]
        }
    }
    return object
}

//4.Write a function called removeStringsLongerThan that takes two parameters, a number and an object. It then removes all strings with lengths larger than the number parameter.
function removeStringsLongerThan(object, number) {
    for (key in object) {
        if (object[key].length > number) {
            delete object[key]
        }
    }
    return object
}

//4.Write a function called transformFirstAndLast that takes an array as a parameter and returns an object with one property where: The first element of the array is the key. The last element of the array is the value.


//IMMERSIVE
//6.Write a function called countAllCharacters that takes a string as a parameter and returns an object with each unique character as a key and the value is the amount of times it appears in the string. If the string is empty it should return an empty object.
function countAllCharacters(string) {
    let array = string.split("")

}
//4.Write a function called transformFirstAndLast that takes an array as a parameter and returns an object with one property where: The first element of the array is the key. The last element of the array is the value.
let transformFirstAndLast=(array,obj={}) => (obj[array[0]] = array.at(-1),obj)

//EXTENDED
//2.Write a function called removeAllEvenValues that takes an object as a parameter. It then removes all properties with values that are an even number.
function removeAllEvenValues(object) {
    for (key in object) {
        if (object[key] % 2 == 0) {
            delete object[key]
        }
    }
    return object
}
object  ke