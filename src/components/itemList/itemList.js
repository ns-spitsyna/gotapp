import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Spinner from '../spinner';
import './itemList.css';
import ErrorMessage from '../errorMessage';



export default class ItemList extends Component {
   

    state = {
        itemList: null,
        error: false
    };

  
    componentDidMount(){
        const {getData} = this.props;
        
        
        getData()
            .then((itemList) =>{
                this.setState({
                    itemList
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
            
            const {id} = item;
          
            const label = this.props.renderItem(item);
            
            return (
                <ListGroupItem  
                    key ={id}
                    className="list-group-item"
                    onClick = {()=>this.props.onItemSelected(id)}  
                                   
                    >
                    {label}
                </ListGroupItem >
            )
        })
    }
    render() {

        const {itemList} = this.state;
        
        if(!itemList){
            return <Spinner/>
        }
        if (this.state.error){
            return <ErrorMessage/>
        }
        const items = this.renderItems(itemList);
        return (
            <ListGroup className="item-list list-group  mb-2">
                {items}
            </ListGroup>
        );
    }
}