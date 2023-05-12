const sum = (a,b) => {
    return a+b;
}

console.log(sum(7,3));

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 105.41;
    return valueInYen
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.00624;
    return valueInPound
}


module.exports = {
    sum, fromEuroToDollar, fromDollarToYen, fromYenToPound
};

/*
One euro is
1.2 dollars
127 Yen
0.8 Pound

One dollar is
0.83 euro




*/