
const app = document.getElementById('app')
const types = document.getElementById('types')
let cardsInfo = []



const fetchData = async () => {
    try {
        const URL = `https://api.pokemontcg.io/v2/cards?limit=10`
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.data)
        pintarCards(data.data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

const pintarCards = (data) => {
    data.forEach((item) => {
        const createHTML = document.createElement('div');
        createHTML.innerHTML = `
        <article class="cardContainer">
        <img src=${item.images.large} alt=${item.name} class="cardImage">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart-fill favoriteCard" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" onclick="favoriteStyle()"/>
        </svg>
        </article>
        `
        
        app.appendChild(createHTML)
    })
    
}

