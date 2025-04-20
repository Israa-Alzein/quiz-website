
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("usernameTxt").value;
    const password = document.getElementById("passwordTxt").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;


    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
        username: username,
        password: password,
        gender: gender
    };

    const userExists = existingUsers.some(user => 
        user.username === newUser.username && user.password === newUser.password
    );
    
    if (userExists) {
        alert("This user already exists. Please log in instead.");
    } else {

        existingUsers.push(newUser);

        localStorage.setItem("users", JSON.stringify(existingUsers));

        window.location.href = "./../pages/home.html";
    }

});