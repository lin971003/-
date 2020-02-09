
import request from '@/utils/request'

// 获取首页轮播图数组、
function getSwiperdata () {
  return request({
    url: '/api/public/v1/home/swiperdata'
  })
}

export {
  getSwiperdata
}
