/*
========================================
 Couch Potato 64
 Build 0.3.2

 onlineRooms.js
 Firebase Online Room System
========================================
*/


let onlineRoom = null;
let roomListener = null;



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
 Create Online Room
========================================
*/


async function createOnlineRoom(){


    const profile = getProfile();


    if(!profile){

        alert(

            "Create a profile first."

        );

        return;

    }



    const code = generateRoomCode();



    onlineRoom = {


        code: code,


        host:

        profile.playerID,


        players:{


            [profile.playerID]:


            {


                username:

                profile.username,


                avatar:

                profile.avatar,


                controller:

                1


            }


        }


    };



    await firebase.database()

    .ref(

        "rooms/" + code

    )

    .set(

        onlineRoom

    );



    watchOnlineRoom(code);



    openLobby();



}





/*
========================================
 Join Online Room
========================================
*/


async function joinOnlineRoom(code){


    const profile = getProfile();



    if(!profile){

        return;

    }



    const roomRef = firebase.database()

    .ref(

        "rooms/" + code

    );



    const snapshot = await roomRef.get();



    if(!snapshot.exists()){


        alert(

            "Room not found."

        );


        return;

    }



    const room = snapshot.val();



    room.players[profile.playerID] = {


        username:

        profile.username,


        avatar:

        profile.avatar,


        controller:

        Object.keys(

            room.players

        ).length + 1


    };



    await roomRef.set(room);



    onlineRoom = room;



    watchOnlineRoom(code);



    openLobby();


}





/*
========================================
 Watch Room
========================================
*/


function watchOnlineRoom(code){


    if(roomListener){


        roomListener.off();


    }



    roomListener = firebase.database()

    .ref(

        "rooms/" + code

    );



    roomListener.on(

        "value",

        snapshot => {


            if(snapshot.exists()){


                onlineRoom = snapshot.val();



                displayOnlinePlayers();


            }


        }

    );


}





/*
========================================
 Leave Room
========================================
*/


async function leaveOnlineRoom(){


    const profile = getProfile();



    if(!onlineRoom || !profile){

        return;

    }



    const roomRef = firebase.database()

    .ref(

        "rooms/" +

        onlineRoom.code

    );



    if(

        onlineRoom.host ===

        profile.playerID

    ){


        await roomRef.remove();


    }

    else{


        delete onlineRoom.players[

            profile.playerID

        ];



        await roomRef.set(

            onlineRoom

        );


    }



    onlineRoom = null;



}





/*
========================================
 Join Button Helper
========================================
*/


async function joinOnlineGame(){


    const code =

    document.getElementById(

        "room-code-input"

    ).value

    .toUpperCase();



    if(!code){

        return;

    }



    joinOnlineRoom(code);


}