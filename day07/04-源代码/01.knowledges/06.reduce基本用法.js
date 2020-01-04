let arr =[]

for(let i=1;i<6;i++){
  arr.push(i)
}

console.log(arr)

let total = arr.reduce((sum,v)=>{
  return sum+v
},0)

let jiecheng = arr.reduce((yinzi,v)=>{
  return yinzi*v
},1)

console.log(total)
console.log(jiecheng)