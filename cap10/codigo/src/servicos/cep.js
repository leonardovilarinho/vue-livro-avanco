import {http} from './configuracoes'

export default {
	busca: (cep) => { return http.get(cep + '/json') }
}