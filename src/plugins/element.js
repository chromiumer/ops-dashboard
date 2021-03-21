import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 导入弹窗提示组件

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 挂载弹窗组件

Vue.prototype.$message = Message
