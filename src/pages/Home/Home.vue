<template>
  <div class="home">
      <HeaderYellow/> 
      <div class="main">
        <div class="bannar">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannar" 
            :key="item.id">
              <img v-lazy="item.bannar_img">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <ul class="warps-category">
          <li class="warp-category" v-for="(item,index) in computedCategories" 
          :key="item.id">
            <div class="title-category">
              <span :style="{color: item.color, 'border-color': item.color}">{{item.name}}</span>
              <a href="#/category">更多&gt;</a>
            </div>
            <img class="img-category" v-lazy="item.category_img">
            <ul class="goodsList-category">
              <li v-for="(product,ind) in item.products" :key="product.id" 
              v-if="ind<3">
                <img v-lazy="product.imgs.min" alt="">
                <p class="name-product">{{product.name}}</p>
                <div class="product-specifics">
                  <div class="product-left">
                    <p>{{product.unit}}ml</p>
                    <p>￥{{product.price}}</p>
                  </div>
                  <div class="product-right" 
                  @click="addCart(product)">+</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  </div>

</template>
<script>
import HeaderYellow from '@/components/Header-yellow/Header-yellow'
// import api from '@/api'
export default {
  created () {
    this.$http.get('http://localhost:3000/bannar')
      .then(res => {
        this.bannar = res.data
      })
  },
  data () {
    return {
      bannar: []
    }
  },
  components: {
    HeaderYellow
  },
  computed: {
    computedCategories () {
      return this.$store.state.computedCategories
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    addCart (product) {
      if (this.user.id) {
        this.$store.dispatch('addCart', product)
          .then(res => {
            this.$msg('提示', res.msg)
            product.num++
          })
      } else {
        this.$msg('提示', '未登录')
          .then(action => {
            this.$router.push('/login')
          })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.bannar{
  height: 14rem;
  img{
    width: 100%;
  }
}
.warp-category{
  background-color:#fff;
  padding: 1.4rem .9rem 
}
.warp-category:nth-child(n+2){
  margin-top:1rem; 
}
.title-category{
  overflow: hidden;
}
.title-category>span{
  float: left;
  border-left: .8rem solid #eb4080;
  color: #eb4080;
  text-indent: .6rem;
  font-size: 1.4rem
}
.title-category>a{
  float: right;
  color: #a6a6a6;
  font-size: 1.3rem
}
.img-category{
  width: 100%;
  margin:0.9rem 0
}
.goodsList-category{
  overflow: hidden
}
.goodsList-category>li{
  width: 31.33333%;
  padding: 1% 1%;
  float: left;
  // border-right:.01rem solid #eeeeee;
  // box-sizing: border-box;
  text-align: center;
  font-size: 1.2rem;
}
.goodsList-category>li>img{
  width: 7.4rem;
  height: 7.4rem;
}
.product-specifics{
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
}
.name-product{
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
  vertical-align: top;
  text-align: -webkit-match-parent;
}
.product-left{
  float: left;
  text-align: left;
}
.product-right{
  float: right;
  width: 3rem;
  height: 3rem;
  border: 0.1rem solid #dee0dd;
  border-radius: 50%;
  font-size: 2rem;
  color: #ff3910;
  text-align: center;
  line-height: 3rem;
}
</style>


