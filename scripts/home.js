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

function dropDown(){
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





//SToring cards data in local storage and then retrieve them

const algebraData = [
    {
    title: "Algebra",
    description: "112.3k activities",
    image: "./../assets/home-images/algebra.webp"
    },
    {
    title: "Algebric expressions",
    description: "Grade 10",
    image: "./../assets/home-images/eqtn-strt-line.webp"
    },
    {
    title: "linear equations",
    description: "Grade 9",
    image: "./../assets/home-images/algebric-expressions.webp"
    },
    {
    title: "equation straight lines",
    description: "Grade 8",
    image: "./../assets/home-images/linear-eqtn.webp"
    },
    {
    title: "linear inequalities",
    description: "Grade 11",
    image: "./../assets/home-images/linear-inequalities.webp"
    }
];
localStorage.setItem("algebra", JSON.stringify(algebraData));




const geometryData = [
    {
    title: "Geometry",
    description: "89.7k activities",
    image: "./../assets/home-images/geometry.webp"
    },
    {
    title: "Angles",
    description: "Grade 7",
    image: "./../assets/home-images/angles.webp"
    },
    {
    title: "Area",
    description: "Grade 9",
    image: "./../assets/home-images/area.webp"
    },
    {
    title: "Basic Geometry",
    description: "Grade 7",
    image: "./../assets/home-images/basic-geometry.webp"
    },
    {
    title: "Circles",
    description: "Grade 10",
    image: "./../assets/home-images/circles.webp"
    }
];
localStorage.setItem("geometry", JSON.stringify(geometryData));




const grammarData = [
    {
    title: "Grammar",
    description: "163.3k activities",
    image: "./../assets/home-images/grammar.webp"
    },
    {
    title: "Grammar in Writing",
    description: "Grade 12",
    image: "./../assets/home-images/grammar-in-writing.webp"
    },
    {
    title: "Parts of Speech",
    description: "Grade 11",
    image: "./../assets/home-images/parts-of-speech.webp"
    },
    {
    title: "Syntax",
    description: "Grade 9",
    image: "./../assets/home-images/syntax.webp"
    },
];
localStorage.setItem("grammar", JSON.stringify(grammarData));




const vocabularyData = [
    {
    title: "Vocabulary",
    description: "466.7k activitiess",
    image: "./../assets/home-images/vocabulary.webp"
    },
    {
    title: "Word Relationships",
    description: "Grade 8",
    image: "./../assets/home-images/world-relationships.webp"
    },
    {
    title: "Specialized Vocabulary",
    description: "Grade 11",
    image: "./../assets/home-images/spcialized-vocabulary.webp"
    },
    {
    title: "Parts of Speech",
    description: "Grade 10",
    image: "./../assets/home-images/parts-of-speech.webp"
    },
    {
    title: "Spelling",
    description: "Grade 9",
    image: "./../assets/home-images/spelling.webp"
    },
];
localStorage.setItem("vocabulary", JSON.stringify(vocabularyData));




const backToSchoolData = [
    {
    title: "All about me",
    description: "11 questions",
    image: "./../assets/home-images/all-about-me.png"
    },
    {
    title: "Pronouncing Names Correctly",
    description: "2 questions",
    image: "./../assets/home-images/pronouncing-names-correctly.png"
    },
    {
    title: "How to Email your Teacher",
    description: "10 questions",
    image: "./../assets/home-images/how-to-email-your-teacher.png"
    },
    {
    title: "Setting Goals for the Year",
    description: "5 questions",
    image: "./../assets/home-images/setting-goals-for-the-year.png"
    },
    {
    title: "Time Management",
    description: "8 questions",
    image: "./../assets/home-images/time-management.png"
    },
];
localStorage.setItem("backToSchool", JSON.stringify(backToSchoolData));





document.addEventListener("DOMContentLoaded", () => {
    const sectionMap = {
        algebra: document.getElementById("algebra-section"),
        geometry: document.getElementById("geometry-section"),
        grammar: document.getElementById("grammar-section"),
        vocabulary: document.getElementById("vocabulary-section"),
        backToSchool: document.getElementById("backToSchool-section")
    };

    for (let sectionName in sectionMap) {
        const container = sectionMap[sectionName];
        const sectionData = JSON.parse(localStorage.getItem(sectionName)) || [];
    
        sectionData.forEach((item, index) => {
            const card = createCard(item, index === 0, sectionName);
            container.appendChild(card);
        });
    }
});



function createCard(item, isFirst = false, sectionName = "") {
    let card = document.createElement("div");

    // Handle the "back to school" special style
    if (sectionName === "backToSchool") {
    card.className = "content-card-backtoschool";
    } else if (isFirst) {
    card.className = "content-card-1st flex column center";
    } else {
    card.className = "content-card";
    }

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

    return card;
}


function createCard(item, isFirst = false, sectionName = "") {
    let card = document.createElement("div");

    // Handle the "back to school" special style
    if (sectionName === "backToSchool") {
        card.className = "content-card-backtoschool";
    } else if (isFirst) {
        card.className = "content-card-1st flex column center";
    } else {
        card.className = "content-card";
    }

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
    if (!isFirst) {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            localStorage.setItem("selectedTopic", item.title);
            window.location.href = "./quiz.html";
        });
    }

    // // Assuming you have a list of topics like this:
    // const topics = [
    //     "Algebric expressions",
    //     "linear equations",
    //     "equation straight lines",
    //     "linear inequalities",
    //     "Angles",
    //     "Area",
    //     "Basic Geometry",
    //     "Circles",
    //     "Grammar in Writing",
    //     "Parts of Speech",
    //     "Syntax",
    //     "Word Relationships",
    //     "Specialized Vocabulary",
    //     "Parts of Speech",
    //     "Spelling",
    //     "All about me",
    //     "Pronouncing Names Correctly",
    //     "How to Email your Teacher",
    //     "Setting Goals for the Year",
    //     "Time Management",
    // ];
    
    // // Select the container where the topics will be placed
    // const container = document.querySelector(".items-container");
    
    // // Loop through the topics to create each clickable item
    // topics.forEach((topic) => {
    //     const item = document.createElement("div");
    //     item.classList.add("item");
    //     item.textContent = topic;
    
    //     // Add an event listener to store the selected topic in localStorage
    //     item.addEventListener("click", () => {
    //     localStorage.setItem("selectedTopic", topic);  // Store the selected topic
    //     window.location.href = "quiz.html";  // Redirect to quiz page
    //     });
    
    //     // Append the item to the container
    //     container.appendChild(item);
    //});
  

    return card;
}





// // Assuming you have a list of topics like this:
// const topics = [
//     "Algebric expressions",
//     "linear equations",
//     "equation straight lines",
//     "linear inequalities",
//     "Angles",
//     "Area",
//     "Basic Geometry",
//     "Circles",
//     "Grammar in Writing",
//     "Parts of Speech",
//     "Syntax",
//     "Word Relationships",
//     "Specialized Vocabulary",
//     "Parts of Speech",
//     "Spelling",
//     "All about me",
//     "Pronouncing Names Correctly",
//     "How to Email your Teacher",
//     "Setting Goals for the Year",
//     "Time Management",
//   ];
  
//   // Select the container where the topics will be placed
//   const container = document.querySelector(".items-container");
  
//   // Loop through the topics to create each clickable item
//   topics.forEach((topic) => {
//     const item = document.createElement("div");
//     item.classList.add("item");
//     item.textContent = topic;
  
//     // Add an event listener to store the selected topic in localStorage
//     item.addEventListener("click", () => {
//       localStorage.setItem("selectedTopic", topic);  // Store the selected topic
//       window.location.href = "quiz.html";  // Redirect to quiz page
//     });
  
//     // Append the item to the container
//     container.appendChild(item);
//   });
  
