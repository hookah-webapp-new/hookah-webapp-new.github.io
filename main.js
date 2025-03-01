function parseQuery(queryString) {
  let query = {}
  let pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&")
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=")
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "")
  }
  return query
}
let userChatId

document.addEventListener("DOMContentLoaded", () => {
  let app = window.Telegram.WebApp
  let query = app.initData
  let user_data_str = parseQuery(query).user
  let user_data = JSON.parse(user_data_str)
  app.disableVerticalSwipes()
  app.expand()
  app.ready()
  app.setHeaderColor("#02bdde")
  app.setBackgroundColor("#fff")
  app.setBottomBarColor("#007ac9")
  userChatId = user_data["id"]

  app.showScanQrPopup("Сканируй QR плиз", (callback) => {
    const data = {
      qr_code: callback,
      timestamp: Date.now(),
    }

    app.sendData(JSON.stringify(data))
    app.close()
  })
})
