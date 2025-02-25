function requestNotificationPermission() {
  if (Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log("Permission granted for notifications.");
      } else {
        console.log("Permission denied for notifications.");
      }
    });
  }
}

window.onload = function() {
  requestNotificationPermission();
  
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      showNotification("PlayerVPN Games", "all the games you want...");
    } else {
      showNotification("PlayerVPN Games", "all the games you want...");
    }
  });
};

function showNotification(title, body) {
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      body: body,
      icon: 'https://i.ibb.co/N75vkX7/PVPN.png'
    });

    notification.onclick = function() {
      window.focus();  
    };
  }
}
