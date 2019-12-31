function Vue(){
  this.name ='Joven'
}

function set (){
  console.log('动态添加属性')
}

Vue.set = set

Vue.prototype.$set = set

const app = new Vue()

console.log(app.$set === Vue.set)
console.log(app.name)