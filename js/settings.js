/*
========================================
 Couch Potato 64
 Build 0.1.1

 settings.js
 User Settings Framework
========================================
*/


const settings = {


    theme:

    "launchConsole",


    controllerLayout:

    "default",


    videoQuality:

    "auto",


    audioEnabled:

    true


};





/*
========================================
 Save Settings
========================================
*/


function saveSettings() {


    localStorage.setItem(

        "cp64-settings",

        JSON.stringify(settings)

    );


}





/*
========================================
 Load Settings
========================================
*/


function loadSettings() {


    const savedSettings =

    localStorage.getItem(

        "cp64-settings"

    );



    if(savedSettings) {


        const loaded = JSON.parse(

            savedSettings

        );



        Object.assign(

            settings,

            loaded

        );


    }



}





/*
========================================
 Update Setting
========================================
*/


function updateSetting(

    setting,

    value

) {


    if(

        settings.hasOwnProperty(setting)

    ) {


        settings[setting] = value;


        saveSettings();


    }


}





/*
========================================
 Startup
========================================
*/


window.addEventListener(

    "load",

    loadSettings

);