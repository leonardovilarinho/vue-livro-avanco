require('browser-env')()

var hooks = require('require-extension-hooks')
hooks('vue').plugin('vue').push()
hooks(['vue', 'js']).plugin('babel').push()