document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("userTxt").value;
    const password = document.getElementById("passTxt").value;
    
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];


    // Using find to get the full user object if it already exist
    const matchedUser = existingUsers.find(user => 
        user.username === username && user.password === password
    );

    if(!matchedUser){
        alert("This user doesn't exist. Please Sign up instead.");
    }
    else{

        localStorage.setItem("currentUser", JSON.stringify(matchedUser));

        window.location.href = "./../pages/home.html";
    }


});