// var x = 'x'

// function findName() {
//     console.log(x)
//     var b = 'b'
//     return printName()
// }

// function printName() {
//     var c = 'c'
//     return 'Heee haaa!!'
// }

// function sayMyName() {
//     var a = 'a'
//     return findName()
// }

// sayMyName()


///////////////////////////////

function sayMyName() {
    var a = 'a'
    return function findName() {
        var b = 'b'
        return function printName() {
            var c = 'c'
            console.log(b)
            return 'heeee haaaa!!'
        }
    }
}
sayMyName()()()