const arr = [1,2,3,4,5,6,7,7,8,6,10];
let duplicateElementArr = []

for(let i= 0; i < arr.length; i++) {
      
    for(let j =i+1 ; j<arr.length;j++) {

        if(!(duplicateElementArr.includes(arr[i])) && arr[i]===arr[j] ){
             
            duplicateElementArr.push(arr[i])
}
}
}