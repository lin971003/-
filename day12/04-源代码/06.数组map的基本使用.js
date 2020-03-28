let cart = [
  { goodsId: 56847, num: 1, checked: true },
  { goodsId: 56873, num: 2, checked: true },
  { goodsId: 57224, num: 5, checked: true }
]

// 数组的map会返回一个新数组，遍历原数组的每一项，每一项执行一个指定的函数，函数的返回值作为新数组的元素
let newArr = cart.map(item=>{
  // console.log(item.goodsId)
  return item.goodsId
})

console.log(newArr.join(','))