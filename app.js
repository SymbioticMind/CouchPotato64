/*
========================================
 Couch Potato 64
 Build 0.1.0

 app.js
 Foundation Logic
========================================
*/


console.log(
    "Couch Potato 64 initialized."
);



/*
========================================
 Game Room Functions
========================================
*/


function hostGame() {


    alert(

        "Host Game selected.\n\n" +

        "Online multiplayer systems are coming soon!"

    );


}



function joinGame() {


    alert(

        "Join Game selected.\n\n" +

        "Room connection systems are coming soon!"

    );


}



/*
========================================
 Theme System Foundation
========================================
*/


const themes = {


    launchConsole: {

        name:"Launch Console",

        primary:"#00ff88",

        secondary:"#0088ff"

    },


    midnightCRT: {

        name:"Midnight CRT",

        primary:"#ff00cc",

        secondary:"#5500ff"

    },


    arcadeMode: {

        name:"Arcade Mode",

        primary:"#ff9900",

        secondary:"#ff0055"

    }


};



let currentTheme =

"launchConsole";



function loadTheme(themeName){


    const theme = themes[themeName];


    if(!theme){

        return;

    }


    document.documentElement.style
    .setProperty(
        "--primary",
        theme.primary
    );


    document.documentElement.style
    .setProperty(
        "--secondary",
        theme.secondary
    );


    currentTheme = themeName;


    console.log(

        "Theme changed:",

        theme.name

    );


}



/*
========================================
 Startup
========================================
*/


window.onload = function(){


    loadTheme(currentTheme);


};