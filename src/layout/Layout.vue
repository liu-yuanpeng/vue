<template>
<van-notice-bar left-icon="volume-o" :scrollable="false" color="#1989fa" background="#ecf9ff" mode="closeable">
  <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
    <van-swipe-item>在代码衡量代码质量的唯一标准。</van-swipe-item>
    <van-swipe-item>技术是开发它的人的共同灵魂。</van-swipe-item>
    <van-swipe-item>有任何使用问题联系：刘元鹏17600901722</van-swipe-item>
  </van-swipe>
</van-notice-bar>

<van-steps direction="vertical" :active="0">
  <van-step>
    <h4>【城市】物流状态1</h4>
    <p>2016-07-12 12:40</p>
  </van-step>
  <van-step>
    <h4>【城市】物流状态2</h4>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h4>快件已发货</h4>
    <p>2016-07-10 09:30</p>
  </van-step>
</van-steps>

</template>
<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  // setup() {
  //   const count = ref(0);
  //   const loading = ref(false);
  //   const onRefresh = () => {
  //     setTimeout(() => {
  //       Toast('刷新成功');
  //       loading.value = false;
  //       count.value++;
  //     }, 1000);}

  //   return {
  //     count,
  //     loading,
  //     onRefresh,
  //   };
  // },
setup() {
    const list = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const onLoad = () => {

        for (let i = 0; i < 30; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }


          setTimeout(() => {
            loading.value = false;
                error.value = true;
              }, 1000);
    };

    return {
      list,
      error,
      onLoad,
      loading,
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
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>

 