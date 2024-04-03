module.exports = function(itens) {
    let foundSpecialProduct = false
    const totalPrice = itens.map(item => {
        const { id, precoUnitario, quantidadeVendida } = item
        if (id === 'XP-0101') {
            foundSpecialProduct = true
        }
        return precoUnitario * quantidadeVendida
    }).reduce((a, b) => a + b, 0)
    if (foundSpecialProduct) return totalPrice * .2
    if (totalPrice < 1999.99) return totalPrice * .05
    if (totalPrice > 1999.99 && totalPrice < 4999.99) return totalPrice * .1
    if (totalPrice > 4999.99) return totalPrice * .15
}
