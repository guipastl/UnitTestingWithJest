module.exports = function(itens) {
    const totalPrice = itens.map(item => {
        const { precoUnitario, quantidadeVendida } = item
        return precoUnitario * quantidadeVendida
    }).reduce((a, b) => a + b, 0)
    return totalPrice * .05
}
