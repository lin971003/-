let arr = []
for (let i = 1; i < 101; i++) {
  arr.push(i)
}
// console.log('数组是：' + arr)

let total = arr.reduce((sum,v)=>{
  // console.log(sum,v)
  return sum+v
},0)

console.log('总和'+total)


let arr2=[]
for (let i = 1; i < 7; i++) {
  arr2.push(i)
}

console.log('数组是：' + arr2)

let ji = arr2.reduce((yinzi,v)=>{
  return yinzi*v
},1)

console.log('阶乘: '+ ji)