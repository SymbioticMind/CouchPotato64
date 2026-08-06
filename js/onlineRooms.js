/*
========================================
 Couch Potato 64
 Build 0.3.1

 onlineRooms.js
 Online Room System
========================================
*/


let onlineRoom = null;





/*
========================================
 Create Online Room
========================================
*/


async function createOnlineRoom(){


    const profile = getProfile();



    if(!profile){

        return;

    }



    const roomCode =

    generateRoomCode();



    onlineRoom = {


        code: roomCode,


        host: profile.username,


        players: [


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



    await firebase.database()

    .ref(

        "rooms/" + roomCode

    )

    .set(

        onlineRoom

    );



    console.log(

        "Online room created:",

        roomCode

    );



}





/*
========================================
 Join Online Room
========================================
*/


async function joinOnlineRoom(code){


    const snapshot =

    await firebase.database()

    .ref(

        "rooms/" + code

    )

    .get();



    if(!snapshot.exists()){


        alert(

            "Room not found."

        );


        return;


    }



    onlineRoom =

    snapshot.val();



    const profile =

    getProfile();



    onlineRoom.players.push({


        username:

        profile.username,


        playerID:

        profile.playerID,


        controller:

        onlineRoom.players.length + 1


    });



    await firebase.database()

    .ref(

        "rooms/" + code

    )

    .set(

        onlineRoom

    );



}





/*
========================================
 Listen For Room Changes
========================================
*/


function watchRoom(code){


    firebase.database()

    .ref(

        "rooms/" + code

    )

    .on(

        "value",

        snapshot => {


            if(snapshot.exists()){


                onlineRoom =

                snapshot.val();



                console.log(

                    "Room updated",

                    onlineRoom

                );


            }


        }

    );


}