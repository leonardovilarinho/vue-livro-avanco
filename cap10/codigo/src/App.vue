<template>
  <div id="app">
    <input type="text" v-model="cep">
    <button @click="buscar" :disabled="estado">Buscar CEP</button>
    <div v-if="end">
      <p><strong>Logradouro</strong>: {{ end.logradouro }}</p>
      <p><strong>Complemento</strong>: {{ end.complemento }}</p>
      <p><strong>Bairro</strong>: {{ end.bairro }}</p>
      <p><strong>Localidade</strong>: {{ end.localidade }}</p>
      <p><strong>UF</strong>: {{ end.uf }}</p>
    </div>
  </div>
</template>

<script>
import Cep from './servicos/cep'

export default {
  name: 'app',
  data() { return { cep: '', estado: false, end: false  } },
  methods: {
    buscar() {
      this.estado = true
      Cep.busca( this.cep ).then( dado => {
        this.end = dado.data
        this.estado = false
      })
    }
  }
}
</script>