/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
            StatusBar.backgroundColorByHexString("#65A5BA");
        }

        window.plugins.headerColor.tint("#65A5BA");

        toastMessageBottomShort = function(message){
            window.plugins.toast.showLongBottom(message, function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
        }

        alertUser = function(message, callback, title, buttonText){
            navigator.notification.alert(message, callback, title, buttonText);
        }

        alertUser("This application utilizes google services. It may not function properly in areas where google services are blocked.", function(){}, "Notice", "OK")

        confirmUser = function(message, callback, title, buttons){
            navigator.notification.confirm(message, callback, title, buttons)
        }        

        scanBarcode = function(){
            return new Promise(function(resolve, reject){
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(result.text[0] == 0)
                            result.text = result['text'].substring(1);
                        resolve(result.text);
                    },
                    function (error) {
                        alertUser("Scanning failed: " + error);
                    },
                    {
                        preferFrontCamera : false, // iOS and Android
                        showFlipCameraButton : false, // iOS and Android
                        showTorchButton : true, // iOS and Android
                        torchOn: true, // Android, launch with the torch switched on (if available)
                        saveHistory: true, // Android, save scan history (default false)
                        prompt : "Place a barcode inside the scan area", // Android
                        resultDisplayDuration: 200, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                        formats : "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                        disableAnimations : true, // iOS
                        disableSuccessBeep: false // iOS and Android
                    }
                 );
            });
        }

        copyToClipboard = function(text){
            cordova.plugins.clipboard.copy(text);
            toastMessageBottomShort("Exported List to Clipboard");
        }          

        shareText = function(text, description){
            navigator.share(text,description,"plain/text");
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