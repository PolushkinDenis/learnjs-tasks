const extractCurrencyValue = (str) => {
    return +str.slice(1)
}

alert( extractCurrencyValue('$120'));
