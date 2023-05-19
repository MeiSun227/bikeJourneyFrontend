import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './NavBar'

describe('<NavBar />', () => {
    test('renders navbar content', async () => {

        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        )
        const element = await screen.getByText('Home')
        expect(element).toBeDefined()
    })

    test("navbar navigate to components", async () => {
        render(
            <MemoryRouter initialEntries={["/stations"]}>
                <NavBar />,
            </MemoryRouter>,
        );
        const linkTest = await screen.getByRole('link', { name: 'Station' })

        expect(linkTest.getAttribute('href')).toBe('/stations');
    })
})
