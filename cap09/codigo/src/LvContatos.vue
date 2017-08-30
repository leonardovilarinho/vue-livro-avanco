<template>
	<ul>
	  <li v-for="contato in contatos">
	    <lv-del-contato :contato="contato"></lv-del-contato>
	    {{ contato.nome }} | {{ contato.email }}
	  </li>
	</ul>
</template>

<script>
import {mapGetters} from 'vuex'
import LvDelContato from './LvDelContato.vue'
export default{
	name: 'lv-contatos',
	components: {LvDelContato},
	computed: {
		...mapGetters({
			contatos: 'listaContatos'
		})
	},
	updated() {
		console.log(this.contatos)
	}
}
</script>