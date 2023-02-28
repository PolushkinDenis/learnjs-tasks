const sumSalaries = (salaries) => {
    let sum = 0;
    for(let price of Object.values(salaries)){
        sum += price
    }
    return sum
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650