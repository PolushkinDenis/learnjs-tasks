function unique(arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(newArr.length === 0) {
            newArr.push(arr[i])
        }
        let key = true
        for(let j = 0; j < newArr.length; j++) {
            if(arr[i] === newArr[j]) {
                key = false
            }
        }
        if(key) {
            newArr.push(arr[i])
        }
    }

    return newArr
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O