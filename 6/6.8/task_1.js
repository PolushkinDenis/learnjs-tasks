//setInterval
const printNumbers1 = (from, to) => {
    let current = from
  
    let timerId = setInterval(function() {
      alert(current)
      if (current == to) {
        clearInterval(timerId)
      }
      current++
    }, 1000)
  }
  
  printNumbers1(3, 6);

  //setTimeout
  const printNumbers2 = (from, to) => {
    let current = from
  
    setTimeout(function go() {
      alert(current)
      if (current < to) {
        setTimeout(go, 1000)
      }
      current++
    }, 1000)
  }
  
  printNumbers2(3, 6)