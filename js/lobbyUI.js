/*
========================================
 Couch Potato 64
 Build 0.3.2

 lobbyUI.js
 Online Lobby Interface
========================================
*/



function openLobby(){


    showScreen(

        "lobby-screen"

    );


    displayOnlinePlayers();


}





function displayOnlinePlayers(){


    const list =

    document.getElementById(

        "lobby-players"

    );



    const codeDisplay =

    document.getElementById(

        "room-code-display"

    );



    if(!onlineRoom){

        return;

    }



    if(codeDisplay){


        codeDisplay.innerText =

        onlineRoom.code;


    }



    if(!list){

        return;

    }



    list.innerHTML = "";



    Object.values(

        onlineRoom.players

    )

    .forEach(player=>{


        const entry =

        document.createElement(

            "p"

        );



        entry.innerText =


        player.avatar +

        " " +

        player.username +

        "  | Controller " +

        player.controller;



        list.appendChild(entry);



    });


}





async function exitLobby(){


    await leaveOnlineRoom();



    showScreen(

        "home-screen"

    );


}





function startGame(){


    alert(

        "Game launch system coming soon!"

    );


}