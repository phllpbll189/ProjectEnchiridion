import React from 'react';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import LeftBar from '../LeftBar';
import EditBox from '../EditBox'
import { unmountComponentAtNode, render } from "react-dom";
import userEvent from '@testing-library/user-event';

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


test("EditBox and LeftBar Succefully render", () => {{
    let leftBar = null
    let editBox = null

    act(function(){
        render(
            <div>
                <EditBox/>
                <LeftBar/>
            </div>,
            container
        )            
    })

    leftBar = document.querySelector("[class=editor_left]")
    expect(leftBar).toBeInTheDocument()

    editBox = document.querySelector("[data-testid=EditBox]")
    expect(editBox).toBeInTheDocument()
}})

test("header is drag and droppable", () => {{
    let header = null
    let editBox = null

    act(function(){
        render(
            <div>
                <EditBox/>
                <LeftBar/>
            </div>,
            container
        )            
    })
  
    editBox = document.querySelector("[data-testid=EditBox]")
    header = document.querySelector("[data-testid=headerDND]")

    expect(header).toHaveAttribute("draggable")
    expect(editBox).toBeInTheDocument()
}})

// not added to testing-library https://github.com/testing-library/user-event/issues/440

/*
    jsdom github #2913: DragEven not available in window
    https://github.com/jsdom/jsdom/issues/2913

    Will have to use cypress to test drag and drop.
    otherwise i will be committing to jsdom git project...
    that seems out of scope of the project..
    for now.
*/
