import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailPage from '.';

const mockStore = configureStore([]);

describe('DetailPage Component', () => {
  it('renders loading state correctly', async () => {
    const store = mockStore({
      isLoading: true,
      error: null,
      data: null,
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getAllByTestId('loader')[0]).toBeInTheDocument();
  });

  it('renders error state correctly', async () => {
    const store = mockStore({
      isLoading: false,
      error: 'An error occurred due to a timeout',
      data: null,
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText('An error occurred due to a timeout')
    ).toBeInTheDocument();
  });

  it('renders data state correctly', async () => {
    const store = mockStore({
      isLoading: false,
      error: null,
      data: {
        name: 'Turkey',
        iso: 'TUR',
        confirmed: 17042722,
        deaths: 101492,
        recovered: 0,
        active: 16941230,
        fatalityRate: 0.006,
        lastUpdate: '2023-01-30 23:20:55',
        regionCount: 1,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', { name: 'Turkey' })).toBeInTheDocument();
    expect(screen.getByText('0.60%')).toBeInTheDocument();

    expect(screen.getByText(/Active Cases/i)).toBeInTheDocument();
  });
});
