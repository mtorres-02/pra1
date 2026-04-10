// 1. Creación de la clase Anime con las siguientes propiedades:
// - id: Identificador único.
// - title: Título en inglés del anime.
// - synopsis: Sinopsis del anime.
// - episodes: Número de episodios.
// - status: Estado de emisión.
// - score: Puntuación (0-10).
// - type: Tipo de anime (TV, Movie, OVA, Special, ONA, Music).
// - genres: Lista de géneros que tiene el anime. Cada género es un objeto con id, type, name y url.
// - studios: Lista de estudios de animación que han producido el anime.
// - image_url: URL de la imagen principal.
// - popularity: Ranking de popularidad.
class Anime {
    constructor(id, title, synopsis, episodes, status, score, type, genres, studios, image_url, popularity) {
        this.id = id;
        this.title = title;
        this.synopsis = synopsis;
        this.episodes = episodes;
        this.status = status;
        this.score = score;
        this.type = type;
        this.genres = genres;
        this.studios = studios;
        this.image_url = image_url;
        this.popularity = popularity; 
    }
    // La clase Anime representa la estructura de datos de un anime.
    // Incluye constructor, getters y setters para organizar el acceso a sus propiedades.
    get animeId() {
        return this.id;
    }
    get animeTitle() {
        return this.title;
    }
    get animeSynopsis() {
        return this.synopsis;
    }
    get animeEpisodes() {
        return this.episodes;
    }
    get animeStatus() {
        return this.status;
    }
    get animeScore() {
        return this.score;
    }
    get animeType() {
        return this.type;
    }
    get animeGenres() {
        return this.genres;
    }
    get animeStudios() {
        return this.studios;
    }
    get animeImageUrl() {
        return this.image_url;
    }
    get animePopularity() {
        return this.popularity;
    }
    set animeId(id) {
        this.id = id;
    }
    set animeTitle(title) {
        this.title = title;
    }
    set animeSynopsis(synopsis) {
        this.synopsis = synopsis;
    }
    set animeEpisodes(episodes) {
        this.episodes = episodes;
    }
    set animeStatus(status) {
        this.status = status;
    }
    set animeScore(score) {
        this.score = score;
    }
    set animeType(type) {
        this.type = type;
    }
    set animeGenres(genres) {
        this.genres = genres;
    }
    set animeStudios(studios) {
        this.studios = studios;
    }
    set animeImageUrl(image_url) {
        this.image_url = image_url;
    }
    set animePopularity(popularity) {
        this.popularity = popularity;
    }
}
// PRUEBA: creo un objeto Anime de ejemplo para validar que la clase está bien definida y que sus propiedades se guardan y se consultan correctamente.
const genre1 = {
    id: 1,
    type: "anime",
    name: "Action",
    url: "https://cdn.shopify.com/s/files/1/0225/8262/4336/files/b49b3f0db270f54222123cae3dd0fd35a1f3d2fe265bf78c.avif?v=1755019227"
};
const genre2 = {
    id: 2,
    type: "anime",
    name: "Adventure",
    url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/12/gurren-lagann-magi-dragon-quest.jpg"
};
const studio1 = {
    id: 10,
    type: "anime",
    name: "Toei Animation",
    url: "https://i.blogs.es/104f32/toei-animation/1200_630.jpeg"
};
const anime1 = new Anime(
    101,
    "Digimon",
    "Digimon follows a group of children mysteriously transported to the Digital World, a parallel plane created by computer networks. Together with their digital monster partners (Digimon), they must evolve their creatures to protect themselves and save both the digital and human worlds from various threats, always searching for a way to return home.",
    500,
    "Finished Airing",
    7.4,
    "TV",
    [genre1, genre2],
    [studio1],
    "https://m.media-amazon.com/images/I/81JPoux6CsL._AC_UF894,1000_QL80_.jpg",
    12
);
// ---VALIDACIÓN 1---.
console.log("--- VALIDACIÓN DE LA CLASE ANIME ---");
console.log("ID:", anime1.animeId);
console.log("Título:", anime1.animeTitle);
console.log("Sinopsis:", anime1.animeSynopsis);
console.log("Episodios:", anime1.animeEpisodes);
console.log("Estado:", anime1.animeStatus);
console.log("Puntuación:", anime1.animeScore);
console.log("Tipo:", anime1.animeType);
console.log("Géneros:", anime1.animeGenres);
console.log("Estudios:", anime1.animeStudios);
console.log("Imagen:", anime1.animeImageUrl);
console.log("Popularidad:", anime1.animePopularity);
// Compruebo que un setter también funciona.
anime1.animeScore = 8;
console.log("Nueva puntuación tras usar setter:", anime1.animeScore);

// --------------------
// 2 y 3. Creación de la clase AnimeList. Esta clase guarda un array de objetos y permite gestionarlos. 
// Métodos a utilizar:
// - addAnime(anime): Agrega un anime a la lista creando un nuevo array con spread.
// - removeAnime(animeId): Elimina un anime de la lista por su ID.
// - showList(): Visualiza la información básica de cada anime (título, tipo, puntuación, imagen).
// Funciones flecha: 
// - addMultipleAnimes(...animes): Agregar múltiples anime a la vez utilizando el operador rest.
// - getAnimesByScoreRange(minScore, maxScore): Filtrar los anime según un rango de puntuación.
// - sortAnimesByPopularity(): Ordenar los anime de la lista por popularidad (del más popular al menos popular).
class AnimeList {
    constructor() {
        this.animes = [];  // Array donde se guardan los objetos Anime de la lista.
        this.addMultipleAnimes = (...animes) => {  // Con el uso del parámetro rest puede recibir varios Anime a la vez.
            this.animes = [...this.animes, ...animes];   // Con el uso del operador spread puede añadir nuevos anime a la lista existente.
        };
        this.getAnimesByScoreRange = (minScore, maxScore) => {   // Función flecha que filtra los anime dentro del rango indicado y devuelve un nuevo array con los anime que están dentro del rango.
            return this.animes.filter(
                anime => anime.score >= minScore && anime.score <= maxScore
            );
        };
        this.sortAnimesByPopularity = () => {   // Función flecha que ordena la lista por popularidad. Menor popularity = más popular.
            this.animes = [...this.animes].sort(
                (animeA, animeB) => animeA.popularity - animeB.popularity
            );
            return this.animes;
        };
    }
    addAnime(anime) {    // Añade un anime a la lista sin modificar directamente el array original.
        this.animes = [...this.animes, anime];
    }
    removeAnime(animeId) {    // Crea una nueva lista conservando solo los anime cuyo id no coincide con el recibido.
        this.animes = this.animes.filter(anime => anime.id !== animeId);  
    }
    showList() {   // Recorre la lista y muestra por consola los datos básicos necesarios para validar el contenido. 
        console.log("LISTA DE ANIME");
        this.animes.forEach(anime => {
            console.log("Título:", anime.title);
            console.log("Tipo:", anime.type);
            console.log("Puntuación:", anime.score);
            console.log("Imagen:", anime.image_url);
            console.log("----------------");
        });
    }
    
}
// ---VALIDACIÓN 2 Y 3---.
const genre3 = {
    id: 3, 
    type: "anime",
    name: "Drama",
    url: "https://m.media-amazon.com/images/M/MV5BYWI3ODE3OTYtMWMzMS00OWY0LThkYWYtYTdjMmY0YjFlODAzXkEyXkFqcGc@._V1_QL75_UY281_CR31,0,500,281_.jpg"
};
const studio2 = {
    id: 11,
    type: "anime",
    name: "Wit Studio",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wit_studio.svg/1280px-Wit_studio.svg.png"
};
const studio3 = {
    id: 12,
    type: "anime",
    name: "MAPPA",
    url: "https://pbs.twimg.com/media/GtbApzmXMAAnTwu.jpg"
};
const anime2 = new Anime(
    102,
    "Attack on Titan",
    "A dark fantasy series following Eren Yeager, who vows to exterminate man-eating giants known as Titans after they breach his walled city and kill his mother.",
    94,
    "Finished Airing",
    9.1,
    "TV",
    [genre1, genre3],
    [studio2],
    "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    5
);
const anime3 = new Anime(
    103, 
    "Vinland Saga",
    "Vinland Saga is an epic historical drama that follows Thorfinn, the son of a great Viking warrior, as he seeks revenge against Askeladd, the mercenary who murdered his father. It chronicles his transformation from a hate-filled child soldier to a young man striving for redemption, peace, and the creation of a non-violent society in Vinland.",
    48,
    "Finished Airing",
    8.5,
    "TV",
    [genre1, genre3],
    [studio3],
    "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    8
);
// Creo una lista vacía de anime.
const myAnimeList = new AnimeList(); 
// Añado anime a la lista.
myAnimeList.addAnime(anime1);
// Añado varios animes a la vez.
myAnimeList.addMultipleAnimes(anime2, anime3);
// Visualizamos la lista.
console.log("--- VALIDACIÓN CLASE ANIMELIST ---")
console.log("MOSTRAR LISTA DESPUÉS DE AÑADIR ANIME:");
myAnimeList.showList();
// Filtro por rango de puntuación.
const scoreRangeAnimes = myAnimeList.getAnimesByScoreRange(8.5, 9.1);
console.log("ANIME SEGÚN RANGO DE PUNTUACIÓN:");
console.log(scoreRangeAnimes);
// Ordeno por popularidad.
console.log("LISTA ORDENADA POR POPULARIDAD:");
myAnimeList.sortAnimesByPopularity();
myAnimeList.showList();
// Elimino un anime de la lista por su ID.
myAnimeList.removeAnime(101);
// Vuelvo a mostrar la lista después de eliminar el anime con id 101.
console.log("MOSTRAR LISTA DESPUÉS DE ELIMINAR EL ANIME CON ID 101:");
myAnimeList.showList();

// 4. Función recursiva que busca un anime dentro de una estructura de tipo AnimeList por su ID.
// La función recibe una lista de anime, el id que queremos buscar y una posición desde la que se realiza la búsqueda recursiva.
function findAnimeById(animeList, animeId, index = 0) { 
    if (index >= animeList.animes.length) {   // Si se han revisado todos los animes y no hay coincidencia, la búsqueda termina devolviendo undefined.
        return undefined;
    }
    if (animeList.animes[index].id === animeId) {   // Si el anime actual tiene el ID buscado, se devuelve ese anime.
        return animeList.animes[index];
    }
    return findAnimeById(animeList, animeId, index + 1);   // Si no coincide, la función se llama de nuevo avanzando a la siguiente posición. 
}
// ---VALIDACIÓN 4---.
console.log("BÚSQUEDA RECURSIVA DEL ANIME CON ID 102:");
const foundAnime = findAnimeById(myAnimeList, 102);
console.log(foundAnime);
console.log("BÚSQUEDA RECURSIVA DEL ANIME CON ID 999:");
const notFoundAnime = findAnimeById(myAnimeList, 999);
console.log(notFoundAnime);
console.log("BÚSQUEDA RECURSIVA DEL ANIME CON ID 101 DESPUÉS DE ELIMINARLO:");
console.log(findAnimeById(myAnimeList, 101));

// 5. Uso de reduce. 
// Esta función analiza todos los géneros de todos los anime de la lista y devuelve como resultado el género más frecuente.
function getMostCommonGenre(animeList) {
    const genreCount = animeList.animes.reduce((accumulator, anime) => {   // Construyo un objeto acumulador donde la clave es el nombre del género y el valor es el número de veces que aparece en todos los anime.
        anime.genres.forEach(genre => {
            if (accumulator[genre.name] === undefined) {
                accumulator[genre.name] = 1;
            } else {
                accumulator [genre.name] += 1;
            }
        });
        return accumulator;
    }, {});
    // Obtengo los nombres de género para buscar cuál tiene el contador más alto.
    const genreNames = Object.keys(genreCount);    // Object.keys() es lo mismo que iterar con un bucle for pero con este método después puedo aplicar el método de array reduce() para cumplir con las normas. 
    if (genreNames.length === 0) {   // Si la lista no tiene géneros, devuelve undefined.
        return undefined;
    }
    // Compara los géneros ya contados y conserva el más frecuente.
    const mostCommonGenreName = genreNames.reduce((mostCommon, currentGenre) => {
        if (genreCount[currentGenre] > genreCount[mostCommon]) {
            return currentGenre;
        }
        return mostCommon;
    }, genreNames[0]); 
    // Devuelve un objeto con el nombre del género más común y el número de veces que aparece.
    return {
        genre: mostCommonGenreName,
        count: genreCount[mostCommonGenreName]
    };
}
// ---VALIDACIÓN 5---.
console.log("GÉNERO MÁS COMÚN DE LA LISTA:");
const mostCommonGenre = getMostCommonGenre(myAnimeList);
console.log(mostCommonGenre);

// 6. Uso de map y filter.
// La función debe devolver un array con los títulos de los anime cuya puntuación sea mayor o igual al valor mínimo indicado.
function getHighRatedAnimes(animes, minScore) {
    return animes
        .filter(anime => anime.score >= minScore)   // filter() selecciona solo los anime que cumplen la condición.
        .map(anime => anime.title);   // map() extrae el título de esos anime.
}
// ---VALIDACIÓN 6---.
console.log("TÍTULOS DE ANIME CON PUNTUACIÓN MAYOR O IGUAL A 8.5:");
const highRatedAnimes = getHighRatedAnimes(myAnimeList.animes, 8.5);
console.log(highRatedAnimes);

// 7. Función con destructuring y spread. 
// Esta función recibe un objeto anime y usa destructuring para extraer y mostrar la información de forma organizada.
// Además, la función debe crear un nuevo objeto utilizando el operador spread con toda la información del anime original más un campo adicional llamado fullInfo que sea true.
function getAnimeInfo(anime) {
    const { title, type, score, genres, studios } = anime;   // Destructuring para extraer del objeto las propiedades que necesito.
    const [firstGenre] = genres;     // Destructuring de arrays para obtener el primer género y el primer estudio.
    const [firstStudio] = studios;   
    // Muestro la información de forma organizada.
    console.log("INFORMACIÓN DEL ANIME");
    console.log("Título:", title);
    console.log("Tipo:", type);
    console.log("Puntuación:", score);
    if (firstGenre !== undefined) {   // Si existe se muestra el primer nombre y si no existe se muestra "No disponible".
        console.log("Primer género:", firstGenre.name);
    } else {
        console.log("Primer género: No disponible");
    }
    if (firstStudio !== undefined) {
        console.log("Primer estudio:", firstStudio.name);
    } else {
        console.log("Primer estudio: No disponible");
    }
    // Creo un nuevo objeto usando spread y añado la propiedad fullInfo.
    const fullAnimeInfo = {
        ...anime,
        fullInfo: true
    };
    return fullAnimeInfo;
}
// ---VERIFICACIÓN 7---.
console.log("RESULTADO DE getAnimeInfo:");
const animeInfo = getAnimeInfo(anime2);
console.log(animeInfo);

// 8. Función avanzada con múltiples operadores.
// La función recibe un array de anime y el nombre de un estudio, filtra los anime producidos por ese estudio y devuelve un objeto con la siguiente estructura:
// - studio: nombre del estudio
// - count: número de anime encontrados
// - animes: array con los títulos de los anime
// - averageScore: puntuación media de esos anime
function getAnimesByStudio(animes, studioName) {
    const filteredAnimes = animes.filter(anime => {   // filter() selecciona los anime del estudio indicado.
        const matchingStudios = anime.studios.filter(studio => studio.name === studioName);   
        return matchingStudios.length > 0;
    });
    const animeTitles = filteredAnimes.map(anime => anime.title);   // map() extrae solo los títulos de los anime filtrados.
    const totalScore = filteredAnimes.reduce((accumulator, anime) => {   // reduce() suma las puntuaciones de los anime encontrados para calcular la media.
        return accumulator + anime.score;
    }, 0);
    // Calcula la puntuación media.
    let averageScore = 0;
    if (filteredAnimes.length > 0) {
        averageScore = totalScore / filteredAnimes.length;
    }
    // Devuelve el objeto con la estructura pedida.
    return {
        studio: studioName,
        count: filteredAnimes.length,
        animes: animeTitles,
        averageScore: averageScore
    };
}
// ---VALIDACIÓN 8---.
console.log("ANIME PRODUCIDOS POR MAPPA:");
const studioInfo1 = getAnimesByStudio(myAnimeList.animes, "MAPPA");
console.log(studioInfo1);
console.log("ANIME PRODUCIDOS POR Wit Studio:");
const studioInfo2 = getAnimesByStudio(myAnimeList.animes, "Wit Studio");
console.log(studioInfo2);
console.log("ANIME PRODUCIDOS POR UN ESTUDIO INEXISTENTE:");
const studioInfo3 = getAnimesByStudio(myAnimeList.animes, "Studio Ghibli");
console.log(studioInfo3);