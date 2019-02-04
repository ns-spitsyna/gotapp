
import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';



export default class BooksPage extends Component{
    gotService = new gotService();

    state = {
        selectedChar: 2, 
        error: false
    }


    onItemSelected = (id) => {
        console.log(id);
        this.setState({
            selectedChar: id
        })
    }
    componentDidCatch(){
        
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error){
            return <ErrorMessage/>
        }
        
        const itemList = (
            <ItemList 
            onItemSelected = {this.onItemSelected}
            getData = {this.gotService.getAllBooks}
            renderItem = {(item) =>item.name}
          
            />
        )

        const itemDetails = (
            <ItemDetails 
            itemId = {this.state.selectedChar}
            getDetails={this.gotService.getBooks}
           >
            <Field field = 'numberOfPages' label = 'NumberOfPages'/>
            <Field field = 'publiser' label = 'Publiser'/>
            <Field field = 'released' label = 'Released'/>
            

            
             </ItemDetails>   
        )
        return(
           <RowBlock left = {itemList} right = {itemDetails} />
        )

    }
}
