export default {
    state:{
        produtos: []
    },
    getters:{
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        adicionarProdutos(state, payload){
            state.produtos.push(payload)
            // payload é o produto
        }
    },
    actions:{
        adicionarProdutos(context, payload){
            setTimeout(() => {
                // faz o tratamento nescessario

                context.commit('adicionarProdutos', payload)
            }, 50)
        }
    }
}