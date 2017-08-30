<template>
  <div id="app">
    <router-link to="/">Inicial</router-link>
    <router-link to="/tarefas">Tarefas</router-link>
    <router-link to="/contatos">Contatos</router-link>

    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>