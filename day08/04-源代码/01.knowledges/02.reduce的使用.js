let arr = []
for (let i = 1; i < 6; i++) {
  arr.push(i)
}
console.log(arr)
console.log('----------------------')
let total = arr.reduce((sum, v) => {
  return sum+v
}, 0)


let jiecheng = arr.reduce((sum, v) => {
  return sum*v
}, 1)

console.log(total)
console.log(jiecheng)
console.log(1*2*3*4*5)