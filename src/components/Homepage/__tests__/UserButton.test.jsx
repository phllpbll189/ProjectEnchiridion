import React from 'react';
import '@testing-library/jest-dom'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import UserButton from '../UserButton';
import { BrowserRouter } from 'react-router-dom';


//failing need to be able to move a component to the next index in an array

beforeEach(() =>
{
    render(
        <BrowserRouter>
            <UserButton></UserButton>
        </BrowserRouter>
    )
})

test("User button renders", () => {{
    expect(screen.queryByTestId('UserButton')).toBeInTheDocument();
}})

test("On click Dropdown appears", () => {{
    fireEvent.click(screen.queryByTestId("UserButton"));
    const menu = screen.queryByTestId('DropdownMenu')

    expect(menu).toBeInTheDocument();
}})

test("Sign in Form appears in dropdown menu", () => {{
    fireEvent.click(screen.queryByTestId("UserButton"));
    fireEvent.click(screen.queryByText("sign in"));
    const form = screen.queryByTestId('SignInForm')

    expect(form).toBeInTheDocument();
}})