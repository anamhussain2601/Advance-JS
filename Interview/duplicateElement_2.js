const arr = [1,2,3,4,5,6,7,7,8,6,10];
let newArr = []
let dupArr=[]

for(let i= 0; i < arr.length; i++) {
      
     if(!(newArr.includes(arr[i]))) {
            newArr.push(arr[i])
            
}   

else {
    !dupArr.includes(arr[i]) && dupArr.push(arr[i])
}
}