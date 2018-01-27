/*
 *  description: 公共工具类
 *  author: duanliang
 *  update-time: 2017-04-27
 */

export const utils = {
    getLocalStorage(key) {
        return window.localStorage.getItem(key)
    },

    setLocalStorage(key, value) {
        window.localStorage.setItem(key, value)
    },

    getSessionStorage(key) {
        return window.sessionStorage.getItem(key)
    },

    setSessionStorage(key, value) {
        window.sessionStorage.setItem(key, value)
    },

    removeLocalStorage(key) {
        window.localStorage.removeItem(key)
    },

    removeSessionStorage(key) {
        window.sessionStorage.removeItem(key)
    },

    trim(string) {
        return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
    }
}