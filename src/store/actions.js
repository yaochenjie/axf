import http from 'axios'
export default {
  submit ({commit}, userObj) {
    return http.get('http://localhost:3000/users?phone=' + userObj.phone)
      .then(res => {
        if (res.data.length > 0) {
          http.get('http://localhost:3000/users/' + res.data[0].id + '/carts')
            .then(res => {
              commit('SAVE_CART', res.data)
            })
          // commit('SING_IN', res.data)
          return { 'msg': '登陆成功' }
        } else {
          return http.post('http://localhost:3000/users', userObj)
            .then(res => {
              if (res.data.id > 0) {
                commit('SING_IN', res.data)
                return {'msg': '注册成功'}
              } else {
                return {'msg': '注册失败'}
              }
            })
        }
      })
  },
  addCart (store, product) {
    let localCart = store.state.carts
    let addBol = true
    let user = store.state.user
    for (let i = 0; i < localCart.length; i++) {
      if (localCart[i].product_id === product.id) {
        addBol = false
        let newCartProduct = Object.assign({}, localCart[i])
        newCartProduct.num++
        return http.patch('http://localhost:3000/carts/' + newCartProduct.id, {
          num: newCartProduct.num
        })
          .then(res => {
            if (res.data.id > 0) {
              store.commit('ADD_NUM', res.data.id)
              return {'msg': '数量添加成功'}
            } else {
              return {'msg': '数量添加失败'}
            }
          })
      }
    }
    if (addBol) {
      let productToCartObj = {
        product_id: product.id,
        userId: user.id,
        product_img: product.imgs.min,
        product_name: product.name,
        product_price: product.price,
        checked: true,
        num: 1
      }
      return http.post('http://localhost:3000/carts', productToCartObj)
        .then(res => {
          if (res.data.id > 0) {
            store.commit('ADD_CART', res.data)
            return {'msg': '添加成功'}
          } else {
            return {'msg': '添加失败'}
          }
        })
    }
  },
  subCart (store, product) {
    let localCart = store.state.carts
    for (let i = 0; i < localCart.length; i++) {
      if (product.id === localCart[i].product_id) {
        let newProductId = localCart[i].id
        if (product.num > 1) {
          let newProduct = Object.assign({}, product)
          newProduct.num--
          return http.patch('http://localhost:3000/carts/' + newProductId, {
            num: newProduct.num
          })
            .then(res => {
              if (res.data.id > 0) {
                store.commit('SUB_CART', res.data.id)
                return {'msg': '减少成功'}
              } else {
                return {'msg': '减少失败'}
              }
            })
        } else {
          return http.delete('http://localhost:3000/carts/' + newProductId)
            .then(res => {
              store.commit('DEL_CART', newProductId)
              return {'msg': '删除成功'}
            })
        }
      }
    }
  }
}
