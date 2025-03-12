import SvgIcon from './SvgIcon/index.vue'
//import Pagination from './Pagination/index.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponents = { SvgIcon }
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key: string) => {
      app.component(key, allGlobalComponents[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
