<template>
	<div>
		<h1>Postagem {{ id }}</h1>
		<router-link to="/postagens/comentarios">comentários</router-link>
	</div>
</template>

<script>
export default{
	name: 'lv-postagem',
	props: ['id'],
}
</script>