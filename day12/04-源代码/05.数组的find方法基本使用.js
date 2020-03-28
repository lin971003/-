let arr = [1, 12, 55, 41, 23, 412, 432, 432, 413]

// 需求从数组里面找一个数字大于50的元素
// find会对数组进行遍历,数组中每一项都执行指定的函数，如果函数返回true,find会返回这一项，并中断遍历
let target = arr.find(item => {
  console.log(item)
  return item > 10000
})

console.log(target)
