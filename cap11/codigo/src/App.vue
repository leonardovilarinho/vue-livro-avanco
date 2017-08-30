<template>
  <div id="app">
    <p v-soma="[1, 3]"></p>
    <p v-soma.subtrai="[1, 3]"></p>
    <button @click="chamei()">Chamar</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
  	this.$saudacao('Leonardo')
  }
}
</script>