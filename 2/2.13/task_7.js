
const simpleNumber = (n) => {
    for(let i = 2; i<=n; i++){
        let check = true
        for(let j = 2; j<i; j++) {
            if(i % j === 0){
                check = false
            }
        }
        console.log(i)
        if(check){
            alert(i)
        } 
    }
}

simpleNumber(10)