<template>
  <nav>
      <router-link to='/' class="first">
        <span></span>
        首页
      </router-link>
      <router-link to='/category' class="shop">
        <span></span>
        闪电超市
      </router-link>
      <router-link to='/cart' class="cart">
        <span></span>
        购物车
      </router-link>
      <router-link to='/mine' class="mine">
        <span></span>
        我的
      </router-link>
  </nav>
</template>
<style lang='less' scoped>
@import url("../../styles/var.less");
nav{
    position: fixed;
    height: 5rem;
    bottom: 0;
    width: 100%;
    background-color: #f8f8f8;
    display: flex;
    z-index: 9999;
}
a{
    flex: 1;
    text-align: center;
    line-height: 2.5rem;
    // padding-top: 1rem;
    color: #777;
    font-size: 1.2rem;
    position: relative;
    span{
        display: block;
        width: 100%;
        height: 2rem;
        background-size: auto 2rem;
        background-position: center 0;
        background-repeat: no-repeat;
        margin-top: .5rem
    }
}
nav>a.first>span{
   background-image: url("./images/home.png");
}
nav>a.shop>span{
   background-image: url("./images/current.png");
}
nav>a.cart>span{
   background-image: url("./images/cart.png");
}
nav>a.mine>span{
   background-image: url("./images/mine.png");
}
@keyframes navs{
  0%{
    -webkit-background-size: auto .6rem;
    background-size: auto .6rem;
  }
  20%{
    -webkit-background-size: auto 2.2rem;
    background-size: auto 2.2rem;
  }
  40%{
    -webkit-background-size: auto 1.8rem;
    background-size: auto 1.8rem;
  }
  60%{
    -webkit-background-size: auto 2.06rem;
    background-size: auto 2.06rem;
  }
  80%{
    -webkit-background-size: auto 1.94rem;
    background-size: auto 1.94rem;
  }
  100%{
    -webkit-background-size: auto 2rem;
    background-size: auto 2rem;
  }
}
nav>a.first.router-link-exact-active>span{
  background-image: url("./images/home-active.png");
}
nav>a.shop.router-link-exact-active>span{
  background-image: url("./images/current-active.png");
}
nav>a.cart.router-link-exact-active>span{
  background-image: url("./images/cart-active.png");
}
nav>a.mine.router-link-exact-active>span{
  background-image: url("./images/mine-active.png");
}
nav>a.router-link-exact-active>span{
  animation: navs 1s;
}
</style>

