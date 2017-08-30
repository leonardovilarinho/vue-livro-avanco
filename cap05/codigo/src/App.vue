<template>
  <div id="app">
    <input type="text" v-model="nome">
    <small>{{ status }}</small>

    <button @click="saudacao">Estou pronto</button>

    <div v-if="status == ''">
      {{ nome | maiusculo }} tem
      {{ nomeCaracteres }} caracteres
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nome: '',
      status: 'Digite seu nome acima'
    }
  },
  methods: {
    saudacao() {
      alert('Olá, ' + this.nome)
    },
    finalizar() {
      let valor = this.status
      setTimeout( () => {
        if(valor == this.status)
          this.status = ''
      }, 600)
    }
  },
  watch: {
    nome: function (novoValor, valorAntigo) {
      this.status = 'Recebendo seu nome...'
      this.finalizar()
    }
  },

  filters: {
    maiusculo( valor ) {
      return valor.toUpperCase()
    }
  },

  computed: {
    nomeCaracteres: {
      get: function () {
        return this.nome.length
      }
    }
  },
}
</script>