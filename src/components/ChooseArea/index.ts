import type { App } from 'vue'
import ChooseArea from './src/index.vue'

// 让组件可以通过 use 的形式引用  参考 vue 文档 插件章节
export default {
	install(app: App) {
		app.component('ChooseArea', ChooseArea)
	},
}
