import Vue from 'vue'
import Window from '@/components/Window.vue'

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
describe('Window', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(Window, {
      configLine: 'Hello'
    })).toBe('Hello')

    expect(getRenderedText(MyComponent, {
      configLine: 'Bye'
    })).toBe('Bye')
  })
})

describe('Window.vue', () => {
  it('has a created hook', () => {
    expect(typeof Window.created).toBe('function')
  })


})

