/*
========================================
 Couch Potato 64
 Build 0.2.1

 profile.js
 Player Profile System
========================================
*/


let playerProfile = null;



const defaultAvatars = [

    "🥔",
    "👾",
    "🤖",
    "⭐",
    "🕹️"

];





/*
========================================
 Create Profile
========================================
*/


function createProfile(

    username,

    avatar

){


    if(!getIdentity()) {


        createIdentity();


    }



    playerProfile = {


        username: username,


        avatar: avatar,


        playerID:

        getIdentity().playerID,


        friendCode:

        getIdentity().friendCode,


        created:

        new Date()

        .toISOString()


    };



    saveProfile();


}





/*
========================================
 Save Profile
========================================
*/


function saveProfile(){


    localStorage.setItem(

        "cp64-profile",

        JSON.stringify(

            playerProfile

        )

    );


}





/*
========================================
 Load Profile
========================================
*/


function loadProfile(){


    const saved =

    localStorage.getItem(

        "cp64-profile"

    );



    if(saved){


        playerProfile =

        JSON.parse(saved);


    }



}





/*
========================================
 Get Profile
========================================
*/


function getProfile(){


    return playerProfile;


}





window.addEventListener(

    "load",

    loadProfile

);