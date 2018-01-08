export default {
  SAVE_COMPUTED_CATEGORIES (state, data) {
    state.computedCategories = data
  },
  SING_IN (state, data) {
    state.user = data
  },
  ADD_CART (state, data) {
    state.carts.push(data)
  },
  ADD_NUM (state, id) {
    for (let i = 0; i < state.carts.length; i++) {
      if (state.carts[i].id === id) {
        state.carts[i].num++
        break
      }
    }
  },
  SUB_CART (state, id) {
    for (let i = 0; i < state.carts.length; i++) {
      if (state.carts[i].id === id) {
        state.carts[i].num--
        break
      }
    }
  },
  DEL_CART (state, id) {
    for (let i = 0; i < state.carts.length; i++) {
      if (state.carts[i].id === id) {
        state.carts.splice(i, 1)
        break
      }
    }
  },
  SAVE_CART (state, data) {
    state.carts = data
    let computedCategories = state.computedCategories
    for (let i = 0; i < computedCategories.length; i++) {
      let products = computedCategories[i].products
      for (let j = 0; j < products.length; j++) {
        for (let n = 0; n < data.length; n++) {
          if (products[j].id === data[n].product_id) {
            products[j].num = data[n].num
          }
        }
      }
    }
  }
}
