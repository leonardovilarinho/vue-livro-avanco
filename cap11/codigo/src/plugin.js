const Plugin = {}

Plugin.install = function (Vue, options) {
  Vue.prototype.$saudacao = (nome)  =>{
    alert('Bem-vindo, ' + nome)
  }

  Vue.mixin({
    methods: {
      chamei() {
        alert('Chamei meu pai!')
      }
    }
  })
}

export default Plugin