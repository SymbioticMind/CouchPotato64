/*
========================================
 Couch Potato 64
 Build 0.2.0

 app.js
 Core Application Controller
========================================
*/


let selectedAvatar = "🥔";





function selectAvatar(avatar){


    selectedAvatar = avatar;


}





function finishProfile(){


    const username =

    document.getElementById(

        "username-input"

    ).value;



    if(!username){


        alert(

            "Please enter a username."

        );


        return;


    }



    createProfile(

        username,

        selectedAvatar

    );



    loadLocalPlayer();


    initializeProfile();



}





function initializeProfile(){


    const profile = getProfile();



    if(!profile){

        showScreen(

            "profile-screen"

        );

        return;

    }



    document.getElementById(

        "welcome-message"

    ).innerHTML =


    profile.avatar +

    " Welcome, " +

    profile.username;



    showScreen(

        "home-screen"

    );


}





function createRoom(){


    alert(

        "Room creation system coming soon!"

    );


}





function joinRoom(){


    alert(

        "Room joining system coming soon!"

    );


}





function startCouchPotato64(){



    loadProfile();



    initializeProfile();



}





window.addEventListener(

    "load",

    startCouchPotato64

);