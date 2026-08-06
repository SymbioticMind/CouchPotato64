/*
========================================
 Couch Potato 64
 Build 0.3.1

 presence.js
 Online Status System
========================================
*/


let onlineStatus = "offline";





function setOnline(){


    const profile =

    getProfile();



    if(!profile){

        return;

    }



    onlineStatus = "online";



    firebase.database()

    .ref(

        "players/" +

        profile.playerID

    )

    .set({


        username:

        profile.username,


        status:

        "online"


    });



}





function setOffline(){


    const profile =

    getProfile();



    if(!profile){

        return;

    }



    firebase.database()

    .ref(

        "players/" +

        profile.playerID

    )

    .update({


        status:

        "offline"


    });


}





window.addEventListener(

    "beforeunload",

    setOffline

);