const checkSpam = (str) => {
    const strLow = str.toLowerCase();
    if(strLow.includes("viagra") || (strLow.includes("xxx"))){
        return true
    }
    else {
        return false
    }
}

alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxxx'))
alert(checkSpam("innocent rabbit"))