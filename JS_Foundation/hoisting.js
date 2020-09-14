var one = 1;
var one = 2;

console.log(one)

//***************************** */
a()
function a() {
    console.log('hi')
}

function a() {
    console.log('bye')
}


//***************************** */

var favFood = 'mango'

var food = function () {
    console.log('Fav food is' + favFood)

    var favFood = 'lichi'

    console.log('new fav food' + favFood)
} 

food()