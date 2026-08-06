/*
========================================
 Couch Potato 64
 Build 0.3.0

 lobbyUI.js
 Lobby Interface
========================================
*/



function openLobby(){


    const room = getRoom();



    if(!room){


        alert(

            "No active room."

        );


        return;


    }



    document.getElementById(

        "room-code-display"

    ).innerText =

    room.code;



    displayLobbyPlayers();



    showScreen(

        "lobby-screen"

    );


}





function displayLobbyPlayers(){


    const room = getRoom();



    const list =

    document.getElementById(

        "lobby-players"

    );



    if(!list || !room){

        return;

    }



    list.innerHTML = "";



    room.players.forEach(player => {



        const entry =

        document.createElement(

            "p"

        );



        entry.innerText =


        player.controller +

        ". "

        +

        player.username;



        list.appendChild(entry);



    });



}





function createLobby(){


    createRoom();


    openLobby();


}





function exitLobby(){


    leaveRoom();


    showScreen(

        "home-screen"

    );


}