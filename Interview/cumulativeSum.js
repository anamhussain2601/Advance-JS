let arr = [1,3,5,7];
let cumulativeSumArr = []

for(let i = 0; i<arr.length; i++) {
    let sum = arr[i]
    for(j = 0 ; j< i; j++ ) {

         sum = sum + arr[j]
}
    cumulativeSumArr.push(sum)
}