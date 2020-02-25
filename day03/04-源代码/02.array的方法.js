let arr = [16,12,15,99,45,23,17]

console.log('原数组',arr)

// for in 
for(let key in arr){
  console.log(arr[key])
}

// for of 
console.log('for of的使用')
for(let item of arr){
  console.log(item)
}
// forEach 
console.log('forEach的用法')
arr.forEach(item=>{
  console.log(item)
})
// find 从数组中找一个符合条件的元素，找到第一个就中断遍历
console.log('find用法')
let num = arr.find(item=>{
  console.log(item)
  return item>20
})
console.log('在arr中找第一个大于20的元素'+num)
// filter 从数组中找到所有符合条件的元素，塞到一个新数组里面，返回
console.log('filter用法')
let list = arr.filter(item=>{
  console.log(item)
  return item>20
})

console.log(list)