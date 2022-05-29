//kod berbaddi amma silmeye elim gelmedi

let file = document.getElementById("file");
let userArea = document.getElementById("userArea");
let name = document.getElementById("nameInput");
let surName = document.getElementById("surNameInput");
let nickName = document.getElementById("nickName");
let userInfo = document.getElementById("userInfo");
let addUser = document.getElementById("addUser");
let form = document.getElementById("form");
let userİd = 0;
let img = "./assets/avatars/avatar.jpg";
addUser.onclick = function () {
  if (
    name.value == "" ||
    surName.value == "" ||
    nickName.value == "" ||
    userInfo.value == ""
  ) {
    alert("Fill all the blanks and upload image again");
  }
  else {
    addNewUser();
    form.reset();
    img = "./assets/avatars/avatar.jpg"
  }
}
file.addEventListener("change", (e) => {
  for (const file of e.target.files) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (image) {
      img = image.target.result;
    };
  }
});

function addNewUser() {
  let card = `
    <div id="${++userİd}" class="card m-2" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="username-site" class="card-title">${nickName.value}</h5>
      <p id="info-site" class="card-text">${userInfo.value}</p>
      <p id="name-site" class="card-text">${name.value + " " + surName.value}</p>
      <div class="row justify-content-evenly">
      <button style="width:40%" id="edit" type="button" class="btn btn-primary">Edit</button>
      <button style="width:40%" id="update" type="button" class="btn btn-success">Update</button>
      </div>
      <div style="margin-top: 10px" class="row text-center justify-content-around">
      <button style="width:90%" id="rmvCard" type="button" class="btn btn-danger">Delete</button>
      </div>
      
    </div>
  </div>
    `
  userArea.innerHTML += card;
  let edit = document.getElementById("edit")
  edit.onclick = _ => {
    name.focus();
    let updateButton = document.getElementById("update")
  updateButton.onclick=function(){
    if (name.value == "" ||
    surName.value == "" ||
    nickName.value == "" ||
    userInfo.value == ""){
      alert("Fill all the blanks to update the user")
  }
  else{
    let cardusername = document.getElementById("username-site")
      let userrealname = document.getElementById("name-site")
      let userinfosite = document.getElementById("info-site")
      cardusername.innerHTML=`${nickName.value}`
      userrealname.innerHTML=`${name.value + " " + surName.value}`
      userinfosite.innerText=`${userInfo.value}`
      form.reset();
  }
  }
  }

  let rmvCard = document.getElementById("rmvCard")
  rmvCard.onclick=function(){
    this.parentElement.parentElement.parentElement.innerHTML="";
  }
  
}