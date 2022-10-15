export const state = () => ({
  init: false
})

export const getters = {
  getInit (state) {
    return state.init
  }
}

export const mutations = {
  setInit (state) {
    return (state.init = !state.init)
  }
}
