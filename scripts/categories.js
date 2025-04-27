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




//Storing cards data in local storage and then retrieve them

const algebraData = JSON.parse(localStorage.getItem("algebra"));
const geometryData = JSON.parse(localStorage.getItem("geometry"));
const grammarData = JSON.parse(localStorage.getItem("grammar"));
const vocabularyData = JSON.parse(localStorage.getItem("vocabulary"));


document.addEventListener("DOMContentLoaded", () => {
    const sectionMap = {
        grade7: document.getElementById("grade7-section"),
        grade8: document.getElementById("grade8-section"),
        grade9: document.getElementById("grade9-section"),
        grade10: document.getElementById("grade10-section"),
        grade11: document.getElementById("grade11-section"),
        grade12: document.getElementById("grade12-section")
    };

    //combine all the lists of subjects into one list (... means speading each list into 1 big list with other items)
    const allSubjects = [...algebraData, ...geometryData, ...grammarData, ...vocabularyData];

    allSubjects.forEach((item) => {
        
        const grade = item.description.toLowerCase().replace(" ", ""); // "Grade 7" -> "grade7" 
        
        const container = sectionMap[grade];
        
        if (container) {
            const card = createCard(item);
            container.appendChild(card);
        }
    });
});




function createCard(item) {

    const card = document.createElement("div");
    card.className = "content-card";
    

    // Image
    const img = document.createElement("img");
    img.src = item.image;

    // Title + Description
    const titleContainer = document.createElement("div");
    titleContainer.className = "content-title-container flex column center";

    const title = document.createElement("div");
    title.className = "content-title";
    title.textContent = item.title;

    const desc = document.createElement("div");
    desc.className = "content-description";
    desc.textContent = item.description;

    titleContainer.appendChild(title);
    titleContainer.appendChild(desc);

    // Final assembly
    card.appendChild(img);
    card.appendChild(titleContainer);

    //Add click functionality to all cards except the first summary card
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
        localStorage.setItem("selectedTopic", item.title);
        window.location.href = "./quiz.html";
    });


    return card;
}
