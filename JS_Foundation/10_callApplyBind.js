const wizard = {
    name: 'jane',
    health: 20,
    heal(num1, num2) {
        return this.health += num1 + num2
    }
}

const archer = {
    name: 'john',
    health: 40
}

console.log(archer)

wizard.heal.call(archer, 50, 30)  // calling fucntion wizard funtion with ref to archr
wizard.heal.apply(archer, [50, 30])  // calling fucntion wizard funtion with ref to archr
const healArcher = wizard.heal.bind(archer, 50, 30)  
console.log(archer)
healArcher()