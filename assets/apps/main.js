let file = document.getElementById("file");
let userArea = document.getElementById("userArea");
let name = document.getElementById("nameInput");
let surName = document.getElementById("surNameInput");
let nickName = document.getElementById("nickName");
let userInfo = document.getElementById("userInfo");
let addUser = document.getElementById("addUser");
let form = document.getElementById("form");
let edit = document.getElementById("edit")
let card = document.getElementById("main-card")
let cardImg = document.getElementById("card-img-site")
let cardTitle = document.getElementById("card-username-site")
let cardInfo = document.getElementById("card-info-site")
let cardName = document.getElementById("card-name-site")
let img = "./assets/avatars/avatar.jpg";
let locImage;


window.onload = function () {
  card.classList.remove("d-none")
  let LSNick = localStorage.getItem("nick")
  let LSInfo = localStorage.getItem("info")
  let LSfullName = localStorage.getItem("name")
  let LSImage = localStorage.getItem("img")

  cardTitle.innerHTML = LSNick
  cardInfo.innerHTML = LSInfo
  cardName.innerHTML = LSfullName

  if (LSImage!=undefined) {
    cardImg.setAttribute("src", LSImage);
}
}

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
    if(file.value!=null){
      cardImg.setAttribute("src", locImage)
    }
    cardTitle.innerHTML = nickName.value
    cardInfo.innerHTML = userInfo.value
    cardName.innerHTML = name.value + " " + surName.value;
    localStorage.setItem("nick", nickName.value)
    localStorage.setItem("info", userInfo.value)
    localStorage.setItem("img", locImage)
    localStorage.setItem("name", name.value + " " + surName.value)
    card.classList.remove("d-none")
    form.reset();
  }
}
file.addEventListener("change", (e) => {
  for (const file of e.target.files) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (image) {
      locImage = image.target.result;
    };
  }
});

edit.onclick = _ => {
  name.focus();
  
}