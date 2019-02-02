import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Chardetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 { 
        margin-bottom: 20px;
        text-align: center;
    }


`

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        error: false
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }
    componentDidCatch(){
        
        this.setState({
            error: true
        })
    }
    updateChar(){
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
        //this.foo.bar = 0;    
    }

    render() {
        // if (!this.state.char) {
        //     return <span className="select-error">Please select a character</span>
            
        // }
        if(!this.state.char){
            return <Spinner/>
        }
        if (this.state.error){
            return <ErrorMessage/>
        }
        const {name, gender, born, died, culture} = this.state.char;
        return (
            <Chardetails className="char-details rounded">
                <h4>{name}</h4>
                <ListGroup className="list-group list-group-flush">
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </Chardetails>
        );
    }
}