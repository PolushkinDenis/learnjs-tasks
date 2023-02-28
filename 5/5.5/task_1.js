const camelize = (str) => {
    return str.split("-").map((str1, index) => index === 0 ? str1 : str1[0].toUpperCase() + str1.slice(1)).join('')
}

alert(camelize("list-style-image"))