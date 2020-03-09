let arr =[]
for(let i=1;i<=6;i++){
  arr.push(i)
}

console.log(arr)
// 求和
let total = arr.reduce((sum,item)=>{
  return sum+item
},0)

console.log('和为:'+total)


let jiecheng = arr.reduce((yinzi,item)=>{
  return yinzi*item
},1)

console.log('阶乘为:'+jiecheng)