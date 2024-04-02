const calculaComissaoDeVenda = require('.')

it('se a lista estiver vazia, a comissão é zero', () => {
    const resultadoAtual = calculaComissaoDeVenda([])
    const resultadoEsperado = 0

    expect(resultadoAtual).toBe(resultadoEsperado)
})

it('calcula comissão quando só tem um item na lista', () => {
    const resultadoAtual = calculaComissaoDeVenda([{
        id: 'PROD-123',
        preco: 1000,
        quantidadeVEndida: 1
    }])
    const resultadoEsperado = 50

    expect(resultadoAtual).toBe(resultadoEsperado)
})