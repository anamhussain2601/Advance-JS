function a() {
    let hello = 'hello'
    return function b() {
        let hi = 'hi'
        return function c() {
            let hola = 'hola'
            console.log(`${hello} > ${hi} > ${hola}`)
            return `${hello} > ${hi} > ${hola}`
        }
    }
}

a()()()

////////////////////////

const  boo = (string) => (name) => (name2) => 
console.log(`${string} ${name} ${name2}`)

const booString = boo('hi')
const booStringName = booString()
booStringName()