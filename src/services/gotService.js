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

    _transformCharacter({name, gender, born, died,culture, url}) {
        const [id] = url.match(/\d+$/g);
        return {name, gender, born, died,culture,id}
        
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

  



