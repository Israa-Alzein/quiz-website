document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("userTxt").value;
    const password = document.getElementById("passTxt").value;
    
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(user => 
        user.username === username && user.password === password
    );

    if(!userExists){
        alert("This user doesn't exist. Please Sign up instead.");
    }
    else{
        window.location.href = "./../pages/home.html";
    }


});