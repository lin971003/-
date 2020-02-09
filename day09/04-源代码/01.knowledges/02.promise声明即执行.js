var promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('3');
  }, 0);
  console.log('4');
  resolve()
})
