document.addEventListener('deviceready', function () {
	
	window.plugins.PushbotsPlugin.initialize("5e6250782ce1df73b63e6263", {"android":{"sender_id":"430881925689"}});
	
	
    alert(cordova.plugins.notification.local.launchDetails);
	
	cordova.plugins.notification.local.schedule({
		id: 1,
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