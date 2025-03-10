import SvgIcon from './SvgIcon/index.vue'
//import Pagination from './Pagination/index.vue';

const allGlobalComponents = { SvgIcon }
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key: string) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}
