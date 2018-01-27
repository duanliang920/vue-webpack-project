/*
 * description: API地址
 * @author: duanliang
 * @update-time: 2018-1-27
 */
let apiRoot = ''
let baseURL = window.location.host

if (baseURL.indexOf('localhost') > -1) { // 对应的本地mock服务的baseUrl
    apiRoot = '//localhost:7301/mock/59f6e43e9d548f0557449ba4/test-elt'
}
apiRoot = apiRoot + '/common/'

export const commonApi = {
    cart: apiRoot + '/index' // index
}