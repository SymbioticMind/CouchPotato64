/*
========================================
 Couch Potato 64
 Build 0.1.1

 themes.js
 Theme Management System
========================================
*/


const themes = {


    launchConsole: {


        name: "Launch Console",


        primary: "#00ff88",


        secondary: "#0088ff",


        background: "#101018"


    },



    midnightCRT: {


        name: "Midnight CRT",


        primary: "#ff00cc",


        secondary: "#5500ff",


        background: "#080812"


    },



    arcadeMode: {


        name: "Arcade Mode",


        primary: "#ff9900",


        secondary: "#ff0055",


        background: "#181008"


    }


};





let currentTheme = "launchConsole";





/*
========================================
 Apply Theme
========================================
*/


function applyTheme(themeName) {


    const theme = themes[themeName];


    if(!theme) {


        console.log(

            "Theme not found:",

            themeName

        );


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



    document.documentElement.style
    .setProperty(

        "--background",

        theme.background

    );



    currentTheme = themeName;



    localStorage.setItem(

        "cp64-theme",

        themeName

    );


}





/*
========================================
 Change Theme
========================================
*/


function changeTheme(themeName) {


    applyTheme(themeName);


    console.log(

        "Theme changed to:",

        themes[themeName].name

    );


}





/*
========================================
 Load Saved Theme
========================================
*/


function loadTheme() {


    const savedTheme = localStorage.getItem(

        "cp64-theme"

    );



    if(savedTheme) {


        applyTheme(savedTheme);


    }

    else {


        applyTheme(

            currentTheme

        );


    }


}





window.addEventListener(

    "load",

    loadTheme

);