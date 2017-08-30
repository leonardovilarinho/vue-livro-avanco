<template>
	<button @click="apagar(contato)">D</button>
</template>

<script>
import {mapActions} from 'vuex'
export default{
	name: 'lv-del-contato',
	props: {
		contato: {
			required: true,
			type: Object
		}
	},
	methods: {
		...mapActions({
			apagar: 'removerContato'
		})
	},
	mounted() {
		console.log('Raul')
		console.log(this.contato)
	}
}
</script>