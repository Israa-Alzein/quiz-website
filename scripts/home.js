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
    title: "Algebraic expressions",
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




