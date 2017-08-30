<template>
  <div id="app">
    <lv-painel v-if="!fechado" titulo="Olá" @fechar="confirmar">
      Conteúdo do <strong>painel</strong>
    </lv-painel>
    <p v-if="fechado">{{ 'Painel foi fechado!' | reverso }}</p>
  </div>
</template>

<script>
import LvPainel from './LvPainel.vue'
import mixin from './mixin.js'
export default {
  name: 'app',
  components: {LvPainel},
  data() {
    return {
      fechado: false
    }
  },
  mixins: [mixin],
  methods: {
    confirmar() {
      this.fechado = true
    }
  }
}
</script>