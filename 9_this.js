const obj = {
    name: 'Jane',
    sing: function() {  
        return 'oo lallala'+ this.name // this. is the object that the "sing function" is  the property of.
    },
    singAgain() {
        return this.sing() + '!'
    }
}

obj.sing()

/////////////////////////////
function impPerson() {
    console.log(this.name)
}

const name= 'Sunny'

const obj1 = {
    name: 'Cassy',
    impPerson: impPerson
}
const obj2 = {
    name: 'JAcob',
    impPerson: impPerson
}

impPerson()
obj1.impPerson()
obj2.impPerson()