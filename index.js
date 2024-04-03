module.exports = function(itens) {
    if (!itens.length) return 0
    const prices = itens.map(item => {
        const { precoUnitario, quantidadeVendida } = item
        return precoUnitario * quantidadeVendida
    })

    const totalPrice = prices.reduce((a, b) => a + b)

    return totalPrice * .05
}
