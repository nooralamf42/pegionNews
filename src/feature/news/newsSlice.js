import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// Replace with your actual API key
const API_KEY = import.meta.env.VITE_API_KEY;

// Async thunks for fetching news
export const fetchBusinessNews = createAsyncThunk(
  "news/fetchBusinessNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&q=business`
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
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&q=finance`
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
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&q=stock%20market`
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

export const fetchTechNews = createAsyncThunk(
  "news/fetchCryptoNews",
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
  "news/fetchCryptoNews",
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
  "news/fetchCryptoNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&q=wealth`
    );
    console.log(response);
    return response.data.results.filter(
      (article) => article.image_url !== null || ""
    );
  }
);

export const fetchMutualFundNews = createAsyncThunk(
  "news/fetchCryptoNews",
  async () => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&removeduplicate=1&size=50&image=1&q=mutual%20fund`
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
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${query}`
    );
    if (category == "search")
      return { articles: response.data.results, category };
    else return { article: response.data.results[0], category };
  }
);

let data = {
  business: [
    {
      article_id: "346510ac1f0840b832f9227bf424c79e",
      title:
        "171 countries benefited from Saudi Arabia’s $132 billion worth humanitarian aid initiatives",
      link: "https://saudigazette.com.sa/article/645963/SAUDI-ARABIA/171-countries-benefited-from-Saudi-Arabias-$132-billion-worth-humanitarian-aid-initiatives?format=simple&link=link&ref=rss",
      keywords: ["saudi arabia"],
      creator: null,
      video_url: null,
      description:
        "Saudi Gazette reportRIYADH — A Yemeni government delegation, led by Prime Minister Ahmed Awad bin Mubarak, visited the headquarters of King Salman Humanitarian Aid and Relief Center (KSrelief) in Riyadh Saudi Gazette reportRIYADH — A Yemeni government delegation, led by Prime Minister Ahmed Awad bin Mubarak, visited the headquarters of King Salman Humanitarian Aid and Relief Center (KSrelief) in Riyadh Saudi Gazette reportRIYADH — A Yemeni government delegation, led by Prime Minister Ahmed Awad bin Mubarak, visited the headquarters of King Salman Humanitarian Aid and Relief Center (KSrelief) in Riyadh",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://saudigazette.com.sa/uploads/images/2024/10/03/2429856.jpg",
      source_id: "saudigazette",
      source_priority: 356263,
      source_name: "Saudi Gazette",
      source_url: "https://saudigazette.com.sa",
      source_icon: "https://i.bytvi.com/domain_icons/saudigazette.png",
      language: "english",
      country: ["saudi arabia"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "c2822fd25b12ac89b3ae08845fb7fbc9",
      title: "Aussie’s life upended by single Facebook rule",
      link: "https://www.heraldsun.com.au/business/companies/technology/dads-ridiculous-problem-with-facebook/news-story/ba3db57a1d32f4479449288ed264c48c",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://content.api.news/v3/images/bin/c284c20c4ad833ea7b9a512e51f050e3",
      source_id: "heraldsun",
      source_priority: 11450,
      source_name: "Herald Sun",
      source_url: "https://www.heraldsun.com.au",
      source_icon: "https://i.bytvi.com/domain_icons/heraldsun.png",
      language: "english",
      country: ["australia"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "dd80b26224c0d4b45447b8b5302feea5",
      title: "Aussie’s life upended by single Facebook rule",
      link: "https://www.news.com.au/finance/business/technology/dads-ridiculous-problem-with-facebook/news-story/ba3db57a1d32f4479449288ed264c48c?from=rss-basic",
      keywords: ["business technology"],
      creator: null,
      video_url: null,
      description:
        "A dad who had his life completely upturned in an instant is facing “hell” as he battles the social media giant.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://content.api.news/v3/images/bin/0ac9c72746e9443e898dd2fc5e92e0db",
      source_id: "news",
      source_priority: 3657,
      source_name: "News",
      source_url: "https://www.news.com.au",
      source_icon: "https://i.bytvi.com/domain_icons/news.png",
      language: "english",
      country: ["australia"],
      category: ["business"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: true,
    },
    {
      article_id: "e7b56601e6617efdd76f93d5910c4f40",
      title: "HELOISE 10-11-24",
      link: "https://www.rutlandherald.com/heloise-10-11-24/article_df7604f8-8103-11ef-826e-9fea4861bda7.html",
      keywords: null,
      creator: null,
      video_url: null,
      description: "FOR RELEASE FRIDAY, OCT. 11, 2024",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url: null,
      source_id: "rutlandherald",
      source_priority: 27612,
      source_name: "Rutland Herald",
      source_url: "https://www.rutlandherald.com",
      source_icon: "https://i.bytvi.com/domain_icons/rutlandherald.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "2515ab6602ffb5f2deb1effec6006f10",
      title: "SHINGLEHOUSE: Spook-tacularly festive",
      link: "https://www.bradfordera.com/news/shinglehouse-spook-tacularly-festive/article_e01dcec2-8103-11ef-962c-37b04b7c503b.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "It's Halloween already at this spook-tacularly festive house on Oswayo Street in Shinglehouse.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://bloximages.chicago2.vip.townnews.com/bradfordera.com/content/tncms/assets/v3/editorial/1/d6/1d6aebca-8104-11ef-a9e3-ab5f4390b89c/66fdb9702eda2.image.jpg?resize=300%2C169",
      source_id: "bradfordera",
      source_priority: 81265,
      source_name: "Bradford Era",
      source_url: "https://www.bradfordera.com",
      source_icon: "https://i.bytvi.com/domain_icons/bradfordera.jpg",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "288868023fec28fd7d002189f5bdbcb5",
      title: "10/2: Calcasieu Parish Sheriff announces arrest list",
      link: "https://www.americanpress.com/2024/10/02/10-2-calcasieu-parish-sheriff-announces-arrest-list/",
      keywords: ["arrests", "local news", "crime", "crime brief"],
      creator: ["Crystal Stevenson"],
      video_url: null,
      description:
        "The Calcasieu Parish Sheriff’s Office reported the following arrests: Kerry Lamont Johnson, 52, 624 S. Goodman Road No. 20 — home invasion; probation detainer. Bond: $45,000. Kay Evelyn Page, 62, 1011 Aberdeen Drive — domestic abuse battery. Bond: $5,000. Chaundrica Ashonte Robinson, 29, 1621 Orchard Drive — assault on emergency room personnel, emergency services personnel, [...]",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://www.americanpress.com/wp-content/uploads/sites/65/2023/12/Handcuffs.jpg",
      source_id: "americanpress",
      source_priority: 72700,
      source_name: "American Press",
      source_url: "https://www.americanpress.com",
      source_icon: "https://i.bytvi.com/domain_icons/americanpress.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "11fddf23fbfad83ca3f9d15a1d28e687",
      title:
        "Akamai Technologies Inc. stock outperforms competitors on strong trading day",
      link: "https://www.marketwatch.com/data-news/akamai-technologies-inc-stock-outperforms-competitors-on-strong-trading-day-a212f42d-50f01dd837ac",
      keywords: ["us:spx", "us:snps", "us:akam", "us:ctsh", "us:djia"],
      creator: null,
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url: null,
      source_id: "marketwatch",
      source_priority: 97,
      source_name: "Marketwatch",
      source_url: "https://www.marketwatch.com",
      source_icon: "https://i.bytvi.com/domain_icons/marketwatch.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "4253fb08318e6d99a908c6f1db1b1975",
      title:
        "AES Corp. stock underperforms Wednesday when compared to competitors",
      link: "https://www.marketwatch.com/data-news/aes-corp-stock-underperforms-wednesday-when-compared-to-competitors-35650863-f95736ec4918",
      keywords: ["us:nee", "us:spx", "us:duk", "us:djia", "us:aes"],
      creator: null,
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url: null,
      source_id: "marketwatch",
      source_priority: 97,
      source_name: "Marketwatch",
      source_url: "https://www.marketwatch.com",
      source_icon: "https://i.bytvi.com/domain_icons/marketwatch.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "384edd5e396d6a4136104cb2a572d6b7",
      title: "Barcelona lure goalkeeper Szczesny out of retirement",
      link: "https://www.gulf-times.com/article/691850/sports/barcelona-lure-goalkeeper-szczesny-out-of-retirement",
      keywords: null,
      creator: ["info@gulf-times.com (Gulf Times)"],
      video_url: null,
      description:
        "Polish goalkeeper Wojciech Szczesny has come out of retirement to sign for Spanish giants Barcelona. “Barcelona and the player Wojciech Szczesny have reached a deal for his signing until June 30, 2025...",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://www.gulf-times.com/gulftimes/uploads/images/2024/10/02/230424.jpg",
      source_id: "gulftimes",
      source_priority: 433545,
      source_name: "Gulf Times",
      source_url: "https://www.gulf-times.com",
      source_icon: "https://i.bytvi.com/domain_icons/gulftimes.jpg",
      language: "english",
      country: ["united arab emirates"],
      category: ["sports"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "2084c381e0a2a08987a19a0b1d6cd955",
      title: "In the age of the barbarians",
      link: "https://www.ekathimerini.com/opinion/1249829/in-the-age-of-the-barbarians/",
      keywords: ["opinion"],
      creator: ["Alexis Papachelas"],
      video_url: null,
      description:
        "We are facing a period of rapid global developments. The planet no longer has a “master,” and anyone who didn’t realize that before now understands it.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:18:00",
      pubDateTZ: "UTC",
      image_url:
        "https://www.ekathimerini.com/wp-content/uploads/2024/10/reuters-israeli_bombing_lebanon-960x600.jpg",
      source_id: "ekathimerini",
      source_priority: 73021,
      source_name: "Ekathimerini.com",
      source_url: "https://www.ekathimerini.com",
      source_icon: "https://i.bytvi.com/domain_icons/ekathimerini.png",
      language: "english",
      country: ["greece"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
  ],
  crypto: [
    {
      article_id: "15c4f46078185027bd197d6b809af399",
      title:
        "Qubetics Presale Surges: Over $1.13M Raised Amid Growing Interest in Avalanche and VeChain",
      link: "https://www.analyticsinsight.net/cryptocurrency-analytics-insight/qubetics-presale-surges-over-113m-raised-amid-growing-interest-in-avalanche-and-vechain",
      keywords: [
        "  cryptocurrency",
        " fundraising",
        "qubetics presale",
        " vechain",
        " avalanche ",
      ],
      creator: null,
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 22:00:00",
      pubDateTZ: "UTC",
      image_url:
        "https://media.assettype.com/analyticsinsight%2F2024-10-02%2Fxvcjqazx%2FScreenshot-2024-10-02-201016.png?ar=40%3A21&auto=format%2Ccompress&enlarge=true&mode=crop&ogImage=true&overlay=false&overlay_position=bottom&overlay_width=100&w=1200",
      source_id: "analyticsinsight",
      source_priority: 24556,
      source_name: "Analytics And Insight",
      source_url: "https://www.analyticsinsight.net",
      source_icon: "https://i.bytvi.com/domain_icons/analyticsinsight.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology", "business"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "6e75371e7c8f310343f25426f5082b6b",
      title:
        "BlockDAG's 50% Bonus Pushes Presale To $78M Amid XRP & NEAR Protocol Price Headlines",
      link: "https://www.analyticsinsight.net/cryptocurrency-analytics-insight/blockdags-50-bonus-pushes-presale-to-78m-amid-xrp-near-protocol-price-headlines",
      keywords: [
        "blockdag",
        " near protocol",
        " stablecoin",
        " crypto market",
        " ripple",
      ],
      creator: null,
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 22:00:00",
      pubDateTZ: "UTC",
      image_url:
        "https://media.assettype.com/analyticsinsight%2F2024-10-02%2F190stjbj%2Fblockdag-pushes.png?ar=40%3A21&auto=format%2Ccompress&enlarge=true&mode=crop&ogImage=true&overlay=false&overlay_position=bottom&overlay_width=100&w=1200",
      source_id: "analyticsinsight",
      source_priority: 24556,
      source_name: "Analytics And Insight",
      source_url: "https://www.analyticsinsight.net",
      source_icon: "https://i.bytvi.com/domain_icons/analyticsinsight.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology", "business"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "7e56956c331e31f94fd56bdaa2a46c08",
      title: "Here’s why Wormhole, Sui, and Mantra prices are defying gravity",
      link: "https://invezz.com/news/2024/10/02/heres-why-wormhole-sui-and-mantra-prices-are-defying-gravity/",
      keywords: ["crypto", "sui", "trading ideas"],
      creator: ["Crispus Nyaga"],
      video_url: null,
      description:
        "It has been a brutal week for cryptocurrencies as most of them erased gains made last week when investors cheered the Federal Reserve interest rate cuts and the robust stimulus from Chna, the second-biggest economy worldwide. Bitcoin slipped from $66,300 to about $60,000, while the crypto fear and greed index dropped from the greed area [...]",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 22:00:00",
      pubDateTZ: "UTC",
      image_url:
        "https://video.twimg.com/ext_tw_video/1836393568920858624/pu/vid/avc1/640x360/t00LlqGB5i2EQIW5.mp4?tag=12",
      source_id: "invezz",
      source_priority: 20604,
      source_name: "Invezz",
      source_url: "https://invezz.com",
      source_icon: "https://i.bytvi.com/domain_icons/invezz.jpg",
      language: "english",
      country: ["united kingdom"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "73da34f674457b8591c008f440a33d28",
      title: "How The Cryptocurrency Market Is Valued",
      link: "https://hackernoon.com/how-the-cryptocurrency-market-is-valued?source=rss",
      keywords: [
        "market-capitalization",
        "cryptocurrency-market",
        "crypto-valuation",
        "supply-and-demand",
        "future-of-crypto-market",
        "crypto-price",
        "mining-production-cost",
        "macroeconomics",
      ],
      creator: ["Abisola Iremide"],
      video_url: null,
      description:
        "The crypto market has emerged as a powerful force in the world’s financial market despite its volatility and numerous regulatory challenges.Over the past decade, digital currencies have been on the rise, and their prices have been mostly determined by some factors like market, technology, and management.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:35:35",
      pubDateTZ: "UTC",
      image_url:
        "https://hackernoon.com/https://cdn.hackernoon.com/images/TxDoBkwYR6SJyE4M2HkfSa574hE3-pc023gq.jpeg",
      source_id: "hackernoon",
      source_priority: 6723,
      source_name: "Hackernoon",
      source_url: "https://hackernoon.com",
      source_icon: "https://i.bytvi.com/domain_icons/hackernoon.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "6d0135027814eb9f9e0da0ac6fe85411",
      title:
        "This Week in Web3: Unlocking Blockchain’s Potential Within Payment Ecosystems",
      link: "https://www.pymnts.com/blockchain/2024/this-week-in-web3-unlocking-blockchains-potential-within-payment-ecosystems/",
      keywords: [
        "blockchain",
        "cryptocurrency",
        "revolut",
        "web3",
        "virtual assets regulatory authority",
        "paypal",
        "blockchain payments",
        "jpm coin",
        "christie's",
        "solana",
        "worldpay",
        "first abu dhabi bank",
        "news",
        "defi",
        "pymnts news",
        "robinhood",
        "solana foundation",
        "stablecoins",
        "decentralized finance",
      ],
      creator: ["PYMNTS"],
      video_url: null,
      description:
        "Blockchain is growing into a global innovation that transcends its initial association with crypto. The auction house Christie’s, for example, recently announced that an upcoming collection of fine art photography will include blockchain-based certificates of ownership for digital provenance purposes. And from banking to payments and beyond, blockchain technology is being adopted in mainstream industries, [...]The post This Week in Web3: Unlocking Blockchain’s Potential Within Payment Ecosystems appeared first on PYMNTS.com.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:30:01",
      pubDateTZ: "UTC",
      image_url:
        "https://www.pymnts.com/wp-content/uploads/2024/10/Robinhood-bitcoin-Web3.jpg",
      source_id: "pymnts",
      source_priority: 12704,
      source_name: "Pymnts",
      source_url: "https://www.pymnts.com",
      source_icon: "https://i.bytvi.com/domain_icons/pymnts.png",
      language: "english",
      country: ["united states of america"],
      category: ["business"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "3a0a452629bce544795eb07e9b33e981",
      title: "Bitcoin Price Drops 3.6% Amid Escalating Middle East Conflict",
      link: "https://www.tekedia.com/bitcoin-price-drops-3-6-amid-escalating-middle-east-conflict/",
      keywords: ["community insights", "israel", "bitcoin", "iran"],
      creator: ["Ojukwu Emmanuel"],
      video_url: null,
      description:
        "The price of Bitcoin has reportedly dropped by 3.6% in the last 24 hours, trading at $61,687 as of 03:37 a.m. EST, with trading volume surging 40%. The decline in the crypto asset comes after Iran launched an unprecedented attack against Israel, firing a barrage of missiles at the country in the latest escalation amid [...]The post Bitcoin Price Drops 3.6% Amid Escalating Middle East Conflict appeared first on Tekedia.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:25:59",
      pubDateTZ: "UTC",
      image_url:
        "https://tkcdn.tekedia.com/wp-content/uploads/2024/05/15095758/USD-chart-BTC-768x475.jpg",
      source_id: "tekedia",
      source_priority: 422136,
      source_name: "Tekedia",
      source_url: "https://www.tekedia.com",
      source_icon: "https://i.bytvi.com/domain_icons/tekedia.jpg",
      language: "english",
      country: ["nigeria"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "994825cc6aaf07a3aadd847e5d754dc4",
      title: "Use of BlackRock Tokens as Collateral Moves Closer to Mainstream",
      link: "https://ca.finance.yahoo.com/news/blackrock-tokens-collateral-moves-closer-185508914.html",
      keywords: null,
      creator: ["Bloomberg"],
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:24:00",
      pubDateTZ: "UTC",
      image_url:
        "https://s.yimg.com/ny/api/res/1.2/q8Xe6T7Ca4rbqbH.BNfGCw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bloomberg_markets_842/6ce29198f24f9db366d1e1ad7c47cf6a",
      source_id: "yahoo",
      source_priority: 17,
      source_name: "Yahoo! News",
      source_url: "https://news.yahoo.com",
      source_icon: "https://i.bytvi.com/domain_icons/yahoo.png",
      language: "english",
      country: ["canada"],
      category: ["business"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "2bbf7c908c91a54e6783f43733426e20",
      title:
        "Bank Of America Customers Shocked By Zero Balances In Online Account Glitch",
      link: "https://www.ibtimes.com/bank-america-customers-shocked-zero-balances-online-account-glitch-3745343",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Reports of the outage began flowing into Downdetector around noon ET Wednesday.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:23:02",
      pubDateTZ: "UTC",
      image_url:
        "https://d.ibtimes.com/en/full/4472567/regulators-ordered-250-mn-fines-restitution-bank-america-over-violations-banking-consumers.jpg?f=dfc0a6d8273075896acb4e65456a716a&w=736",
      source_id: "ibtimes",
      source_priority: 458722,
      source_name: "International Business Times",
      source_url: "https://www.ibtimes.com",
      source_icon: "https://i.bytvi.com/domain_icons/ibtimes.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "502bd360844eda58127c595eedb52693",
      title:
        "LinkedIn user’s bank account drained of $100,000 life savings after receiving ‘helpful’ message on site",
      link: "https://www.the-sun.com/news/12589522/linkedin-users-bank-account-drained-life-savings-crypto-scheme/",
      keywords: [
        "scams and fraud",
        "cyber crime and hacking",
        "us news",
        "social media",
        "news",
        "cryptocurrency",
      ],
      creator: ["Israel Salas-Rodriguez"],
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:22:37",
      pubDateTZ: "UTC",
      image_url:
        "https://www.the-sun.com/wp-content/uploads/sites/6/2024/10/JG-COMP-LINKEDIN-SCAM-.jpg?w=620",
      source_id: "thesun",
      source_priority: 1813,
      source_name: "The Sun",
      source_url: "https://www.thesun.co.uk",
      source_icon: "https://i.bytvi.com/domain_icons/thesun.png",
      language: "english",
      country: ["united states of america"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "171f4694d20e2d9d2fe298587f1f41c8",
      title:
        "$213 Million Bitcoin Dump Stuns Largest US Crypto Exchange, Shiba Inu Sees 360% Whale Activity Surge, Ripple Taps Major License in Dubai: Crypto News Digest by U.Today",
      link: "https://ng.investing.com/news/cryptocurrency-news/213-million-bitcoin-dump-stuns-largest-us-crypto-exchange-shiba-inu-sees-360-whale-activity-surge-ripple-taps-major-license-in-dubai-crypto-news-digest-by-utoday-1560814",
      keywords: null,
      creator: ["U.Today"],
      video_url: null,
      description: null,
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2024-10-02 21:15:19",
      pubDateTZ: "UTC",
      image_url: "https://i-invdn-com.investing.com/news/LYNXNPEF1P12L_M.jpg",
      source_id: "investing_ng",
      source_priority: 1205,
      source_name: "Investing Nigeria",
      source_url: "https://ng.investing.com",
      source_icon: "https://i.bytvi.com/domain_icons/investing_ng.png",
      language: "english",
      country: ["nigeria"],
      category: ["top"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
  ],
};

const initialState = {
  newsData: {
    business: [],
    finance: data.crypto,
    stock: data.business,
    crypto: data.crypto,
    search: [], // New state for search results
  },
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  searched: false,
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
  },
});

export default newsDataSlice.reducer;
