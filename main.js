



const fetchData = async (id) => {
    try {
        const URL = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=20";
        const response = await fetch(URL);
        const data = await response.json();
        
        console.log(data)
        const image = document.getElementById('img1');
        const image2 = document.getElementById('img2');
        const image3 = document.getElementById('img3');
        image.src = data.results[id + 1].thumbnail;
        image2.src = data.results[id].thumbnail;
        image3.src = data.results[id + 2].thumbnail;
        
        
    } catch (error) {
        console.log(error)
    }
    
    
}

const valorRandom = () => {
    const min = 0;
    const max = 20;
    
    const random = Math.round(Math.random() * (max - min));
    console.log(random);
    return random;
}

fetchData(valorRandom())

const reiniciar = () => {
    location.reload()
}

const button = document.getElementById('button');
button.onclick = reiniciar;


