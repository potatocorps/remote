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
	
	// KO Properties
	modelName: ko.observable(""),
	availableRemotes: ko.observableArray(),
	
  // Application Constructor
  initialize: function() {
      this.bindEvents();
      console.log("Intializing App");
  },
  
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
      console.log("Binding 'deviceready' event to DOM");
  },
  
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    //app.receivedEvent('deviceready');
      
    alert("Device Ready");
    
    app.loadSpudFiles();
    
    QuickDiscovery(); // Automatically search for devices on startup

		// Load Static Bindings
		$("#select-device").click(function(){
			ConnectSDK.discoveryManager.pickDevice();
		});
		  
		  
			// Load Dynamic Bindings
		$( "body" ).on( "click", "i", function() {
			alert( "click" );
		});
		
		
		/*
		function success(entries) {
    	var i;
	    for (i=0; i<entries.length; i++) {
	        console.log('En - ', entries[i]);
	    }
		}
		
		function fail(error) {
		    console.log("Failed to list directory contents: ", error);
		}
		
		window.resolveLocalFileSystemURL(DIR_FULL_PATH, function(dirEntry) {
	    var directoryReader = dirEntry.createReader();
	    alert(dirEntry);
	
	    // Get a list of all the entries in the directory
	    directoryReader.readEntries(success,fail);
		});
    */
    
    
		app.setupDiscovery(); // added by Devin 9/29/16 to test ConnectSDK functionality
  },
  
  
  // Update DOM on a Received Event
  receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
  },
  
	
	
	// Function added by Devin 9/29/16 to test ConnectSDK functionality, following documenttion
	setupDiscovery: function () {

			ConnectSDK.discoveryManager.startDiscovery();
	},
	
		// Handler added by Devin 9/29/16
	showDevicePicker: function () {
			ConnectSDK.discoveryManager.pickDevice();
	},
	
	// Loads Remote Files from Core & Custom Directories
	loadSpudFiles: function () {
		alert("Spud Searching");
		
		// Load default spud file located in ... and add to remote array
		
		
		
		// Search custom/remotes directory
		
		// Foreach directory found, add the remote to the remote array
		
		
		
		
		
		
		
		
		
		
	},
	
};

app.initialize();





/*
ko.applyBindings(app);






$(document).ready(function() {
	//alert("document ready");
	
	
	//document.addEventListener("deviceready", onDeviceReady, false);

});


/****************************************************
 *
 *	Searches For Devices on the connected network.
 *	Stops searching after 10 seconds.
 *
 ***************************************************/
function QuickDiscovery() {
	alert("qD called");
	ConnectSDK.discoveryManager.startDiscovery();
	
	setTimeout(function() {
			alert("Stop Searching");
			ConnectSDK.discoveryManager.stopDiscovery();
		}, 
	10000); // Stop Searching After 10 Seconds
}
