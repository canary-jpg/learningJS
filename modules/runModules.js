const names = require('./modules/firstModule.js');
const sayHi = require('./modules/utils.js');
const data = require('./modules/anotherModule.js')
sayHi('susan');
sayHi(names.john)
sayHi(names.peter)

console.log(data);