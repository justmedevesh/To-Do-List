let textbx = document.querySelector('#textbx');
let list = document.querySelector('#list')

textbx.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (textbx) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${textbx}<i></i>`;

    listItem.addEventListener("click" , function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click" , function(){
        listItem.remove();
    })

    list.appendChild(listItem);
}