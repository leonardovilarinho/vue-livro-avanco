import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import loja from './loja/raiz'

import Inicial from './LvInicial.vue'
import GerenciaTarefas from './LvGerenciaTarefas.vue'
import GerenciaContatos from './LvGerenciaContatos.vue'

Vue.use( VueRouter )

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', 				component: Inicial},
		{path: '/tarefas', 			component: GerenciaTarefas},
		{path: '/contatos', 			component: GerenciaContatos},
	],
})

new Vue({
	el: '#app',
	store: loja,
	router,
	render: h => h(App)
})