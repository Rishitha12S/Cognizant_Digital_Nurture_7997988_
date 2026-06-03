/* Welcome Message */

console.log(
    "Welcome to the Community Portal"
);

/* Event Class */

class EventPortal{

    constructor(name,date,seats){

        this.name = name;
        this.date = date;
        this.seats = seats;
    }

    checkAvailability(){

        if(this.seats > 0){

            return "Seats Available";
        }

        else{

            return "House Full";
        }
    }
}

/* Event Object */

const event1 = new EventPortal(
    "Music Event",
    "12-12-2026",
    50
);

console.log(event1);
console.log(event1.checkAvailability());

/* Event Array */

let events = [

    "Music Event",

    "Sports Event",

    "Food Carnival"
];

/* forEach Loop */

events.forEach(function(event){

    console.log(
        "Upcoming Event: " + event
    );
});

/* Validate Phone */

function validatePhone(){

    let phone =

    document.getElementById(
        "phone"
    ).value;

    if(phone.length != 10){

        alert(
            "Phone number must be 10 digits"
        );
    }
}

/* Registration Fee */

function showFee(){

    let fee =

    document.getElementById(
        "eventType"
    ).value;

    if(fee === ""){

        document.getElementById(
            "feeDisplay"
        ).innerHTML = "";

        return;
    }

    document.getElementById(
        "feeDisplay"
    ).innerHTML =

    "Selected Event Fee: ₹" + fee;
}

/* Registration Success */

function showConfirmation(event){

    event.preventDefault();

    let form =

    document.querySelector("form");

    try{

        if(!form.checkValidity()){

            throw "Please fill all fields";
        }

        /* Seat Count */

        let seats = 10;

        seats--;

        console.log(
            "Remaining Seats: " + seats
        );

        /* Popup */

        document.getElementById(
            "successPopup"
        ).style.display = "flex";

        /* Output */

        document.getElementById(
            "formOutput"
        ).innerHTML =

        "Registration Successful ✅";

        /* Register Button */

        let btn =

        document.getElementById(
            "registerBtn"
        );

        if(btn){

            btn.innerHTML =
            "Registered ✅";
        }

        /* Browser Notification */

        if(Notification.permission === "granted"){

            new Notification(

                "Registration Successful ✅",

                {
                    body:
                    "Thank you for registering!"
                }
            );
        }

        else if(
            Notification.permission !== "denied"
        ){

            Notification.requestPermission()

            .then(function(permission){

                if(permission === "granted"){

                    new Notification(

                        "Registration Successful ✅",

                        {
                            body:
                            "Thank you for registering!"
                        }
                    );
                }
            });
        }
    }

    catch(error){

        alert(error);
    }
}

/* Close Popup */

function closePopup(){

    document.getElementById(
        "successPopup"
    ).style.display = "none";

    let btn =

    document.getElementById(
        "registerBtn"
    );

    if(btn){

        btn.innerHTML =
        "Register";
    }
}

/* Image Popup */

function enlargeImage(img){

    document.getElementById(
        "imagePopup"
    ).style.display = "block";

    document.getElementById(
        "popupImg"
    ).src = img.src;
}

/* Close Image */

function closeImage(){

    document.getElementById(
        "imagePopup"
    ).style.display = "none";
}

/* Close Popup Background */

document.getElementById(
    "imagePopup"
).addEventListener("click", function(e){

    if(e.target === this){

        closeImage();
    }
});

/* Character Count */

function countCharacters(){

    let text =

    document.getElementById(
        "feedback"
    ).value;

    document.getElementById(
        "charCount"
    ).innerHTML =

    text.length;
}

/* Video Ready */

function videoReady(){

    document.getElementById(
        "videoMessage"
    ).innerHTML =

    "Video ready to play";
}

/* Warning Message */

function warningMessage(){

    return "Your form is not finished!";
}

/* User Preferences */

function showPreferenceFee(){

    let checkboxes =

    document.querySelectorAll(
        '.checkbox-group input[type="checkbox"]'
    );

    let total = 0;

    let selectedEvents = [];

    checkboxes.forEach(function(box){

        if(box.checked){

            total += Number(box.value);

            selectedEvents.push(

                box.parentElement.innerText
            );
        }
    });

    if(selectedEvents.length > 0){

        document.getElementById(
            "preferenceFee"
        ).innerHTML =

        "Selected Events:<br>" +

        selectedEvents.join(", ") +

        "<br><span class='total-fee'>" +

        "Total Fee: ₹" + total +

        "</span>";
    }

    else{

        document.getElementById(
            "preferenceFee"
        ).innerHTML =

        "Total Event Fee: ₹0";
    }
}

/* Save Preferences */

function savePreference(){

    let selectedEvents = [];

    let checkboxes =

    document.querySelectorAll(
        '.checkbox-group input[type="checkbox"]'
    );

    checkboxes.forEach(function(box){

        if(box.checked){

            selectedEvents.push(
                box.value
            );
        }
    });

    localStorage.setItem(

        "preferredEvents",

        JSON.stringify(selectedEvents)
    );

    sessionStorage.setItem(

        "notification",

        document.getElementById(
            "notifyCheck"
        ).checked
    );

    alert(
        "Preferences Saved Successfully 🔔"
    );
}

/* Load Preferences */

window.onload = function(){

    alert(
        "Welcome to the Community Portal"
    );

    let savedEvents = JSON.parse(

        localStorage.getItem(
            "preferredEvents"
        )
    );

    if(savedEvents){

        let checkboxes =

        document.querySelectorAll(
            '.checkbox-group input[type="checkbox"]'
        );

        checkboxes.forEach(function(box){

            if(savedEvents.includes(box.value)){

                box.checked = true;
            }
        });

        showPreferenceFee();
    }

    let notifyStatus =

    sessionStorage.getItem(
        "notification"
    );

    if(notifyStatus === "true"){

        document.getElementById(
            "notifyCheck"
        ).checked = true;
    }

    /* Random Offer */

    const offers = [

        "Special Offer: 10% OFF 🎉",

        "Special Offer: 20% OFF 🔥",

        "Special Offer: 30% OFF 💥",

        "Free Registration Today ✅",

        "Buy 1 Get 1 Free 🎁"
    ];

    let randomOffer = offers[
        Math.floor(Math.random() * offers.length)
    ];

    let offerElement =

    document.getElementById(
        "offerText"
    );

    if(offerElement){

        offerElement.innerHTML =
        randomOffer;
    }
}

/* Clear Preferences */

function clearPreferences(){

    let checkboxes =

    document.querySelectorAll(
        '.checkbox-group input[type="checkbox"]'
    );

    checkboxes.forEach(function(box){

        box.checked = false;
    });

    document.getElementById(
        "notifyCheck"
    ).checked = false;

    document.getElementById(
        "preferenceFee"
    ).innerHTML =

    "Total Event Fee: ₹0";

    localStorage.clear();

    sessionStorage.clear();

    alert(
        "Preferences Cleared"
    );
}

/* Find Nearby Events */

function findLocation(){

    if(navigator.geolocation){

        let messages = [

            "Fetching your location... 📍",

            "Searching nearby events... 🔍",

            "Finding best events near you... 🎉"
        ];

        let index = 0;

        let loading = setInterval(function(){

            document.getElementById(
                "location"
            ).innerHTML =

            "<span style='color:blue; font-weight:bold;'>"
            +
            messages[index]
            +
            "</span>";

            index++;

            if(index >= messages.length){

                index = 0;
            }

        },1000);

        navigator.geolocation.getCurrentPosition(

            function(position){

                clearInterval(loading);

                document.getElementById(
                    "location"
                ).innerHTML =

                "Latitude: " +
                position.coords.latitude +

                "<br>Longitude: " +
                position.coords.longitude +

                "<br>Accuracy: " +
                position.coords.accuracy +
                " meters";

                let output =

                "<h3>Nearby Events</h3>";

                output += `

                <div class="event-card">

                    <img src="awarenessProgram.jpg">

                    <h3>Awareness Program</h3>

                    <p>Distance: 2 KM away</p>

                </div>

                <div class="event-card">

                    <img src="cultural.jpg">

                    <h3>Cultural Fest</h3>

                    <p>Distance: 3 KM away</p>

                </div>

                <div class="event-card">

                    <img src="sports.jpg">

                    <h3>Sports Event</h3>

                    <p>Distance: 1 KM away</p>

                </div>
                `;

                document.getElementById(
                    "eventsContainer"
                ).innerHTML = output;
            },

            function(error){

                clearInterval(loading);

                if(error.code == 1){

                    alert(
                        "Permission Denied"
                    );
                }

                else if(error.code == 3){

                    alert(
                        "Location Request Timed Out"
                    );
                }

                else{

                    alert(
                        "Unable to fetch location"
                    );
                }
            },

            {
                enableHighAccuracy:true,
                timeout:5000,
                maximumAge:0
            }
        );
    }

    else{

        alert(
            "Geolocation not supported"
        );
    }
}

/* Fetch API */

fetch(
    "https://jsonplaceholder.typicode.com/posts"
)

.then(function(response){

    return response.json();
})

.then(function(data){

    console.log(data);
})

.catch(function(error){

    console.log(error);
});

/* Async Await */

async function loadEvents(){

    try{

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        let data = await response.json();

        console.log(data);
    }

    catch(error){

        console.log(error);
    }
}

loadEvents();

/* Spread Operator */

let copiedEvents = [...events];

console.log(copiedEvents);

/* Destructuring */

const person = {

    userName:"Rishitha",

    city:"Hyderabad"
};

const {
    userName,
    city
} = person;

console.log(userName);
console.log(city);

/* Console Message */

console.log(
    "Community Event Portal Loaded"
);