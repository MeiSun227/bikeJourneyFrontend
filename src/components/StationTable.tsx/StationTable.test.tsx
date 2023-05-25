import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { getAllByTestId, render, screen } from '@testing-library/react'
import StationTable from './StationTable'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';



describe('<StationTable />', () => {
    test('renders station table content', async () => {
        const queryClient = new QueryClient()
        const { getByText } = render(<QueryClientProvider client={queryClient} ><StationTable /></QueryClientProvider>);
        expect(getByText(/loading.../i)).toBeVisible();

    });

    /*test("should render users list", async () => {
        const queryClient = new QueryClient()
        const mockData = {
            id: 102,
            name: 'kala',
            address: 'kokok',
            city: 'kissa ma',
            operator: 'kissu',
            capacities: 10,
            x: 1212.12,
            y: 121.12,
        }
        jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: { ...mockData } }))
        render(<QueryClientProvider client={queryClient} ><StationTable /></QueryClientProvider>)
        const rowValues = await screen.getAllByTestId("row").map(row => row.textContent)
        expect(rowValues).toBeInTheDocument();

    })*/
})
