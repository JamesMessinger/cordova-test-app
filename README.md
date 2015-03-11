Cordova Test App
============================

### Test web pages on mobile devices inside a Cordova container

Cordova apps run in a webview container, which is _not_ the same as the platform's built-in browser. Many <a href="http://caniuse.com">"supported" features</a> don't work. So use this app to test your web pages.

![Screenshot](https://github.com/BigstickCarpet/cordova-test-app/blob/master/img/screenshot.png)


Installation and Use
--------------------------
#### 1) Clone the repo
````bash
git clone https://github.com/BigstickCarpet/cordova-test-app.git
````


#### 2) Install dependencies
This installs a _local_ instance of Cordova.  You can run any cordova command using `npm run cordova`.

````bash
npm install
````


#### 3) Install Cordova Platforms/Plugins
Install whatever Cordova platforms and plugins you want to use.

````bash
npm run cordova -- platform add browser
npm run cordova -- platform add ios
npm run cordova -- platform add android
npm run cordova -- platform add windows
npm run cordova -- plugin add org.apache.cordova.device
````


#### 4) Run the app
The `package.json` file includes several npm scripts to make things easy.  Run one of these:

| Command               | Description |
|:----------------------|:------------|
| `npm start`           | Runs `cordova serve`, so you can test the app in a desktop web browser
| `npm run ios`         | Runs the app in the iOS emulator
| `npm run android`     | Runs the app in the Android emulator
| `npm run windows`     | Runs the app in the Windows 8 emulator
| `npm run winphone`    | Runs the app in the Windows Phone 8 emulator



License
--------------------------
Cordova Test App is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.
