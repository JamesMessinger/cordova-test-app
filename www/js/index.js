(function() {
    'use strict';

    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        if (typeof(device) !== 'undefined') {
            // Display device information
            document.getElementById('device-cordova').innerText = device.cordova;
            document.getElementById('device-model').innerText = device.model;
            document.getElementById('device-platform').innerText = device.platform;
            document.getElementById('device-uuid').innerText = device.uuid;
            document.getElementById('device-version').innerText = device.version;

            if (device.platform === 'iOS') {
                document.getElementById('browser-name').innerText = 'Mobile Safari';
            }
            else if (device.platform === 'Android') {
                document.getElementById('browser-name').innerText = 'Chrome Mobile';
            }
            else if (device.platform.indexOf('Win') === 0) {
                document.getElementById('browser-name').innerText = 'IE Mobile';
            }
        }

        // Display the user agent string
        document.getElementById('user-agent').innerText = navigator.userAgent;

        // Wire-up the form
        var theForm = document.getElementById('theForm');
        var theUrl = document.getElementById('theUrl');

        if (typeof(localStorage) !== 'undefined') {
            theUrl.value = localStorage['cordova-test-app-url'] || '';
        }

        theForm.onsubmit = function(evt) {
            if (typeof(localStorage) !== 'undefined') {
                localStorage['cordova-test-app-url'] = theUrl.value;
            }

            window.location = theUrl.value;
            evt.preventDefault();
        };
    }
})();
