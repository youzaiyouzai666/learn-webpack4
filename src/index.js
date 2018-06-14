//index.js
import Vue from 'vue'
import(/* webpackChunkName: "asyncModule" */'./a.js')
  .then(mod => {
    console.log('loaded module a', mod)
  })

console.log('initial module')
new Vue({})