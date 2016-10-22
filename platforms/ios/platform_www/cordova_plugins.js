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
        "file": "plugins/cordova-plugin-connectsdk/www/ios-capabilities.js",
        "pluginId": "cordova-plugin-connectsdk",
        "merges": [
            "navigator.__CSDKCapabilities",
            "__CSDKCapabilities"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-connectsdk": "1.6.0",
    "cordova-plugin-console": "1.0.4"
};
// BOTTOM OF METADATA
});