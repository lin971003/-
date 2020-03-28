let arr =[]
for(let i=1;i<101;i++){
  arr.push(i)
}
// console.log(arr)
// 求1-100的和
/*
arr.reduce((中间值,数组的每一项){
  return 计算后的值
},中间值的初始值)
*/
let total = arr.reduce((sum,item)=>{
  // console.log(sum,item)
  return sum+item
},0)
console.log(total)

// 求1到6的阶乘

let result = [1,2,3,4,5,6].reduce((yinzi,item)=>{
  return yinzi*item
},1)

console.log(result)