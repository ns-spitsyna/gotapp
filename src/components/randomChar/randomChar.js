import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Randomblock = styled.div`

    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }

`;
const Term = styled.span`
    font-weight: bold;


`
export default class RandomChar extends Component {
    constructor(){
        super();
        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }
    onCharLoaded = (char) =>{
        this.setState({
            char,
            loading: false
        
        })
    }

    onError= (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar() {
        //const id = Math.floor(Math.random()*140 + 50);
        const id = 13000;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> :null;
        const spinner = loading ? <Spinner/>: null;
        const content = !(loading || error) ?  <View char = {char}/> : null;
       

        // if (loading){
        //     return <Spinner/>
        // }

        // service.getAllCharacters()
        // .then(res => {
        //     res.forEach(item => console.log(item.name));
        // });
    
        // service.getCharacter(130)
        // .then(res => console.log(res)); 
        
        // service.getAllHouses()
        //     .then(res => {
        //         res.forEach(item => console.log(item.name));
        //     });
        
        // service.getHouse(10)
        // .then(res => console.log(res));   
        
        // service.getAllBooks()
        //     .then(res => {
        //         res.forEach(item => console.log(item.name));
        //     });
        
        // service.getBooks(5)
        // .then(res => console.log(res));   

        return (
            <Randomblock className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </Randomblock>
        );
    }
}

const View = (({char}) => {

    const {name, gender, born, died, culture} = char;
    return(
        <>
        <h4>Random Character: {name}</h4>
            <ListGroup className="list-group list-group-flush">
                <ListGroupItem className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
})