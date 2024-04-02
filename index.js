module.exports = function(itens) {
    if (!itens.length) return 0
    const { precoUnitario, quantidadeVendida } = itens[0]
    return precoUnitario * quantidadeVendida * .05
}