<template>
	<ul>
	  <li v-for="tarefa in tarefas">
	    <lv-deltarefa :tarefa="tarefa"></lv-deltarefa>
	    {{ tarefa }}
	  </li>
	</ul>
</template>

<script>
import {mapGetters} from 'vuex'
import LvDeltarefa from './LvDelTarefa.vue'
export default{
	name: 'lv-tarefas',
	components: {LvDeltarefa},
	computed: {
		...mapGetters({
			tarefas: 'listaTarefas'
		})
	}
}
</script>