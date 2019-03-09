

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByHexString("#475D69");
        }           
        
        toastMessageBottomShort = function(message){
            window.plugins.toast.showLongBottom(message, function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
        } 

        document.addEventListener("backbutton", function(){
            if($.mobile.activePage.attr('id') == "jackpot"){
                //BACK BUTTON DISABLE ON
            }
            else if($.mobile.activePage.attr('id') != "home"){
                navigator.app.exitApp();
            }
            else{
                window.history.back();
            }
        }, false);


        startBackgroundProcess = function(){
            cordova.plugins.backgroundMode.enable();         
        }
        
        stopBackgroundProcess = function(){
            cordova.plugins.backgroundMode.disable();      
        }
        

        alertUser = function(message, callback, title, buttonText){
            navigator.notification.alert(message, callback, title, buttonText);
        }
        
        confirmUser = function(message, callback, title, buttons){
            navigator.notification.confirm(message, callback, title, buttons)
        }

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();