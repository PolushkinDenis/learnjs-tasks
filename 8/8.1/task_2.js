let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen )
  alert( bed.glasses )
  alert( table.money )

  // 2. через pockets.glasses и через head.glasses значение получится одинаково быстро