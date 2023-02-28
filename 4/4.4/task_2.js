let calculator = {
    read: () => {
      number1 = +prompt("Введите первое число");
      number2 = +prompt("Введите второе число")
    },
    sum: () => {
      return number1 + number2;
    },
    mul: () => {
      return number1 * number2;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
