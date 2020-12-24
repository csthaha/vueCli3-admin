import request from '../request'

/**获取侧边栏列表
 * @returns {AxiosPromise}
 */

 const getAsideList = params => {
     return request({
        url: '/aside/getAsideList',
        method: 'get',
        params
     }) 
 }

 export  {getAsideList}