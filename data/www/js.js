document.addEventListener('deviceready', function () {
	
    alert(cordova.plugins.notification.local.launchDetails);
	
	cordova.plugins.notification.local.schedule({
		id: 1,
    	title: 'My first notification',
    	text: 'Thats pretty easy...'
	});
	
	
	var push = PushNotification.init({
        android: {}
    });

    push.on('registration', function(data) {
        // data.registrationId
        alert(data.registrationId);
    });

    push.on('notification', function(data) {
        alert("Title:" + data.title + " Message:" + data.message);
    });

    push.on('error', function(e) {
        alert(e.message)
    });
	
	
}, false);
function sw(){
	cordova.plugins.notification.local.schedule({
		id: 2,
    	title: 'My first notification',
    	text: 'Thats pretty easy...'
	});
}