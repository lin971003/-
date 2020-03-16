let arr =[1,2,3,34,23,423,4,24,3,432,342,23]

  // 数组的filter方法:返回一个新的数组，遍历原数组，取出数组里面每一项，执行指定的函数，如果返回是true的话，就在新的数组里面加入这一项
// 原数组里面元素满足>50的，就放到新数组里面，返回
let newArr = arr.filter(item=>{
  return item>50
})
//原数组遍历，执行指定的函数，如果返回true，就返回那一个元素，遍历中断
let item = arr.find(item=>{
  return item>50
})

console.log(newArr)
console.log(item)