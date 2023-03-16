let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  const printReverseList = (list) => {
    let arr = [];
    let start = list;
  
    while (start) {
      arr.push(start.value);
      start = start.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }
  
  printReverseList(list);