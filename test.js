// Importar la función sum y valores de monedas del archivo app.js
const { sum, oneEuroIs} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be approximately 146.26 yen", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 euro son 156.5 yenes y 1 euro son 1.07 dólares, entonces 3.5 dólar debería ser aproximadamente:
    const expected = (3.5 / oneEuroIs.USD) * oneEuroIs.JPY;

    // Hago mi comparación (la prueba)
    expect(yen).toBeCloseTo(expected); // Aproximadamente 146.26
})

test("One yen should be approximately 0.0056 pounds", function() {
    // Importo la función desde app.js
    const { fromYenToPound } = require('./app.js');
                                                           
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 euro son 156.5 yenes y 1 euro son 0.87 libras, entonces 3.5 yenes debería ser aproximadamente:
    const expected = (3.5 / oneEuroIs.JPY) * oneEuroIs.GBP;

    // Hago mi comparación (la prueba)
    expect(pounds).toBeCloseTo(expected); // Aproximadamente 0.0056
})