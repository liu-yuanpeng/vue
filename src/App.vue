<template>
<router-view></router-view>
<van-tabbar  v-model="active" :placeholder="true" :fixed="true">
  <van-tabbar-item icon="todo-list-o" badge="100" to="/todolist" >待办</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/500">标签</van-tabbar-item>
  <van-tabbar-item badge="3" to="/">
    <span>我的</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>

</van-tabbar>
</template>
<script>
import { onBeforeMount, reactive, ref, toRefs, unref } from "vue"
export default {

  setup() {
        const active = ref(0);
    const icon = {
      active: 'https://img.yzcdn.cn/vant/user-active.png',
      inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
    return {
            icon,
      active,
    }
  }
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
background:#e7e7e7;
}
#nprogress .bar {
  /*自定义进度条颜色*/
  background: #a4e05e !important;
}

</style>
