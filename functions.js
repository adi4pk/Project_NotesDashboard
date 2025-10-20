//functie ce creaza un card primeste ca parametru

function createCard(evenim) {
  let card = document.createElement("div");

  card.classList.add("card");
  card.classList.add(`card-${evenim.id}`);
  card.innerHTML = `
                        <h3>${evenim.titlu}</h3>
                        <p>${evenim.data}</p>

                        <p class="card-desc">${evenim.descriere}Lorem ipsum dolor sit amet consectetur.</p>
                        <div class="button-container">
                            <i class="star fa-solid fa-star"></i>
                            <i class="trash fa-solid fa-trash"></i>
                            <p class="edit">EDIT</p>
                            <p class="save hide">SAVE</p>
                        </div>
                  `;

  if (evenim.isFavorite === true) {
    card.classList.add("favorite");
  }


  return card;
}

//functie ce populeaza pagina cu carduri
// array argument

function attachCards(arr) {
  let cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  arr
    .map((e) => createCard(e))
    .forEach((element) => {
      cardContainer.append(element);
    });
}

function saveEvent() {
  let cardContainer = document.querySelector(".card-container");
  modalContainer = document.querySelector(".modal-container");

  let noteTitle = modalContainer.querySelector(".input-title-modal");
  let noteDesc = modalContainer.querySelector(".text-area-modal");

  let cardType = modalContainer.querySelector(".select-card-type"); //picks up EXACTLY the selected option from the menu.

  let objCard = {
    id: evenimente.length + 1,
    titlu: noteTitle.value,
    data: "2025-10-15",
    descriere: noteDesc.value,
    type: cardType.value,
    isFavorite: false
  };

  noteTitle.value = "";
  noteDesc.value = "";
  cardType.value = "";

  evenimente.push(objCard);
}

function favoriteCard(card) {
  const cardId = parseInt(card.className.split(" ")[1].split("-")[1]);
  let eventId = findEvenimentById(evenimente, cardId);
  if (eventId !== undefined) {
    evenimente[eventId].isFavorite = !evenimente[eventId].isFavorite;
  }

  let child = card.querySelector(".button-container");
  console.log(child);
  let favElement = child.querySelector(".star");
  favElement.classList.toggle("favorite");
  console.log(favElement);
}

function editCard(card) {
  // console.log(card.querySelector("div").querySelector(".edit"));
  let parent = card.querySelector("div");
  let child = card.querySelector("div").querySelector(".edit");
  let description = card.querySelector(".card-desc");

  parent.removeChild(child);

  let inputDesc = document.createElement("input");

  card.appendChild(inputDesc);

  inputDesc.classList.add("editable");
  inputDesc.setAttribute("type", "text");

  // console.log(inputDesc.parentNode);

  inputDesc.value = description.textContent;
  description.replaceWith(inputDesc);

  let btnSave = parent.querySelector(".save");
  btnSave.classList.toggle("hide");
  btnSave.classList.toggle("inline");
}

function saveCard(card) {
  let inputDesc = card.querySelector(".editable");
  let description = document.createElement("p");

  description.classList.add("card-desc");
  description.textContent = inputDesc.value;
  inputDesc.replaceWith(description);
}

//functie ce gaseste pozitia unui obiect din arr dupa Id

function findEvenimentById(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return i;
    }
  }
}

//functie de stergere obiect din arr dupa id

function deleteEvenimentById(arr, id) {
  return arr.filter((el) => el.id != id);
}

function filterByType(arr,type) {
  return  arr.filter((obj) => obj.type === type);
}

function filterByFav(arr){
  return arr.filter((obj) => obj.isFavorite === true);
}

function handleFilterByType(arr) {
  attachCards(arr);
  if (arr.length < 1) {
    noData.classList.remove("hide");
  } else {
    noData.classList.add("hide");
  }
}

// push new card to the data.js database
// when adding Notes, i want the system to stop returning me to allEvents
