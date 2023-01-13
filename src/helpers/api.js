import axios from 'axios';

export const descriptionServicio = async ({ itemId }) => {
    const request = axios.get(
        `https://api.mercadolibre.com/items/${itemId}/description`
    );
    const { data } = await request;
    return data;
};

export const detailService = async ({ itemId }) => {
    const request = axios.get(`https://api.mercadolibre.com/items/${itemId}`);
    const { data } = await request;
    return data;
};

export const searchService = async ({ searchText, limit = 4 }) => {
    const request = axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}&limit=${limit}`
    );
    const { data } = await request;
    return data.results || [];
};
