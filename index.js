module.exports = function(itens) {
    if (!itens.length) return 0
    const totalPrice = itens.map(item => {
        const { precoUnitario, quantidadeVendida } = item
        return precoUnitario * quantidadeVendida
    }).reduce((a, b) => a + b)

    return totalPrice * .05
}
