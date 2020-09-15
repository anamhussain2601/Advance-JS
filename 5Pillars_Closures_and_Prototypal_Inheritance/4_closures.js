// Memory Efficient

function heavyDuty() {
    const bigArray = new Array(7000).fill(':)')
    console.log(bigArray)
    return bigArray
}

heavyDuty()

const getHeavyDuty  = heavyDuty2()
getHeavyDuty(688)

function heavyDuty2() {
    const bigArray = new Array(7000).fill(':)')
    console.log(bigArray)
    return function(index) {
        return bigArray[index]
    }
}


//Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeacetime = () => timeWithoutDestruction
    const launch = () => {
        timeWithoutDestruction = -1
        return 'boom'}
    setInterval(passTime , 1000)
    return {
        launch : launch,
        totalPeacetime : totalPeacetime
    }
} 

const ohno = makeNuclearButton()
ohno.totalPeacetime()