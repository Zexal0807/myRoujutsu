document.addEventListener('deviceready', function () {
	
	cordova.plugins.notification.local.schedule({
		id: 1,
    	title: 'My first notification',
    	text: 'Thats pretty easy...'
	});
	
	
	var push = PushNotification.init({
        android: {
        	senderID: "430881925689"
        }
    });
	
	alert(push);

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