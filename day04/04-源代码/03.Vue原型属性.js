function Vue(){
}

Vue.prototype.$request = function(){
  console.log('发请求了')
}

const app = new Vue()
app.$request()


const page = new Vue()
page.$request()