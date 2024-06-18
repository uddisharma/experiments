document.getElementById('notifyButton').addEventListener('click', function() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
    } 
    // Check if notification permissions are already granted
    else if (Notification.permission === "granted") {
        // If it's okay, let's create a notification
        console.log("Permission granted. Showing notification.");
        showNotification("Hello!", {
            body: "This is a web notification example.",
            icon: "https://cdn-icons-png.flaticon.com/128/1182/1182718.png" // Optional icon
        });
    } 
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            console.log("Permission status:", permission);
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                console.log("Permission granted after request. Showing notification.");
                showNotification("Hello Deepak Sharma!", {
                    body: "Hii Deepak Sharma , This is your test notification",
                    icon: "https://cdn-icons-png.flaticon.com/128/1182/1182718.png" // Optional icon
                });
            } else {
                console.log("Permission denied.");
            }
        }).catch(function(error) {
            console.error("Notification permission request error:", error);
        });
    } else {
        console.log("Notification permission denied.");
    }
});

function showNotification(title, options) {
    try {
        new Notification(title, options);
        console.log("Notification displayed with title:", title);
    } catch (error) {
        console.error("Error displaying notification:", error);
    }
}
