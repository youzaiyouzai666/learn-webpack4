// //index.js
// import Vue from 'vue'
// import(/* webpackChunkName: "asyncModule" */'./a.js')
//   .then(mod => {
//     console.log('loaded module a', mod)
//   })

// console.log('initial module')
// new Vue({})


import Vue from 'vue'
// import _ from 'lodash'

import(/* webpackChunkName: "asyncModule" */'./a.js')
  .then(mod => {
    console.log('loaded module a', mod)
  })

console.log('initial module')
// console.log(_.map([1,2,3], a => {
//     return a * 10
// }))
new Vue({})