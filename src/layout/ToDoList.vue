<template>
  <van-nav-bar title="待调度" :fixed="true" :placeholder="true" />

  <van-notice-bar
    left-icon="volume-o"
    :scrollable="false"
    color="#1989fa"
    background="#ecf9ff"
    mode="closeable"
  >
    <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
      <van-swipe-item>技术是开发它的人的共同灵魂。</van-swipe-item>
      <van-swipe-item>有任何使用问题联系：刘元鹏17600901722</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
  <van-search
  v-model="value"
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键词"
/>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-skeleton :row="10" :loading="loading">
      <van-cell-group inset v-for="item in list" :key="item">
        <van-cell center title="单元格" value="内容" icon="location-o">
          <van-tag type="success">标签</van-tag>
        </van-cell>
        <van-divider dashed>文字</van-divider>
      </van-cell-group>
    </van-skeleton>
  </van-list>
</template>
<script>
import { ref, onBeforeUpdate } from "vue";

export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const onClickLeft = () => history.back();
    const checked = ref([]);
    const checkboxRefs = ref([]);
    const toggle = (index) => {
      checkboxRefs.value[index].toggle();
    };
    onBeforeUpdate(() => {
      checkboxRefs.value = [];
    });

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;
        finished.value = true;
      }, 100);
    };
    return {
      list,
      onLoad,
      loading,
      finished,
      onClickLeft,
      onBeforeUpdate,
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
</script>
<style>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>

 <style>
.my-swipe .van-swipe-item {
  color: rgb(51, 51, 51);
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
:root {
  --van-nav-bar-background-color: #dadada !important;
  --van-nav-bar-title-text-color: #4e4e4e !important;
}
</style>