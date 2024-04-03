module.exports = function(itens) {
    let foundSpecialProduct = false
    const totalPrice = itens.map(item => {
        const { id, precoUnitario, quantidadeVendida } = item
        if (id === 'XP-0101') foundSpecialProduct = true
        return multiply(precoUnitario, quantidadeVendida)
    }).reduce((a, b) => a + b, 0)
    if (foundSpecialProduct) return multiply(totalPrice, .2)
    if (totalPrice < 1999.99) return multiply(totalPrice, .05)
    if (totalPrice > 1999.99 && totalPrice < 4999.99) return multiply(totalPrice, .1)
    if (totalPrice > 4999.99) return multiply(totalPrice, .15)
}

// Função acessória que não exige um teste para si
function multiply(val1, val2) {
    return val1 * val2
}
