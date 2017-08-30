import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './LvHome.vue'
import Lista from './LvLista.vue'
import Postagem from './LvPostagem.vue'
import Comentarios from './LvComentarios.vue'

Vue.use( VueRouter )

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', 			component: Home},
		{
			path: '/postagens',
			component: Lista,
			children: [
				{path: 'comentarios', component: Comentarios},
				{path: ':id', component: Postagem, props: true},
			]
		},
	],
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})