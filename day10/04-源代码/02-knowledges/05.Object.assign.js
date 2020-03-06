object={
  name:'iphone8 plus',
  color:'red'
}

let myPhone = Object.assign({},object)

//改变源对象，并不会影响克隆的对象
object.name ='iphone11'

console.log(myPhone)