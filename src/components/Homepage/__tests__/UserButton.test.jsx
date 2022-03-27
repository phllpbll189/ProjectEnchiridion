import React from 'react';
import '@testing-library/jest-dom'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import UserButton from '../UserButton';
import { BrowserRouter } from 'react-router-dom';


//failing need to be able to move a component to the next index in an array


test("User button renders", () => {{
    render(
        <BrowserRouter>
            <UserButton></UserButton>
        </BrowserRouter>
    )
    expect(screen.queryByTestId('DropdownMenuButtonNavbarUser')).toBeInTheDocument();
}})

test("On click Dropdown appears", () => {{
    render(
        <BrowserRouter>
            <UserButton></UserButton>
        </BrowserRouter>
    )

    fireEvent.click(screen.queryByTestId("DropdownMenuButtonNavbarUser"));
    

    const menu = screen.queryByTestId('DropdownMenu')

    expect(menu).toBeInTheDocument();
}})

