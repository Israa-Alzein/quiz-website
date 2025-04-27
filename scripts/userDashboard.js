//changing profile icon
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    const user = currentUser.username;
    const gender = currentUser.gender;

    if (gender === "male") {
        document.getElementById("profileImg").src = "./../assets/icons/icons8-male-user-48.png";
        document.getElementById("prof").src = "./../assets/icons/icons8-male-user-48.png";
    }
    else if(gender == "female"){
        document.getElementById("profileImg").src = "./../assets/icons/icons8-circled-user-female-skin-type-4-48.png";
        document.getElementById("prof").src = "./../assets/icons/icons8-circled-user-female-skin-type-4-48.png";
    }

    //add username to html dropdown
    const usrname = document.getElementById("usrnme");
    const node= document.createTextNode(user);
    usrname.append(node);

}


// drop down 
const profileButton = document.getElementById("profileBtn");
profileButton.addEventListener("click", dropDown);

function dropDown(event){
    event.stopPropagation(); //I can click on anywhereinside the bottom the toggle will happen
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}


//logging out
const logout = document.getElementById("logout");
logout.addEventListener("click", logOut);

function logOut(){
    window.location.href = "./../index.html";
}



// Table data 

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("resultsTableBody");

    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));



    userResults.forEach((user) => {

        if(user.username == currentUser.username){

            const row = document.createElement("tr");

            const quizCell = document.createElement("td");
            quizCell.textContent = user.quiz;

            const scoreCell = document.createElement("td");
            scoreCell.textContent = user.score;

            
            row.appendChild(quizCell);
            row.appendChild(scoreCell);
            

            tableBody.appendChild(row);

        }
    });
});

