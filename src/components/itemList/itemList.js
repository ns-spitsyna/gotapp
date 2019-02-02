import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import './itemList.css';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {
    gotService = new gotService();

    state = {
        charList: null,
        error: false
    };

  
    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((charList) =>{
                this.setState({
                    charList
                })
            })
    }
    componentDidCatch(){
        
        this.setState({
            error: true
        })
    }
 
    renderItems(arr){
        
       
        
       
        return arr.map((item) => {
            
            return (
                <ListGroupItem  
                    key ={item.id}
                    className="list-group-item"
                    onClick = {()=>this.props.onCharSelected(item.id)}                   
                    >
                    {item.name}
                </ListGroupItem >
            )
        })
    }
    render() {

        const {charList} = this.state;
        
        if(!charList){
            return <Spinner/>
        }
        if (this.state.error){
            return <ErrorMessage/>
        }
        const items = this.renderItems(charList);
        return (
            <ListGroup className="item-list list-group">
                {items}
            </ListGroup>
        );
    }
}