import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import estado from './estado'
import Tarefas from './modulos/tarefas/raiz'
import Contatos from './modulos/contatos/raiz'

export default new Vuex.Store({
	state: estado,
	modules: {
		Tarefas,
		Contatos
	}

})