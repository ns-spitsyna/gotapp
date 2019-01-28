import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
//import './randomChar.css';
import GotService from '../../services/gotService';

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
const service = new GotService();

export default class RandomChar extends Component {

    render() {
        service.getAllCharacters()
        .then(res => {
            res.forEach(item => console.log(item.name));
        });
    
        service.getCharacter(130)
        .then(res => console.log(res)); 
        
        service.getAllHouses()
            .then(res => {
                res.forEach(item => console.log(item.name));
            });
        
        service.getHouse(10)
        .then(res => console.log(res));   
        
        service.getAllBooks()
            .then(res => {
                res.forEach(item => console.log(item.name));
            });
        
        service.getBooks(5)
        .then(res => console.log(res));   

        return (
            <Randomblock className="random-block rounded">
                <h4>Random Character: John</h4>
                <ListGroup className="list-group list-group-flush">
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <Term>Gender </Term>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </Randomblock>
        );
    }
}
