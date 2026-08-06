/*
========================================
 Couch Potato 64
 Build 0.1.1

 app.js
 Core Application Controller
========================================
*/


console.log(
    "================================"
);

console.log(
    "Couch Potato 64 Booting..."
);

console.log(
    "================================"
);





/*
========================================
 Host Game System
========================================
*/


function createRoom() {


    alert(

        "Creating Game Room...\n\n" +

        "Multiplayer networking will be added soon!"

    );


}





/*
========================================
 Join Game System
========================================
*/


function joinRoom() {


    const roomCode = document.getElementById(

        "room-code"

    ).value;



    if(!roomCode) {


        alert(

            "Please enter a room code."

        );


        return;


    }



    alert(

        "Joining room: " +

        roomCode +

        "\n\n" +

        "Networking system coming soon!"

    );


}





/*
========================================
 Application Startup
========================================
*/


function startCouchPotato64() {


    console.log(

        "Loading Settings..."

    );


    if(typeof loadSettings === "function") {


        loadSettings();

    }





    console.log(

        "Loading Themes..."

    );


    if(typeof loadTheme === "function") {


        loadTheme();

    }





    console.log(

        "Loading Library..."

    );


    if(typeof loadLibrary === "function") {


        loadLibrary();

    }





    console.log(

        "Couch Potato 64 Ready!"

    );


}





window.addEventListener(

    "load",

    startCouchPotato64

);