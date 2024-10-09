import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// Replace with your actual API key
const API_KEY = import.meta.env.VITE_API_KEY;
const CRYPTO_API_URL = import.meta.env.VITE_CRYPTO_API_URL;

// Async thunks for fetching news
export const fetchBusinessNews = createAsyncThunk(
  "news/fetchBusinessNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&qInMeta=business`
    );
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchFinanceNews = createAsyncThunk(
  "news/fetchFinanceNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&qInMeta=finance`
    );
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchStockNews = createAsyncThunk(
  "news/fetchStockNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&qInMeta=stock%20market`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchCryptoNews = createAsyncThunk(
  "news/fetchCryptoNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/crypto?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);
export const fetchPoliticsNews = createAsyncThunk(
  "news/fetchPoliticsNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&category=politics`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchTechNews = createAsyncThunk(
  "news/fetchTechNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&category=technology`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchWorldNews = createAsyncThunk(
  "news/fetchWorldNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&category=world`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchWealthNews = createAsyncThunk(
  "news/fetchWealthNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&qInMeta=wealth`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchMutualFundNews = createAsyncThunk(
  "news/fetchMutualFundNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&qInMeta=mutual%20fund`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchSportsNews = createAsyncThunk(
  "news/fetchSportsNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&category=sports`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

// Fetch search news
export const fetchSearchNews = createAsyncThunk(
  "news/fetchSearchNews",
  async (query) => {
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&removeduplicate=1&size=50&image=1&q=${query}&language=en`
    );
    return response.data.results.filter(
      (article) => article.urlToImage !== null || ""
    );
  }
);


// Fetch current page news
export const fetchCurrentPageNews = createAsyncThunk(
  "news/fetchCurrentPageNews",
  async ({ query, category }) => {
    console.log(query)
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&qInTitle=${query}`
    );
    if (category == "search")
      return { articles: response.data.results, category };
    else return { article: response.data.results[0], category };
  }
);

// Fetch crypto data
export const fetchCryptoCoinData = createAsyncThunk(
  "news/fetchCryptoCoinData",
  async (coinName) => {
    const response = await axios.get(
      `https://rest.cryptoapis.io/market-data/assets/${query}`
    );
    return response.data
  }
);

// Fetch crpto live price data
export const fetchCryptoPrices = createAsyncThunk(
  'crypto/fetchPrices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(CRYPTO_API_URL);
      return response.data.usdt;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  newsData: {
    business: [],
    finance: [],
    stock: [],
    crypto: [],
    tech: [],
    wealth: [],
    world: [],
    mutual_fund: [],
    politics: [],
    sports: [],
    search: [], // New state for search results
  },
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  searched: false,
  cryptoPrices: {},
  prevCryptoPrices: {},
  priceDifferences: {},
};

const newsDataSlice = createSlice({
  name: "News Data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Business News
    builder.addCase(fetchBusinessNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBusinessNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.business = action.payload;
    });
    builder.addCase(fetchBusinessNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Finance News
    builder.addCase(fetchFinanceNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFinanceNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.finance = action.payload;
    });
    builder.addCase(fetchFinanceNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Stock News
    builder.addCase(fetchStockNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchStockNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.stock = action.payload;
    });
    builder.addCase(fetchStockNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Crypto News
    builder.addCase(fetchCryptoNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCryptoNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.crypto = action.payload;
    });
    builder.addCase(fetchCryptoNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Politics News
    builder.addCase(fetchPoliticsNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPoliticsNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.politics = action.payload;
    });
    builder.addCase(fetchPoliticsNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

     // Tech News
     builder.addCase(fetchTechNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTechNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.tech = action.payload;
    });
    builder.addCase(fetchTechNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

     // Wealth News
     builder.addCase(fetchWealthNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWealthNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.wealth = action.payload;
    });
    builder.addCase(fetchWealthNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

     // World News
     builder.addCase(fetchWorldNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWorldNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.world = action.payload;
    });
    builder.addCase(fetchWorldNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

     // Mutual Fund News
     builder.addCase(fetchMutualFundNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMutualFundNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.mutual_fund = action.payload;
    });
    builder.addCase(fetchMutualFundNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Sports News
    builder.addCase(fetchSportsNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSportsNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.newsData.sports = action.payload;
    });
    builder.addCase(fetchSportsNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Search News
    builder.addCase(fetchSearchNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      state.searched = true
      state.status = "succeeded";
      state.newsData.search = action.payload; // Set search news data
    });
    builder.addCase(fetchSearchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    //Current Page News
    builder.addCase(fetchCurrentPageNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCurrentPageNews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.searched = true;
      if (action.payload.category == "search") {
        state.newsData.search = action.payload.articles;
      } else {
        if(action.payload.article)state.newsData[action.payload.category] = [
          ...state.newsData[action.payload.category],
          action.payload.article
        ];
      }
    });
    builder.addCase(fetchCurrentPageNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    //crypto price 
    builder
      .addCase(fetchCryptoPrices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoPrices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.prevCryptoPrices = state.cryptoPrices;
        state.cryptoPrices = action.payload;
        
        // Calculate price differences
        state.priceDifferences = {};
        Object.keys(action.payload).forEach(key => {
          if (state.prevCryptoPrices[key]) {
            state.priceDifferences[key] = ((action.payload[key] - state.prevCryptoPrices[key]) / state.prevCryptoPrices[key]) * 100;
          }
        });

        // Update crypto news data
        state.newsData.crypto = Object.entries(action.payload)
          .map(([symbol, price]) => ({
            symbol,
            price,
            difference: state.priceDifferences[symbol] || 0,
          }));
      })
      .addCase(fetchCryptoPrices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default newsDataSlice.reducer;
