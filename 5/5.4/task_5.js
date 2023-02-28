const getMaxSubSum = (arr) => {
    let sum = 0;
    let sum2 = 0;
  
    for (let item of arr) { 
        sum2 += item; 
      sum = Math.max(sum, sum2); 
      if (sum2 < 0) sum2 = 0; 
    }
  
    return sum;
}
 
arr = [1, -2, 3, 4, -9, 6]
getMaxSubSum(arr)