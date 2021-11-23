import { createApp } from 'vue'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

//日期时间处理
import 'dayjs/locale/zh-cn'

import router from './router' //路由
import store from './store' //存储
// echars
import * as echarts from 'echarts';
import vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(router)
app.use(store)
app.use(vant)
app.mount('#app')
app.echarts = echarts