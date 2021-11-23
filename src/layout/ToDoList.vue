<template>
  <van-nav-bar title="待调度" fixed="true" placeholder="true" />

  <!-- <van-notice-bar left-icon="volume-o" :scrollable="false" color="#1989fa" background="#ecf9ff" mode="closeable">
  <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
    <van-swipe-item>在代码衡量代码质量的唯一标准。</van-swipe-item>
    <van-swipe-item>技术是开发它的人的共同灵魂。</van-swipe-item>
    <van-swipe-item>有任何使用问题联系：刘元鹏17600901722</van-swipe-item>
  </van-swipe>
</van-notice-bar> -->

  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-skeleton :row="10" :loading="loading">
      <!-- <van-checkbox-group v-model="checked">
        <van-cell-group inset v-for="item in list" :key="item" title>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            :title="`复选框`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox
                :name="item"
                :ref="(el) => (checkboxRefs[index] = el)"
                @click.stop
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group> -->

      <van-cell-group inset v-for="item in list" :key="item" title="分组">
        <van-cell center title="单元格" value="内容" icon="location-o">
          <van-tag type="success">标签</van-tag>
        </van-cell>
        <!-- <van-cell title="单元格" value="内容" label="描述信息" /> -->
        <van-image
          width="10rem"
          height="10rem"
          fit="contain"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
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

 