<template>
  <div>
    <lv-addtarefa></lv-addtarefa>
    <lv-tarefas></lv-tarefas>

    <hr>
    <lv-busca></lv-busca>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import LvAddtarefa from './LvAddTarefa.vue'
import LvTarefas from './LvTarefas.vue'
import LvBusca from './LvBusca.vue'

export default {
  name: 'app',
  components: {LvAddtarefa, LvTarefas, LvBusca},
  computed: {
      ...mapState([
          'nome'
      ])
  },
  mounted() {
    console.log(this.nome)
  },
}
</script>