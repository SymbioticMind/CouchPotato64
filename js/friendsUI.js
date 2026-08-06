/*
========================================
 Couch Potato 64
 Build 0.2.2

 friendsUI.js
 Friends Interface
========================================
*/





function loadFriendsUI(){


    const identity = getIdentity();



    const codeDisplay =

    document.getElementById(

        "friend-code-display"

    );



    if(codeDisplay && identity){


        codeDisplay.innerText =

        identity.friendCode;


    }



    displayFriends();


}





function displayFriends(){


    const list =

    document.getElementById(

        "friends-list"

    );



    if(!list){

        return;

    }



    list.innerHTML = "";



    const friendList = getFriends();



    if(friendList.length === 0){


        list.innerHTML =

        "<p>No friends added.</p>";

        return;


    }



    friendList.forEach(friend => {



        const item =

        document.createElement(

            "div"

        );



        item.innerHTML = `


        <p>

        ${friend.username}

        <br>

        ${friend.friendCode}

        </p>


        <button onclick="removeFriendUI('${friend.friendCode}')">

        Remove

        </button>


        `;



        list.appendChild(item);



    });



}





function submitFriend(){



    const code =

    document.getElementById(

        "friend-code-input"

    ).value;



    const name =

    document.getElementById(

        "friend-name-input"

    ).value;



    if(!isValidFriendCode(code)){


        alert(

            "Invalid Friend Code"

        );


        return;


    }



    addFriend(

        code,

        name

    );



    displayFriends();



    showScreen(

        "friends-screen"

    );


}





function removeFriendUI(code){


    removeFriend(code);


    displayFriends();


}





function copyFriendCode(){


    const code =

    getIdentity()

    .friendCode;



    navigator.clipboard.writeText(

        code

    );



    alert(

        "Friend Code Copied!"

    );


}





window.addEventListener(

    "load",

    loadFriendsUI

);