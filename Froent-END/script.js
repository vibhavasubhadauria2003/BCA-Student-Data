import {
  profile_link,
  about,
  user_name,
  profession,
  dob,
  father_name,
  mother_name,
  user_location,
} from "./data.js";

function createTrmplate(
  profile_link,
  about,
  user_name,
  profession,
  dob,
  father_name,
  mother_name,
  user_location) 
  {
  let outerbox = document.createElement("div");
  outerbox.setAttribute("class", "card flex po-relative bgDark border-box");
  document.getElementById("body").append(outerbox);
  {
    let left = document.createElement("div");
    left.setAttribute("class", "left red-border");
    document.querySelector(".card").append(left);
    {
      let profileContainer = document.createElement("div");
      profileContainer.setAttribute("class", "pofile-container red-border");
      document.querySelector(".left").append(profileContainer);
      {
        let profile=document.createElement("img");
        profile.setAttribute("src",`${profile_link}`);
        document.querySelector(".pofile-container").append(profile);
      }
      let aboutContainer=document.createElement("div");
      aboutContainer.setAttribute("class","about-container red-border");
      document.querySelector(".left").append(aboutContainer);
      {
        let para=document.createElement("p");
        para.setAttribute("class","about red-border font3");
        para.innerHTML=about;
        document.querySelector(".about-container").append(para);
      }
    }
  }
  {
    let right = document.createElement("div");
    right.setAttribute("class","right red-border");
    document.querySelector(".card").append(right);
    {
        let nameContainer = document.createElement("div");
        nameContainer.setAttribute("class","name-container red-border");
        document.querySelector(".right").append(nameContainer);
        {
            let userName=document.createElement("h1");
            userName.innerHTML=user_name;
            userName.setAttribute("class","name font2 red-border");
            document.querySelector(".name-container").append(userName);

            let works=document.createElement("h3");
            works.innerHTML=profession;
            works.setAttribute("class","profession font1 red-border");
            document.querySelector(".name-container").append(works);
        }
        let rightBottom = document.createElement("div");
        rightBottom.setAttribute("class","right-bottom red-border");
        document.querySelector(".right").append(rightBottom);
        {
            let personalInfoContainer=document.createElement("div");
            personalInfoContainer.setAttribute("class","personal-info-container red-border");
            document.querySelector(".right-bottom").append(personalInfoContainer);
            {
                let personalInfoHeading=document.createElement("div");
                personalInfoHeading.setAttribute("class","personal-info-heading font2 red-border");
                personalInfoHeading.innerHTML="Personal Information";
                document.querySelector(".personal-info-container").append(personalInfoHeading);

                let personalInfo=document.createElement("div");
                personalInfo.setAttribute("class","personal-info red-border");
                document.querySelector(".personal-info-container").append(personalInfo)
                {
                    let dateofbirth=document.createElement("div");
                    dateofbirth.innerHTML=`Born : ${dob}`;
                    dateofbirth.setAttribute("class","DOB red-border font3 common-personal-info");
                    document.querySelector(".personal-info").append(dateofbirth);

                    let fatherName=document.createElement("div");
                    fatherName.innerHTML=`Father's name : ${father_name}`;
                    fatherName.setAttribute("class","father-name red-border font3 common-personal-info");
                    document.querySelector(".personal-info").append(fatherName);

                    let motherName=document.createElement("div");
                    motherName.innerHTML=`Mother's name : ${mother_name}`;
                    motherName.setAttribute("class","mother-name red-border font3 common-personal-info");
                    document.querySelector(".personal-info").append(motherName);

                    let place=document.createElement("div");
                    place.innerHTML=`Location : ${user_location}`;
                    place.setAttribute("class","location red-border font3 common-personal-info");
                    document.querySelector(".personal-info").append(place);
                }
            }
        }
    }
  }
}

createTrmplate(
  profile_link,
  about,
  user_name,
  profession,
  dob,
  father_name,
  mother_name,
  user_location
);
