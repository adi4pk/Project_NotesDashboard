//variabile globale
let currentPage = "allEvents";

//selectors
let cardContainer = document.querySelector(".card-container");
let addNotesBtn = document.querySelector(".add-notes-btn");
let modalContainer = document.querySelector(".modal-container");
let modalBtnAdd = document.querySelector(".modal-btn-add");
let modalBtnDiscard = document.querySelector(".modal-btn-discard");
let cardType = modalContainer.querySelector(".select-card-type");
let navContainer = document.querySelector(".nav-container");
let allEvents = navContainer.querySelector(".all-notes");
let favEvents = navContainer.querySelector(".favorite-notes");

let businessSection = navContainer.querySelector(".business-par");
let socialSection = navContainer.querySelector(".social-par");
let importantSection = navContainer.querySelector(".imp-par");
let evenimenteOriginal = evenimente;
let error = cardContainer.querySelector(".error-no-events");
let noData = document.querySelector(".no-data");

//cod de initializare
attachCards(evenimente);

//events
addNotesBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

modalBtnAdd.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  saveEvent();

  // if(cardType.childNodes[1].value === "business"){
  //     objCard.assign({type: "business"});
  // }

  // if(cardType.childNodes[1].value === "business"){
  //     objCard.type = "business";
  // };

  console.log(currentPage);
  switch (currentPage) {
    case "allEvents":
      attachCards(evenimente);
      break;
    case "businessSection":
      bus = showBus(evenimente);
      attachCards(bus);
      break;
    case "socialSection":
      soc = showSoc(evenimente);
      attachCards(soc);
      break;
    case "importantSection":
      imp = showImp(evenimente);
      attachCards(imp);
      break;
    case "favEvents":
      attachCards(evenimente);
      break;
    default:
      attachCards(evenimente);
  }
});

modalBtnDiscard.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

// allEvents.addEventListener("click", () => {
//   handleFilterByType(evenimente);
//   currentPage = "allEvents";
// });

// businessSection.addEventListener("click", () => {
//   handleFilterByType(filterByType(evenimente, "business"));
//   currentPage = "businessSection";
// });

// socialSection.addEventListener("click", () => {
//   handleFilterByType(filterByType(evenimente, "social"));
//   currentPage = "socialSection";
// });

// importantSection.addEventListener("click", () => {
//   handleFilterByType(filterByType(evenimente, "important"));
//   currentPage = "importantSection";
// });

//

navContainer.addEventListener("click", (ev) =>{
    let obj = ev.target;

    if(obj.classList.contains("all-notes")){
        handleFilterByType(evenimente);
        currentPage = "allEvents";
    }else if(obj.classList.contains("business-par")){
        handleFilterByType(filterByType(evenimente, "business"));
        currentPage = "businessSection";
    }else if(obj.classList.contains("social-par")){
        handleFilterByType(filterByType(evenimente, "social"));
        currentPage = "socialSection";
    }else if(obj.classList.contains("imp-par")){
        handleFilterByType(filterByType(evenimente, "important"));
        currentPage = "importantSection";
    }else if(obj.classList.contains("favorite-notes")){
      handleFilterByType(filterByFav(evenimente))
      currentPage = "favEvents";
    }
})

cardContainer.addEventListener("click", (ev) => {
  let obj = ev.target;
  let card = obj.closest(".card");

  if (obj.classList.contains("trash")) {
    let data = obj.parentNode.parentNode.className.split(" ")[1].split("-")[1];
    evenimente = deleteEvenimentById(evenimente, data);
    attachCards(evenimente);
  } else if (obj.classList.contains("star")) {      //favorite
    favoriteCard(obj.parentNode.parentNode);

  } else if (obj.classList.contains("edit")) {
    let data = obj.parentNode.parentNode;
    editCard(data);
  } else if (obj.classList.contains("save")) {
    let btnSave = card.querySelector(".save");
    let parent = obj.parentNode;

    let btnEdit = document.createElement("p");
    saveCard(card);
    btnSave.classList.toggle("hide");
    btnSave.classList.toggle("inline");

    parent.appendChild(btnEdit);
    btnEdit.classList.add("edit");
    btnEdit.textContent = "EDIT";
  }
});
