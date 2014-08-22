var Firebase = require("firebase");
var greenBean = require("green-bean");

var myDataRef = new Firebase('https://darkblue.firebaseio.com/');
var tempAlertInit = 0;
var displayTempInit = 0;
var setPointTempInit = 0;
var iceMakerStatusInit = 0;


greenBean.connect("refrigerator", function (refrigerator) {
	console.log("the refrigerator was found:", JSON.stringify(refrigerator, null, 2));
	    	//var resourcesRef = myDataRef.child("resources");
    refrigerator.temperatureAlert.subscribe(function (value) {
    	
    	console.log("Received a temp alert push.\r\n");
    
        if(tempAlertInit == 0)
        {
        	myDataRef.push({resource: "temperature alert", status: value}); 
        	//resourcesRef.set({name : "temperature alert", status :value});
        	//myDataRef.set({name : "temperature alert", status :value});
        	tempAlertInit = 1;
        }
        else
        {
        myDataRef.push({resource: "temperature alert", status: value}); 
        	//var tempAlertRef = child.resourceRef("temperature alert");
			//tempAlertRef.update({"status": value});
        }
        
    });
    
    refrigerator.displayTemperature.read(function (value) {
    	
    	console.log("Received a display temp read\r\n");

        if(displayTempInit == 0)
        {
        	myDataRef.push({resource: "display temperature", status: value});
        	//resourcesRef.set({name : "display temperature", status :value}); 
        	//myDataRef.set({name : "display temperature", status :value}); 
        	displayTempInit = 1;
        }
        else
        {
        myDataRef.push({resource: "display temperature", status: value});
        	//var displayTempRef = child.resourceRef("display temperature");
			//displayTempRef.update({"status": value});
        }
        });

    refrigerator.displayTemperature.subscribe(function (value) {
    	
    	console.log("Received a display temp push.\r\n");
    
        if(displayTempInit == 0)
        {
        	myDataRef.push({resource: "display temperature", status: value}); 
        	//resourcesRef.set({name : "display temperature", status :value}); 
        	//myDataRef.set({name : "display temperature", status :value}); 
        	displayTempInit = 1;
        }
        else
        {
        myDataRef.push({resource: "display temperature", status: value}); 
        	//var displayTempRef = child.resourceRef("display temperature");
			//displayTempRef.update({"status": value});
        }
        });
            
    refrigerator.setpointTemperature.read(function (value) {
    	
    	console.log("Received a setpoint temp read.\r\n");
        if(setPointTempInit == 0)
        {
        	myDataRef.push({resource: "setpoint temperature", status: value}); 
        	//resourcesRef.set({name : "setpoint temperature", status :value});
        	//myDataRef.set({name : "setpoint temperature", status :value});
        	setPointTempInit = 1;
        }
        else
        {
        myDataRef.push({resource: "setpoint temperature", status: value}); 
            //var setPointTempRef = child.resourceRef("setpoint temperature");
			//setPointTempRef.update({"status": value});
        }

        });

    refrigerator.setpointTemperature.subscribe(function (value) {
    	
    	console.log("Received a setpoint temp push.\r\n");
    	
    	
        if(setPointTempInit == 0)
        {
        	myDataRef.push({resource: "setpoint temperature", status: value}); 
        	//resourcesRef.set({name : "setpoint temperature", status :value});
        	//myDataRef.set({name : "setpoint temperature", status :value});
        	setPointTempInit = 1;
        }
        else
        {
        myDataRef.push({resource: "setpoint temperature", status: value});
            //var setPointTempRef = child.resourceRef("setpoint temperature");
			//setPointTempRef.update({"status": value});
        }
        });
        
    refrigerator.iceMakerBucketStatus.read(function (value) {
    	console.log("Received an ice bucket status read.\r\n");
        if(iceMakerStatusInit == 0)
        {
        	myDataRef.push({resource: "ice bucket status", status: value}); 
        	//resourcesRef.set({name : "ice bucket status", status :value});
        	//myDataRef.set({name : "ice bucket status", status :value});
        	iceMakerStatusInit = 1;
        }
        else
        {
        myDataRef.push({resource: "ice bucket status", status: value}); 
            //var iceBucketRef = child.resourceRef("ice bucket status");
			//iceBucketRef.update({"status": value});
        }
        });

    refrigerator.iceMakerBucketStatus.subscribe(function (value) {
    	
    	console.log("Received a ice bucket push.\r\n");
    	
        if(iceMakerStatusInit == 0)
        {
        	myDataRef.push({resource: "ice bucket status", status: value}); 
        	//resourcesRef.set({name : "ice bucket status", status :value});
        	//myDataRef.set({name : "ice bucket status", status :value});
        	iceMakerStatusInit = 1;
        }
        else
        {
        myDataRef.push({resource: "ice bucket status", status: value}); 
            //var iceBucketRef = child.resourceRef("ice bucket status");
			//iceBucketRef.update({"status": value});
        }
        });
});


