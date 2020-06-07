function populateUfs (){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => { return res.json() })
    .then( states => {
        for( const state of states){
                ufSelect.innerHTML += `<Option value="${state.id}">${state.nome}</Option>`
        }    
    })
}

populateUfs ()


function getCities (event){
     const citySelect = document.querySelector("select[name=city]")
     const stateInput = document.querySelector("input[name=state]")

     const ufValue = event.target.value 
     
     const indexOfSelectedState = event.target.selectedIndex
     stateInput.value = event.target.options[indexOfSelectedState].text
     
     const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"   
    citySelect.disabled = true

     fetch(url)
    .then( (res) => { return res.json() })
    .then( cities => {
        for( const city of cities){
                citySelect.innerHTML += `<Option value="${city.nome}">${city.nome}</Option>`
        }
        
        citySelect.disabled = false
    })
}



document
   .querySelector("select[name=uf]")
    .addEventListener("change", getCities)





// Itens de coleta
// Pegar todos os Li's

const itemsToColect = document.querySelectorAll(".items-grid li")

for (const item of itemsToColect) {
    item.addEventListener("click", handleSelectedItem)
}

 
const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelectedItem(event) {
    const itemLi = event.target
    
    //add or remove a class with JS 
    
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id 

    console.log("ITEM ID: ", itemId)

    // Verificar se existem items selecionados, se sim
    // pegar os items selecionados 
    
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId  //será true ou false 
        return itemFound
    })

    // Se ja estiver selecionado,

    if (alreadySelected >= 0) {
        // Tirar da seleção 
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId  // false
            return itemIsDifferent
        })
    
       selectedItems = filteredItems
    }else {
         // Se não estiver selecionado,
         // adicionar à seleção 
         selectedItems.push(itemId)
    }

    
    console.log("ITEM ID: ", selectedItems)
    

    // Atualizar o campo escondido com os items selecionados

     collectedItems.value = selectedItems



}



