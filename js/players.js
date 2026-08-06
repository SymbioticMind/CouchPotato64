/*
========================================
 Couch Potato 64
 Build 0.2.0

 players.js
 Player Management System
========================================
*/


let players = [];





/*
========================================
 Add Player
========================================
*/


function addPlayer(player){


    players.push(player);


}





/*
========================================
 Remove Player
========================================
*/


function removePlayer(playerID){


    players = players.filter(

        player =>

        player.playerID !== playerID

    );


}





/*
========================================
 Get Players
========================================
*/


function getPlayers(){


    return players;


}





/*
========================================
 Load Local Player
========================================
*/


function loadLocalPlayer(){


    const profile = getProfile();



    if(profile){


        players.push(profile);



        console.log(

            "Local player loaded:",

            profile.username

        );


    }


}





window.addEventListener(

    "load",

    loadLocalPlayer

);