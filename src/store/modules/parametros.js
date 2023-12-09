export default {
    state:{
        quantidade: 1,
        preco: 8.90
    },
    mutations:{
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    }
}