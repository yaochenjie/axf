<template>
  <div id="app">
    <TabBar/>
    <keep-alive>
      <router-view v-if="!$route.meta.notKeepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar'
// import api from '@/api'
export default {
  name: 'app',
  components: {
    TabBar
  },
  created () {
    this.loading.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    let that = this
    async function getData () {
      let result = await that.$http.get('http://localhost:3000/categories')
      that.categories = result.data

      let res = await that.$http.get('http://localhost:3000/products')
      that.products = res.data
      that.computedCategories()
      that.loading.close()
    }
    getData()
  },
  methods: {
    computedCategories () {
      let products = this.products
      let categories = this.categories
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < categories.length; j++) {
          if (categories[j].id === products[i].categoryId) {
            categories[j].products.push(products[i])
          }
        }
      }
      // this.$store.commit('saveComputedCategories',categories)
      this.$store.commit('SAVE_COMPUTED_CATEGORIES', categories)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
