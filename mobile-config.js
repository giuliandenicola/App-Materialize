// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.giulian.materialize',
  name: 'Materialize',
  description: 'Feel the material.',
  author: 'Giulian de Nicola',
  email: 'contact@giuliandenicola.nl',
  website: 'http://giuliandenicola.nl'
});

// Set up resources such as icons and launch screens.
App.icons({
  // iOS
  // 'iphone': 'resources/icons/icon-60x60.png',
  // 'iphone_2x': 'resources/icons/icon-60x60@2x.png',
  // 'iphone_3x': 'resources/icons/icon-60x60@3x.png',
  // 'ipad': 'resources/icons/icon-76x76.png',
  // 'ipad_2x': 'resources/icons/icon-76x76@2x.png',

  // Android
  'android_mdpi': 'resources/icons/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': 'resources/icons/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': 'resources/icons/mipmap-xhdpi/ic_launcher.png',
  'android_xxhdpi': 'resources/icons/mipmap-xxhdpi/ic_launcher.png',
  'android_xxxhdpi': 'resources/icons/mipmap-xxxhdpi/ic_launcher.png',
});

App.launchScreens({
  // iOS
  // 'iphone': 'resources/splash/splash-320x480.png',
  // 'iphone_2x': 'resources/splash/splash-320x480@2x.png',
  // 'iphone5': 'resources/splash/splash-320x568@2x.png',
  // 'iphone6': 'resources/splash/splash-375x667@2x.png',
  // 'iphone6p_portrait': 'resources/splash/splash-414x736@3x.png',
  // 'iphone6p_landscape': 'resources/splash/splash-736x414@3x.png',
  //
  // 'ipad_portrait': 'resources/splash/splash-768x1024.png',
  // 'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  // 'ipad_landscape': 'resources/splash/splash-1024x768.png',
  // 'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffff0000');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#b71c1c');
App.setPreference("orientation", "portrait"); 

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});