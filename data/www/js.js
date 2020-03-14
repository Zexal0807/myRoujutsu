var push;

document.addEventListener('deviceready', function (){
    var notificationReceived = function(message) {
        alert(JSON.stringify(message));
    };
    MFPPush.initialize (
        function(successResponse) {
            alert("Successfully intialized");
            MFPPush.registerNotificationsCallback(notificationReceived);
        },
        function(failureResponse) {
            alert("Failed to initialize");
        }
    );
    MFPPush.isPushSupported (
        function(successResponse) {
            alert("Push Supported: " + successResponse);
        },
        function(failureResponse) {
            alert("Failed to get push support status");
        }
    );
    var options = { };
MFPPush.registerDevice(
    options,
    function(successResponse) {
        alert("Successfully registered");
    },
    function(failureResponse) {
        alert("Failed to register");
    }
);


}, false);
