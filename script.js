
const getPokemon = async () => {
    const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const pokeArray = allPokemon.data.results;
    console.log(pokeArray);

};

getPokemon();

const searchBtn = document.querySelector('#btn');
const pokemonInput = document.querySelector('#searchBar');
const pokemonImg = document.querySelector('#imgContainer');
const pokemonImgTwo = document.querySelector('#imgContainer2');
const pokemonImgThree = document.querySelector('#imgContainer3');
const pokemonImgFour = document.querySelector('#imgContainer4');
const pokemonName = document.querySelector('#pokeName');
const pokemonType = document.querySelector('#pokeType');
const audio = document.querySelector('#whosThatPokemon')



searchBtn.addEventListener('click', async () => {
    const pokemon = pokemonInput.value.toLowerCase();
    audio.currentTime = 0;
    audio.volume = 0.3; //W3 schools audio HTML
    audio.play();
    console.log('Searching PokeDex:', pokemon);
    //combined event listener from clicking search to double as a 
    //play button for pokedex

    //defining variables from api chrome inspect

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokeData = response.data;
    const imgUrl = pokeData.sprites.front_default;
    const imgUrlTwo = pokeData.sprites.back_default;
    const imgUrlThree = pokeData.sprites.front_shiny;
    const imgUrlFour = pokeData.sprites.back_shiny;
    const pokeName = pokeData.name;
    //const pokeType = pokeData.types 
    //one pulled one type plugged line of code into open Ai asked for an explanation of 
    //how to pull multiple parts of data from an array in API
    const pokeType = pokeData.types.map(typeInfo => typeInfo.type.name)


    //setting attributes from api to html
    if (imgUrl) {
        pokemonImg.setAttribute('src', imgUrl);
    } else {
        console.error('No Pokemon found.');
    }

    if (imgUrlTwo) {
        pokemonImgTwo.setAttribute('src', imgUrlTwo);
    } else {
        console.error('No Pokemon found.');
    }

    if (imgUrlThree) {
        pokemonImgThree.setAttribute('src', imgUrlThree);
    } else {
        console.error('No Pokemon found.');
    }

    if (imgUrlFour) {
        pokemonImgFour.setAttribute('src', imgUrlFour);
    } else {
        console.error('No Pokemon found.');
    }

    if (pokeName) {
        pokemonName.textContent = pokeName
    } else {
        console.error('No Pokémon found.');
    }

    if (pokeType.length > 0) {
        pokemonType.textContent = pokeType.join(' and ') + ' type' + (pokeType.length > 1 ? 's' : '');
    } else {
        console.error('No Pokémon found.');
    }

}
);




