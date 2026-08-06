/*
========================================
 Couch Potato 64
 Build 0.2.0

 profile.js
 Local Player Profile System
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
 Generate Player ID
========================================
*/


function generatePlayerID(){


    const numbers = Math.floor(

        10000000 +

        Math.random() *

        89999999

    );


    return "CP64-" +

        numbers.toString()
        .substring(0,4)

        +

        "-"

        +

        numbers.toString()
        .substring(4);



}





/*
========================================
 Create Profile
========================================
*/


function createProfile(

    username,

    avatar

){


    playerProfile = {


        username: username,


        avatar: avatar,


        playerID:

        generatePlayerID(),


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


        console.log(

            "Profile loaded:",

            playerProfile.username

        );


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