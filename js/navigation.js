/*
========================================
 Couch Potato 64
 Build 0.1.1

 navigation.js
 Screen Management System
========================================
*/


function showScreen(screenID) {


    const screens = document.querySelectorAll(
        ".screen"
    );


    screens.forEach(screen => {


        screen.classList.remove(
            "active"
        );


    });



    const target = document.getElementById(
        screenID
    );


    if(target) {


        target.classList.add(
            "active"
        );


    }


}