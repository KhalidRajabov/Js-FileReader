function uploadImage(item){
    for (const file of item) {
        let reader = new FileReader;
        reader.readAsDataURL(file)
            let spantag = `<span class="span" style="cursor: pointer" id="span">x</span>`
            reader.onloadend=function(image){
                console.log(file.name + " file loaded");
                let tr = `
                <tr>
                <th scope="row"><img src="${image.target.result}" width="100"></th>
                <td  >${file.name}</td>
                <td  >${file.size}</td>
                <td style="color: red; font-size: 200%;" >${spantag}</td>
                </tr>
                `
                table.innerHTML+=tr
                let span = document.querySelectorAll(".span")
                span.forEach(item_=>{
                    item_.onclick=function(){
                        item_.parentElement.parentElement.remove()
                    }
                })
                input.value=""

                //şəkil əlavə olunduqda əsas sil düyməsi görünsün:
                btnRemove.classList.remove("hide")
            }
        }




    }