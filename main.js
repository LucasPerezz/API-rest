const app = document.getElementById('app');



const fetchData = async () => {
    try {
        const URL = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=32&code=TG-62942a0634d5360013a67a01-344761823&state=";
        const response = await fetch(URL);
        const data = await response.json();
        
        console.log(data.results);
        crearHTML(data);
        
    } catch (error) {
        console.log(error);
    }
    
    
}

const crearHTML = (data) => {
    data.results.map((item) => {
        const createItem = document.createElement('article');
        createItem.innerHTML = `
        <article class="cardContainer">
        <img src=${item.thumbnail} alt="">
    <div class="cardContent">
        <div>
            <p>${item.title}'</p>
            
        </div>
        <div class="d-flex justify-content-around">
            <p>$<span>${item.price}</span></p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart-fill favorite" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" onclick="favoriteStyle()"/>
</svg>
        </div>
    </div>
    <button class="cardButton">Comprar</button>
    
</article>
        `
        
        app.appendChild(createItem);
    })
    
}


const favoriteStyle = () => {
    const favorite = document.querySelector('.favorite')
    favorite.classList.toggle("favoriteTrue")
}


const fetchFavorites = () => {
    try {
        const URL_FAVOURITES = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=32&code=TG-62942a0634d5360013a67a01-344761823&state=";
        const res = fetch(URL_FAVOURITES)
        const data = res.json()


    } catch (error) {
        console.log(error)
    }
}

fetchData()


