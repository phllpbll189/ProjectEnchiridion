import React from 'react';
import UserButton from '../UserButton';
import { BrowserRouter } from 'react-router-dom';
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'
//failing need to be able to move a component to the next index in an array
let container = null;

//before every test, setup jsdom
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    jest.clearAllMocks()
})

//after each, refresh
afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})


test("User button renders", () => {{
    let userButton = null;

    //render component
    act(() => {
        render(
            <BrowserRouter>
                <UserButton></UserButton>
            </BrowserRouter>,
            container
        )
    })

    userButton = document.querySelector("[data-testid=UserButton]")
    expect(userButton).toBeInTheDocument();
}})


test("On click Dropdown appears", () => {{
    //render component 
    let menu = null
    let userButton = null

    //mock userAuth because it requires third party package
    jest.mock('../UserButton', function(){
        userAuth: jest.fn((callback) => callback(true, {username: "frogoifodaloi-5541@yopmail.com"}))
    })

    act(() => {
        render(
            <BrowserRouter>
                <UserButton></UserButton>
            </BrowserRouter>,
            container
        )
    })

    //get the button and make sure it isn't null
    userButton = document.querySelector("[data-testid=UserButton]")
    expect(userButton).toBeInTheDocument()

    //click the button
    act( function(){
        userButton.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    })

    //make sure menu exists
    menu = document.querySelector("[data-testid=DropdownMenu]")
    expect(menu).toBeInTheDocument();
}})


test("Sign in Form appears in dropdown menu", () => {{
    
    //the variables that I will need to do the test
    let userButton = null;
    let signIn = null;
    let form = null;

    //mock the implementation of userButton to return false always
    jest.mock('../UserButton', function(){
        userAuth: jest.fn((callback) => callback(false, {err: "oops"}))
    })

    //render the button in jsdom
    act(() => {
        render(
            <BrowserRouter>
                <UserButton></UserButton>
            </BrowserRouter>,
            container
        )
    })

    userButton = document.querySelector("[data-testid=UserButton]")
    userButton.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    
    signIn = document.querySelector('[data-testid=Signup]')
    signIn.dispatchEvent(new MouseEvent("click", {bubbles: true}))

    form = document.querySelector('[data-testid=SignupForm]')
    expect(form).toBeInTheDocument();
}})

