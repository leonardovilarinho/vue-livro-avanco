export default {
	ADD_CONTATO: (estado, valor) => {
		estado.contatos.push(valor)
	},
	DEL_CONTATO: (estado, valor) => {
	  let posicao = estado.contatos.indexOf(valor)

	  if(posicao > -1)
	    estado.contatos.splice(posicao, 1)
	},
}