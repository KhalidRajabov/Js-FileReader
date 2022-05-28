let file = document.getElementById("file");
let userArea = document.getElementById("userArea");
let name = document.getElementById("nameInput");
let surName = document.getElementById("surNameInput");
let nickName = document.getElementById("nickName");
let userInfo = document.getElementById("userInfo");
let addUser = document.getElementById("addUser");

addUser.onclick=function(){
    if (
        name.value == "" ||
        surName.value == "" ||
        nickName.value == "" ||
        userInfo.value == ""
        ){
            alert("Fill all the blanks and upload image again");        
        }  
        else if(name.value != "" &&
        surName.value != "" &&
        nickName.value != "" &&
        userInfo.value != ""){
            addNewUser();

        }
}

file.addEventListener("change", (e) => {
  if (
    name.value == "" ||
    surName.value == "" ||
    nickName.value == "" ||
    userInfo.value == ""
  ) {
    file.value = "";
    alert("Fill all the blanks and upload image again");
  } else {
    uploadImage(e.target.files);
    file.value = "";
  }
});

function addNewUser(){
    let card = `
    <div class="card m-2" style="width: 18rem;">
    <img src="assets/avatars/avatar.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nickName.value}</h5>
      <p class="card-text">${userInfo.value}</p>
      <p class="card-text">${name.value + " " + surName.value}</p>
    </div>
  </div>
    `;
userArea.innerHTML += card;

(name.value = ""),
(surName.value = ""),
(nickName.value = ""),
(userInfo.value = ""),
(file.value = "");

}
function uploadImage(item) {
  for (const file of item) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (image) {
      console.log(file.name + " file loaded");
      let card = `
                <div class="card m-2" style="width: 18rem;">
                <img src="${
                  image.target.result
                }" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${nickName.value}</h5>
                  <p class="card-text">${userInfo.value}</p>
                  <p class="card-text">${name.value + " " + surName.value}</p>
                </div>
              </div>
                `;
      userArea.innerHTML += card;
      (name.value = ""),
        (surName.value = ""),
        (nickName.value = ""),
        (userInfo.value = ""),
        (file.value = "");
    };
  }
}
