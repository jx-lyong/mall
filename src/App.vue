<template>
  <div id="app">
    <mu-appbar title="Title"></mu-appbar>

    <router-view/>

    <mu-container>
      <mu-bottom-nav>
        <mu-bottom-nav-item title="首页" icon=" " :to="{name:'Home'}"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="分类" icon=" " :to="{name:'sort'}"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="购物车" icon=" " :to="{name:'cart'}"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我的" icon=" " :to="{name:'my'}"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
  #app{
    margin-top: 56px;
    margin-bottom: 56px;
  }
  .mu-appbar{
    width: 100%;
    text-align: center;
    box-shadow: none;
    background: #2196f3;
    position: fixed;
    top: 0;
  }
  .container{
    padding: 0;
    position: fixed;
    bottom: 0;
  }
  .mu-bottom-item-icon{
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }

a:nth-of-type(1) .mu-bottom-item-icon {
background-image: url(./assets/img/tab-home.png);
}
a:nth-of-type(2) .mu-bottom-item-icon {
background-image: url(./assets/img/tab-cate.png);
}
a:nth-of-type(3) .mu-bottom-item-icon{
background-image: url(./assets/img/tab-cart.png);
}
a:nth-of-type(4) .mu-bottom-item-icon{
background-image: url(./assets/img/tab-my.png);
}


a:nth-of-type(1).mu-bottom-item-active .mu-bottom-item-icon {
background-image: url(./assets/img/tab-home-current.png);
}
a:nth-of-type(2).mu-bottom-item-active .mu-bottom-item-icon {
background-image: url(./assets/img/tab-cate-current.png);
}
a:nth-of-type(3).mu-bottom-item-active .mu-bottom-item-icon {
background-image: url(./assets/img/tab-cart-current.png);
}
a:nth-of-type(4).mu-bottom-item-active .mu-bottom-item-icon {
background-image: url(./assets/img/tab-my-current.png);
}
.mu-bottom-item-active .mu-bottom-item-text{
  color: red;
}

</style>
