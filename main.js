//first attempt
function sumOfMinimums(arr) {
  //create empty array for minimum values
  let minimums = [];
  
  //find minimum value of each array inside large array
  for(let i = 0; i<arr.length; i++){
    //use sort method to sort small to large, push first value
    minimums.push(arr[i].sort((a,b)=>a-b)[0])
  }
  
  //return reduced value to get sum
  return minimums.reduce((a, c) => a + c, 0)
}


/*
learn how this streamlined version of the function works

function sumOfMinimums(arr) {
  return arr.reduce((a, c) => a + Math.min(...c), 0);
}

*/
