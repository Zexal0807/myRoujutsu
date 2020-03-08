document.addEventListener('deviceready', function () {
	
	FCMPlugin.onTokenRefresh(function(token){
		alert( token );
	});
	FCMPlugin.getToken(function(token){
		alert(token);
	});
	FCMPlugin.subscribeToTopic('topicExample');
	FCMPlugin.onNotification(function(data){
		if(data.wasTapped){
		  //Notification was received on device tray and tapped by the user.
		  alert( JSON.stringify(data) );
		}else{
		  //Notification was received in foreground. Maybe the user needs to be notified.
		  alert( JSON.stringify(data) );
		}
	});	
	
	
}, false);
function sw(){
	cordova.plugins.notification.local.schedule({
		id: 2,
    	title: 'My first notification',
    	text: 'Thats pretty easy...'
	});
}