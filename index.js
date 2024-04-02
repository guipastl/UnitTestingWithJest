module.exports = function(itens) {
    if (!itens.length) return 0
    if (itens.length === 1) {
        const { precoUnitario, quantidadeVendida } = itens[0]
        return precoUnitario * quantidadeVendida * .05
    }
    if (itens.length > 1) {
        const prices = itens.map(item => {
            const { precoUnitario, quantidadeVendida } = item
            return precoUnitario * quantidadeVendida
        })

        const totalPrice = prices.reduce((a, b) => a + b)

        return totalPrice * .05
    }
}