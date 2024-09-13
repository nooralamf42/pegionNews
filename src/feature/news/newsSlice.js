import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from 'axios';

// Replace with your actual API key
const API_KEY = import.meta.env.VITE_API_KEY

// Async thunks for fetching news
export const fetchBusinessNews = createAsyncThunk(
    'news/fetchBusinessNews',
    async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=business&apiKey=${API_KEY}`);
        return response.data.articles.filter((article)=>article.urlToImage !== null || "");
    }
);

export const fetchFinanceNews = createAsyncThunk(
    'news/fetchFinanceNews',
    async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=finance&apiKey=${API_KEY}`);
        return response.data.articles.filter((article)=>article.urlToImage !== null || "");
    }
);

export const fetchStockNews = createAsyncThunk(
    'news/fetchStockNews',
    async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=stock market&apiKey=${API_KEY}`);
        return response.data.articles.filter((article)=>article.urlToImage !== null || "");
    }
);

export const fetchCryptoNews = createAsyncThunk(
    'news/fetchCryptoNews',
    async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=crypto&apiKey=${API_KEY}`);
        return response.data.articles.filter((article)=>article.urlToImage !== null || "");
    }
);

// Fetch search news
export const fetchSearchNews = createAsyncThunk(
    'news/fetchSearchNews',
    async (query) => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
        return response.data.articles.filter((article)=>article.urlToImage !== null || "");
    }
);

const initialState = {
    newsData: {
        business: [],
        finance: [],
        stock: [],
        crypto: []
    },
    searchNews: [], // New state for search results
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const newsDataSlice = createSlice({
    name: 'News Data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Business News
        builder.addCase(fetchBusinessNews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchBusinessNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.newsData.business = action.payload;
        });
        builder.addCase(fetchBusinessNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // Finance News
        builder.addCase(fetchFinanceNews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchFinanceNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.newsData.finance = action.payload;
        });
        builder.addCase(fetchFinanceNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // Stock News
        builder.addCase(fetchStockNews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchStockNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.newsData.stock = action.payload;
        });
        builder.addCase(fetchStockNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // Crypto News
        builder.addCase(fetchCryptoNews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchCryptoNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.newsData.crypto = action.payload;
        });
        builder.addCase(fetchCryptoNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // Search News
        builder.addCase(fetchSearchNews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.searchNews = action.payload; // Set search news data
        });
        builder.addCase(fetchSearchNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export default newsDataSlice.reducer;
