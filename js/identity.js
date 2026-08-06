/*
========================================
 Couch Potato 64
 Build 0.2.1

 identity.js
 Player Identity System
========================================
*/


let playerIdentity = null;




/*
========================================
 Generate Unique ID
========================================
*/


function generateIdentityID(){


    const value = Math.floor(

        10000000 +

        Math.random() *

        89999999

    );


    return "CP64-" +

    value.toString()

    .substring(0,4)

    +

    "-"

    +

    value.toString()

    .substring(4);


}





/*
========================================
 Create Identity
========================================
*/


function createIdentity(){


    playerIdentity = {


        playerID:

        generateIdentityID(),


        friendCode:

        generateIdentityID(),


        created:

        new Date()

        .toISOString()


    };



    saveIdentity();


}





/*
========================================
 Save Identity
========================================
*/


function saveIdentity(){


    localStorage.setItem(

        "cp64-identity",

        JSON.stringify(

            playerIdentity

        )

    );


}





/*
========================================
 Load Identity
========================================
*/


function loadIdentity(){


    const saved =

    localStorage.getItem(

        "cp64-identity"

    );



    if(saved){


        playerIdentity =

        JSON.parse(saved);


    }

    else {


        createIdentity();


    }



}





/*
========================================
 Get Identity
========================================
*/


function getIdentity(){


    return playerIdentity;


}





window.addEventListener(

    "load",

    loadIdentity

);