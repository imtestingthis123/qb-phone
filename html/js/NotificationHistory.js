PhoneNotificationHistory = function(notificaitons) {
  let app = document.createElement("div")
  app.id = "notification-history"
  app.classList.add("notificationhistory")

  let notificationcontainer = document.createElement("div")
  notificationcontainer.id = "notification-container"
  notificationcontainer.classList.add("notificationcontainer")
  notificationcontainer.style.display = "flex"
  notificationcontainer.style.flexDirection = "column"
  notificationcontainer.style.alignItems = "center"
  notificationcontainer.style.width = "100%"
  notificationcontainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
  notificationcontainer.style.overflowY = "hidden"
  app.append(notificationcontainer)
  for (const [key, value] of Object.entries(notificaitons)) {
    let notification = document.createElement("div")
    notification.classList.add("notificationhistory")
    notification.style.display = "flex"
    notification.style.flexDirection = "row"
    notification.style.justifyContent = "space-between"
    notification.style.flexWrap = "wrap"
    notification.style.alignItems = "center"
    notification.style.width = "100%"
    notification.style.backgroundColor = "white"
    notification.style.borderBottom = `1px solid ${value.color}`
    notification.style.borderRadius = "0.5vh"
    notification.style.padding = "0.5vh 1vh"
    notification.style.cursor = "pointer"
    notification.style.marginBottom = "0.5vh"



    let notificationIcon = document.createElement("div")
    notificationIcon.classList.add("notificationhistory-icon")
    notificationIcon.innerHTML = `<i class="fas fa-${value.icon}"></i>`
    notification.append(notificationIcon)

    let notificationTitle = document.createElement("div")
    notificationTitle.classList.add("notificationhistory-title")
    notificationTitle.innerHTML = value.title
    notification.append(notificationTitle)

    let notificationText = document.createElement("div")
    notificationText.classList.add("notificationhistory-text")
    notificationText.innerHTML = value.text
    notificationText.style.width = "100%"
    notification.append(notificationText)
    notificationcontainer.append(notification)
  }
  return app
}