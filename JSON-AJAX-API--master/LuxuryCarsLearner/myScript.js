/* ----------------------------------------------------------------------------------------
    THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

var getManufacturer = document.getElementById("manufacturer");
var manufacturerID;

// create a variable that is a acting as an event listener looking for the ajaxThing function
var buttonListners = getManufacturer.addEventListener('change', ajaxThing);




function ajaxThing() {

    manufacturerID = getManufacturer.options[getManufacturer.selectedIndex].value;
    console.log(getManufacturer.selectedIndex)
    console.log(getManufacturer.options[getManufacturer.selectedIndex].value)
    console.log(manufacturerID);
    // create a variable that stores out XMLHttpRequestObject
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://raw.githubusercontent.com/mouldao/API/master/expensiveLuxuryCars.json", true);
    //    ourRequest.send();
    // when the browser has received the loaded response from the server it will trigger the anonymous function
    ourRequest.onload = function () {
        //the function has an if statement that checks the readyState and that status of the property
        if (ourRequest.readyState == 4 && ourRequest.status == 200) {

            // JSON.parse() preocesses a string containing the JSON data and converts the JSON into a javascript object ready for use
            var ourData = JSON.parse(ourRequest.responseText)
            // running
            console.log(ourData)
            displayText(ourData);


        } else {
            document.getElementById("messageAlert").innerHTML = "There was an error with our servers"
        }
    }

    //  the send method is the one that sends information to the server
    ourRequest.send();

}

function displayText(carSelection) {
    document.getElementById("manufacturerC").innerHTML = carSelection["data"][manufacturerID]["manufacturer"]
    document.getElementById("modelC").innerHTML = carSelection["data"][manufacturerID]["model"]
    document.getElementById("priceC").innerHTML =carSelection["data"][manufacturerID]["price"]
    document.getElementById("descriptionC").innerHTML = carSelection["data"][manufacturerID]["description"]
    document.getElementById("videoC").innerHTML = carSelection["data"][manufacturerID]["video"]
    document.getElementById("overallC").innerHTML = carSelection["data"][manufacturerID]["quality"][0]["rating"]
}



//    document.getElementById("display").innerHTML += x[0].make
