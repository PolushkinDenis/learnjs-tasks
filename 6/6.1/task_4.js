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
  
  const printList = (list) => {
    let start = list;
  
    while (start) {
      alert(start.value);
      start = start.next;
    }
  
  }
  
  printList(list);