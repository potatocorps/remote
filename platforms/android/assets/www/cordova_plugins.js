cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-connectsdk.ConnectSDK.js",
        "file": "plugins/cordova-plugin-connectsdk/www/ConnectSDK.js",
        "pluginId": "cordova-plugin-connectsdk",
        "merges": [
            "navigator.ConnectSDK",
            "ConnectSDK"
        ]
    },
    {
        "id": "cordova-plugin-connectsdk.Capabilities.js",
        "file": "plugins/cordova-plugin-connectsdk/www/android-capabilities.js",
        "pluginId": "cordova-plugin-connectsdk",
        "merges": [
            "navigator.__CSDKCapabilities",
            "__CSDKCapabilities"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-connectsdk": "1.6.0"
};
// BOTTOM OF METADATA
});