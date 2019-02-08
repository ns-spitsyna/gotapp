import React from 'react';
import BooksPage from "./booksPage";
import {shallow} from "enzyme";

describe("Testing <BooksPage />", () => {
    const books = shallow(<BooksPage />);

    it("BooksPage have rendered", () => {
        expect(books).toMatchSnapshot();
    });
    
   
});