import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render} from '@testing-library/react'
import StationTable from './StationTable'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

describe('<StationTable />', () => {
    test('renders station table content', async () => {
        const queryClient = new QueryClient()
        const { getByText } = render(<QueryClientProvider client={queryClient} ><StationTable /></QueryClientProvider>);
        expect(getByText(/loading.../i)).toBeVisible();

    });
})
