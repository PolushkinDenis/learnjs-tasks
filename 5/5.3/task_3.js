const truncate = (str, maxlength) => {
    let newStr
    if(str.length > maxlength){
        newStr = str.slice(0, maxlength-1) + "…"
        return newStr
    }
    else {
        return str
    }
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

alert(truncate("Всем привет!", 20))