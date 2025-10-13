//selectors

let cardContainer=document.querySelector(".card-container");
let addNotesBtn=document.querySelector(".add-notes-btn");
let modalContainer = document.querySelector(".modal-container");
let modalBtnAdd=document.querySelector(".modal-btn-add");
let modalBtnDiscard=document.querySelector(".modal-btn-discard");


addNotesBtn.addEventListener("click", () =>{
    
    modalContainer.classList.add("show");
});

modalBtnAdd.addEventListener("click", () =>{
    modalContainer.classList.remove("show");
    addCard();
    
});

modalBtnDiscard.addEventListener("click", () =>{
    modalContainer.classList.remove("show");
});

attachCards(evenimente);

cardContainer.addEventListener("click", (ev)=>{
    let obj=ev.target;
    let card = obj.closest(".card");    


    if(obj.classList.contains("trash")){
        
      let data=(obj.parentNode.parentNode).className.split(" ")[1].split("-")[1];
      evenimente=deleteEvenimentById(evenimente,data);
      attachCards(evenimente);

    }else if(obj.classList.contains("star")){
        favoriteCard(obj);
    }else if(obj.classList.contains("edit")){
        
        let data=obj.parentNode.parentNode;
        // console.log(data);
        editCard(obj);
        
        
        
    }else if(obj.classList.contains("save")){
        let btnSave = card.querySelector(".save");
        let parent = obj.parentNode;
        
        let btnEdit = document.createElement("p");
        saveCard(card);
        btnSave.classList.toggle("hide");
        btnSave.classList.toggle("inline");

        parent.appendChild(btnEdit);
        btnEdit.classList.add("edit");
        btnEdit.textContent=("EDIT");
    };
});
