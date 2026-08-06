/*
========================================
 Couch Potato 64
 Build 0.3.2

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

            "Please enter username."

        );


        return;


    }



    createIdentity();



    createProfile(

        username,

        selectedAvatar

    );



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





async function createLobby(){


    await createOnlineRoom();


}





window.addEventListener(

    "load",

    initializeProfile

);