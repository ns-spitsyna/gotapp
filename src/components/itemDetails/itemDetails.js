import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

//import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Itemdetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    
    h4 { 
        margin-bottom: 20px;
        text-align: center;
    }

`
const Field = ({itemDetails, field, label}) =>{
    return (
        <ListGroupItem className="list-group-item d-flex justify-content-between">
                        <span className="term">{label}</span>
                        <span>{itemDetails[field]}</span>
                    </ListGroupItem>
    )

}

export {
    Field
}
export default class ItemDetails extends Component {

    state = {
        itemDetails: null,
        error: false
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateChar();
        }
    }
    componentDidCatch(){
        
        this.setState({
            error: true
        })
    }
    updateChar(){
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }
        
       
        const {getDetails} = this.props;
        
        getDetails(itemId)
            .then((itemDetails) => {
                this.setState({itemDetails})
            })
        //this.foo.bar = 0;    
    }

    render() {
        if (!this.state.itemDetails) {
            return <span className="select-error">Please select a character</span>
            
        }
        const color = this.props.books?{backgroundColor:'#c2c3f7'}:{backgroundColor:'#fff'};
       
        // if(!this.state.char){
        //     return <Spinner/>
        // }
        if (this.state.error){
            return <ErrorMessage/>
        }

        const {itemDetails} = this.state;
        const {name} = itemDetails;
        return (
            <Itemdetails className="char-details rounded" style={color}>
                <h4>{name}</h4>
                <ListGroup className="list-group list-group-flush">
                 {
                     React.Children.map(this.props.children, (child) =>{
                         return React.cloneElement(child, {itemDetails})

                     })
                 }
                </ListGroup>
            </Itemdetails>
        );
    }
}