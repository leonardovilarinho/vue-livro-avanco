<template>
	<div>
		<input type="text" v-model="contato.nome" placeholder="Nome">
		<input type="text" v-model="contato.email" placeholder="Email">
		<button @click="submeterContato">Adicionar</button>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
	name: 'lv-addcontato',
	data() { return { contato: {nome: '', email: ''} } },
	methods: {
		...mapActions({
			adicionar: 'adicionarContato'
		}),
		submeterContato() {
			if(this.contato.nome != '' && this.contato.email != '') {
				this.adicionar({ nome: this.contato.nome, email: this.contato.email})
			}
			this.contato.nome = ''
			this.contato.email = ''
		}
	},
}
</script>