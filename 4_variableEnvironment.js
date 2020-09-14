function two() {
    var isValid  //undeined
    console.log(isValid)
}

function one() {
    var isValid = true //local env
    two()   //new exn conext
    console.log(isValid)
}

var isValid = false ;
console.log(isValid)
one()


//execution context 



//two() --  undefined
//one() -- true
//global() --  false