/// <reference types="cypress" />
/*
allows us to leverage VS Code 
Intellisense for the autocompletion
*/

import UserButton from '../../../src/components/Homepage/UserButton'

context('Window', () => {
    beforeEach(() => {
        cy.visit('http//localhost:3000')
    })

    beforeAll(()=>{
        jest.mock('../../../src/components/Homepage/UserButton', function(){
            userAuth: jest.fn((callback) => callback(true, {username: "frogoifodaloi-5541@yopmail.com"}))
        })
    })


})