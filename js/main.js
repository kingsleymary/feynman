var location_info = document.getElementById('location');  // location html placeholder
var visitor_ip;
var visitor_count = 0;

getIpAddress();  // calling the function that retrieves a visitor's IP address


$(document).ready(function(){  // Run the following codes on page load

var current_date = new Date(); //date info from inbuilt Javascript Date() function
document.getElementById('date').innerHTML = current_date; //Update the date info html placeholder with date content


getLocation();
getVisitors();  // calling the function that retrieves and updates visitors IP address stored on a resource


});




/******************************
*                              * 
* A function that gets          *
* a user's current geolocation  *
* using html geolocation        *
*                              *
*******************************/                            

function getLocation(){

if (navigator.geolocation){  //first check if the navigator.geolocation object exists as some older browsers do not support this api

    navigator.geolocation.getCurrentPosition(showPosition, showError);

}else{

location_info.innerHTML = "Geolocation is not supported by this browser.";

}

}

/*******************************
*                               *
* A function that displays the   *
* actual location based on the   *
* longitude and latitude of the  *
* position passed as an argument *
*                               *
********************************/

function showPosition(position){

longitude = position.coords.longitude;
latitude = position.coords.latitude;

reverse_geocoder(longitude, latitude); // calling the reverse geocoder async function to get a human readable location

}



/*****************************
*                            *
* A function that displays    *
* a graceful error when a     *
* geolocation call fails      *
*                             *
******************************/

function showError(error){

switch(error.code){

case error.PERMISSION_DENIED:
    location_info.innerHTML = "User Denied Request For Geolocation Access"
    break;

case error.POSITION_UNAVAILABLE:
    location_info.innerHTML = "Location Information Is  Unavailable."
    break;

case error.TIMEOUT:
    location_info.innerHTML = "Request To Get User Location Timed Out."
    break;

case error.UNKNOWN_ERROR:
    location_info.innerHTML = "An Unknown Error Occured!"
    break;

default:
    location_info.innerHTML = "Ooops......... Something Weird Happened!"
    break;
}

}




/*****************************************************
*                                                     *
* An async function that gets the reverse geolocation  *
* of the _longitude and _latitude coordinates through  *
* open street map                                      *
*                                                     *
******************************************************/


async function reverse_geocoder(_longitude, _latitude){
try{

const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${_latitude}&lon=${_longitude}&format=json`) //get the reverse geolocation through open street map providing the longitude, latitude and format as parameters for the promise
const location_data = await response.json(); //get the response as json data from the promise

location_info.innerHTML = location_data.display_name; // update the location html placeholder with the json data retrieved.


}catch (error){  //catch any error

    alert(error);
    throw error;   

}
}


/********************************************
*                                            *
* An async function that retrieves           * 
* a visitor's IP address through ipify api   *
*                                           *
********************************************/


async function getIpAddress(){

try{

const response = await fetch('https://api.ipify.org?format=json');  //fetch the resource from ipify api
const data = await response.json();  

document.getElementById("ip_address").innerHTML = data.ip;  // update the ip address html placeholder
visitor_ip = document.getElementById('ip_address').innerHTML;  //update the visitor_ip variable

} catch (error) {

alert(error);
throw error;

}
}


/*******************************
*                              *
* A function that retrieves      *
* and updates unique visitor's   *
* IP address and unique visitor  *
* count                          *
*                               * 
********************************/

function getVisitors(){

var unique_visitor;  //a variable that holds a boolean for unique visitor


let req = new XMLHttpRequest();  //A xmlHttpRequest that retieves visitor's IP address fron an online resource
req.onreadystatechange = () => {

if (req.readyState == XMLHttpRequest.DONE){

    var _jsonResponse = JSON.parse(req.responseText); //pass the response as a JSON data

    for(var ia = 0; ia < _jsonResponse.record.visitors.length; ia++){  //loop through the record to count the length of IP addresses on record

        if(_jsonResponse.record.visitors[ia].ip === visitor_ip){  // check if there is a stored record matching the IP address of the visitor

            unique_visitor = false;  //update the boolean value for unique visitor

        }else{

            unique_visitor = true;  //else the visitor is a new visitor

        }
    }

    if(unique_visitor == false){  //if the visitor is a returning visitor

    alert("Welcome Back!"); //Alert a welcome back message.
    document.getElementById('visitor_count').innerHTML = _jsonResponse.record.visitors.length;

    }else{

        _jsonResponse.record.visitors.push({ip: visitor_ip});  // add the visitor IP address to the list of visitors
        visitor_count = _jsonResponse.record.visitors.length;  // count the number of visitors record

        document.getElementById('visitor_count').innerHTML = visitor_count;  // update the unique counter html placeholder

        const children = _jsonResponse.record;  //store the record to a variable. This is necessary as a parent node is created on every call to retrieve the record thereby creating unnecessary multiple parent nodes during multiple request calls
        delete _jsonResponse.record;  // purge the parent node

        var _jsonResponse = { "visitors" : [{}]};  //re-create the model of the visitor object

        Object.assign(_jsonResponse.visitors, children.visitors); //merge the children into the parent location


            let update_visitor_record = new XMLHttpRequest();  // create a new xml http request for the PUT operation 
            update_visitor_record.onreadystatechange = () => {

            if(update_visitor_record.readyState == XMLHttpRequest.DONE){

                alert("Unique Visitor Updated"); // alert the visitor that his record has been stored
            }
        };

        update_visitor_record.open("PUT", "https://api.jsonbin.io/v3/b/689babe343b1c97be91cc1b7", true);  // open the request stream
        update_visitor_record.setRequestHeader("Content-Type", "application/json");  // set the request hearders
        update_visitor_record.setRequestHeader("X-Master-Key", "$2a$10$Csi58KXdZi.dea1rLWfhw.ohP9i.oeak7wv6SgDWzebr973VRdC86");
        update_visitor_record.send(JSON.stringify(_jsonResponse));  // send the PUT request with the current json data


    }

    

    }

};
req.open("GET", "https://api.jsonbin.io/v3/b/689babe343b1c97be91cc1b7/latest", true); //open a get request stream for visitor record retrieval
req.setRequestHeader("X-Master-Key", "$2a$10$Csi58KXdZi.dea1rLWfhw.ohP9i.oeak7wv6SgDWzebr973VRdC86"); //set the headers
req.send();  // send the request

}


