export default{
  bind: function (elemento, informacao, vnode) {
  	switch( Object.keys( informacao.modifiers )[0] ) {
      case 'subtrai':
        elemento.innerHTML = informacao.value[0] - informacao.value[1]
      break
      default:
        elemento.innerHTML = informacao.value[0] + informacao.value[1]
    }
  }
}