<template>
	<div>
		<router-link to="/postagens/1">Postagem 1</router-link>
		<router-link to="/postagens/2">Postagem 2</router-link>
		<router-link to="/postagens/3">Postagem 3</router-link>
		<router-link to="/postagens/4">Postagem 4</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	name: 'lv-lista',
}
</script>