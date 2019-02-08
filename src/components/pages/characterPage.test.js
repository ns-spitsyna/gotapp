import React from 'react';
import CharacterPage from './housesPage';
import {shallow} from 'enzyme';

describe('Testing <HousesPage/>', () =>{
    const char = shallow(<CharacterPage/>);
    describe('Testing snap & correctly', () =>{
           
        it('CharacterPage have rendered correctly', () =>{
            expect(char).toMatchSnapshot();
        });
        
          
         it('CharacterPage state passes when value is null', () =>{
          expect(char.state().selectedItem).toBeNil();
        });  
        it('CharacterPage state "error" is false', () =>{
            expect(char.state().error).toBeFalsy();
        });

    });
        describe('Handlers tests', () =>{
            it('testing onItemSelected', () =>{
                char.instance().onItemSelected(4);
                expect(char.state().selectedItem).toBe(4);
            });

        });
        
   
  
});