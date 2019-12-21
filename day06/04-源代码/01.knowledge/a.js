for(var i=0;i<3;i++){
  setTimeout(() => {
    console.log(i)
  }, 1000);
}

this.$nextTick()



new Promise(res=>{
  res()
}).then(()=>{
  new Promise(res=>{
    res()
  }).then(()=>{
    
  })
  process.nextTick()
})