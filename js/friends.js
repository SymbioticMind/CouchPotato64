/*
========================================
 Couch Potato 64
 Build 0.2.1

 friends.js
 Friend List System
========================================
*/


let friends = [];





/*
========================================
 Load Friends
========================================
*/


function loadFriends(){


    const saved =

    localStorage.getItem(

        "cp64-friends"

    );



    if(saved){


        friends =

        JSON.parse(saved);


    }



}





/*
========================================
 Save Friends
========================================
*/


function saveFriends(){


    localStorage.setItem(

        "cp64-friends",

        JSON.stringify(

            friends

        )

    );


}





/*
========================================
 Add Friend
========================================
*/


function addFriend(

    friendCode,

    username

){



    if(!friendCode){


        return;


    }



    const friend = {


        username:

        username || "Unknown Player",


        friendCode:

        friendCode,


        status:

        "offline"


    };



    friends.push(friend);



    saveFriends();


}





/*
========================================
 Remove Friend
========================================
*/


function removeFriend(

    friendCode

){



    friends = friends.filter(

        friend =>

        friend.friendCode !== friendCode

    );



    saveFriends();


}





/*
========================================
 Get Friends
========================================
*/


function getFriends(){


    return friends;


}





/*
========================================
 Check Friend Code
========================================
*/


function isValidFriendCode(code){


    return /^CP64-\d{4}-\d{4}$/

    .test(code);


}





window.addEventListener(

    "load",

    loadFriends

);