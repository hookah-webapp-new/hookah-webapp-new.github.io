const app = window.Telegram.WebApp

document.addEventListener("DOMContentLoaded", () => {
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
