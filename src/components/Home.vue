<template>
  <div style="height:100%;">
    <div>
      <loading></loading>
    </div>
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">大前端web講堂<a slot="right">Feedback</a></x-header>
      <transition>
        <router-view class="router-view"></router-view>
      </transition>
      <tabbar slot="bottom">
        <tabbar-item selected router:link="{path:'/List'}">
          <img slot="icon" src="../assets/demo/icon_nav_article.png">
          <span slot="label">文章</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Me'}">
          <img slot="icon" src="../assets/demo/icon_nav_cell.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Loading, XHeader, ViewBox, Tabbar, TabbarItem, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading,
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem
  },
  computed: {
  }
}
</script>
<style lang="less">
.router-view {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
</style>
