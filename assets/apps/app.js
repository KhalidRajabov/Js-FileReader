let file = document.getElementById("file");
let userArea = document.getElementById("userArea");
let name = document.getElementById("nameInput");
let surName = document.getElementById("surNameInput");
let nickName = document.getElementById("nickName");
let userInfo = document.getElementById("userInfo");
let addUser = document.getElementById("addUser");
let form = document.getElementById("form");
let img="./assets/avatars/avatar.jpg";
addUser.onclick=function(){
    if (
        name.value == "" ||
        surName.value == "" ||
        nickName.value == "" ||
        userInfo.value == ""
        ){
            alert("Fill all the blanks and upload image again");        
        }  
        else{
            addNewUser();
            form.reset();

        }
}
file.addEventListener("change", (e) => {
  for (const file of e.target.files) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (image) {
      img=image.target.result;
    };
  }
});

function addNewUser(){
    let card = `
    <div class="card m-2" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nickName.value}</h5>
      <p class="card-text">${userInfo.value}</p>
      <p class="card-text">${name.value + " " + surName.value}</p>
    </div>
  </div>
    `
userArea.innerHTML += card;
}
