<template>
  <div>
    <lv-add-contato></lv-add-contato>
    <lv-contatos></lv-contatos>

    <hr>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import LvAddContato from './LvAddContato.vue'
import LvContatos from './LvContatos.vue'

export default {
  name: 'app',
  components: {LvAddContato, LvContatos},
}
</script>