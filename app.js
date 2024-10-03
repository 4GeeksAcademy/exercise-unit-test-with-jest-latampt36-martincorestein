// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 156.5,  // Japan yen
    "USD": 1.07,   // US dollar
    "GBP": 0.87    // British pound
}

// Función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Primero convertimos los dólares a euros, luego a yenes
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Función para convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    // Primero convertimos los yenes a euros, luego a libras
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};