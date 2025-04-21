const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    const gender = currentUser.gender;

    if (gender === "male") {
        document.getElementById("profileImg").src = "./../assets/icons/icons8-male-user-48.png";
    }
    else if(gender == "female"){
        document.getElementById("profileImg").src = "./../assets/icons/icons8-circled-user-female-skin-type-4-48.png";
    }

}