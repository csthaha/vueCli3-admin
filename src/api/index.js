import Vue from 'vue'
// import * as aside from './modules/aside'
import * as aside from './module/aside'
export const api = {
    aside
}

export default Vue.use({
    install: function(Vue) {
        Vue.prototype.$api = api
    }
})