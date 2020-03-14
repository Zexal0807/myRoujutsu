var push;

document.addEventListener('deviceready', function (){
    push = PushNotification.init({
        android: {
            senderID: "430881925689"
        },
        browser: {
            pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
    });
    
    push.on('registration', function(data){
        alert(data);
        // data.registrationId
    });
    
    push.on('notification', function(data){
        alert(data);
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
    });
    
    push.on('error', function(e){
        alert(e);
        // e.message
    });
}, false);
