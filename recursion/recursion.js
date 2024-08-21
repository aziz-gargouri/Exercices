function iterateAndLog(n) {
    n=n-1
    if(n<=0){
        return "0 is even"}
    if (n%2){
        console.log (`${n} is odd`)}
    else{
        console.log (`${n} is even`)
    }
    return  iterateAndLog(n)
}

