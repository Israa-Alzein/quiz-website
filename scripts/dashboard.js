document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("resultsTableBody");

    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];

    userResults.forEach((user, index) => {
        const row = document.createElement("tr");

        const indexCell = document.createElement("td");
        indexCell.textContent = index + 1;

        const iconCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = user.gender === "male" ? "./../assets/icons/icons8-male-user-48.png" : "./../assets/icons/icons8-circled-user-female-skin-type-4-48.png"; // Adjust image paths
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
        row.appendChild(iconCell);
        row.appendChild(usernameCell);
        row.appendChild(quizCell);
        row.appendChild(scoreCell);
        

        tableBody.appendChild(row);
    });
});
