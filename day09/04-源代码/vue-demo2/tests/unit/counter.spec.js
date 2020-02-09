import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'
import Vue from 'vue'

describe('Counter', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(Counter)

  it('初始化时，显示的数字为0', () => {
    expect(wrapper.html()).toContain('<h2>0</h2>')
  })

  // 也便于检查已存在的元素
  it('是否有+按钮', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('点+时，数字+1', () => {
    expect(wrapper.vm.num).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    button.trigger('click')
    expect(wrapper.vm.num).toBe(2)
    Vue.nextTick(()=>{
      expect(wrapper.html()).toContain('<h2>2</h2>')

    })
  })

})