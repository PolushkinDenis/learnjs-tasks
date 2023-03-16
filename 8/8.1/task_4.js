// И при lazy.stomach.push(...) и при speedy.stomach.push(), свойство stomach берётся из 
//  затем в него добавляются данные

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  speedy.eat("apple");
  alert( speedy.stomach )
  
  alert( lazy.stomach )