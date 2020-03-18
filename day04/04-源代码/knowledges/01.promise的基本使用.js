


// promise的使用
let p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // console.log('这是一个寂寞的天')
    // 成功时做的事情
    resolve('这是一个寂寞的天')
  },1000)
})

//这里才开始执行
// then里面res就是resolve传的实参
p.then(res=>{
  console.log(res)
})