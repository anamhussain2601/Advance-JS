//funtion declaration
function xyz () {
    console.log('xyz')
}


//function declaration

var abc = function () {
    console.log('abc')
}

//invocation
xyz()
abc()


//Arguments

function args(a1 ,a2) {
    console.log('args are ', arguments)
    console.log('args are ', Array.from(arguments))
}

args('hello', 'hola')