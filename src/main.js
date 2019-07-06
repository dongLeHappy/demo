// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { InfiniteScroll,CellSwipe } from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use( InfiniteScroll,VueAxios,axios )
Vue.component(CellSwipe.name, CellSwipe);

Vue.use(MintUI)
// import '../static/ue/ueditor.config.js'
// import '../static/ue/ueditor.all.min.js'
// import '../static/ue/lang/zh-cn/zh-cn.js'
// import '../static/ue/ueditor.parse.min.js'


// quil
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
