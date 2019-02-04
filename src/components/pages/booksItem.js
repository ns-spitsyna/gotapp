import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
//import './booksItem.css';
//import styled from 'styled-components';

export default class BooksItem extends Component{
    gotService = new gotService();
  

    render(){
        return(
            <ItemDetails 
            books
            itemId = {this.props.bookId}
            getDetails={this.gotService.getBooks}
           >
            <Field field = 'numberOfPages' label = 'NumberOfPages'/>
            <Field field = 'publiser' label = 'Publiser'/>
            <Field field = 'released' label = 'Released'/>
            

            
             </ItemDetails>   
        )
    }
}