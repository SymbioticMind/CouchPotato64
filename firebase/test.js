/*
========================================
 Couch Potato 64
 Build 0.3.1

 firebase/test.js
 Firebase Connection Test
========================================
*/


function testFirebaseConnection(){


    firebase.database()

    .ref("test")

    .set({

        message:

        "Couch Potato 64 is online!",


        time:

        new Date()

        .toISOString()

    })

    .then(()=>{


        console.log(

            "Firebase write successful."

        );


    })

    .catch(error=>{


        console.error(

            "Firebase error:",

            error

        );


    });


}





window.addEventListener(

    "load",

    testFirebaseConnection

);