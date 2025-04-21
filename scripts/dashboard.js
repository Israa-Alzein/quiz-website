// const userResults = JSON.parse(localStorage.getItem("userResults"))

// const username = userResults.username;
// const gender = userResults.gender;
// const finalscore = userResults.finalscore;

// if(gender == male){
//     document.getElementById("profileImg").src = "./../assets/icons/icons8-male-user-48.png";
// }
// else if(gender == "female"){
//     document.getElementById("profileImg").src = "./../assets/icons/icons8-circled-user-female-skin-type-4-48.png";
// }


// setting admin username password in local storage
const adminUser = {
    name: "admin",
    password: "123"
};

localStorage.setItem("adminUser", JSON.stringify(adminUser));


document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("resultsTableBody"); // Make sure your HTML has a <tbody> with this ID

    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];

    userResults.forEach((user, index) => {
        const row = document.createElement("tr");

        const indexCell = document.createElement("td");
        indexCell.textContent = index + 1;

        const iconCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = user.gender === "male" ? "./../assets/male.png" : "./../assets/female.png"; // Adjust image paths
        img.alt = "User icon";
        img.width = 40;
        img.height = 40;
        iconCell.appendChild(img);

        const usernameCell = document.createElement("td");
        usernameCell.textContent = user.username;

        const quizCell = document.createElement("td");
        quizCell.textContent = user.quiz;

        const scoreCell = document.createElement("td");
        scoreCell.textContent = user.score;

        

        row.appendChild(indexCell);
        row.appendChild(usernameCell);
        row.appendChild(genderCell);
        row.appendChild(scoreCell);
        row.appendChild(iconCell);

        tableBody.appendChild(row);
    });
});
