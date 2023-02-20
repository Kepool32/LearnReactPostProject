import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {MemoryRouter} from "react-router-dom";
import App from "../App";

describe('TEST APP', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('about-link')
        const aboutLink = screen.getByTestId('page-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('page-link')).toBeInTheDocument();
        userEvent.click(mainLink)
        expect(screen.getByTestId('about-link')).toBeInTheDocument();
    });

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asfasfafasf']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found' +
            '-page')).toBeInTheDocument();
    });
})


function Footer() {
    return null;
}

test('Click EVENT', ()=>{
    render(<Footer/>);


    const autoloader=screen.getByText(/AutoDealer/i)
    expect(autoloader).toBeInTheDocument()



})