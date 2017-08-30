<template>
	<div>
		<button @click="minusculo">Minusculo</button>
		<button @click="maiusculo">Maiusculo</button>
		<button @click="limpar">Limpar</button>
	</div>
</template>

<script>
export default{
	name: 'lv-contato',
	data() { return { valor: 'Leonardo' } },
	methods: {
		maiusculo() {
			this.valor = this.valor.toUpperCase()
		},
		minusculo() {
			this.valor = this.valor.toLowerCase()
		},
		limpar() {
			this.valor = ''
		}
	}
}
</script>