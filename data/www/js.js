document.addEventListener('deviceready', function () {
    alert(cordova.plugins.notification.local.launchDetails);
	
	cordova.plugins.notification.local.schedule({
		id: 2,
    	title: 'My first notification',
    	text: 'Thats pretty easy...'
	});
	
}, false);
function sw(){
	cordova.plugins.notification.local.schedule({
		id: 2,
    	title: 'My first notification',
    	text: 'Thats pretty easy...'
	});
}