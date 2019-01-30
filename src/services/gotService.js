export default class GotService{

    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    };

    async getAllCharacters(){
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    async getCharacter(id){
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllHouses(){
        return this.getResource('/houses');
    }
    getHouse(id){
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks(){
        return this.getResource('/books');
    }
    getBooks(id){
        return this.getResource(`/books/${id}`);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
        
    }
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons:house.ancestralWeapons
        }
        
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
        
    }

}

//const got = new GotService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });

// got.getCharacter(130)
// .then(res => console.log(res)); 

// got.getAllHouses()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });

// got.getHouse(10)
// .then(res => console.log(res));   

// got.getAllBooks()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });

// got.getBooks(5)
// .then(res => console.log(res));   



