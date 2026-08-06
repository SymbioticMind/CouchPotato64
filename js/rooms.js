/*
========================================
 Couch Potato 64
 Build 0.3.0

 rooms.js
 Game Room System
========================================
*/


let currentRoom = null;



/*
========================================
 Generate Room Code
========================================
*/


function generateRoomCode(){


    const characters =

    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";



    let code = "";



    for(let i = 0; i < 6; i++){


        code += characters[

            Math.floor(

                Math.random() *

                characters.length

            )

        ];


    }



    return code;


}





/*
========================================
 Create Room
========================================
*/


function createRoom(){


    const profile = getProfile();



    if(!profile){


        return;


    }



    currentRoom = {


        code:

        generateRoomCode(),


        host:

        profile.username,


        game:

        "Waiting for game...",


        players:

        [


            {


                username:

                profile.username,


                playerID:

                profile.playerID,


                controller:

                1


            }


        ]

    };



    saveRoom();



}





/*
========================================
 Save Room
========================================
*/


function saveRoom(){


    localStorage.setItem(

        "cp64-room",

        JSON.stringify(

            currentRoom

        )

    );


}





/*
========================================
 Load Room
========================================
*/


function loadRoom(){


    const saved =

    localStorage.getItem(

        "cp64-room"

    );



    if(saved){


        currentRoom =

        JSON.parse(saved);


    }


}





/*
========================================
 Get Room
========================================
*/


function getRoom(){


    return currentRoom;


}





/*
========================================
 Leave Room
========================================
*/


function leaveRoom(){


    currentRoom = null;


    localStorage.removeItem(

        "cp64-room"

    );


}





window.addEventListener(

    "load",

    loadRoom

);