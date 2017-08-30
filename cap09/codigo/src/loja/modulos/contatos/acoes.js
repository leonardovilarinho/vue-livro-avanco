export default {
	adicionarContato(contexto, valor) {
		let val = valor
		contexto.commit('ADD_CONTATO', val)
	},

	removerContato(contexto, valor) {
		contexto.commit('DEL_CONTATO', valor)
	},
}