const makeArmy = () => {

    let shooters = []
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { 
        alert( i )
      }
      shooters.push(shooter)
    }
  
    return shooters
  }
  
  let army = makeArmy()
  
  console.log(army[0]()) 
  console.log(army[5]()) 