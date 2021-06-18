let arr = [1,2,3,4,5,6,7,8,10];

for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 != arr[i+1] ) {
      console.log( arr[i] + 1)
    }
  }