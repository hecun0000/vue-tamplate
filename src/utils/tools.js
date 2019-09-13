/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 获取url后参数
 */
export const GetRequest = () => {
  let url = location.search // 获取url中"?"符后的字串
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1])
    }
  }
  return theRequest
}

/**
 * 获取字符串字节长度
 * @param {String}
 * @returns {Boolean}
 */
export const checkLength = (v) => {
  let realLength = 0
  let len = v.length
  for (let i = 0; i < len; i++) {
    let charCode = v.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) realLength += 1
    else realLength += 2
  }
  return realLength
}

/**
 * 写cookies
 */
export const setCookie = (name, value, time) => {
  let exp = new Date()
  exp.setTime(exp.getTime())
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

/**
 * 读取cookies
 */
export const getCookie = (name) => {
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) return (arr[2])
  else return null
}

/**
 * 删除cookies
 */
export const delCookie = (name) => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
}

/**
 * 删除左右两端的空格
 * @param str
 * @returns {string | * | void}
 */
export function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 删除左边的空格
 * @param str
 * @returns {string | * | void}
 */
export function ltrim (str) {
  return str.replace(/(^\s*)/g, '')
}

/**
 * 删除右边的空格
 * @param str
 * @returns {string | * | void}
 */
export function rtrim (str) {
  return str.replace(/(\s*$)/g, '')
}

/**
 * 对象数组转二维数组
 * @param objArr
 */
export function obj2Arr (objArr) {
  objArr.length > 0 && objArr.map(item => {
    return Object.values(item)
  })
}

/**
 * 找出对象数组中某属性的最大值
 * @param array
 * @param item
 * @returns val
 */
export function maxItemInObjArr (array, item) {
  let max = Math.max.apply(Math, array.map(function (obj) {
    return obj[item]
  }))
  return max
}

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
export const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 过滤非法字符串
 */
export const illegalFilter = (str) => {
  /* eslint-disable-next-line */
  let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
  let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im

  if (regEn.test(str) || regCn.test(str)) return false
  return true
}
/**
 * 多页面进行跳转
 */
export default class Navigator {
  // 单页间跳转方法
  static openRouter ({ query = {}, name = '', type = '' } = {}) {
    let params = ''
    let formatQuery = query => {
      let params = ''
      if (query) {
        for (let item in query) {
          let vals = query[item]

          if (vals !== undefined) {
            params += item + '=' + vals + '&'
          }
        }
      }
      params = params ? '?' + params : params
      return params
    }

    if (query) {
      params = formatQuery(query)
    }
    let homepath = `/${location.pathname.split('/')[1]}/` // 获取单页前缀
    let url = `${homepath}${name}${params}` // 拼接url
    if (type === 'replace') {
      location.replace(url) // replace 跳转
    } else {
      location.href = url // href 跳转
    }
  }
}

/**
 * 将DataUrl转化为Blob对象
 * @param {*} dataurl
 */
export function dataURLtoBlob (dataurl) {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * 将file对象转化为本地链接
 * @param {*} file
 */
export function getObjectURL (file) {
  let url = null
  if (window.createObjectURL !== undefined) {
    // basic
    url = window.createObjectURL(file)
  } else if (window.URL !== undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
export { findComponentUpward }

// Find component downward
export function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// Find components upward
export function findComponentsUpward (context, componentName) {
  let parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

// Find brothers components
export function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}

/**
 * 判断类型
 * @param {} obj
 */
function typeOf (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

/**
 * 深拷贝
 * @param {*} data
 */
export function deepCopy (data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass (ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass (ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}
