
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

function addNewUser() {

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
                <img src="${image.target.result
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

function inpimage (img){
    var userImage;
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = function(image){
        userImage = image.target.result;
    }
    console.log(reader);
}