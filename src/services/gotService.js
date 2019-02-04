export default class GotService{

    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    
     getResource = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);
       
       
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    };

     getAllCharacters = async () =>{
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    
     getCharacter = async (id) =>{
        
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllHouses = async () =>{
        
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse);
    }
    getHouse = async (id) =>{
        
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks = async () =>{
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
        
    }
    getBooks = async (id) =>{
        return this.getResource(`/books/${id}`);
    }

    _transformCharacter({name, gender, born, died,culture, url}) {
        const [id] = url.match(/\d+$/g);
        return {name, gender, born, died,culture,id}
        
    }
    _transformHouse({name, region, words, titles,overlord, ancestralWeapons,url}) {
        const [id] = url.match(/\d+$/g);
        
        return {name, region, words, titles:titles.join(';'),overlord, ancestralWeapons,id}
        
    }
    _transformBook({name, numberOfPages, publiser, released, url}) {
        const [id] = url.match(/\d+$/g);
        
        return {name, numberOfPages, publiser, released, id}
        
    }

}

  



