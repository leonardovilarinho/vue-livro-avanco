<template>
	<div class="painel">
		<h3>{{ titulo | reverso}}</h3>
		<slot></slot>
		<button @click="fechar">Fechar</button>
	</div>
</template>

<script>
import mixin from './mixin.js'
export default{
	name: 'lv-painel',
	props: {
		titulo : {
			required: true,
			type: String
		}
	},
	mixins: [mixin],
	methods: {
		fechar() {
			this.$emit('fechar');
		}
	}
}
</script>

<style>
.painel {
	border: 1px solid black;
}
</style>