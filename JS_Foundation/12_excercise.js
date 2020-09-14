var b = {
    name: 'jane',
    say() {console.log(this)}
}

var c= {
    name: 'jane',
    say() {return function(){console.log(this)}}
}

var d = {
    name: 'jane',
    say() {return ()=>{console.log(this)}}
}

b.say()