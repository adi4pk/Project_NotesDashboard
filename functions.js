//functie ce creaza un card primeste ca parametru


function createCard(evenim){

    let card=document.createElement("div");

    card.classList.add("card");
    card.classList.add(`card-${evenim.id}`)
    card.innerHTML=`
                        <h3>${evenim.titlu}</h3>
                        <p>${evenim.data}</p>

                        <p>${evenim.descriere}Lorem ipsum dolor sit amet consectetur.</p>
                        <div >
                            <i class="favorite fa-solid fa-star"></i>
                            <i class="trash fa-solid fa-trash"></i>
                            <p class="edit">EDIT</p>
                            <p class="save hide">SAVE</p>
                        </div>
                  `;
    
    return card;
}


function favoriteCard(card){
    card.classList.toggle("favorite");

}

function editCard(card){
    let btnEdit = card.querySelector(".edit");
    card.childNode.removeChild(btnEdit);

    let description = card.querySelector(".card-desc");
    let inputDesc = document.createElement("input");

    inputDesc.classList.add("editable");
    inputDesc.setAttribute("type", "text");

    inputDesc.value=description.textContent;
    description.replaceWith(inputDesc);

    let btnSave = card.querySelector(".save");
    btnSave.classList.toggle("hide");
    btnSave.classList.toggle("inline");

}

function saveCard(card){
    let inputDesc = card.querySelector(".editable");
    let description = document.createElement("p");

    description.classList.add("card-desc");
    description.textContent = (inputDesc.value);
    inputDesc.replaceWith(description);

}
 
//functie ce populeaza pagina cu carduri
// array argument

function attachCards(arr){

    let cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML="";
    arr.map(e=>createCard(e)).forEach(element => {
        
        cardContainer.append(element);
    });
}

//functie ce gaseste pozitia unui obiect din arr dupa Id

function findEvenimentById(arr,id){
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i].id === id){
    //     return i;
    //     }
    // }

    // const data = arr.filter((element)=>element.id==id)
    // if(data.length>0){
    //         console.log("Filtrare dupa id:",data[0])
    //     return data[0]
    // }else{
    //     throw new Error("this id doesn't exist")
    // }

        const data = arr.filter((element)=>element.descriere.startsWith(id))
    if(data.length>0){
            console.log("Filtrare dupa id:",data[0])
        return data
    }else{
        throw new Error("this id doesn't exist")
    }


    return -1;
}


//functie de stergere obiect din arr dupa id

function deleteEvenimentById(arr, id){
    return arr.filter(el=>el.id!=id);

}