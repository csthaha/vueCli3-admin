import cookies from 'js-cookie'
import storage from 'good-storage'
const TEST = 'TEST'
const TOKEN = 'OVERSEAS_WORK_TOKEN'
export function testCookie(a) {
  cookies.set(TEST, a, { expires: 1 })
}
export function testGet() {
  cookies.get(TEST)
}

// 获取token
export function loadToken() {
  return storage.get(TOKEN, '')
}
// 保存token
export function saveToken(token) {
  storage.set(TOKEN, token)
  return token
}
