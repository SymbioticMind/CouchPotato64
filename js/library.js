/*
========================================
 Couch Potato 64
 Build 0.1.1

 library.js
 Personal Game Library System
========================================
*/


let gameLibrary = [];



/*
========================================
 Load Library
========================================
*/


function loadLibrary() {


    const savedGames = localStorage.getItem(
        "cp64-library"
    );


    if(savedGames) {


        gameLibrary = JSON.parse(
            savedGames
        );


    }


    displayLibrary();

}



/*
========================================
 Save Library
========================================
*/


function saveLibrary() {


    localStorage.setItem(

        "cp64-library",

        JSON.stringify(
            gameLibrary
        )

    );


}



/*
========================================
 Add Game
========================================
*/


function addGame() {


    const gameName = prompt(

        "Enter game name:"

    );


    if(!gameName) {


        return;


    }



    gameLibrary.push({

        name: gameName,

        added:

        new Date().toISOString()


    });



    saveLibrary();

    displayLibrary();


}



/*
========================================
 Display Library
========================================
*/


function displayLibrary() {


    const library = document.getElementById(

        "game-library"

    );



    if(!library) {


        return;


    }



    library.innerHTML = "";



    if(gameLibrary.length === 0) {


        library.innerHTML =

        "<p>No games added yet.</p>";


        return;


    }



    gameLibrary.forEach(

        (game,index)=>{


            const entry = document.createElement(

                "div"

            );



            entry.className =

            "game-entry";



            entry.innerHTML = `

                <strong>

                    ${game.name}

                </strong>

                <button onclick="removeGame(${index})">

                    Remove

                </button>

            `;



            library.appendChild(

                entry

            );


        }

    );


}



/*
========================================
 Remove Game
========================================
*/


function removeGame(index) {


    gameLibrary.splice(

        index,

        1

    );


    saveLibrary();

    displayLibrary();


}



/*
========================================
 Startup
========================================
*/


window.addEventListener(

    "load",

    loadLibrary

);