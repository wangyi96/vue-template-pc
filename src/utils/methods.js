let webSocket = null

const methods = {
  // 缓存数据
  getStorage(data) {
    return localStorage.getItem(data)
  },
  setStorage(item, data) {
    return localStorage.setItem(item, data)
  },
  removeStorage(item) {
    return localStorage.removeItem(item)
  },
  getSessionStorage(item) {
    return sessionStorage.getItem(item)
  },
  setSessionStorage(item, data) {
    return sessionStorage.setItem(item, data)
  },
  removeSession(item) {
    return sessionStorage.removeItem(item)
  },
  // 格式化时间 yyyy-MM-dd hh:mm:ss
  formatDate(time, fmt) {
    if (time === undefined || '') {
      return
    }
    const date = new Date(time)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
    }
    return fmt
  },
  // 复制功能
  copyText(text) {
    var input = document.createElement("input")
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand("Copy")
    document.body.removeChild(input)
  },
  initWebSocket(url) {
    if ("WebSocket" in window) {
      webSocket = new WebSocket(url)
    } else {
      alert("该浏览器不支持websocket!,请联系管理员")
    }
    // 打开
    webSocket.onopen = function(evt) {
      console.log("Connection open ...")
    }
  },
  sendWebSocket(id) {
    webSocket.addEventListener('open', () => {
      webSocket.send(id)
    })
  },
  messageWebSocket(callback) {
    webSocket.onmessage = function(evt) {
      callback(evt.data)
    }
  },
  closeWebSocket() {
    webSocket.close()
  }
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export default methods