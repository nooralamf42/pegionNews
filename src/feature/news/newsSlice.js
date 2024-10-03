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
    console.log(response)
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
    console.log(response)
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
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    return response.data.articles.filter(
      (article) => article.urlToImage !== null || ""
    );
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
    business: data.business,
    finance: [
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Jason Parham",
        title: "The Creators of 'Industry' Know Banking Is a Rigged Game",
        description:
          "The HBO drama about the Machiavellian world of high finance is an undeniable hit—and cocreators Mickey Down and Konrad Kay say “coke and boats” is just the beginning.",
        url: "https://www.wired.com/story/dial-up-industry-creators-mickey-down-konrad-kay/",
        urlToImage:
          "https://media.wired.com/photos/66d0a31f62fe2c49d739f1c0/191:100/w_1280,c_limit/dial-up-Mickey-and-Konrad-Culture.jpg",
        publishedAt: "2024-08-30T19:33:43Z",
        content:
          "Ambition is a curse in the arena of high finance. At the prestigious London investment bank Pierpoint, which doubles as the backdrop for the Gen Z banking drama Industry, a cohort of university gradu… [+2880 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Ministers to meet UK chancellor to discuss budget",
        description:
          "The first and deputy first ministers will travel to London to meet UK chancellor.",
        url: "https://www.bbc.com/news/articles/c5yp1rjlr17o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/798f/live/a8500070-704e-11ef-a86f-096f0c281a8a.jpg",
        publishedAt: "2024-09-12T05:23:16Z",
        content:
          "First Minister Michelle ONeill and Deputy First Minister Emma Little Pengelly at the launch of a draft programme for government\r\nNorthern Ireland's first and deputy first ministers will travel to Lon… [+3303 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Matthew Gault",
        title: "Trump Campaign Gets Hit by Hacks and Crypto Scams",
        description:
          "In multiple incidents over the past few weeks, the Trump family has shown that it's all in on crypto and vulnerable to all the hacks and scams that come with it.",
        url: "https://gizmodo.com/trump-campaign-gets-hit-by-hacks-and-crypto-scams-2000494616",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/09/DonaldTrumpCyrpto.jpg",
        publishedAt: "2024-09-04T14:25:12Z",
        content:
          "Former President Donald Trump and his family are still, in the year 2024, all in on crypto. Its costing them cash and credibility. On Tuesday night, the X accounts of two Trump family membersLara and… [+3257 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Charissa Cheong",
        title:
          "3 money mistakes even accounting professionals make, according to a personal finance expert who worked at EY and PwC",
        description:
          "A former Big Four employee, who's now a financial literacy expert, shared three personal finance mistakes she saw ex-colleagues make.",
        url: "https://www.businessinsider.com/pwc-ey-money-mistakes-personal-finance-expert-2024-9",
        urlToImage:
          "https://i.insider.com/66e93b01d17aa3c7b2b338eb?width=1200&format=jpeg",
        publishedAt: "2024-09-17T10:01:32Z",
        content:
          "Carla Hoppe founded Wealthbrite in 2021.IvanWeiss.London Ltd\r\n<ul><li>Carla Hoppe left a career at PwC and EY and started a financial literacy company.</li><li>She shared the common personal finance … [+6666 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Vittoria Elliott",
        title:
          "The US Needs Deepfake Porn Laws. These States Are Leading the Way",
        description:
          "Legislation addressing the crisis of deepfake porn is being proposed, passing, and failing at the state level all over the US. WIRED is keeping track of it all.",
        url: "https://www.wired.com/story/deepfake-ai-porn-laws/",
        urlToImage:
          "https://media.wired.com/photos/66d77fc0fb4327b24c9ef2c3/191:100/w_1280,c_limit/US-Legislation_Deepfake-Porn.jpg",
        publishedAt: "2024-09-05T10:00:00Z",
        content:
          "Last year, WIRED reported that deepfake pornography is only increasing, and researchers estimate that 90 percent of deepfake videos are of porn, the vast majority of which is nonconsensual porn of wo… [+2969 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Nature funding to be used to settle council pay deals",
        description:
          "BBC Scotland News understands that ministers have written to councils telling them to divert the money.",
        url: "https://www.bbc.com/news/articles/cwy7p2y1p1eo",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/82fa/live/2a441c30-62c9-11ef-b43e-6916dcba5cbf.jpg",
        publishedAt: "2024-08-25T10:34:02Z",
        content:
          "Money set aside for restoring nature is to be diverted into funding wage settlements in Scotlands local authorities. \r\nBBC Scotland News understands that ministers have written to councils telling th… [+1679 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Lucas Ropek",
        title:
          "Trump’s New Crypto Project Is Reportedly Saving the Best Loot for Its Founders",
        description:
          "In a thoroughly predictable development, Trump's new crypto project appears to be heavily weighted towards the already wealthy.",
        url: "https://gizmodo.com/trumps-new-crypto-project-is-reportedly-saving-the-best-loot-for-its-founders-2000494963",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-and-his-sons-stand-with-JD-Vance-at-the-Republican-Convention.jpg",
        publishedAt: "2024-09-05T13:20:07Z",
        content:
          "Donald Trump and his progeny have been touting a new crypto project that they claim will bring newfound economic power to “the people.” However, a new report claims that instead of doing that, it may… [+2334 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Matt Novak",
        title:
          "U.S. Coast Guard Hearing About Titan Sub Reveals Passengers’ Final Message",
        description:
          "A Monday hearing revealed new details about the implosion of the Titan sub.",
        url: "https://gizmodo.com/u-s-coast-guard-hearing-about-titan-sub-reveals-passengers-final-message-2000499368",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/09/oceangate-sub-logo.jpg",
        publishedAt: "2024-09-16T21:15:02Z",
        content:
          "Five people were killed June 18, 2023, in the Titan submersible that was journeying to see the wreckage of the Titanic, touching off a wave of scrutiny about the safety practices of OceanGate, the co… [+2355 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Swinney to make eradicating child poverty greatest priority",
        description:
          "The First Minister will put fighting child poverty at the centre of his Programme for Government.",
        url: "https://www.bbc.com/news/articles/cwyj0810304o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/d5d0/live/a3307700-6a13-11ef-bf9f-39ea53f11e06.jpg",
        publishedAt: "2024-09-04T05:18:27Z",
        content:
          "John Swinney will unveil his Programme for Government on Wednesday\r\nJohn Swinney believes the Scottish government can still enhance the lives of children and their families ahead of setting out its s… [+6130 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Shubhangi Goel",
        title:
          "Tyson's finance chief is out of the job. The Tyson heir got the gig at 32, making him the youngest Fortune 500 CFO.",
        description:
          "John Randal Tyson, an heir of founder John W. Tyson, will not return to his executive role at Tyson Foods — but he's staying with the company.",
        url: "https://www.businessinsider.com/john-tyson-heir-cfo-replaced-suspended-chief-financial-officer-2024-8",
        urlToImage:
          "https://i.insider.com/66d143b0392a3bda9f236da1?width=1200&format=jpeg",
        publishedAt: "2024-08-30T04:55:22Z",
        content:
          "Tyson Foods' former CFO John Randal Tyson will not return to his position after a DWI charge.AP Photo/Danny Johnston\r\n<ul><li>Tyson Foods' former CFO John Randal Tyson will not return to his position… [+2711 chars]",
      },
      {
        source: {
          id: null,
          name: "VentureBeat",
        },
        author: "Jon Stojan",
        title:
          "How ChainMyne is tailoring crypto solutions for elite investors",
        description:
          "CONTRIBUTOR CONTENT: The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integration of digital assets into mainstream…",
        url: "https://venturebeat.com/business/how-chainmyne-is-tailoring-crypto-solutions-for-elite-investors/",
        urlToImage:
          "https://venturebeat.com/wp-content/uploads/2024/09/Kims-shoot-shoot-15-juin-2024-Par-Randy-_I9A3725.jpg?w=1024?w=1200&strip=all",
        publishedAt: "2024-09-09T17:20:21Z",
        content:
          "The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integr… [+5626 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "'I'm trapped in a joint mortgage with my abuser'",
        description:
          "An abuse survivor describes her ordeal as a charity calls for action to tackle financial abuse.",
        url: "https://www.bbc.com/news/articles/cged39yw3y9o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/ee78/live/4e392640-701f-11ef-8f0e-158a0a407ec6.jpg",
        publishedAt: "2024-09-15T01:22:48Z",
        content:
          "Economic abuse can take many forms (picture posed by a model)\r\nMore than a decade after leaving her abusive ex-husband, Lauren is still trapped in their joint mortgage.\r\nHer ex stopped making repayme… [+5449 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Water firms to say bill cap plan is 'material risk'",
        description:
          'Industry lobby group Water UK to say regulator plans "hamper" its ability to improve its services.',
        url: "https://www.bbc.com/news/articles/cx2lgl9kypno",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/41f5/live/d65115a0-64ae-11ef-9c1d-87eb61479cfa.jpg",
        publishedAt: "2024-08-28T01:49:33Z",
        content:
          'Water companies will say later today that a planned cap on bill increases would create a "material risk" they would fail to raise the investment needed to stop sewage spills. \r\nIn July, regulator Ofw… [+2410 chars]',
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Ukraine's long-range drones using Western tech to hit Russia",
        description:
          "Western technology and finance are helping Ukraine carry out hundreds of long-range strikes inside Russia.",
        url: "https://www.bbc.com/news/articles/c6240qepyppo",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/1a04/live/e1c81760-655f-11ef-9851-c5606b77a2fd.png",
        publishedAt: "2024-08-29T05:01:09Z",
        content:
          "The Proletarsk oil depot in Russia's Rostov region burned for 10 days after it was hit by a Ukrainian drone\r\nWestern technology and finance are helping Ukraine carry out hundreds of long-range strike… [+6677 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "SNP choices contributing to financial pressure - watchdog",
        description:
          "The Scottish Fiscal Commission is warning of “difficult decisions” ahead to balance the Scottish budget.",
        url: "https://www.bbc.com/news/articles/c0rw9l40qxdo",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/d2ea/live/5e2a00e0-645a-11ef-b43e-6916dcba5cbf.jpg",
        publishedAt: "2024-08-27T10:16:53Z",
        content:
          'Finance Secretary Shona Robison says emergency spending curbs were "unavoidable" \r\nThe Scottish government\'s own decisions are to blame for much of the pressure" facing the country\'s finances, a watc… [+4096 chars]',
      },
      {
        source: {
          id: null,
          name: "Methodfi.com",
        },
        author: "Daring Fireball Department of Commerce",
        title: "[Sponsor] Method",
        description:
          "API for balance transfers, personal finance management & loan origination. Access liabilities held at 15,000+ FIs in the US, covering 96% of consumer debt.",
        url: "https://methodfi.com/",
        urlToImage:
          "https://cdn.prod.website-files.com/5fc8640f295dcf4c80cf09ac/604677bdd43f473b7cda0f50_carbon%20(2).png",
        publishedAt: "2024-09-24T01:01:03Z",
        content:
          "Method Financial’s authentication technology allows instant access to a consumer’s full liability portfolio using just personal information and consent, eliminating the need for usernames and passwor… [+562 chars]",
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Juli Clover",
        title: "Apple CFO Luca Maestri Stepping Down",
        description:
          "Apple's Chief Financial Officer Luca Maestri is stepping down from his role, Apple announced today. Maestri is not leaving the company and will lead the Corporate Services teams, including information systems and technology, information security, and real est…",
        url: "https://www.macrumors.com/2024/08/26/apple-cfo-luca-maestri-stepping-down/",
        urlToImage:
          "https://images.macrumors.com/t/58W5iU0gQYKgD_bXJ2DvKCd4VgE=/1600x/article-new/2020/10/apple-logo-cash-feature.jpg",
        publishedAt: "2024-08-26T20:39:39Z",
        content:
          "Apple's Chief Financial Officer Luca Maestri is stepping down from his role on January 1, 2025, Apple announced today. Maestri is not leaving the company and will lead the Corporate Services teams, i… [+2018 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Matt Novak",
        title:
          "Tumblr, Bluesky Numbers Surge as X Is Shut Down Again in Brazil",
        description:
          "Bluesky crossed 10 million users this week, adding 4 million new users since Musk's Brazil shenanigans.",
        url: "https://gizmodo.com/tumblr-bluesky-numbers-surge-as-x-is-shut-down-again-in-brazil-2000501422",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/09/elon-musk-tennis.jpg",
        publishedAt: "2024-09-20T18:30:23Z",
        content:
          "Elon Musk has ruined the social media platform X, formerly known as Twitter, ever since the billionaire bought the company in late 2022, with far-right extremists getting more attention than ever. Bu… [+3317 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title: "The Trumps Have Gone Full Crypto With World Liberty Financial",
        description:
          'An anonymous reader quotes a report from Wired: Eric and Donald Trump Jr., the sons of former president Donald Trump, have pledged to "make finance great again" with a new family-run crypto endeavor called World Liberty Financial. Introduced in a meandering l…',
        url: "https://politics.slashdot.org/story/24/09/17/0449227/the-trumps-have-gone-full-crypto-with-world-liberty-financial",
        urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        publishedAt: "2024-09-17T13:00:00Z",
        content:
          'Eric and Donald Trump Jr., the sons of former president Donald Trump, have pledged to "make finance great again" with a new family-run crypto endeavor called World Liberty Financial. Introduced in a … [+2040 chars]',
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "msmash",
        title: "How SEC Mobile Phones Can Signal an Imminent Stock Price Drop",
        description:
          "Mobile phone location data has linked site visits by US securities watchdogs to the headquarters of companies with measurable drops in their share prices -- even when no enforcement action is taken. From a report: When insiders sold shares right around a non-…",
        url: "https://yro.slashdot.org/story/24/09/13/0410215/how-sec-mobile-phones-can-signal-an-imminent-stock-price-drop",
        urlToImage: "https://a.fsdn.com/sd/topics/privacy_64.png",
        publishedAt: "2024-09-13T04:30:00Z",
        content:
          "When insiders sold shares right around a non-public visit by staff from the Securities and Exchange Commission, they avoided average losses of 4.9 per cent in the three months after the visit, accord… [+797 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jacob Zinkula",
        title:
          "A Gen Xer who grew her savings from $50k to $350k in 10 years shares the FIRE methods she's using to get to $1 million",
        description:
          "A Gen Xer shares the FIRE strategies she uses to reach $1 million in savings and retire by age 55.",
        url: "https://www.businessinsider.com/how-grow-savings-one-million-using-fire-methods-investing-saving-2024-9",
        urlToImage:
          "https://i.insider.com/66d88dde1d8d2deb96b8bcb3?width=1200&format=jpeg",
        publishedAt: "2024-09-05T10:03:02Z",
        content:
          "Miriam, age 43, says she's on track to reach her retirement savings goal of at least $1 million by age 55. Miriam\r\n<ul><li>A Gen Xer has grown her savings from $50,000 to $375,000 over the past decad… [+5401 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Kathleen Elkins",
        title:
          "An ex-Googler explains how she achieved financial independence in her 20s and created a runway to quit and start her own company",
        description:
          "Before quitting Google, Sherry Jiang built a sizable investment portfolio and downsized her lifestyle to increase her runway.",
        url: "https://www.businessinsider.com/how-a-millennial-hit-financial-independence-and-quit-google-job-2024-8",
        urlToImage:
          "https://i.insider.com/66ce1343c72ebc54a40f5517?width=1200&format=jpeg",
        publishedAt: "2024-08-28T08:00:02Z",
        content:
          "Sherry Jiang left Google in 2021 to work on a startup idea full-time.Courtesy of Sherry Jiang\r\n<ul><li>Sherry Jiang left Google in 2021 to start her own company, Peek, a personal finance platform.</l… [+6770 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "jstreaks@businessinsider.com (Jennifer Streaks)",
        title:
          "The author of 'I Will Teach You to Be Rich' says 'phantom costs' add 50% to the monthly expenses of owning a home",
        description:
          'Homeownership is not the only path to wealth, says "I Will Teach You to Be Rich" author Ramit Sethi, and phantom costs can actually derail your financial goals.',
        url: "https://www.businessinsider.com/ramit-sethi-phantom-costs-increase-homeownership-expenses-2024-8",
        urlToImage:
          "https://i.insider.com/66d1cd7b43b5e59d16b6f59a?width=1200&format=jpeg",
        publishedAt: "2024-08-31T10:58:02Z",
        content:
          "Affiliate links for the products on this page are from partners that compensate us and terms apply to offers listed (see our advertiser disclosure with our list of partners for more details). However… [+4694 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Yahoo Finance",
        title: "Apple announces its September event, new iPhone expected",
        description:
          "Apple has announced the company will reveal its latest devices on Monday, September 9. It's widely expected the tech giant will unveil an iPhone 16 and more ...",
        url: "https://finance.yahoo.com/video/apple-announces-september-event-iphone-193450848.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-08-26T19:34:50Z",
        content:
          "Apple has announced the company will reveal its latest devices on Monday, September 9. It's widely expected the tech giant will unveil an iPhone 16 and more about its AI-focused Apple Intelligence pl… [+226 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Yahoo Finance",
        title: "Is now the time to move some money into long-term bonds?",
        description:
          "With a potential Federal Reserve interest rate cut on the horizon, investors are wondering how this change might affect their finances. A key question...",
        url: "https://finance.yahoo.com/video/now-time-move-money-long-162256723.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-13T16:22:56Z",
        content:
          "With a potential Federal Reserve interest rate cut on the horizon, investors are wondering how this change might affect their finances. A key question emerges: which option will offer better returns … [+318 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Back-to-work scam warning after complaints hit peak",
        description:
          "Post-summer life admin leaves some exposed to scams, campaigners say, as fraud and fears grow.",
        url: "https://www.bbc.com/news/articles/clywrwryz3ko",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/9b31/live/3ffa4f00-69e9-11ef-8ae1-911441021d16.jpg",
        publishedAt: "2024-09-03T23:03:19Z",
        content:
          "Disputes over fraud and scams have hit their highest level for at least six years, according to the financial ombudsman.\r\nNew figures show thousands of complaints about cases were made to the ombudsm… [+3033 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title:
          "Microsoft and Abu Dhabi's MGX To Back $30 Billion BlackRock AI Infrastructure",
        description:
          "An anonymous reader quotes a report from Data Center Dynamics: BlackRock plans to launch a new $30 billion artificial intelligence (AI) investment fund focused on data centers and energy projects. Microsoft and Abu Dhabi-backed investment company MGX are gene…",
        url: "https://news.slashdot.org/story/24/09/18/2027246/microsoft-and-abu-dhabis-mgx-to-back-30-billion-blackrock-ai-infrastructure",
        urlToImage: "https://a.fsdn.com/sd/topics/money_64.png",
        publishedAt: "2024-09-19T00:02:00Z",
        content:
          "An anonymous reader quotes a report from Data Center Dynamics: BlackRock plans to launch a new $30 billion artificial intelligence (AI) investment fund focused on data centers and energy projects. Mi… [+1499 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Bradley Saacks",
        title:
          "Inside $178 billion Man Group's Oxford gathering: Academic hotshots, internal rising stars, and $25 trillion in institutional capital",
        description:
          "The 10th iteration of the Man Alternative Investment Summit shows how the biggest asset managers are growing more intertwined with their backers.",
        url: "https://www.businessinsider.com/man-group-annual-oxford-event-for-institutional-investors-2024-9",
        urlToImage:
          "https://i.insider.com/66e8a9babf0250c21493f05f?width=1200&format=jpeg",
        publishedAt: "2024-09-17T10:01:02Z",
        content:
          "Man Group, run by CEO Robyn Grew, has long had a relationship with the University of Oxford.Planet One Images/Universal Images Group via Getty Images; Man Group\r\n<ul><li>$178 billion Man Group's annu… [+5972 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "The Associated Press",
        title:
          "Hewlett Packard won't drop its UK claim against tech mogul Mike Lynch, who died when his yacht sank",
        description:
          "Hewlett Packard Enterprise said Monday it won't drop its U.K. claim for damages against the estate of British tech mogul Mike Lynch, who was killed when his ...",
        url: "https://www.yahoo.com/news/hewlett-packard-wont-drop-uk-173406700.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/yy.0u4rQfws.81B0lMgbtQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/6ecc5467b8b78a78ca3908205091a249",
        publishedAt: "2024-09-02T17:34:06Z",
        content:
          "LONDON (AP) Hewlett Packard Enterprise said Monday it won't drop its U.K. claim for damages against the estate of British tech mogul Mike Lynch, who was killed when his superyacht sank last month.\r\nB… [+1627 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jordan Hart",
        title:
          "You don't have to be a millionaire to retire before 50, accountant says. Here's how she did it.",
        description:
          "Accountant Sonia Smith said she left the workforce and retired early with the help of a side hustle and strategic 401(k) savings.",
        url: "https://www.businessinsider.com/accountant-retired-before-50-without-1-million-savings-2024-9",
        urlToImage:
          "https://i.insider.com/66cf17e043b5e59d16b5df91?width=1200&format=jpeg",
        publishedAt: "2024-09-04T10:07:02Z",
        content:
          "Sonia Smith (left) retired from Corporate America thanks to a savings account and a side hustle.Sonia Smith; Nora Carol Photography/Getty Images\r\n<ul><li>Sonia Smith retired at 47 without millions, l… [+2871 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Brian Sozzi",
        title: "Hasbro's three themes bringing in older consumers: CEO",
        description:
          "Yahoo Finance Executive Editor Brian Sozzi sits down with Hasbro (HAS) CEO Chris Cocks at the Goldman Sachs Communicopia and Technology Conference to discuss...",
        url: "https://finance.yahoo.com/video/hasbros-three-themes-bringing-older-213627511.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-10T21:36:27Z",
        content:
          "Yahoo Finance Executive Editor Brian Sozzi sits down with Hasbro (HAS) CEO Chris Cocks at the Goldman Sachs Communicopia and Technology Conference to discuss the toy company's older customer base, it… [+2327 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Reuters Videos",
        title:
          "Volkswagen warns time running out as clashes with workers over cuts",
        description:
          "STORY: Volkswagen held a tense staff meeting Wednesday.It was delayed for several minutes when its finance chief took to the stage to boos and shouts of...",
        url: "https://finance.yahoo.com/video/volkswagen-warns-time-running-clashes-153531752.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-04T15:35:31Z",
        content:
          'STORY: Volkswagen held a tense staff meeting Wednesday.\r\nIt was delayed for several minutes when its finance chief took to the stage to boos and shouts of "goodbye."\r\nFinance chief Arno Antlitz argue… [+2014 chars]',
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Tim Hardwick",
        title:
          "Setapp Mobile Launches in Open Beta as Alternative App Store in EU",
        description:
          "Ukraine-based developer MacPaw has announced the open beta release of Setapp Mobile, its alternative app store for iOS devices in the European Union. This launch comes in the wake of the Digital Markets Act (DMA), which mandates support for third-party app ma…",
        url: "https://www.macrumors.com/2024/09/17/macpaw-launches-setapp-mobile-eu/",
        urlToImage:
          "https://images.macrumors.com/t/FcuTXBoAYF0qOYiaoI8SdrZ_oxU=/1920x/article-new/2024/09/setapp-mobile-1.jpg",
        publishedAt: "2024-09-17T09:40:31Z",
        content:
          "Ukraine-based developer MacPaw has announced the open beta release of Setapp Mobile, its alternative app store for iOS devices in the European Union. This launch comes in the wake of the Digital Mark… [+1877 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Adrian Marlow",
        title:
          "You Can Grab iPhone 16 Pro for Free With This T-Mobile Preorder Deal",
        description:
          "Both new and existing T-Mobile customers can net the brand-new Apple iPhone 16 for free thanks to this trade-in deal.",
        url: "https://www.cnet.com/deals/you-can-grab-the-new-iphone-16-pro-for-free-with-this-t-mobile-preorder-deal/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/748ed884f2719d3431fa99a0a22dd08f68b9150a/hub/2024/09/10/ad541fa8-7c2d-4c11-9c32-9dd1b52d4e24/appleiphone16pro.png?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-09-13T11:51:42Z",
        content:
          "With Apple's annual iPhone launch event being earlier this week, it means that a lot of people have been excited about the iPhone 16 lineup since Monday, and a lot of them have been just itching to p… [+1424 chars]",
      },
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "Andrew Webster",
        title: "What the hell did I just watch?",
        description:
          "Francis Ford Coppola’s retrofuturistic parable Megalopolis stars Adam Driver, Aubrey Plaza, and Giancarlo Esposito, and hits theaters on September 27th.",
        url: "https://www.theverge.com/24243766/megalopolis-review",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/V8imGnsB0aY1ya0uoy61gbihI34=/0x0:1200x600/1200x628/filters:focal(323x292:324x293)/cdn.vox-cdn.com/uploads/chorus_asset/file/25619025/Megalopolis_Still_01.jpg",
        publishedAt: "2024-09-13T15:45:00Z",
        content:
          "Francis Ford Coppolas long-gestating epic Megalopolis is a series of loosely connected ideas, tied together with an undercooked world and embarrassing dialogue.\r\nByAndrew Webster, an entertainment ed… [+6344 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Ines Ferré",
        title:
          "Super Micro stock plunges 19% after company delays annual report following short-seller report",
        description:
          "Super Micro stock plunged Wednesday after the company announced it would delay filing its annual report.",
        url: "https://finance.yahoo.com/news/super-micro-stock-plunges-19-after-company-delays-annual-report-following-short-seller-report-200333718.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/spNM8C4FEAyNzbvL9fojsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/b5a30870-9a17-11ee-b777-f8340e7e9f83",
        publishedAt: "2024-08-28T20:03:33Z",
        content:
          "Super Micro Computer (SMCI) stock plunged 19% on Wednesday after the company said it would delay the filing of its annual report for its fiscal year that ended June 30.\r\nThe announcement comes a day … [+3683 chars]",
      },
      {
        source: {
          id: "ars-technica",
          name: "Ars Technica",
        },
        author: "Samuel Axon",
        title: "Apple shuffles CFOs for the first time in a decade",
        description: "Shakeups of the C-suite at Apple are quite rare.",
        url: "https://arstechnica.com/gadgets/2024/08/apple-shuffles-cfos-for-the-first-time-in-a-decade/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2017/02/apple-park-photo-1-building-trees-760x380.jpg",
        publishedAt: "2024-08-27T17:31:54Z",
        content:
          "Enlarge/ A building at Apple Park, the company's Cupertino, California, HQ.\r\n8\r\nApple has announced a major change on its leadership team: Longtime Chief Financial Officer Luca Maestri will step down… [+2031 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Vee Weir",
        title: "5 Scenarios Where You Shouldn't Pay Off Your Debt",
        description:
          "Commentary: In most cases, prioritizing debt payoff is the way to go, but here are a few exceptions to keep in mind.",
        url: "https://www.cnet.com/personal-finance/5-scenarios-where-you-shouldnt-pay-off-your-debt/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/2ad5c078c276a0e973a6b04d826c82b79c140334/hub/2024/05/31/ab74e992-9327-4cfb-a1a2-45334f00dd2c/lights-utility-cost.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-09-20T09:00:04Z",
        content:
          "The importance of paying off debt can't be understated. Not only does debt put pressure on overall financial circumstances; the financial worry is also scientifically linked to physiological and psyc… [+9671 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "insider@insider.com (Tessa Campbell)",
        title:
          "4 steps to take with your investments if the Fed cuts rates, according to financial planners",
        description:
          "A slowing economy is a great time for investors to reevaluate their portfolios, reallocate cash into the stock market, and diversify their holdings.",
        url: "https://www.businessinsider.com/fed-rate-cut-investing-strategy-financial-planners-2024-9",
        urlToImage:
          "https://i.insider.com/66e32923bf0250c21492dbfc?width=1200&format=jpeg",
        publishedAt: "2024-09-14T10:43:02Z",
        content:
          "Paid non-client promotion: Affiliate links for the products on this page are from partners that compensate us (see our advertiser disclosure with our list of partners for more details). However, our … [+7095 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Lucas Ropek",
        title:
          "Thankfully, Trump Is Still Alive. Unfortunately, So Is His Misguided Crypto Project",
        description:
          "Donald Trump officially announced details of his cryptocurrency project during an X space Monday night.",
        url: "https://gizmodo.com/thankfully-trump-is-still-alive-unfortunately-so-is-his-misguided-crypto-project-2000499496",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-speaks-at-a-campaign-event-in-Tucson-Arizona.jpg",
        publishedAt: "2024-09-17T18:20:21Z",
        content:
          "Donald Trump dodged another bullet this weekend when a second assassination attempt against him was foiled at his golf course in West Palm Beach. In an apparent show of resilience on Monday, Trump ap… [+5933 chars]",
      },
      {
        source: {
          id: null,
          name: "UPI.com",
        },
        author: "Clyde Hughes",
        title: "Canada announces plans for 100% surtax on Chinese EVs",
        description:
          "The Canadian government announced on Monday it will place a 100% surtax on all Chinese-made electric vehicles and a 25% surtax on imported Chinese steel and ...",
        url: "https://www.upi.com/Top_News/World-News/2024/08/26/Canada-China-EVs-100-percent-surtax/7721724690347/",
        urlToImage:
          "https://media.zenfs.com/en/united_press_international_articles_356/6f4139a58b7aa915fec512f3051d6ad1",
        publishedAt: "2024-08-26T17:22:49Z",
        content:
          "Aug. 26 (UPI) -- The Canadian government announced on Monday it will place a 100% surtax on all Chinese-made electric vehicles and a 25% surtax on imported Chinese steel and aluminum.\r\nThe government… [+2349 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Kathleen Elkins",
        title:
          "A day in the life of an American startup founder in Singapore who juggles timezones, 8 employees, and WhatsApp chats with hundreds of customers",
        description:
          '"I have to remind myself that with your own startup, the work never ends. So you have to create the boundaries yourself."',
        url: "https://www.businessinsider.com/day-in-the-life-of-startup-founder-ceo-in-singapore-2024-9",
        urlToImage:
          "https://i.insider.com/66e0ade183b8099cf9fd5a08?width=1200&format=jpeg",
        publishedAt: "2024-09-11T09:00:02Z",
        content:
          "Sherry Jiang is the founder of the personal finance platform Peek.Courtesy of Sherry Jiang\r\n<ul><li>Sherry Jiang quit her job at Google to launch the personal finance platform Peek.</li><li>The 32-ye… [+7184 chars]",
      },
      {
        source: {
          id: null,
          name: "Rock Paper Shotgun",
        },
        author: "Nic Reuben",
        title:
          "Remedy partner with Annapurna to co-finance Control 2 and explore Control and Alan Wake TV and film adaptations",
        description:
          "Remedy were “thrilled as Finnish people can be” to announce yesterday that they’ve secured funding for a Control sequel in a co-financing deal with Annapurna, who are also helping the Alan Wake studio bring their connected universe to “film, TV, and beyond”.\n…",
        url: "https://www.rockpapershotgun.com/remedy-partner-with-annapurna-to-co-finance-control-2-and-explore-control-and-alan-wake-tv-and-film-adaptations",
        urlToImage:
          "https://assetsio.gnwcdn.com/control_ultimate_edition_2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
        publishedAt: "2024-08-30T09:04:36Z",
        content:
          "Remedy were “thrilled as Finnish people can be” to announce yesterday that they’ve secured funding for a Control sequel in a co-financing deal with Annapurna, who are also helping the Alan Wake studi… [+2378 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "kcloonan@insider.com (Kelly Cloonan)",
        title:
          "The number of bitcoin millionaires has soared 111% in the last year as the cryptocurrency rallies",
        description:
          "The number of bitcoin millionaires has soared as  the crypto rallies. There have also been six new crypto billionaires minted in the past year.",
        url: "https://markets.businessinsider.com/news/currencies/bitcoin-millionaires-crypto-rally-cryptocurrency-etf-billionaires-sec-ethereum-wealth-2024-8",
        urlToImage:
          "https://www.businessinsider.com/public/assets/logos/og-image-logo-social.png?v=2023-11",
        publishedAt: "2024-08-27T18:50:37Z",
        content:
          "As crypto rallies, the number of bitcoin millionaires has more than doubled in the last year.\r\nAccording to a new report from New World Wealth and Henley &amp; Partners, the number of bitcoin million… [+2414 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Plaid Cymru attack Morgan over how Wales is funded",
        description:
          "Plaid's leader says Welsh Labour and First Minister Eluned Morgan's support of the funding model is \"beyond comprehension\".",
        url: "https://www.bbc.com/news/articles/c4gdj2qpewno",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/284a/live/3ed78050-6b9e-11ef-811b-09c4913a8684.jpg",
        publishedAt: "2024-09-05T21:40:09Z",
        content:
          'Plaid says Keir Starmer should be pushed by Eluned Morgan on how her government is funded\r\nThe first minister has been accused by Plaid Cymru of a "ludicrous contradiction in terms" over the way the … [+4945 chars]',
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "Scott Horsley",
        title:
          "The Federal Reserve starts cutting interesting rates in a big moment for the economy",
        description:
          "The Federal Reserve moved aggressively Wednesday to start cutting interest rates as easing inflation fears give way to concern about the job market.",
        url: "https://www.npr.org/2024/09/18/nx-s1-5115909/federal-reserve-interest-rate-cut-inflation",
        urlToImage:
          "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5521x3106+0+314/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F40%2Fdf%2F69e4c3394d79bd079965e91f22a8%2Fgettyimages-1852954823.jpg",
        publishedAt: "2024-09-18T18:06:22Z",
        content:
          "The Federal Reserve moved aggressively Wednesday to start cutting interest rates as easing inflation fears give way to growing concern about the job market. \r\nThe central bank lowered its benchmark i… [+2277 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Alex Bitter",
        title: "Ordering delivery has gotten wildly expensive",
        description:
          "The cost of delivery from Uber Eats, DoorDash, and other services is high for many diners. But the companies say demand is still strong.",
        url: "https://www.businessinsider.com/ordering-food-through-uber-eats-doordash-gotten-wildly-expensive-2024-9",
        urlToImage:
          "https://i.insider.com/66d76d8614a5cd1fcc8ce411?width=1200&format=jpeg",
        publishedAt: "2024-09-07T09:47:02Z",
        content:
          "Uber Eats and DoorDash continued to attract customers despite a pullback in consumer spending.Getty\r\n<ul><li>Ordering food for delivery can cost twice as much as dining in.</li><li>Some diners say it… [+4748 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Rebecca Rommen",
        title:
          "Investigators say 5 bodies were found in the same cabin of Mike Lynch's superyacht as prosecutors begin looking into 'crime hypothesis'",
        description:
          "Prosecutors say a manslaughter investigation has been opened after the sinking of British tech tycoon Mike Lynch's superyacht.",
        url: "https://www.businessinsider.com/5-bodies-found-same-cabin-mike-lynch-superyacht-investigators-2024-8",
        urlToImage:
          "https://i.insider.com/66c9ea6d1aa2ac29ee33f898?width=1200&format=jpeg",
        publishedAt: "2024-08-24T16:07:46Z",
        content:
          'Rescue workers at a harbor in Porticello.Jonathan Brady - PA Images\r\n<ul><li>Investigators say five bodies were found in the same cabin of Mike Lynch\'s superyacht.</li><li>The "Bayesian" sank off the… [+1922 chars]',
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Aditi Bharade",
        title:
          "Hewlett Packard confirms it will continue to sue Mike Lynch's family for $4 billion after he died in a tragic yacht sinking",
        description:
          "HP and Lynch have been embroiled in a lawsuit over the sale of Lynch's company Autonomy for 13 years. Lynch died when his superyacht sank in August.",
        url: "https://www.businessinsider.com/hp-confirmed-will-continue-sue-mike-lynch-family-2024-9",
        urlToImage:
          "https://i.insider.com/66d66fde1d8d2deb96b80b04?width=1200&format=jpeg",
        publishedAt: "2024-09-03T04:25:18Z",
        content:
          "Mike Lynch, the late former chief executive of Autonomy Corp. Dan Kitwood/Getty Images\r\n<ul><li>HP will continue suing Mike Lynch's grieving family for up to $4 billion after his tragic death.</li><l… [+2358 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Beatrice Nolan",
        title:
          "Adam Neumann's climate startup is quietly refunding investors after failing to launch a crypto token, report says",
        description:
          "Flowcarbon has been refunding its Goddess Nature Token after failing to launch the token, Forbes reported.",
        url: "https://www.businessinsider.com/adam-neumann-climate-startup-flowcarbon-refunding-investors-report-2024-9",
        urlToImage:
          "https://i.insider.com/654bd7c2b788914e5552b1c5?width=1200&format=jpeg",
        publishedAt: "2024-09-12T11:07:50Z",
        content:
          "Former WeWork CEO Adam Neumann.Shahar Azran/Getty Images\r\n<ul><li>Adam Neumann's climate tech startup is quietly refunding investors, Forbes reported.</li><li>Flowcarbon has reportedly been refunding… [+2474 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Lian Kit Wee",
        title: "Berkshire's vice-chair just cut his stake in Buffett's company",
        description:
          "Ajit Jain, Berkshire Hathaway vice-chair, just sold half of his company stake. At the end of August, the company's  market cap surged to $1 trillion.",
        url: "https://www.businessinsider.com/berkshire-ajit-jain-sold-139-million-shares-warren-buffett-2024-9",
        urlToImage:
          "https://i.insider.com/66e3b667cfb7f307e57143c2?width=1200&format=jpeg",
        publishedAt: "2024-09-13T04:46:25Z",
        content:
          "Ajit Jain reduces his stake in Berkshire Hathaway by $139 million.Carlos Barria/Reuters\r\n<ul><li>Ajit Jain, Berkshire's vice-chair sold $139 million of the company's shares on Monday.</li><li>Jain wi… [+2512 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Reuters",
        title: "In Russia, some crypto miners go underground - literally",
        description:
          "Russia's southern republic of Dagestan has called for tougher measures against power-hungry cryptocurrency miners who local officials said were causing...",
        url: "https://www.yahoo.com/news/russia-crypto-miners-underground-literally-082744650.html",
        urlToImage:
          "https://media.zenfs.com/en/reuters.com/2800a853d2012d642ba98c3ce728acfe",
        publishedAt: "2024-09-24T08:27:44Z",
        content:
          "MOSCOW (Reuters) - Russia's southern republic of Dagestan has called for tougher measures against power-hungry cryptocurrency miners who local officials said were causing electricity outages and seek… [+1349 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title:
          "Netanyahu asks 'forgiveness' over hostage deaths as protests continue",
        description:
          'It comes as Hamas said more hostages could be "returned to their families in shrouds" if a ceasefire isn\'t reached.',
        url: "https://www.bbc.com/news/articles/cn02pz4wnyro",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/9776/live/45780950-6966-11ef-b43e-6916dcba5cbf.jpg",
        publishedAt: "2024-09-02T22:10:38Z",
        content:
          'Benjamin Netanyahu has asked for "forgiveness" from Israelis for failing to return six hostages found dead in Gaza on Saturday, as Hamas warned more could be "returned to their families in shrouds" i… [+4955 chars]',
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Insider Inc.",
        title: "The Road to IPO",
        description:
          "Business Insider's virtual event full of insider tips on what makes a successful launch into the public markets.",
        url: "https://www.businessinsider.com/events/the-road-to-ipo",
        urlToImage:
          "https://media.tbistatic.com/bistudios/_00/dev/client/xxxxxx",
        publishedAt: "2024-09-18T20:35:32Z",
        content:
          "The Road to IPO<!-- Meta data --> <!-- Browser favicons --><!-- Google Tag Manager - for BI use GTM-NS64GV - for Insider use GTM-K2K9CK --> (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n… [+2861 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Peter Kafka",
        title:
          "It took Larry Ellison just a single day to make enough money to buy Paramount",
        description:
          "Wall Street loves AI. It's not really into media. Which is why it's no sweat for one of the world's richest men to buy a Hollywood studio.",
        url: "https://www.businessinsider.com/oracle-larry-ellison-paramount-ai-stock-2024-9",
        urlToImage:
          "https://i.insider.com/66e98d2ccfb7f307e5723a33?width=1200&format=jpeg",
        publishedAt: "2024-09-17T14:11:30Z",
        content:
          "Larry Ellison, left, is one of the world's richest men. That means it's easy for him to finance the purchase of Paramount for his son, David, right.Clive Brunskill/Getty Images\r\n<ul><li>Oracle stock … [+2418 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Aditi Bharade",
        title:
          "The Titan submersible's lead engineer says he told OceanGate CEO Stockton Rush, 'I'm not getting in it' when asked to do a test dive",
        description:
          "OceanGate's former engineering director said he had refused to pilot the ill-fated submersible which imploded more than a year ago.",
        url: "https://www.businessinsider.com/titan-engineer-told-ceo-not-getting-in-it-test-dive-2024-9",
        urlToImage:
          "https://i.insider.com/66e8fc12d17aa3c7b2b33707?width=1200&format=jpeg",
        publishedAt: "2024-09-17T08:33:20Z",
        content:
          "OceanGate Expeditions' Titan submersible.OceanGate Expeditions via AP, File\r\n<ul><li>OceanGate's former engineering director said he refused to take a dive in the ill-fated submersible.</li><li>Tony … [+2347 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Dan DeFrancesco",
        title: "The Fed finally cut interest rates. Here's what comes next.",
        description:
          "Don't expect an immediate impact from the Fed cutting interest rates. But that doesn't mean you can't start planning now.",
        url: "https://www.businessinsider.com/federal-reserve-interest-rate-cuts-mortgage-investment-credit-savings-2024-9",
        urlToImage:
          "https://i.insider.com/66ec1ba6d17aa3c7b2b40f8c?width=1200&format=jpeg",
        publishedAt: "2024-09-19T12:50:38Z",
        content:
          "iStock; BI\r\n<ul><li>This is an excerpt from the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Go big or go home.The Federal Reserve didn't h… [+2583 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Reuters",
        title:
          "Canada mulls surtax on Chinese critical mineral products, batteries, solar products",
        description:
          "Canada said on Tuesday it was considering a potential surtax on Chinese critical mineral products, batteries and parts, solar products, and semiconductors, a...",
        url: "https://finance.yahoo.com/news/canada-mulls-surtax-chinese-critical-153250591.html",
        urlToImage:
          "https://media.zenfs.com/en/reuters-finance.com/10fcadccefceffb0bb984a8ca9245166",
        publishedAt: "2024-09-10T15:32:50Z",
        content:
          "OTTAWA (Reuters) - Canada said on Tuesday it was considering a potential surtax on Chinese critical mineral products, batteries and parts, solar products, and semiconductors, a move which could promp… [+1107 chars]",
      },
      {
        source: {
          id: null,
          name: "Apple Newsroom",
        },
        author: "John Gruber",
        title: "Apple Announces Chief Financial Officer Transition",
        description:
          "Apple today announced that Chief Financial Officer Luca Maestri will transition from his role on January 1, 2025.",
        url: "https://www.apple.com/newsroom/2024/08/apple-announces-chief-financial-officer-transition/",
        urlToImage:
          "https://www.apple.com/newsroom/images/default/apple-logo-og.jpg?202408262030",
        publishedAt: "2024-08-27T16:36:18Z",
        content:
          "August 26, 2024\r\nPRESS RELEASE\r\nApple announces Chief Financial Officer transition\r\nCUPERTINO, CALIFORNIA Apple today announced that Chief Financial Officer Luca Maestri will transition from his role… [+3377 chars]",
      },
      {
        source: {
          id: "time",
          name: "Time",
        },
        author: "Justin Worland",
        title:
          "Companies Shouldn’t Overlook This IRA Fund That’s Boosting Local Climate Projects",
        description:
          "The Greenhouse Gas Reduction Fund committed $27 billion to a range of organizations to support community climate and clean energy projects.",
        url: "https://time.com/7018693/greenhouse-gas-reduction-fund-ira-climate/",
        urlToImage:
          "https://api.time.com/wp-content/uploads/2024/09/solar-installer-inflation-reduction-act.jpg?quality=85&w=1024&h=628&crop=1",
        publishedAt: "2024-09-06T15:46:24Z",
        content:
          "(To get this story in your inbox, subscribe to the TIME CO2 Leadership Report newsletter here.)\r\nLast month, the Greenhouse Gas Reduction Fund (GGRF) committed to sending $27 billion to a range of or… [+3721 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jacob Zinkula,Madison Hoff",
        title:
          "A millennial has been looking for a tech job for over a year after being laid off. He says AI and being Black have worked against him.",
        description:
          "A millennial who's been looking for a job for a year shares the strategies he's tried and why he thinks his search has been so difficult.",
        url: "https://www.businessinsider.com/millennial-cant-find-job-tech-blames-racial-discrimination-ai-2024-9",
        urlToImage:
          "https://i.insider.com/66eda299cfb7f307e5738a90?width=1200&format=jpeg",
        publishedAt: "2024-09-24T10:03:02Z",
        content:
          "A millennial (not pictured) has been looking for a tech job for over a year after being laid off. Getty Images; Alyssa Powell/BI\r\n<ul><li>A millennial has been looking for a job after being laid off … [+8523 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Josh Lipton",
        title: "Who are Nvidia's biggest competitors?",
        description:
          "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights & Strategy Founder, CEO and...",
        url: "https://finance.yahoo.com/video/nvidias-biggest-competitors-205250026.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/8yFpXl1ApIWZn9n6rZOgnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/336a2cc0-64b1-11ef-aa6b-41c9a5f97821",
        publishedAt: "2024-08-27T20:52:50Z",
        content:
          "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights &amp; Strategy Founder, CEO and chief analyst Patrick Moorhead joins Ya… [+1601 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Reuters",
        title:
          "Moscow approves Unilever deal to offload Russian assets, RBC cites sources",
        description:
          "MOSCOW (Reuters) -Consumer goods giant Unilever has received Russian government approval to sell its assets in Russia, the RBC business daily reported on...",
        url: "https://finance.yahoo.com/news/moscow-approves-unilever-deal-offload-134537894.html",
        urlToImage:
          "https://media.zenfs.com/en/reuters-finance.com/2a15c9fe46df18503b27e270a675f16a",
        publishedAt: "2024-09-04T13:45:37Z",
        content:
          "MOSCOW (Reuters) -Consumer goods giant Unilever has received Russian government approval to sell its assets in Russia, the RBC business daily reported on Wednesday, citing unnamed sources familiar wi… [+1837 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Seana Smith",
        title:
          "Nvidia earnings: Options market predicting $300 billion swing in stock",
        description:
          "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.  ...",
        url: "https://finance.yahoo.com/video/nvidia-one-strategist-sees-stock-171500570.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-08-26T17:15:00Z",
        content:
          "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.\r\nBayCrest equity derivatives managing director D… [+1427 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Yahoo Finance",
        title:
          "What working on Wall Street taught a former NFL star about money",
        description:
          "No two roads to financial literacy are the same. Some learn lessons in school, some from parents, others through trial and error. In this episode of...",
        url: "https://finance.yahoo.com/video/working-wall-street-taught-former-160000339.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-08-26T16:00:00Z",
        content:
          'No two roads to financial literacy are the same. Some learn lessons in school, some from parents, others through trial and error.\r\nIn this episode of "Financial Freestyle," host Ross Mac is joined by… [+1418 chars]',
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Emmalyse Brownstein",
        title: "America's most boring job is on the brink of extinction",
        description:
          "Inside the desperate campaign to get Gen Z to become accountants",
        url: "https://www.businessinsider.com/accountant-shortage-sexy-taxes-business-school-pwc-kpmg-2024-8",
        urlToImage:
          "https://i.insider.com/66c8da1243b5e59d16b4cc2e?width=1200&format=jpeg",
        publishedAt: "2024-08-26T09:58:02Z",
        content:
          "Jimmy Simpson for BI\r\nFor most of his youth, Bryan wanted to be an astrophysicist.He was obsessed with the Hubble telescope, and his bedroom ceiling was dotted with plastic glow-in-the-dark stars. Wh… [+12126 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Wesley Hilliard)",
        title: "Apple CFO shakeup: Kevan Parekh replacing Luca Maestri",
        description:
          "Luca Maestri has served as Apple's CFO for over a decade, but he's stepping down and being replaced by Kevan Parekh, Apple's current VP of Financial Planning and Analysis.Apple ParkKevan Parekh has spent 11 years at Apple and leads Financial Planning and Anal…",
        url: "https://appleinsider.com/articles/24/08/26/apple-cfo-shakeup-kevan-parekh-replacing-luca-maestri",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60820-125234-Apple-Park-23-xl.jpg",
        publishedAt: "2024-08-26T20:57:37Z",
        content:
          "Apple Park\r\nLuca Maestri has served as Apple's CFO for over a decade, but he's stepping down and being replaced by Kevan Parekh, Apple's current VP of Financial Planning and Analysis.\r\nKevan Parekh h… [+2123 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Clifford Colby",
        title:
          "How to Claim Your Share of Cash App's $15 Million Legal Settlement",
        description:
          "If you've used Cash App in the past six years, you could be eligible for up to a $2,500 payout for data breaches.",
        url: "https://www.cnet.com/personal-finance/how-to-claim-your-share-of-cash-apps-15-million-legal-settlement/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/9fa2c8638cda96a58cfc9c428ad5807d8c4cc491/hub/2024/08/13/769a0417-531f-4547-9293-27c09393f4da/3.png?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-09-07T17:45:03Z",
        content:
          "Cash App is one of the most popular payment services around, with more than 50 million users -- the service has even expanded into free tax filing and high-yield savings accounts. However, Cash App i… [+3225 chars]",
      },
      {
        source: {
          id: null,
          name: "Presse-citron",
        },
        author: "Setra",
        title:
          "Google finance une constellation de satellites (mais pas pour concurrencer Starlink)",
        description:
          "Google participe au financement et au développement de la constellation FireSat, qui serviront à surveiller les feux de forêt afin de permettre aux pompiers d’intervenir le plus rapidement possible.",
        url: "https://www.presse-citron.net/google-finance-une-constellation-de-satellites-mais-pas-pour-concurrencer-starlink/",
        urlToImage:
          "https://www.presse-citron.net/app/uploads/2024/09/Google-logo.jpg",
        publishedAt: "2024-09-17T16:31:00Z",
        content:
          "Dans un communiqué, Google annonce un financement de 13 millions de dollars pour démarrer un projet baptisé FireSat, dont lobjectif est de lancer une nouvelle constellation de satellites. Cette const… [+3111 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "jsor@businessinsider.com (Jennifer Sor)",
        title:
          "Tesla investor Ross Gerber says he's been dumping the stock because no one wants the company's cars or robots",
        description:
          "\"We've seen sales go down, and that's what's happening. If you're expecting a great quarter, you're wrong. They're not selling any Teslas here.\"",
        url: "https://markets.businessinsider.com/news/stocks/tesla-stock-outlook-elon-musks-cars-sales-robots-ross-gerber-2024-8",
        urlToImage:
          "https://i.insider.com/66cc8a47c72ebc54a40eb3e4?width=1200&format=jpeg",
        publishedAt: "2024-08-26T15:44:13Z",
        content:
          "One of Tesla's longtime investors has dumped around half his stake in Elon Musk's carmaker. \r\nAccording to longtime shareholder Ross Gerber, that's because no one seems interested in buying its cars … [+2486 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Dan DeFrancesco",
        title:
          "Harris and Trump face off for the first time tonight, but some corners of the business world are already over it",
        description:
          "Kamala Harris and Donald Trump will face off on the debate stage at 9 p.m. ET, but some investors view it as a distraction for their money managers.",
        url: "https://www.businessinsider.com/kamala-harris-donald-trump-presidential-debate-wall-street-tech-thoughts-2024-9",
        urlToImage:
          "https://i.insider.com/66a8dbfdaab37011780b8f56?width=1200&format=jpeg",
        publishedAt: "2024-09-10T12:54:00Z",
        content:
          "Patrick Semansky/AP Images; Chip Somodevilla/Getty Images; Alyssa Powell/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's dail… [+7756 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Germany's Welcome Culture sours to Auf Wiedersehen",
        description:
          "As Germany's far-right sees electoral success, migrants who arrived since 2015 say they feel unwelcome.",
        url: "https://www.bbc.com/news/articles/clyvglq47y9o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/9f28/live/2e878e30-7741-11ef-9ea5-c98d261e881d.jpg",
        publishedAt: "2024-09-20T23:09:45Z",
        content:
          "Anti-migrant far-right Alternative for Germany, or AfD, could win the most votes in Brandenburg's election\r\nOn Sunday, voters in the eastern German state of Brandenburg will vote for a new regional p… [+7178 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "Public libraries in 'crisis' as councils cut services",
        description:
          "Deprived communities lost more libraries since 2016 than richer areas did, the BBC finds",
        url: "https://www.bbc.com/news/articles/cn9lexplel5o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/61c8/live/7d639590-6606-11ef-b04a-2f00cb1407e3.jpg",
        publishedAt: "2024-09-02T23:13:06Z",
        content:
          "More than 180 council-run libraries have either closed or been handed over to volunteer groups in the UK since 2016, BBC analysis has found.\r\nMore deprived communities were four times more likely to … [+7221 chars]",
      },
      {
        source: {
          id: null,
          name: "MarketWatch",
        },
        author: "Brett Arends",
        title: "If ‘Medicare For All’ is so bad, why is Medicare so popular?",
        description: "Seniors love Medicare. Does this make them communists?",
        url: "https://www.marketwatch.com/story/if-medicare-for-all-is-so-bad-why-is-medicare-so-popular-c29bb1aa",
        urlToImage: "https://images.mktw.net/im-67657181/social",
        publishedAt: "2024-08-29T18:28:00Z",
        content:
          "Brett Arends is an award-winning financial writer with many years experience writing about markets, economics and personal finance. He has received an individual award from the Society of American Bu… [+273 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Kenneth Niemeyer",
        title: "Here's why Gen Z loses more money to online scams than boomers",
        description:
          "Gen Z reported losing the most money over average to online scams last year. Boomers lost less on average but lost most to romance scams.",
        url: "https://www.businessinsider.com/gen-z-loses-more-money-to-online-scams-than-boomers-2024-8",
        urlToImage:
          "https://i.insider.com/66d36d8414a5cd1fcc8c68ec?width=1200&format=jpeg",
        publishedAt: "2024-09-01T10:43:02Z",
        content:
          "According to the Better Business Bureau, people aged 18 to 24 reported the highest median losses to online scams last year.seksan Mongkhonkhamsao/Getty Images\r\n<ul><li>Gen Z reported the highest medi… [+3136 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Alice Tecotzky",
        title: "Where Harris is outspending Trump the most",
        description:
          "Harris is spending most in Pennsylvania and is fueled by huge fundraising numbers. At a Wall Street event on Sunday, she raised $27 million",
        url: "https://www.businessinsider.com/kamala-harris-outspending-donald-trump-pennsylvania-wall-street-fundraiser-2024-9",
        urlToImage:
          "https://i.insider.com/66f18be8ce3009a0fac87392?width=1200&format=jpeg",
        publishedAt: "2024-09-23T15:54:46Z",
        content:
          "Harris raised a whopping $27 million at a Wall Street event, where she appealed to the AI and crypto community.Kevin Dietsch/Getty Images\r\n<ul><li>Harris is outspending Trump by nearly $5 million eve… [+3483 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Kathleen Elkins",
        title:
          "A real-estate investor who has financed properties with both 15- and 30-year mortgages has an obvious favorite. Why he'd always pick the shorter one.",
        description:
          "Real estate investor Steve Lewis prefers a shorter-term loan for a few reasons, the main one being that it allows you to build equity much quicker.",
        url: "https://www.businessinsider.com/real-estate-investor-explains-why-he-prefers-15-year-mortgages-2024-9",
        urlToImage:
          "https://i.insider.com/66da30665444ffafa762f9eb?width=1200&format=jpeg",
        publishedAt: "2024-09-06T09:30:02Z",
        content:
          "Real estate investor Steve Lewis and his wife Belkis reside in New Jersey.Courtesy of Steve Lewis\r\n<ul><li>Steve Lewis prefers to finance investment properties with a 15-year mortgage.</li><li>The pa… [+2746 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Huileng Tan",
        title:
          "Russia says it's the bigger person for not cutting Europe's natural gas supply — but that's not all there is to it",
        description:
          "Russia supplied 40% of Europe's gas before the full-scale invasion of Ukraine. It's now down to 15%.",
        url: "https://www.businessinsider.com/why-russia-hasnt-cut-europe-natural-gas-supply-economy-war-2024-9",
        urlToImage:
          "https://i.insider.com/66f0d721cfb7f307e573c80c?width=1200&format=jpeg",
        publishedAt: "2024-09-24T02:54:05Z",
        content:
          "Russian President Vladimir Putin has asked his government to look into limiting the exports of commodities.Getty Images\r\n<ul><li>Russia's oil and gas profits are under pressure.</li><li>Before the wa… [+3790 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Seana Smith",
        title: "MicroStrategy buys additional $1.11 billion worth of bitcoin",
        description:
          "MicroStrategy (MSTR) has once again added more bitcoin (BTC-USD) holdings to its portfolio, purchasing an additional $1.11 billion worth of the...",
        url: "https://finance.yahoo.com/video/microstrategy-buys-additional-1-11-152200387.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-13T15:22:00Z",
        content:
          "MicroStrategy (MSTR) has once again added more bitcoin (BTC-USD) holdings to its portfolio, purchasing an additional $1.11 billion worth of the cryptocurrency. This brings MicroStrategy's total bitco… [+341 chars]",
      },
      {
        source: {
          id: null,
          name: "Quartz India",
        },
        author: "Madeline Fitzgerald",
        title: "The 10 most popular podcasts about money and finance",
        description:
          "An estimated half-a-billion people listen to podcasts annually – enriching their morning commutes, workouts, and cleaning sessions with comedy shows, true crime deep dives, the news and self improvement programs.Read more...",
        url: "https://qz.com/the-10-most-popular-podcasts-about-money-and-finance-1851639828",
        urlToImage:
          "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8969f8a71f85b6b2bb6718aacad7cc6e.jpg",
        publishedAt: "2024-09-04T18:07:00Z",
        content:
          "An estimated half-a-billion people listen to podcasts annually enriching their morning commutes, workouts, and cleaning sessions with comedy shows, true crime deep dives, the news and self improvemen… [+953 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Rod Gilmour",
        title:
          "'All politicians should be forced into space to see Earth's beauty'",
        description:
          "Rachel Delacour is founder of climate tech firm Sweep. She sold her first company, BIME Analytics,  for $45m in 2015.",
        url: "https://uk.finance.yahoo.com/news/climate-tech-sweep-environment-050004481.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/FAvpuHyS_bm7vci_nG6QdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05NjA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/779957e0-6f5b-11ef-afdd-be7f7235d57b",
        publishedAt: "2024-09-13T05:00:04Z",
        content:
          "Co-founder Rachel Delacour decided to pour all her energy into building carbon management software.\r\nRachel Delacour is founder of climate tech firm Sweep, which works with brands including LOreal (L… [+4318 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Kacper Pempel",
        title: "Central Europe races against time as flood zones move",
        description:
          "WROCLAW, Poland (Reuters) -Volunteers and emergency personnel worked through the night to fortify the Polish city of Wroclaw against approaching flood waters...",
        url: "https://www.yahoo.com/news/more-areas-central-europe-race-065226399.html",
        urlToImage:
          "https://media.zenfs.com/en/reuters.com/15b4e6760252e598643bf23642d95a08",
        publishedAt: "2024-09-18T06:52:26Z",
        content:
          "By Kacper Pempel\r\nWROCLAW, Poland (Reuters) -Volunteers and emergency personnel worked through the night to fortify the Polish city of Wroclaw against approaching flood waters, while Hungary opened a… [+3764 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Cindy Lamothe",
        title:
          "11 Moves To Make If Your Paycheck Can’t Keep Up in Your High-Cost-of-Living Area",
        description:
          "Living in a high-cost area on a modest income presents unique challenges. For one, the cost of housing is astronomical, and then there's inflation to drive...",
        url: "https://finance.yahoo.com/news/11-moves-paycheck-t-keep-180112625.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-19T18:01:12Z",
        content:
          "Living in a high-cost area on a modest income presents unique challenges. For one, the cost of housing is astronomical, and then theres inflation to drive expenses up.\r\nCheck Out: How Can You Withdra… [+4850 chars]",
      },
      {
        source: {
          id: null,
          name: "Theregister.com",
        },
        author: "Lindsay Clark",
        title:
          "Europe's largest city council: Oracle ERP allocated £2B in transactions to wrong year",
        description:
          "Workers forced to manually correct setup that struggles to produce auditable accounts after customizations\nThe Oracle finance system implemented by stricken Birmingham City Council allocated £2 billion ($2.65 billion) in cash to the wrong financial year, leav…",
        url: "https://www.theregister.com/2024/09/20/birmingham_oracle_finance_woes/",
        urlToImage:
          "https://regmedia.co.uk/2023/04/25/shutterstock_birmingham.jpg",
        publishedAt: "2024-09-20T12:20:07Z",
        content:
          "The Oracle finance system implemented by stricken Birmingham City Council allocated £2 billion ($2.65 billion) in cash to the wrong financial year, leaving public sector workers to unpick the errors … [+2477 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Pedro Goncalves",
        title: "UK’s cheapest supermarket revealed",
        description:
          "A basket of 62 groceries was £110.58 at the discount retailer.",
        url: "https://uk.finance.yahoo.com/news/uk-cheapest-supermarket-revealed-050005389.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/IPf.lVFavhJpzEXRfYY3rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/16bc64e0-6acd-11ef-bfdf-7383c09917a9",
        publishedAt: "2024-09-05T05:00:05Z",
        content:
          "Aldi has yet again been named the cheapest supermarket in the UK, with an average household basket full of groceries and other essentials coming in at £110.58 in August.\r\nLidl came a close second, wi… [+2441 chars]",
      },
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "David Pierce",
        title: "The best smartphone photos of the year",
        description:
          "Plus, a new podcast from the Wirecutter and another on the Sony hack, Blink Twice hits theaters, the new Ring Video Doorbell, and more in this week’s Installer.",
        url: "https://www.theverge.com/2024/8/25/24226795/best-smartphone-photos-2024-hollywood-hack-blink-twice-installer",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/EmKE7TJltRCG5tCEG-1Thl6nbks=/0x0:2760x1839/1200x628/filters:focal(1380x920:1381x921)/cdn.vox-cdn.com/uploads/chorus_asset/file/25586057/installer_49.png",
        publishedAt: "2024-08-25T12:00:00Z",
        content:
          "The best smartphone photos of the year\r\nThe best smartphone photos of the year\r\n / Plus, in this weeks Installer: A bunch of great new tech podcasts, Rings new doorbell, and a tech thriller in theate… [+11431 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Ryan Christoffel",
        title:
          "Apple announces CFO transition coming next year, names Luca Maestri successor",
        description:
          "Apple has announced a major change for its executive team. The company’s current CFO (Chief Financial Officer), Luca Maestri, will transition out of his role after the end of 2024.\n\n\n\n more…",
        url: "https://9to5mac.com/2024/08/26/apple-announces-cfo-transition-coming-next-year-names-luca-maestri-successor/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Security-researcher-used-Apple-systems-to-scam-2.5M.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-08-26T20:49:41Z",
        content:
          "Apple has announced a major change for its executive team. The companys current CFO (Chief Financial Officer), Luca Maestri, will transition out of his role after the end of 2024.\r\nHere is the announ… [+1876 chars]",
      },
      {
        source: {
          id: null,
          name: "Theregister.com",
        },
        author: "Jessica Lyons",
        title:
          "North Korean scammers plan wave of stealth attacks on crypto companies, FBI warns",
        description:
          "Feds warn of 'highly tailored, difficult-to-detect social engineering campaigns'\nThe FBI has warned that North Korean operatives are plotting \"complex and elaborate\" social engineering attacks against employees of decentralized finance (DeFi) organizations, a…",
        url: "https://www.theregister.com/2024/09/05/fbi_north_korean_scammers_prepping/",
        urlToImage:
          "https://regmedia.co.uk/2024/09/04/shutterstock_1951277734.jpg",
        publishedAt: "2024-09-05T01:17:42Z",
        content:
          'The FBI has warned that North Korean operatives are plotting "complex and elaborate" social engineering attacks against employees of decentralized finance (DeFi) organizations, as part of ongoing eff… [+4200 chars]',
      },
      {
        source: {
          id: null,
          name: "Autoblog",
        },
        author: "Yahoo Finance",
        title:
          "McLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance'",
        description:
          "Filed under:\n Motorsports,McLaren\n Continue reading McLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance'\nMcLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance' originally appeared on Autoblog on …",
        url: "https://www.autoblog.com/2024/08/26/mclaren-ceo-looks-to-follow-ferraris-blueprint-for-success-but-with-no-arrogance/",
        urlToImage:
          "https://edgecast-img.yahoo.net/mysterio/api/58934F626782E91F7A7288BF40B26A92C71E5295086153288D095BDCB4D523D8/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/08/26101442/mclaren_artura_spider_london_premiere.jpeg",
        publishedAt: "2024-08-26T15:00:00Z",
        content:
          "CARMEL, Calif. McLaren CEO Michael Leiters believes that the British luxury supercar maker can succeed much like Ferrari has but in a somewhat different way.\r\nWe have one element in our brand, and it… [+3346 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Pras Subramanian",
        title:
          "McLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance'",
        description:
          "McLaren CEO Michael Leiters has a plan to differentiate itself from its main competitor.",
        url: "https://finance.yahoo.com/news/mclaren-ceo-looks-to-follow-ferraris-blueprint-for-success--but-with-no-arrogance-133715235.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/10G7Hv1RlURtTbdvYHoIhw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/d810f780-6160-11ef-9a6d-899519bd9402",
        publishedAt: "2024-08-26T13:37:15Z",
        content:
          "CARMEL, Calif. McLaren CEO Michael Leiters believes that the British luxury supercar maker can succeed much like Ferrari has but in a somewhat different way.\r\nWe have one element in our brand, and it… [+3607 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "David Hollerith",
        title:
          "Berkshire Hathaway tops $1 trillion market cap for first time as Buffett accelerates BofA stock sales",
        description:
          "Berkshire Hathaway reached an exclusive territory Wednesday that in the US currently includes just six other companies — all from the tech world.",
        url: "https://finance.yahoo.com/news/berkshire-hathaway-tops-1-trillion-market-cap-for-first-time-as-buffett-accelerates-bofa-stock-sales-145441665.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/yu9L5HGZGMkK6OVuIgETZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/fb844670-654a-11ef-ad5f-b0e749579145",
        publishedAt: "2024-08-28T14:54:41Z",
        content:
          "Warren Buffett's Berkshire Hathaway (BRK-A, BRK-B) surpassed a market cap of $1 trillion for the first time on Wednesday as it continues to sell some holdings in Bank of America (BAC).\r\nBerkshire is … [+2868 chars]",
      },
      {
        source: {
          id: null,
          name: "Autoblog",
        },
        author: "Yahoo Finance",
        title: "America's EV charging network is growing but not fast enough",
        description:
          "Filed under:\n By the Numbers,Government/Legal,Green,Driving,Ownership,Electric\n Continue reading America's EV charging network is growing but not fast enough\nAmerica's EV charging network is growing but not fast enough originally appeared on Autoblog on Sat, …",
        url: "https://www.autoblog.com/2024/09/07/americas-ev-charging-network-is-growing-but-not-fast-enough/",
        urlToImage:
          "https://edgecast-img.yahoo.net/mysterio/api/EF71F8DEE8526F8DD3448AB0177920DD85C1184E52983DFDA7C0157B2B53AE9C/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/03/01000049/IMG_7444-copy.jpg",
        publishedAt: "2024-09-07T11:00:00Z",
        content:
          "In a report, the White House released new figures on the build-out of the nations EV charging network, a small positive development in what is typically a sore spot for EV adoption.\r\nIn its third qua… [+4325 chars]",
      },
      {
        source: {
          id: "die-zeit",
          name: "Die Zeit",
        },
        author: "ZEIT ONLINE: News -",
        title:
          "Bitcoin und Ether: Commerzbank mit neuem Angebot für Kryptowährungen",
        description:
          "Hier finden Sie Informationen zu dem Thema „Bitcoin und Ether“. Lesen Sie jetzt „Commerzbank mit neuem Angebot für Kryptowährungen“.",
        url: "https://www.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen",
        urlToImage:
          "https://img.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen-image-group/wide__1300x731",
        publishedAt: "2024-09-19T11:56:54Z",
        content:
          "Die Commerzbank baut das boomende Geschäft mit Kryptowährungen mit einem neuen Angebot für Firmenkunden aus. Dafür hat das Geldinstitut eine Partnerschaft mit der Deutsche-Börse-Tochter Crypto Financ… [+1464 chars]",
      },
      {
        source: {
          id: "polygon",
          name: "Polygon",
        },
        author: "Oli Welsh",
        title:
          "Alan Wake, Control TV and movie projects in the works from Annapurna",
        description:
          "Remedy Entertainment has announced that it’s partnering with Annapurna to develop movie and TV adaptations of its much-loved supernatural game series, Alan Wake and Control. There’s no more detail on the projects than that — just the suggestion that the two c…",
        url: "https://www.polygon.com/gaming/446186/alan-wake-control-movie-tv-annapurna-remedy",
        urlToImage:
          "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24712474/ss_5a16ce565951479e142c56a23f19d88333d84945.1920x1080.jpg?quality=90&strip=all&crop=0%2C3.4613147178592%2C100%2C93.077370564282&w=1200",
        publishedAt: "2024-08-30T12:29:52Z",
        content:
          "Remedy Entertainment has announced that it’s partnering with Annapurna to develop movie and TV adaptations of its much-loved supernatural game series, Alan Wake and Control.\n\nThere’s no more detail o… [+2159 chars]",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "Max Blau",
        title:
          "Up against a 'ghost network' for mental health care? Here's what you can do",
        description:
          "Insurers’ failures to update their provider directories have led to dire consequences for people seeking mental health care. Here's how you can navigate these challenges to find treatment.",
        url: "https://www.npr.org/sections/shots-health-news/2024/09/20/nx-s1-5118420/mental-health-insurance-guide-ghost-network",
        urlToImage:
          "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4894x2753+0+560/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fef%2Fb4%2F22dc644441aa8e1cda7c11073649%2Fgettyimages-460688633.jpg",
        publishedAt: "2024-09-22T11:00:00Z",
        content:
          "Its hard to know if your health insurance plan is as good as advertised. You pay a monthly premium to access a network of health providers. But call the numbers in your provider directory, and youre … [+9621 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: null,
        title: "US charges Hamas leaders over 7 October attack on Israel",
        description:
          "Six top members of Hamas are charged with crimes including the murder of Americans and terrorism.",
        url: "https://www.bbc.com/news/articles/c9wj285xyp8o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/fd9e/live/15f24b70-6a3b-11ef-a7d6-79d10b74e945.jpg",
        publishedAt: "2024-09-03T21:43:11Z",
        content:
          "The US has charged several Hamas leaders in connection with the Palestinian group's deadly attack on Israel on 7 October last year.\r\nThe justice department said it was indicting six Hamas members wit… [+1278 chars]",
      },
    ],
    stock: [
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Lucas Ropek",
        title:
          "MyPillow Mogul Mike Lindell Says He’s Taking His Social Media Company Public",
        description:
          "The pillow mogul's goofy social network will soon be joining forces with the stock market.",
        url: "https://gizmodo.com/mypillow-mogul-mike-lindell-says-hes-taking-his-social-media-company-public-2000492903",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/08/MyPillow-CEO-Mike-Lindell-Gives-the-Thumbs-Up-from-a-Moving-Car.jpg",
        publishedAt: "2024-08-30T13:10:54Z",
        content:
          "You may have forgotten that Mike Lindell, the CEO of MyPillow, also owns his own social media network. Lindell, who, among other things, is an undying Donald Trump stan, started the site back in 2021… [+2740 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Matthew Gault",
        title: "The Market Has Spoken: Trump Lost the Debate",
        description:
          "Truth Social shares sank following Trump’s lousy performance and even the gamblers have begun to abandon him.",
        url: "https://gizmodo.com/the-market-has-spoken-trump-lost-the-debate-2000497451",
        urlToImage: "https://gizmodo.com/app/uploads/2024/09/TrumpStock.jpg",
        publishedAt: "2024-09-11T13:55:02Z",
        content:
          "The market didnt like what it heard on Tuesday night as Trump and Kamala Harris faced off on the debate stage for the first time. Shares of the Trump Media &amp; Technology Group slipped more than 14… [+2175 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Joel Khalili",
        title:
          "People Are Setting Themselves on Fire and Getting Punched in the Face to Pump Their Crypto Coins",
        description:
          "To compete against thousands of crypto meme coins flooding the market, creators are resorting to elaborate and sometimes dangerous stunts for attention.",
        url: "https://www.wired.com/story/people-on-fire-punched-pump-crypto-coins/",
        urlToImage:
          "https://media.wired.com/photos/66d9d2065e239f454e0afe33/191:100/w_1280,c_limit/090424-business-memecoins-fire.jpg",
        publishedAt: "2024-09-12T11:00:00Z",
        content:
          "The vast majority of these coins never get off the ground. Others attract early attention, then tank after the creator sells off their holdings without warning. A minority of the coins hold value ove… [+3667 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "mfox@businessinsider.com (Matthew Fox)",
        title:
          "Stock market today: Dow hits record high while tech shares stumble ahead of Nvidia earnings",
        description:
          "The Dow hit a record high on Monday. Tech shares edged lower ahead of the hotly anticipated Nvidia earning report scheduled for Wednesday.",
        url: "https://markets.businessinsider.com/news/stocks/stock-market-today-tech-shares-decline-nvidia-earnings-this-week-2024-8",
        urlToImage:
          "https://i.insider.com/641471735f4f5400191a0fbe?width=1200&format=jpeg",
        publishedAt: "2024-08-26T20:10:10Z",
        content:
          "US stocks were mixed on Monday with tech shares dragging the S&amp;P 500 and the Nasdaq Composite lower, while the Dow Jones Industrial Average climbed to a record high.\r\nAll eyes are on Nvidia earni… [+1913 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Gizmodo",
        title:
          "Samsung’s Labor Day Sale: Record-Low Prices Signal a Stock Clearance on TVs",
        description:
          "Samsung's Labor Day sale features unprecedented discounts on a wide range of TVs and appliances.",
        url: "https://gizmodo.com/samsungs-labor-day-sale-record-low-prices-signal-a-stock-clearance-on-tvs-2000493084",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/08/samsung-tv-oled.jpg",
        publishedAt: "2024-08-30T12:10:43Z",
        content:
          "As the summer sun begins to set, the excitement of Labor Day sales sweeps in like a refreshing breeze, offering a chance to snag incredible deals just in time for the fall. Among the most anticipated… [+2451 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Matthew Gault",
        title: "Whatever Polymarket Is, It’s Not the Future of News",
        description:
          "A betting market is gambling that financial incentives can be the ultimate arbiters of truth.",
        url: "https://gizmodo.com/whatever-polymarket-is-its-not-the-future-of-news-2000491209",
        urlToImage: "https://gizmodo.com/app/uploads/2024/08/Polymarket.jpg",
        publishedAt: "2024-08-27T12:05:13Z",
        content:
          "If youre a degenerate gambler then you probably already know that Polymarket is predicting that Trump will win the U.S. election. If youre not a degenerate gambler, then you may not even know what Po… [+10143 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Seana Smith",
        title:
          "Nvidia earnings: Options market predicting $300 billion swing in stock",
        description:
          "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.  ...",
        url: "https://finance.yahoo.com/video/nvidia-one-strategist-sees-stock-171500570.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-08-26T17:15:00Z",
        content:
          "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.\r\nBayCrest equity derivatives managing director D… [+1427 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "insider@insider.com (Tessa Campbell)",
        title:
          "4 steps to take with your investments if the Fed cuts rates, according to financial planners",
        description:
          "A slowing economy is a great time for investors to reevaluate their portfolios, reallocate cash into the stock market, and diversify their holdings.",
        url: "https://www.businessinsider.com/fed-rate-cut-investing-strategy-financial-planners-2024-9",
        urlToImage:
          "https://i.insider.com/66e32923bf0250c21492dbfc?width=1200&format=jpeg",
        publishedAt: "2024-09-14T10:43:02Z",
        content:
          "Paid non-client promotion: Affiliate links for the products on this page are from partners that compensate us (see our advertiser disclosure with our list of partners for more details). However, our … [+7095 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "William Watts",
        title:
          "A Fed rate cut with the stock market at a record high? Here’s what history says.",
        description:
          "Do rate cuts with the stock market at or near all-time highs provide bulls additional fuel or do they portend trouble ahead? Dow Jones Market Data ran back...",
        url: "https://finance.yahoo.com/news/fed-rate-cut-stock-market-184700095.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-19T12:39:00Z",
        content:
          "The Federal Reserve on Wednesday cut interest rates with U.S. stocks trading near a record high, leaving investors searching for historical clues to the path ahead for markets.\r\nThe S&amp;P 500 SPX b… [+1871 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Shubhangi Goel",
        title: "The next big market for weight-loss drugs: children",
        description:
          "Novo Nordisk's weight loss drug, Saxenda, helped children ages six to 11 reduce their body mass index in a recent trial.",
        url: "https://www.businessinsider.com/next-big-market-for-weight-loss-drugs-children-novo-trial-2024-9",
        urlToImage:
          "https://i.insider.com/66e10e1683b8099cf9fd6a41?width=1200&format=jpeg",
        publishedAt: "2024-09-11T05:25:35Z",
        content:
          "Novo Nordisk's Saxenda helped children lose weight in a 56-week trial.Thomson Reuters\r\n<ul><li>Novo Nordisk's Saxenda helped children reduce their BMI by 5.8% in a 56-week trial.</li><li>There are no… [+2949 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "mfox@businessinsider.com (Matthew Fox)",
        title:
          "Stock market today: S&P 500 goes for 5-day win streak as markets look ahead to next week's Fed meeting",
        description:
          '"While we acknowledge risks of larger cuts at subsequent meetings, we think the Fed will start off with a 25bp cut next week," Bank of America said.',
        url: "https://markets.businessinsider.com/news/stocks/stock-market-today-win-streak-fed-rate-cut-next-week-2024-9",
        urlToImage:
          "https://i.insider.com/66e43ad9bf0250c214932934?width=1200&format=jpeg",
        publishedAt: "2024-09-13T13:34:36Z",
        content:
          "US stocks were up on Friday as the S&amp;P 500 and Nasdaq 100 indexes attempted to extend their winning streak to five days.\r\nAfter benign inflation data and initial jobless claims were released earl… [+1604 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Zacks Equity Research",
        title:
          "Warner Bros. Discovery Falls 28% YTD: How Should You Play the Stock?",
        description:
          "WBD is suffering from declining revenues and a sluggish linear advertising market. Despite an expanded partner base, these should keep investors on the...",
        url: "https://finance.yahoo.com/news/warner-bros-discovery-falls-28-135300596.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-23T13:53:00Z",
        content:
          "Warner Bros. Discovery WBD shares have dipped 27.6% year to date, underperforming the broader Zacks Consumer Discretionary sectors return of 1.8%. \r\nWBD shares have also lagged the Zacks Broadcast Ra… [+4655 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Lawrence Nga, The Motley Fool",
        title:
          "1 Solid AI Stock That's Not Nvidia or Palantir to Focus On in the Next Few Years",
        description:
          "This AI company could reach trillions of dollars in market capitalization.",
        url: "https://finance.yahoo.com/news/1-solid-ai-stock-thats-111500631.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-19T11:15:00Z",
        content:
          "Artificial intelligence (AI) is probably one of the biggest trends that will change our daily lives in the coming decades. While AI is still in its early development stage, companies like Nvidia and … [+5665 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "mfox@businessinsider.com (Matthew Fox)",
        title:
          "Americans are the richest they've ever been thanks to soaring real estate and stock prices",
        description:
          "Americans have a cumulative net worth of $164 trillion, far surpassing the $20 trillion in debt they hold.",
        url: "https://markets.businessinsider.com/news/stocks/americans-richest-theyve-ever-been-with-164-trillion-net-worth-2024-9",
        urlToImage:
          "https://i.insider.com/66e341c4cfb7f307e5711fe7?width=1200&format=jpeg",
        publishedAt: "2024-09-13T12:38:12Z",
        content:
          "New data from the Federal Reserve reveals that Americans are the richest they've ever been.\r\nAmericans had a cumulative net worth of $163.8 trillion at the end of the second quarter, according to the… [+1825 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Shubhangi Goel",
        title:
          "Nvidia just recorded the biggest single-day wipeout by a US company",
        description:
          "Nvidia stock fell 9.5%, shedding $278.9 billion in valuation. The loss is tied to concerns that include the health of AI and the US economy.",
        url: "https://www.businessinsider.com/nvidia-records-biggest-ever-single-day-market-value-loss-2024-9",
        urlToImage:
          "https://i.insider.com/6616be9216bde8d4ead75ba5?width=1200&format=jpeg",
        publishedAt: "2024-09-04T05:00:29Z",
        content:
          "Nvidia's stock fell 9.5% due to concerns about AI and the US economy.Michael M. Santiago/Getty; Jenny Chang-Rodriguez/BI\r\n<ul><li>Nvidia's stock fell 9.5% due to concerns about AI and the US economy.… [+2930 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Lian Kit Wee",
        title: "Berkshire's vice-chair just cut his stake in Buffett's company",
        description:
          "Ajit Jain, Berkshire Hathaway vice-chair, just sold half of his company stake. At the end of August, the company's  market cap surged to $1 trillion.",
        url: "https://www.businessinsider.com/berkshire-ajit-jain-sold-139-million-shares-warren-buffett-2024-9",
        urlToImage:
          "https://i.insider.com/66e3b667cfb7f307e57143c2?width=1200&format=jpeg",
        publishedAt: "2024-09-13T04:46:25Z",
        content:
          "Ajit Jain reduces his stake in Berkshire Hathaway by $139 million.Carlos Barria/Reuters\r\n<ul><li>Ajit Jain, Berkshire's vice-chair sold $139 million of the company's shares on Monday.</li><li>Jain wi… [+2512 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Emily Stewart",
        title: "The agonizing uncertainty of America's so-so economy",
        description:
          "The job market is getting weaker, and the economy feels trapped in limbo. Americans hate it.",
        url: "https://www.businessinsider.com/economy-jobs-report-sentiment-consumers-elections-recession-inflation-mortgage-rates-2024-9",
        urlToImage:
          "https://i.insider.com/66e4466ed17aa3c7b2b26af0?width=1200&format=jpeg",
        publishedAt: "2024-09-17T09:24:02Z",
        content:
          "Getty Images; Jenny Chang-Rodriguez/BI\r\nI've spent the past couple of years gently correcting the people in my life that, despite their frustrations with the economy, we are not in a recession. Yes, … [+8459 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Lakshmi Varanasi",
        title:
          "Signal president says generative AI is 'definitely a bubble' and Nvidia's market is going to 'die for a second'",
        description:
          "Signal's president Meredith Whittaker said AI is a bubble and that it urgently needs to be regulated.",
        url: "https://www.businessinsider.com/signal-president-generative-ai-bubble-nvidia-openai-2024-8",
        urlToImage:
          "https://i.insider.com/66d1211e43b5e59d16b6e1ca?width=1200&format=jpeg",
        publishedAt: "2024-08-30T15:37:13Z",
        content:
          "Signal President Meredith Whittaker.Photo by Doug Cody, courtesy of O'Reilly Media\r\n<ul><li>Generative AI is a bubble, according to Signal President Meredith Whittaker.</li><li>Whittaker said Nvidia'… [+2266 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Theron Mohamed",
        title:
          "Nvidia's Jensen Huang just crashed out of the $100 billion club after his net worth plunged by almost $10 billion",
        description:
          "Nvidia CEO Jensen Huang's net worth plunged by about $10 billion to below $95 billion after the chipmaker's stock tanked on Tuesday.",
        url: "https://www.businessinsider.com/nvidia-stock-price-jensen-huang-wealth-net-worth-ai-microchips-2024-9",
        urlToImage:
          "https://i.insider.com/66d83586289b805d1db3eaa0?width=1200&format=jpeg",
        publishedAt: "2024-09-04T11:00:25Z",
        content:
          "Nvidia CEO Jensen Huang is no longer a member of a very exclusive club.Sam Yeh/AFP/Getty Images\r\n<ul><li>Nvidia's Jensen Huang fell out of the $100 billion club on Tuesday.</li><li>The chipmaker's st… [+2151 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Attiya Zainib",
        title:
          "ConocoPhillips (COP): A Good Energy Stock to Add to Your Retirement Stock Portfolio",
        description:
          "We recently published a list of Retirement Stock Portfolio: 12 Energy Stocks To Consider. In this article, we are going to take a look at where...",
        url: "https://finance.yahoo.com/news/conocophillips-cop-good-energy-stock-195612333.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-14T19:56:12Z",
        content:
          "We recently published a list of Retirement Stock Portfolio: 12 Energy Stocks To Consider. In this article, we are going to take a look at where ConocoPhillips (NYSE:COP) stands against other energy s… [+7379 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Fatima Farooq",
        title:
          "Nano Dimension Ltd. (NNDM): A Penny Stock That Will Make You a Millionaire",
        description:
          "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Nano Dimension Ltd...",
        url: "https://finance.yahoo.com/news/nano-dimension-ltd-nndm-penny-181834040.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/ALwDSwUGsf_HobICyufYog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/106d4291f55ba33d2e71f1639e18259f",
        publishedAt: "2024-08-31T18:18:34Z",
        content:
          "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Nano Dimension Ltd. (NASDAQ:NNDM) stands against the other p… [+6658 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Aly Lopez",
        title:
          "I Tested the Viral Lemme Sleep Gummies. Here’s How It Impacted My Sleep Quality",
        description:
          "With so many sleep aids on the market, choosing one brand is tricky. I saw this melatonin supplement on TikTok and decided to try it for a month.",
        url: "https://www.cnet.com/health/sleep/i-tested-the-viral-lemme-sleep-gummies-heres-how-it-impacted-my-sleep-quality/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/628f8070b8041c7358c1bc1886c550bd8c861071/hub/2024/05/01/5327169b-b900-4965-9fe0-72dc6f581386/screenshot-2024-05-01-at-11-15-28am.png?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-09-10T15:30:00Z",
        content:
          "It’s no secret that sleep is essential to our well-being. However, it's common to struggle with getting enough sleep. Long-term sleep deprivation can have severe consequences and health implications,… [+14320 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Fatima Farooq",
        title:
          "Lantern Pharma Inc. (LTRN): A Penny Stock That Will Make You a Millionaire",
        description:
          "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Lantern Pharma Inc...",
        url: "https://finance.yahoo.com/news/lantern-pharma-inc-ltrn-penny-180227301.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/zJ.tr9oD8bhOa54oN7UG9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/f570aae28e1052f5a4a089428411fb02",
        publishedAt: "2024-08-31T18:02:27Z",
        content:
          "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Lantern Pharma Inc. (NASDAQ:LTRN) stands against the other p… [+6473 chars]",
      },
      {
        source: {
          id: null,
          name: "NorthJersey.com",
        },
        author: "Maria Francis, USA TODAY NETWORK",
        title:
          "AI chipmaker giant NVIDIA stock takes a historic $279 billion plunge",
        description:
          "NVIDIA share price tanks in record breaking fashion as tech stocks fall.",
        url: "https://www.northjersey.com/story/news/2024/09/04/ai-chipmaker-giant-nvidia-stock-takes-a-historic-279-billion-plunge/75069992007/",
        urlToImage:
          "https://media.zenfs.com/en/the-bergen-record/cd6510d9cf7b825998aea5039b58a08d",
        publishedAt: "2024-09-04T15:48:47Z",
        content:
          "NVIDIA shares have tanked almost 10% in the biggest single-day market value loss in U.S. history, spurring a massive sell off in large-cap tech stocks.\r\nThe company is widely known for making graphic… [+1094 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Neha Gupta",
        title:
          "Snowflake Inc (SNOW): Top Buy-the-Dip Stock With High Growth Potential in Data Cloud Services",
        description:
          "We recently compiled a list of the 7 Best Buy-the-Dip Stocks to Invest In. In this article, we are going to take a look at where Snowflake Inc (NYSE:SNOW...",
        url: "https://finance.yahoo.com/news/snowflake-inc-snow-top-buy-065908493.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/v3X.EyY4UlOpH266t3ZPUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/4a25e1c441831c55a553ed49bcb06b8e",
        publishedAt: "2024-09-07T06:59:08Z",
        content:
          "We recently compiled a list of the 7 Best Buy-the-Dip Stocks to Invest In. In this article, we are going to take a look at where Snowflake Inc (NYSE:SNOW) stands against the other buy-the-dip stocks.… [+5460 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Tirthankar Chakraborty",
        title: "This Is Why SMCI Stock is Falling, But Why It's Time to Buy",
        description:
          "Short-seller report crashes Super Micro. Is it the right time to sell the SMCI stock, or remaining bullish will be helpful? Let's have a look -",
        url: "https://finance.yahoo.com/news/why-smci-stock-falling-why-184500130.html",
        urlToImage:
          "https://media.zenfs.com/en/zacks.com/ebb8b8a767e89fdab119b9ddef47f7b2",
        publishedAt: "2024-08-29T18:45:00Z",
        content:
          "The meteoric rise in demand for artificial intelligence (AI) chips has helped the $25 billion server manufacturer Super Micro Computer, Inc.s SMCI shares to scale northward over the last three financ… [+5019 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Ines Ferré",
        title:
          "Super Micro stock plunges 19% after company delays annual report following short-seller report",
        description:
          "Super Micro stock plunged Wednesday after the company announced it would delay filing its annual report.",
        url: "https://finance.yahoo.com/news/super-micro-stock-plunges-19-after-company-delays-annual-report-following-short-seller-report-200333718.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/spNM8C4FEAyNzbvL9fojsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/b5a30870-9a17-11ee-b777-f8340e7e9f83",
        publishedAt: "2024-08-28T20:03:33Z",
        content:
          "Super Micro Computer (SMCI) stock plunged 19% on Wednesday after the company said it would delay the filing of its annual report for its fiscal year that ended June 30.\r\nThe announcement comes a day … [+3683 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Grace Eliza Goodwin",
        title:
          "Even retail's biggest comeback story isn't safe from economic worries",
        description:
          "Abercrombie & Fitch's stock fell despite positive earnings after its CEO warned of economic uncertainties.",
        url: "https://www.businessinsider.com/abercrombie-fitch-earnings-comeback-economic-worries-2024-8",
        urlToImage:
          "https://i.insider.com/66cf5cf4397a168972020f90?width=1200&format=jpeg",
        publishedAt: "2024-08-28T17:58:49Z",
        content:
          "Abercrombie & Fitch reported earnings that beat expectations on Wednesday, but its growth may be slowing.SOPA Images/Getty Images\r\n<ul><li>Abercrombie & Fitch CEO suggested it may face a tumultuous f… [+3059 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Dan DeFrancesco",
        title: "Applying to jobs is tough, try doing it 2,200 times",
        description:
          "Although unemployment is still relatively low, the job market is tough to crack. Take it from Kevin Cash, who has been rejected roughly 2,200 times.",
        url: "https://www.businessinsider.com/job-search-rejections-unemployment-cant-find-work-2024-9",
        urlToImage:
          "https://i.insider.com/66e2c4dccfb7f307e570c3d4?width=1200&format=jpeg",
        publishedAt: "2024-09-12T13:41:52Z",
        content:
          "PeopleImages/Getty, Tyler Le/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Hi! Be careful g… [+7127 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Theron Mohamed",
        title:
          "Meet the 10 biggest wealth gainers this year — who've added a combined $360 billion to their fortunes in 2024",
        description:
          "Nvidia's Jensen Huang, Meta's Mark Zuckerberg, and Oracle's Larry Ellison are all up over $50 billion this year thanks to soaring stock prices.",
        url: "https://www.businessinsider.com/wealth-gain-rich-list-billionaires-nvidia-huang-meta-zuckerberg-buffett-2024-9",
        urlToImage:
          "https://i.insider.com/66e44ecad17aa3c7b2b26f68?width=1200&format=jpeg",
        publishedAt: "2024-09-14T09:50:02Z",
        content:
          "Jim Walton, Alice Walton, and Rob Walton.REUTERS/Rick Wilking\r\n<ul><li>The 10 biggest wealth gainers have added a collective $360 billion in net worth so far in 2024.</li><li>Nvidia's Jensen Huang, M… [+5508 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Tom Carter",
        title:
          "Elon Musk tells X staff to write a one-page summary of their achievements to get stock options, report says",
        description:
          "In an email to staff reported by The Verge, Elon Musk told staff to submit a summary of their contributions to the company to get their stock options.",
        url: "https://www.businessinsider.com/elon-musk-tells-x-staff-to-prove-deserve-stock-options-2024-8",
        urlToImage:
          "https://i.insider.com/66cc57dcc72ebc54a40ead25?width=1200&format=jpeg",
        publishedAt: "2024-08-26T10:57:05Z",
        content:
          'Tesla CEO Elon Musk told employees they would need to work "long hours at a high intensity" after taking over Twitter — and said those unwilling to do so should leave.Richard Bord/Getty Images\r\n<ul><… [+2350 chars]',
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "jsor@businessinsider.com (Jennifer Sor)",
        title:
          "Tesla investor Ross Gerber says he's been dumping the stock because no one wants the company's cars or robots",
        description:
          "\"We've seen sales go down, and that's what's happening. If you're expecting a great quarter, you're wrong. They're not selling any Teslas here.\"",
        url: "https://markets.businessinsider.com/news/stocks/tesla-stock-outlook-elon-musks-cars-sales-robots-ross-gerber-2024-8",
        urlToImage:
          "https://i.insider.com/66cc8a47c72ebc54a40eb3e4?width=1200&format=jpeg",
        publishedAt: "2024-08-26T15:44:13Z",
        content:
          "One of Tesla's longtime investors has dumped around half his stake in Elon Musk's carmaker. \r\nAccording to longtime shareholder Ross Gerber, that's because no one seems interested in buying its cars … [+2486 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Tirthankar Chakraborty",
        title:
          "NVIDIA Wipes Out $400B in Value: Buy, Hold, or Sell NVDA Stock?",
        description:
          "NVIDIA's shares lately took a beating as regulators launched a probe into the company's contracts. Is it the right time to sell the NVDA stock, or will...",
        url: "https://finance.yahoo.com/news/nvidia-wipes-400b-value-buy-184500618.html",
        urlToImage:
          "https://media.zenfs.com/en/zacks.com/02c1245facc17eb1278e28574fc5cc1c",
        publishedAt: "2024-09-09T18:45:00Z",
        content:
          "NVIDIA Corporation NVDA witnessed a meteoric rise over the past few years due to the advent of artificial intelligence (AI). Its recent share repurchase has installed confidence among investors and t… [+5279 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Debasis Saha",
        title:
          "Goldman Thinks Occidental Petroleum Corporation (OXY) Is A Long-Term AI Stock Set To Rally Eventually",
        description:
          "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Occidental...",
        url: "https://finance.yahoo.com/news/goldman-thinks-occidental-petroleum-corporation-174140096.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-13T17:41:40Z",
        content:
          "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Occidental Petroleum Corporation (NYSE:OXY) stands against … [+5389 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Polo Rocha",
        title: "Ally's stock drops 15% as its credit challenges grow",
        description:
          "A top executive at the auto lender said that more borrowers struggled to repay their loans over the summer amid inflation and a tougher job market. Late...",
        url: "https://finance.yahoo.com/news/allys-stock-drops-15-credit-152554710.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-10T15:25:54Z",
        content:
          'Ally Financial said Tuesday that more borrowers struggled to repay their auto loans over the summer, prompting a 16% plunge in the company\'s stock.\r\n"Our credit challenges have intensified," Chief Fi… [+3696 chars]',
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Josh Lipton",
        title: "Who are Nvidia's biggest competitors?",
        description:
          "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights & Strategy Founder, CEO and...",
        url: "https://finance.yahoo.com/video/nvidias-biggest-competitors-205250026.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/8yFpXl1ApIWZn9n6rZOgnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/336a2cc0-64b1-11ef-aa6b-41c9a5f97821",
        publishedAt: "2024-08-27T20:52:50Z",
        content:
          "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights &amp; Strategy Founder, CEO and chief analyst Patrick Moorhead joins Ya… [+1601 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Emily Stewart",
        title: "The cult of Nvidia is getting really weird",
        description:
          "Investors are obsessed with Nvidia thanks to its soaring stock price. The meme feels like GameStop, but there are also some good reasons for the cult.",
        url: "https://www.businessinsider.com/nvidia-stock-price-earnings-party-investors-cult-investing-memes-2024-9",
        urlToImage:
          "https://i.insider.com/66d8b4361d8d2deb96b8ee90?width=1200&format=jpeg",
        publishedAt: "2024-09-09T09:43:02Z",
        content:
          "Everyone could probably stand to chill about Nvidia.Getty Images; Jenny Chang-Rodriguez/BI\r\nI probably do not have to tell you that Nvidia has really blown up over the past few years. The tech compan… [+11652 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Theron Mohamed",
        title: "Walmart heir Jim Walton just joined the $100 billion club",
        description:
          "Jim Walton, whose father founded Walmart, joins the likes of Elon Musk and Jeff Bezos as one of the few people on the planet worth over $100 billion.",
        url: "https://www.businessinsider.com/jim-walton-walmart-stock-100-billion-net-worth-wealth-retail-2024-9",
        urlToImage:
          "https://i.insider.com/66d5db501d8d2deb96b80471?width=1200&format=jpeg",
        publishedAt: "2024-09-12T08:39:47Z",
        content:
          "Jim Walton's net worth has surpassed $100 billion.Rick T. Wilking/Stringer/Getty Images\r\n<ul><li>Jim Walton's net worth just passed $100 billion for the first time.</li><li>The Walmart heir's wealth … [+2681 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Fatima Farooq",
        title: "NVIDIA Corporation (NVDA) a Good Big Tech Stock to Buy Now?",
        description:
          "We recently compiled a list of the 13 Best Big Tech Stocks To Buy Now. In this article, we are going to take a look at where NVIDIA Corporation (NASDAQ:NVDA)...",
        url: "https://finance.yahoo.com/news/nvidia-corporation-nvda-good-big-211415800.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/kZveoOmr3ngssVpudK1u4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/aa94e059977d3251b8b0630718e013fc",
        publishedAt: "2024-09-16T21:14:15Z",
        content:
          "We recently compiled a list of the 13 Best Big Tech Stocks To Buy Now. In this article, we are going to take a look at where NVIDIA Corporation (NASDAQ:NVDA) stands against the other big tech stocks.… [+5323 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Karen Friar",
        title:
          "Stock market today: Stocks end banner week with big gains as jumbo Fed cut odds rise",
        description:
          "The stage is set for strong weekly wins after Wall Street's expectations for a 0.5% rate cut by the Fed shot up.",
        url: "https://finance.yahoo.com/news/live/stock-market-today-stocks-end-banner-week-with-big-gains-as-jumbo-fed-cut-odds-rise-133138647.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-13T13:31:38Z",
        content:
          "US stocks gained ground Friday, posting strong weekly wins after Wall Street's expectations for a jumbo interest rate cut by the Federal Reserve shot up suddenly.\r\nThe S&amp;P 500 (^GSPC) rose 0.5% w… [+10878 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "David Hollerith",
        title:
          "Berkshire Hathaway tops $1 trillion market cap for first time as Buffett accelerates BofA stock sales",
        description:
          "Berkshire Hathaway reached an exclusive territory Wednesday that in the US currently includes just six other companies — all from the tech world.",
        url: "https://finance.yahoo.com/news/berkshire-hathaway-tops-1-trillion-market-cap-for-first-time-as-buffett-accelerates-bofa-stock-sales-145441665.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/yu9L5HGZGMkK6OVuIgETZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/fb844670-654a-11ef-ad5f-b0e749579145",
        publishedAt: "2024-08-28T14:54:41Z",
        content:
          "Warren Buffett's Berkshire Hathaway (BRK-A, BRK-B) surpassed a market cap of $1 trillion for the first time on Wednesday as it continues to sell some holdings in Bank of America (BAC).\r\nBerkshire is … [+2868 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "editorial-team@simplywallst.com (Simply Wall St)",
        title: "Top 3 Dividend Stocks To Enhance Your Portfolio",
        description:
          "In light of recent market fluctuations and mixed performances across major indices, investors are increasingly seeking stability amidst economic...",
        url: "https://finance.yahoo.com/news/top-3-dividend-stocks-enhance-130926305.html",
        urlToImage:
          "https://media.zenfs.com/en/simply_wall_st__316/297a096e5743176fa71b67c7278a433d",
        publishedAt: "2024-09-06T13:09:26Z",
        content:
          "In light of recent market fluctuations and mixed performances across major indices, investors are increasingly seeking stability amidst economic uncertainties. With value stocks outperforming growth … [+5090 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Maham Fatima",
        title:
          "Palantir Technologies Inc. (PLTR): Redditors Are Bullish On This AI Stock",
        description:
          "We recently compiled a list of the 10 Best AI Stocks to Buy According to Reddit. In this article, we are going to take a look at where Palantir Technologies ...",
        url: "https://finance.yahoo.com/news/palantir-technologies-inc-pltr-redditors-072623918.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/Pa5XksujEENKEEWlGELU5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/b3f9877ff0f15329165d74e07391a358",
        publishedAt: "2024-09-09T07:26:23Z",
        content:
          "We recently compiled a list of the 10 Best AI Stocks to Buy According to Reddit. In this article, we are going to take a look at where Palantir Technologies Inc. (NYSE:PLTR) stands against the other … [+7963 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Mashaid Ahmed",
        title:
          "FuelCell Energy (FCEL): Hedge Funds Are Bullish On This Green Energy Penny Stock Now",
        description:
          "We recently compiled a list of the 10 Best Green Energy Penny Stocks to Buy Now. In this article, we are going to take a look at where FuelCell Energy...",
        url: "https://finance.yahoo.com/news/fuelcell-energy-fcel-hedge-funds-164649384.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-14T16:46:49Z",
        content:
          "We recently compiled a list of the 10 Best Green Energy Penny Stocks to Buy Now. In this article, we are going to take a look at where FuelCell Energy (NASDAQ:FCEL) stands against the other green ene… [+7358 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Fahad Saleem",
        title:
          "Jim Cramer Says Palantir Technologies Inc. (NYSE:PLTR) is a ‘Cold’ Stock",
        description:
          "We recently published a list of Jim Cramer Latest Portfolio: 10 Stocks to Watch in September. Since Palantir Technologies Inc. (NYSE:PLTR) ranks 5th on the...",
        url: "https://finance.yahoo.com/news/jim-cramer-says-palantir-technologies-133922534.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-20T13:39:22Z",
        content:
          "We recently published a list of Jim Cramer Latest Portfolio: 10 Stocks to Watch in September. Since Palantir Technologies Inc. (NYSE:PLTR)  ranks 5th on the list, it deserves a deeper look.\r\nJim Cram… [+5271 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "editorial-team@simplywallst.com (Simply Wall St)",
        title: "Top US Dividend Stocks To Consider In September 2024",
        description:
          "As of mid-September 2024, the U.S. stock market has been experiencing a significant rally, with major indices like the S&P 500 and Nasdaq Composite wrapping ...",
        url: "https://finance.yahoo.com/news/top-us-dividend-stocks-consider-110941999.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-16T11:09:41Z",
        content:
          "As of mid-September 2024, the U.S. stock market has been experiencing a significant rally, with major indices like the S&amp;P 500 and Nasdaq Composite wrapping up their best week of the year. This p… [+4769 chars]",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "Maria Aspan",
        title: "Wall Street investors think Trump lost the debate, too",
        description:
          "Shares in former President Trump’s company plunged the day after his debate with Vice President Harris.",
        url: "https://www.npr.org/2024/09/11/nx-s1-5108849/wall-street-investors-think-trump-lost-the-debate-too",
        urlToImage:
          "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5568x3132+0+290/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F22%2F39%2F299b1e534af1aa08e0b66384f9b7%2Fgettyimages-2170591870.jpg",
        publishedAt: "2024-09-11T19:07:36Z",
        content:
          "Even some of former President Donald Trumps most ardent supporters seem worried he lost Tuesdays debate with Vice President Kamala Harris.\r\nShares in Trump Media &amp; Technology Group, the parent co… [+1685 chars]",
      },
      {
        source: {
          id: "the-next-web",
          name: "The Next Web",
        },
        author: "Amanda Kavanagh",
        title:
          "AI upskilling is essential for Python developers, says education expert",
        description:
          "As generative AI continues to evolve at a rapid pace, programmers face a new challenge: mastering meaningful artificial intelligence. It seems that every workplace is pushing towards leveraging the technology — some with more consideration and ethics than oth…",
        url: "https://thenextweb.com/news/ai-upskilling-is-essential-for-python-developers-says-education-expert",
        urlToImage:
          "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F08%2FDesigner-3.jpeg&signature=fda7b7ac450926deb29ad79c9a06e7c6",
        publishedAt: "2024-08-27T10:42:47Z",
        content:
          "As generative AI continues to evolve at a rapid pace, programmers face a new challenge: mastering meaningful artificial intelligence.\r\nIt seems that every workplace is pushing towards leveraging the … [+4186 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Jing Pan",
        title:
          "‘America is long overdue for a problem’: Jim Rogers says next market crash will be ‘the worst' — names 2 safe assets",
        description: "The investing legend is “extremely worried.”",
        url: "https://finance.yahoo.com/news/america-long-overdue-problem-jim-110500320.html",
        urlToImage:
          "https://media.zenfs.com/en/moneywise_327/bdd1a1ab99342bb2950ede388eb44443",
        publishedAt: "2024-08-27T11:05:00Z",
        content:
          "America is long overdue for a problem: Jim Rogers says next market crash will be the worst' names 2 safe assets\r\nThe stock market has shown robust upward momentum in 2024, with both the S&amp;P 500 a… [+4330 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Sean Williams, The Motley Fool",
        title:
          "Billionaires Warren Buffett, David Tepper, and Terry Smith Are Sending a Very Clear Warning to Wall Street -- Are You Paying Attention?",
        description:
          "Some of Wall Street's most successful value-seeking money managers are retreating to the sidelines.",
        url: "https://finance.yahoo.com/news/billionaires-warren-buffett-david-tepper-090600540.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-21T09:06:00Z",
        content:
          "For the better part of two years, the bulls have been firmly in control on Wall Street. A resilient U.S. economy, coupled with excitement surrounding the rise of artificial intelligence (AI), have he… [+7644 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Adam Spatacco, The Motley Fool",
        title:
          "A Once-in-a-Decade Investment Opportunity: 1 Artificial Intelligence (AI) Semiconductor Stock to Buy Hand Over Fist Right Now (Hint: It's Not Nvidia)",
        description:
          "The AI chip market is expected to eclipse $200 billion by early next decade.",
        url: "https://finance.yahoo.com/news/once-decade-investment-opportunity-1-123000805.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-19T12:30:00Z",
        content:
          "One of the biggest opportunities among artificial intelligence (AI) investments is semiconductor stocks. Of course, some obvious opportunities include such powerhouses as Nvidia and Advanced Micro De… [+6332 chars]",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "Scott Horsley",
        title:
          "The latest jobs data provides a really confusing picture. Here are 4 things to know",
        description:
          "There was both good news — and bad news — in the latest jobs report, providing an unclear picture as the Federal Reserve  weighs how much to cut interest rates.",
        url: "https://www.npr.org/2024/09/06/nx-s1-5101748/jobs-labor-employment-hiring-economy-unemployment",
        urlToImage:
          "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4800x2700+0+102/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F8c%2Fb2%2Ff19397f84ccc9e972c65036b84c4%2Fgettyimages-2167056379.jpg",
        publishedAt: "2024-09-06T17:41:05Z",
        content:
          "The latest monthly report on the U.S. jobs market had been eagerly anticipated as a key gut check on the health of the economy. Unfortunately, it delivered a mixed picture that doesn't offer clear co… [+3197 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Jose Karlo Mari Tottoc",
        title:
          "Jim Cramer Says ‘Berkshire Hathaway (BRK-B) Is What I Call An Up Stock’",
        description:
          "We recently compiled a list of the Top 10 Stocks on Jim Cramer’s Radar. In this article, we are going to take a look at where Berkshire Hathaway (NYSE:BRK-B)...",
        url: "https://finance.yahoo.com/news/jim-cramer-says-berkshire-hathaway-103721842.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/MJF0wSMWqKYI8b.rKoTXYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/71b73ee0cc91ebfae2296b9726a1eba8",
        publishedAt: "2024-09-06T10:37:21Z",
        content:
          "We recently compiled a list of the Top 10 Stocks on Jim Cramers Radar. In this article, we are going to take a look at where Berkshire Hathaway (NYSE:BRK-B) stands against the other stocks on Jim Cra… [+9012 chars]",
      },
      {
        source: {
          id: null,
          name: "Tom's Guide",
        },
        author: "Kate Kozuch",
        title:
          "Apple Watch 10 — should you wait or get Apple Watch Series 9 now?",
        description:
          "In the market for a new Apple Watch, but not sure whether to buy the Apple Watch Series 9 or wait for Apple Watch 10? Here's what you can expect.",
        url: "https://www.tomsguide.com/wellness/smartwatches/apple-watch-10-should-you-wait-or-get-apple-watch-series-9-now",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/ZfbsK.RT_jVdR5SZSmqZhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/toms_guide_826/9d6cd7f92f67e1e9121089304dec68ba",
        publishedAt: "2024-08-31T05:00:24Z",
        content:
          "When you buy through links on our articles, Future and its syndication partners may earn a commission.\r\nThe Apple Watch Series 10, or Apple Watch X, is likely close to making its big debut the next A… [+5245 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title:
          "Intel's Dow Status Under Threat As Struggling Chipmaker's Shares Plunge",
        description:
          "Intel's slumping share price could cost it a spot in the Dow Jones Industrial Average. Reuters reports: Analysts and investors said Intel was likely to be removed from the Dow, pointing to a near 60% decline in the company's shares this year that has made it …",
        url: "https://slashdot.org/story/24/09/03/2225253/intels-dow-status-under-threat-as-struggling-chipmakers-shares-plunge",
        urlToImage: "https://a.fsdn.com/sd/topics/business_64.png",
        publishedAt: "2024-09-03T23:40:00Z",
        content:
          "Analysts and investors said Intel was likely to be removed from the Dow, pointing to a near 60% decline in the company's shares this year that has made it the worst performer on the index and left it… [+810 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "editorial-team@simplywallst.com (Simply Wall St)",
        title: "Return Trends At Kinder Morgan (NYSE:KMI) Aren't Appealing",
        description:
          "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Firstly, we'll want to...",
        url: "https://finance.yahoo.com/news/return-trends-kinder-morgan-nyse-110103936.html",
        urlToImage:
          "https://media.zenfs.com/en/simply_wall_st__316/a369c58332e02384b731b98e1f4f054a",
        publishedAt: "2024-08-24T11:01:03Z",
        content:
          "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Firstly, we'll want to see a proven return on capital employed (ROCE) that is increasing, and secondly, … [+3407 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Svea Herbst-Bayliss",
        title:
          "Exclusive-Elliott now owns enough of Southwest Airlines to call special meeting",
        description:
          "Elliott Investment Management now holds 10% of Southwest Airlines' common stock, crossing the threshold that allows the hedge fund to call a special meeting ...",
        url: "https://finance.yahoo.com/news/exclusive-elliott-now-owns-enough-230710463.html",
        urlToImage:
          "https://media.zenfs.com/en/reuters.com/ac5be277eee8680e79db285423d205b3",
        publishedAt: "2024-09-02T23:07:10Z",
        content:
          "By Svea Herbst-Bayliss\r\nNEW YORK (Reuters) - Elliott Investment Management now holds 10% of Southwest Airlines' common stock, crossing the threshold that allows the hedge fund to call a special meeti… [+2549 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Anusuya Lahiri",
        title:
          "Baidu's Robotaxi Has been Getting Closer To Scalable Adoption With Unit Economics Breakeven In Sight: Goldman Sachs",
        description:
          "Goldman Sachs analyst Lincoln Kong maintained a Buy rating on Baidu, Inc (NASDAQ:BIDU) with a price target of $129. Kong rerated the stock after hosting an...",
        url: "https://finance.yahoo.com/news/baidus-robotaxi-getting-closer-scalable-155349384.html",
        urlToImage:
          "https://media.zenfs.com/en/Benzinga/b0572b905b5dc219794b3bf70364702f",
        publishedAt: "2024-08-26T15:53:49Z",
        content:
          "Baidu's Robotaxi Has been Getting Closer To Scalable Adoption With Unit Economics Breakeven In Sight: Goldman Sachs\r\nGoldman Sachs analyst Lincoln Kong maintained a Buy rating on Baidu, Inc (NASDAQ:B… [+2912 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "editorial-team@simplywallst.com (Simply Wall St)",
        title:
          "Returns At United Parcel Service (NYSE:UPS) Appear To Be Weighed Down",
        description:
          "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Typically, we'll want to...",
        url: "https://finance.yahoo.com/news/returns-united-parcel-nyse-ups-140013209.html",
        urlToImage:
          "https://media.zenfs.com/en/simply_wall_st__316/a39992589d6ac28a1addf81f10e5a992",
        publishedAt: "2024-09-06T14:00:13Z",
        content:
          "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Typically, we'll want to notice a trend of growing return on capital employed (ROCE) and alongside that,… [+3229 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jacob Zinkula",
        title:
          "A Gen Xer who grew her savings from $50k to $350k in 10 years shares the FIRE methods she's using to get to $1 million",
        description:
          "A Gen Xer shares the FIRE strategies she uses to reach $1 million in savings and retire by age 55.",
        url: "https://www.businessinsider.com/how-grow-savings-one-million-using-fire-methods-investing-saving-2024-9",
        urlToImage:
          "https://i.insider.com/66d88dde1d8d2deb96b8bcb3?width=1200&format=jpeg",
        publishedAt: "2024-09-05T10:03:02Z",
        content:
          "Miriam, age 43, says she's on track to reach her retirement savings goal of at least $1 million by age 55. Miriam\r\n<ul><li>A Gen Xer has grown her savings from $50,000 to $375,000 over the past decad… [+5401 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Beatrice Nolan",
        title:
          "Elon Musk is on track to become the world's first trillionaire by 2027, report says",
        description:
          "Musk's wealth, which is closely tied to his Tesla stake, has fluctuated over the past few years.",
        url: "https://www.businessinsider.com/elon-musk-trillionaire-first-2027-tesla-wealth-money-2024-9",
        urlToImage:
          "https://i.insider.com/66dec47083b8099cf9fcaa34?width=1200&format=jpeg",
        publishedAt: "2024-09-09T10:26:40Z",
        content:
          "Elon Musk endorsed Trump in July.Steve Granitz/FilmMagic via Getty Images\r\n<ul><li>Elon Musk is projected to become a trillionaire by 2027, per Informa Connect Academy.</li><li>The report's predictio… [+2124 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Insider Inc.",
        title: "The Road to IPO",
        description:
          "Business Insider's virtual event full of insider tips on what makes a successful launch into the public markets.",
        url: "https://www.businessinsider.com/events/the-road-to-ipo",
        urlToImage:
          "https://media.tbistatic.com/bistudios/_00/dev/client/xxxxxx",
        publishedAt: "2024-09-18T20:35:32Z",
        content:
          "The Road to IPO<!-- Meta data --> <!-- Browser favicons --><!-- Google Tag Manager - for BI use GTM-NS64GV - for Insider use GTM-K2K9CK --> (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n… [+2861 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Erin Snodgrass,Jacob Shamsian",
        title:
          "EXCLUSIVE: Sen. Elizabeth Warren backs DOJ investigation into Nvidia antitrust allegations",
        description:
          "Nvidia's chipmaking dominance starves startups and competitors, Elizabeth Warren wrote in a letter to the Justice Department.",
        url: "https://www.businessinsider.com/elizabeth-warren-backs-justice-department-nvidia-antitrust-investigation-2024-9",
        urlToImage:
          "https://i.insider.com/66da1da95444ffafa762f2d8?width=1200&format=jpeg",
        publishedAt: "2024-09-06T12:15:02Z",
        content:
          "US Sen. Elizabeth Warren is warning that Nvidia, led by CEO Jensen Huang, has too much dominance in the chipmaking market.REUTERS/Andrew Kelly; SAM YEH/AFP via Getty Images\r\n<ul><li>Sen. Elizabeth Wa… [+2888 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Dan DeFrancesco",
        title: "The good, bad, and ugly of life after rate cuts",
        description:
          "The Fed won its fight with inflation, but there's still work to be done.",
        url: "https://www.businessinsider.com/federal-reserve-limited-jobs-mortgages-increased-wins-and-losses-2024-9",
        urlToImage:
          "https://i.insider.com/66ed51fccfb7f307e5735a86?width=1200&format=jpeg",
        publishedAt: "2024-09-20T11:11:34Z",
        content:
          "Jerome PowellCarolyn Kaster/AP\r\n<ul><li>This is an excerpt from the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>One down. One to go.Wednes… [+2850 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jordan Hart",
        title: "Google just stepped up its AI fight with Apple",
        description:
          "Apple and Google are intensifying the AI arms race with rapid announcements, including making Gemini Live free following Apple's iPhone 16 launch.",
        url: "https://www.businessinsider.com/google-stepped-up-ai-fight-apple-iphone-gemini-intelligence-2024-9",
        urlToImage:
          "https://i.insider.com/66e86e47bf0250c21493ce45?width=1200&format=jpeg",
        publishedAt: "2024-09-17T09:32:02Z",
        content:
          "Gemini Live is now free for English-language Androids, days after Apple's iPhone announcement.Google/X\r\n<ul><li>Google made a Gemini Live announcement just days after Apple's AI-enabled iPhone launch… [+2272 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Geoff Weiss",
        title: "In a rare act of defiance, a top K-pop group is going rogue",
        description:
          "The high-profile spat is a rarity in the world of K-pop, where groups are developed and closely managed by massive record companies.",
        url: "https://www.businessinsider.com/top-k-pop-group-newjeans-taking-on-record-giant-hybe-2024-9",
        urlToImage:
          "https://i.insider.com/66e302f2bf0250c21492b46d?width=1200&format=jpeg",
        publishedAt: "2024-09-12T17:22:32Z",
        content:
          "The high-profile spat is a rarity in the world of K-pop.The Chosunilbo JNS/Getty Images\r\n<ul><li>K-pop group NewJeans called out record label Hybe in a rogue YouTube livestream.</li><li>It marked a s… [+2295 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Fahad Saleem",
        title: "Analyst Says Intel (INTC) is ‘Incapable’ of Being a Foundry",
        description:
          "We recently published a list of Top 10 Trending AI Stocks Amid Latest News and Analyst Ratings. Since Intel Corp (NASDAQ:INTC) ranks 8th on the list, it...",
        url: "https://finance.yahoo.com/news/analyst-says-intel-intc-incapable-202950232.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-12T20:29:50Z",
        content:
          "We recently published a list of Top 10 Trending AI Stocks Amid Latest News and Analyst Ratings. Since Intel Corp (NASDAQ:INTC) ranks 8th on the list, it deserves a deeper look.\r\nThe reality is finall… [+6054 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Zacks Equity Research",
        title: "3 Fidelity Mutual Funds to Buy Amid Recession Worries",
        description:
          "Invest in Fidelity mutual funds like FIKAX, FIKGX and FCLKX, amid a surge in recession worries.",
        url: "https://finance.yahoo.com/news/3-fidelity-mutual-funds-buy-135300603.html",
        urlToImage:
          "https://media.zenfs.com/en/zacks.com/3faeee7e1c1e94d283c6ec0640ac8a7c",
        publishedAt: "2024-09-11T13:53:00Z",
        content:
          "Though major U.S. indexes like the S&amp;P 500, the Nasdaq Composite and the Dow Jones Industrial Average have given investors positive returns of 15.2%, 13.4% and 8.1%, respectively, seasonal weakne… [+5746 chars]",
      },
      {
        source: {
          id: null,
          name: "Windows Central",
        },
        author: "jez@windowscentral.com (Jez Corden)",
        title:
          "Apple and Microsoft battle for the #1 market cap crown as NVIDIA suffers the biggest single day drop in HISTORY",
        description:
          "It's not a hot week for NVIDIA bag holders, as one of the world's biggest tech companies endures the largest single day stock drop in history, wiping $270 billion off its value.",
        url: "https://www.windowscentral.com/microsoft/apple-and-microsoft-battle-for-the-1-market-cap-crown-as-nvidia-suffers-the-biggest-single-day-drop-in-history",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/L9j55HyDmDHbiNoAZPvWp8-1200-80.jpg",
        publishedAt: "2024-09-04T12:04:09Z",
        content:
          "What you need to know\r\n<ul><li>NVIDIA is a global tech company renowned for industry-leading graphics processing units, powering everything from home gaming to massive cloud server arrays. </li><li>N… [+4572 chars]",
      },
      {
        source: {
          id: "fox-news",
          name: "Fox News",
        },
        author: "Fox News Staff",
        title: "Fox News AI Newsletter: AI version of dead actor",
        description:
          "Stay up to date on the latest AI technology advancements and learn about the challenges and opportunities AI presents now and for the future.",
        url: "https://www.foxnews.com/tech/fox-news-ai-newsletter-ai-version-dead-actor",
        urlToImage:
          "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/Ian-Holm-Actor-AI.jpg",
        publishedAt: "2024-09-07T12:30:27Z",
        content:
          "Welcome to Fox News Artificial Intelligence newsletter with the latest AI technology advancements.\r\nIN TODAYS NEWSLETTER:\r\n- Alien: Romulus director defends AI version of dead actors likeness after f… [+1313 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Avi Kapoor",
        title:
          "Wall Street's Most Accurate Analysts Give Their Take On 3 Financials Stocks With Over 12% Dividend Yields",
        description:
          "During times of turbulence and uncertainty in the markets, many investors turn to dividend-yielding stocks. These are often companies that have high free...",
        url: "https://finance.yahoo.com/news/wall-streets-most-accurate-analysts-210418161.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-19T21:04:18Z",
        content:
          "Benzinga and Yahoo Finance LLC may earn commission or revenue on some items through the links below.\r\nDuring times of turbulence and uncertainty in the markets, many investors turn to dividend-yieldi… [+2842 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Collin Brantmeyer, The Motley Fool",
        title: "The Smartest Dividend Stocks to Buy With $500 Right Now",
        description:
          "Here are two reliable dividend-paying stocks poised for upside.",
        url: "https://finance.yahoo.com/news/smartest-dividend-stocks-buy-500-101500065.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-15T10:15:00Z",
        content:
          "For investors, dividend-paying stocks offer an immediate return, and those with consistent, rising payouts have performed even better, with less volatility than the benchmark S&amp;P 500. One explana… [+7516 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Affan Mir",
        title:
          "UnitedHealth Group Incorporated (UNH): A Beginner Stock You Should Check Out",
        description:
          "We recently compiled a list of the 10 Best Beginner Stocks To Buy Now. In this article, we are going to take a look at where UnitedHealth Group Incorporated ...",
        url: "https://finance.yahoo.com/news/unitedhealth-group-incorporated-unh-beginner-153129680.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/BZethiGfzmapselBAdA_0g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/c34a56642082d17e3fa7c8675c6742b3",
        publishedAt: "2024-08-29T15:31:29Z",
        content:
          "We recently compiled a list of the 10 Best Beginner Stocks To Buy Now. In this article, we are going to take a look at where UnitedHealth Group Incorporated (NYSE:UNH) stands against the other beginn… [+9948 chars]",
      },
      {
        source: {
          id: null,
          name: "MarketWatch",
        },
        author: "Beth Pinsker",
        title:
          "We’re heading for a $950 billion CD ‘maturity tsunami’ — what’s your next move?",
        description:
          "Many 1-year CDs will come due right when interest rates are set to drop.",
        url: "https://www.marketwatch.com/story/were-heading-for-a-950-billion-cd-maturity-tsunami-whats-your-next-move-7bd029cf",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/CX91xWgU2iuiSpkK7yCMpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/marketwatch_hosted_869/fba3b32e0c46442d8510b0d70d67b4d3",
        publishedAt: "2024-08-31T14:18:00Z",
        content:
          "Your rate on a CD renewal will likely not be as good as the one you got last year. - Getty Images/iStockphoto\r\nIf you are among the millions of American savers who heeded the call last year to lock i… [+5644 chars]",
      },
      {
        source: {
          id: null,
          name: "MarketWatch",
        },
        author: "Frances Yue",
        title:
          "Struggling bitcoin miners may be revived by Fed rate decision, regardless of cut size",
        description:
          "Whether the Federal Reserve delivers a 25 or 50 basis point rate cut, it could mean a turnaround for bitcoin miners, which have been struggling so far this year, market participants said.",
        url: "https://www.marketwatch.com/story/struggling-bitcoin-miners-may-be-revived-by-fed-rate-decision-regardless-of-cut-size-db64c987",
        urlToImage: "https://images.mktw.net/im-63283705/social",
        publishedAt: "2024-09-17T19:51:00Z",
        content:
          "Whether the Federal Reserve delivers an ordinary, or slightly larger interest-rate cut on Wednesday, it could trigger a turnaround for bitcoin miners, which have been struggling with higher borrowing… [+363 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "editorial-team@simplywallst.com (Simply Wall St)",
        title:
          "Coal India And 2 More High-Yield Dividend Stocks On Indian Exchange",
        description:
          "The Indian market has shown impressive momentum, climbing 1.7% in the last 7 days and achieving a remarkable 46% gain over the past year, with earnings...",
        url: "https://finance.yahoo.com/news/coal-india-2-more-high-010659926.html",
        urlToImage:
          "https://media.zenfs.com/en/simply_wall_st__316/f1f0f398416d2d2a408886a3ad9282ac",
        publishedAt: "2024-08-28T01:06:59Z",
        content:
          "The Indian market has shown impressive momentum, climbing 1.7% in the last 7 days and achieving a remarkable 46% gain over the past year, with earnings forecasted to grow by 17% annually. In this thr… [+5222 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Usman Kabir",
        title:
          "Palantir Technologies Inc. (NYSE:PLTR): Microsoft Deal Is Game Changing",
        description:
          "We recently published a list of 17 Trending AI Stocks on Latest Analyst Ratings and News. In this article, we are going to take a look at where Palantir...",
        url: "https://finance.yahoo.com/news/palantir-technologies-inc-nyse-pltr-193755344.html",
        urlToImage:
          "https://media.zenfs.com/en/insidermonkey.com/fe81fed2ec80fcb33dd80ffe48ca569e",
        publishedAt: "2024-08-30T19:37:55Z",
        content:
          "We recently published a list of 17 Trending AI Stocks on Latest Analyst Ratings and News. In this article, we are going to take a look at where Palantir Technologies Inc. (NYSE:PLTR) stands against t… [+5381 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Dan DeFrancesco",
        title:
          "Apple's event will serve as a litmus test for the wider AI industry",
        description:
          'Apple\'s "Glowtime" event is kicking off today. The tech giant will unveil its newest iPhone, alongside AirPods, watches, and Apple Intelligence.',
        url: "https://www.businessinsider.com/apple-unveiling-products-glowtime-event-iphone16-ai-airpods-2024-9",
        urlToImage:
          "https://i.insider.com/66ded39fa0ff598b2665ae37?width=1200&format=jpeg",
        publishedAt: "2024-09-09T11:59:57Z",
        content:
          "Apple\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back! Apple is gearing up to annou… [+6981 chars]",
      },
      {
        source: {
          id: null,
          name: "Fast Company",
        },
        author: "Reuters",
        title: "Tupperware: a timeline of the iconic brand’s defining moments",
        description:
          "The American icon filed for bankruptcy on Tuesday.\n\nTupperware Brands filed for bankruptcy protection on Tuesday, after years of struggling with poor demand for its food storage containers and rising financial losses.",
        url: "https://www.fastcompany.com/91193616/tupperware-timeline-iconic-brands-defining-moments",
        urlToImage:
          "https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/wp-cms-2/2024/09/2024-09-19T021057Z_2_LYNXMPEK8H0SE_RTROPTP_4_TUPPEWARE-BANKRUPTCY.jpg",
        publishedAt: "2024-09-19T15:16:04Z",
        content:
          "Tupperware Brands filed for bankruptcy protection on Tuesday, after years of struggling with poor demand for its food storage containers and rising financial losses.\r\nHeres a look at some of the key … [+4224 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Nalak Das",
        title:
          "Why Super Micro Computer (SMCI) Stock Is Offering Handsome Returns",
        description:
          "Super Micro Computer (SMCI) is expected to generate strong sales in future supported by robust demand for its servers powered by high-end generative AI chips...",
        url: "https://finance.yahoo.com/news/why-super-micro-computer-smci-123900212.html",
        urlToImage:
          "https://media.zenfs.com/en/zacks.com/53d9a3fd304ab73d580828e5367313eb",
        publishedAt: "2024-08-27T12:39:00Z",
        content:
          "Super Micro Computer Inc. SMCI has benefited on the back of robust demand for servers powered by high-end generative artificial intelligence (AI) chipsets. SMCI designs, develops, manufactures and se… [+4029 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Theron Mohamed",
        title:
          "Mark Zuckerberg could become the richest person on the planet after a $51 billion wealth surge this year",
        description:
          "Meta CEO Mark Zuckerberg has gained an unmatched $51 billion in net worth this year, and could surpass Elon Musk and Jeff Bezos with a bit of luck.",
        url: "https://www.businessinsider.com/mark-zuckerberg-meta-net-worth-wealth-rich-list-musk-bezos-2024-9",
        urlToImage:
          "https://i.insider.com/66e05e3fa0ff598b266622d5?width=1200&format=jpeg",
        publishedAt: "2024-09-11T09:23:47Z",
        content:
          "Meta CEO Mark Zuckerberg.Getty\r\n<ul><li>Mark Zuckerberg could become the world's wealthiest person after surging up the rich list.</li><li>The Meta CEO has gained $51 billion this year and recently r… [+3700 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Ana Altchek",
        title:
          "The unofficial Nvidia earnings watch party at an NYC bar is the latest sign the AI hype isn't going anywhere",
        description:
          "Just when you think the buzz around Nvidia's earnings has reached a fever pitch, there's an unofficial watch party for the earnings results at a bar.",
        url: "https://www.businessinsider.com/nvidia-earnings-watch-party-bar-nyc-2024-8",
        urlToImage:
          "https://i.insider.com/66ce47401aa2ac29ee34d7d3?width=1200&format=jpeg",
        publishedAt: "2024-08-27T21:43:31Z",
        content:
          "Nvidia's much-anticipated quarterly earnings report has attracted a watch party at a New York City bar.Getty/Steve Prezant\r\n<ul><li>Nvidia's second-quarter earnings will be closely watched by the tec… [+3197 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Brian Sozzi",
        title: "Nvidia gets ready to take over the stock market (again)",
        description: "Nvidia is about to set the tone for the broader market.",
        url: "https://finance.yahoo.com/news/nvidia-gets-ready-to-take-over-the-stock-market-again-123030277.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/cOeNrWPviHgisBPbsErhJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/9dee0580-62d6-11ef-bebd-cc5d273ad6be",
        publishedAt: "2024-08-25T11:37:10Z",
        content:
          "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:\r\n<ul><li>The chart of the day\r\n</li><li>What we're watching\r\n</li><li>What we… [+4220 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Cory Renauer, The Motley Fool",
        title:
          "2 High-Yield Dow Jones Dividend Stocks to Buy Now and Hold Forever",
        description:
          "With yields above 5% at recent prices, this pair of stocks could provide a nice boost for your passive income stream.",
        url: "https://finance.yahoo.com/news/2-high-yield-dow-jones-105100272.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-22T10:51:00Z",
        content:
          "Are you looking for a reliable way to increase the passive income your stock portfolio produces? The Dow Jones Industrial Average is a great place to start looking, and it won't take long. The centur… [+4612 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Manali Pradhan, The Motley Fool",
        title:
          "Move Over, Nvidia: Billionaires Are Selling Its Shares and Buying Up These 2 Artificial Intelligence (AI) Stocks Instead",
        description:
          "Many billionaires are shifting some of their AI investments toward Super Micro Computer and Microsoft.",
        url: "https://finance.yahoo.com/news/move-over-nvidia-billionaires-selling-083300873.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-21T08:33:00Z",
        content:
          "Wall Street has fallen in love with the artificial intelligence (AI) trend. This is not surprising, considering that PwC analysts expect AI to add nearly $15.7 trillion to the global economy annually… [+7436 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Fatima Gulzar",
        title:
          "American Express Company (AXP): A Good Credit Card Stock to Add to Your Portfolio",
        description:
          "We recently compiled a list of the 10 Best Credit Card Stocks to Buy Now. In this article, we are going to take a look at where American Express Company...",
        url: "https://finance.yahoo.com/news/american-express-company-axp-good-192052977.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-14T19:20:52Z",
        content:
          "We recently compiled a list of the 10 Best Credit Card Stocks to Buy Now. In this article, we are going to take a look at where American Express Company (NYSE:AXP) stands against the other credit car… [+8406 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Zacks Equity Research",
        title:
          "Are You a Value Investor? This 1 Stock Could Be the Perfect Pick",
        description:
          "Whether you're a value, growth, or momentum investor, finding strong stocks becomes easier with the Zacks Style Scores, a top feature of the Zacks Premium...",
        url: "https://finance.yahoo.com/news/value-investor-1-stock-could-134012762.html",
        urlToImage:
          "https://media.zenfs.com/en/zacks.com/d0d4ab152198da2f423d92da8a7d22ee",
        publishedAt: "2024-09-06T13:40:12Z",
        content:
          "For new and old investors, taking full advantage of the stock market and investing with confidence are common goals.\r\nMany investors also have a go-to methodology that helps guide their buy and sell … [+1972 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Debasis Saha",
        title:
          "Goldman Thinks Costco Wholesale Corporation (COST) Is A Long-Term AI Stock Set To Rally Eventually",
        description:
          "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Costco Wholesale ...",
        url: "https://finance.yahoo.com/news/goldman-thinks-costco-wholesale-corporation-174127522.html/",
        urlToImage:
          "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
        publishedAt: "2024-09-13T17:41:27Z",
        content:
          "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Costco Wholesale Corporation (NASDAQ:COST) stands against t… [+5009 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jacob Zinkula,Madison Hoff",
        title:
          "A millennial has been looking for a tech job for over a year after being laid off. He says AI and being Black have worked against him.",
        description:
          "A millennial who's been looking for a job for a year shares the strategies he's tried and why he thinks his search has been so difficult.",
        url: "https://www.businessinsider.com/millennial-cant-find-job-tech-blames-racial-discrimination-ai-2024-9",
        urlToImage:
          "https://i.insider.com/66eda299cfb7f307e5738a90?width=1200&format=jpeg",
        publishedAt: "2024-09-24T10:03:02Z",
        content:
          "A millennial (not pictured) has been looking for a tech job for over a year after being laid off. Getty Images; Alyssa Powell/BI\r\n<ul><li>A millennial has been looking for a job after being laid off … [+8523 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Paige Bennett",
        title:
          "14 of the best specialty items to get at Aldi this month for $5 or less",
        description:
          "This September, Aldi is stocking its shelves with seasonal fall desserts, unique pizzas, fun dips, and quick meals, all for $5 or less each.",
        url: "https://www.businessinsider.com/best-cheap-things-to-get-at-aldi-september-2024-9",
        urlToImage:
          "https://i.insider.com/66d20f9f1d8d2deb96b7d725?width=1200&format=jpeg",
        publishedAt: "2024-09-01T10:28:02Z",
        content:
          "This month, Aldi is carrying seasonal and special items like lobster bites and pumpkin-shaped pizzas. Aldi\r\n<ul><li>This September, Aldi is releasing a ton of limited-edition and seasonal finds for $… [+5511 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Cailey Griffin",
        title:
          "My husband retired 5 years ago and I still run my own business. Our schedules are different, but we make it work.",
        description:
          "Her husband retired five years ago, and she still runs her own business. She loves the work she does and has no plans to retire yet.",
        url: "https://www.businessinsider.com/husband-retired-wife-still-working-retirement-plans-2024-8",
        urlToImage:
          "https://i.insider.com/66c4f4b8b4912df3ae1d1813?width=1200&format=jpeg",
        publishedAt: "2024-08-24T10:33:02Z",
        content:
          "Ruth Furman still runs her own business while her husband retired five years ago.Photo credit: Mary Rendina Photography\r\n<ul><li>At 57, Ruth Furman still owns her own business and loves her work.</li… [+5175 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Matt Turner",
        title: "Insider Today: Nike's airball",
        description:
          "In this Sunday edition of Insider Today, we're talking about Nike's business woes, and Larry Page's money man.",
        url: "https://www.businessinsider.com/insider-today-nike-business-woes-larry-page-wayne-osborne",
        urlToImage:
          "https://i.insider.com/66edf0b5d17aa3c7b2b4cbec?width=1200&format=jpeg",
        publishedAt: "2024-09-22T11:08:02Z",
        content:
          "Nike\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back to our Sunday edition. This is… [+5588 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Ana Altchek",
        title:
          "People pronounce 'Nvidia' in 2 different ways. Only one is correct.",
        description:
          "It seems like Nvidia is all anyone in tech can talk about these days. So it's a good idea to make sure you're pronouncing it the correct way.",
        url: "https://www.businessinsider.com/nvidia-how-to-pronounce-correct-way-2024-8",
        urlToImage:
          "https://i.insider.com/66d1c72d1d8d2deb96b79c01?width=1200&format=jpeg",
        publishedAt: "2024-08-30T15:07:21Z",
        content:
          "Some people pronounce Nvidia as \"Nuh-Vidia.\" But that's actually incorrect, according to the company.I-hwa Cheng/Getty\r\n<ul><li>Nvidia is the world's most important stock at the moment — but some peo… [+2301 chars]",
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Tim Hardwick",
        title: "How Much Will the iPhone 16 Cost?",
        description:
          "Apple's next-generation iPhone 16 series is expected to launch on September 20 and will compete in a quickly evolving smartphone market, and with some notable upgrades rumored, the new models could see price changes compared to previous years.\n\n\n\n\n\nSuccessive…",
        url: "https://www.macrumors.com/2024/09/06/how-much-will-iphone-16-cost/",
        urlToImage:
          "https://images.macrumors.com/t/xcTabKWMzOGvrlv91McWob6xGn0=/2000x/article-new/2024/06/iPhone-16-Pro-Front-Update-Blue.jpg",
        publishedAt: "2024-09-06T12:43:10Z",
        content:
          "Apple's next-generation iPhone 16 series is expected to launch on September 20 and will compete in a quickly evolving smartphone market, and with some notable upgrades rumored, the new models could s… [+4373 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Nilanjan Choudhury",
        title: "Chevron Stock Near 52-Week Lows: Is It Good Enough to Invest?",
        description:
          "CVX remains one of the best-positioned global integrated oil companies to achieve sustainable production growth.",
        url: "https://finance.yahoo.com/news/chevron-stock-near-52-week-134800913.html",
        urlToImage:
          "https://media.zenfs.com/en/zacks.com/0caaa20aeade0884d0a3a6fed86f758b",
        publishedAt: "2024-09-05T13:48:00Z",
        content:
          "Shares of Chevron Corporation CVX have dropped by nearly 9% over the past three months to close at $142.07 on Wednesday, near 52-week lows of $139.62. Having underperformed its rival ExxonMobil XOM, … [+6618 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Dan DeFrancesco",
        title:
          "Linkedin's job-seeking solution comes with both success and shame",
        description:
          "A debate has raged online over LinkedIn's #opentowork banner and the risks some believe it comes with.",
        url: "https://www.businessinsider.com/linkedin-job-seekers-open-to-work-banner-recruiters-2024-8",
        urlToImage:
          "https://i.insider.com/66d70bdd1d8d2deb96b81436?width=1200&format=jpeg",
        publishedAt: "2024-09-03T13:20:51Z",
        content:
          "Rebecca Zisser/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back, and happy birthd… [+7499 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Police",
        },
        author: "Timi Cantisano",
        title:
          "One of the best microSD cards you can buy is now down to an all-time low price",
        description: "Stock up on storage with this 512GB card",
        url: "https://www.androidpolice.com/samsung-512gb-microsd-30-deal/",
        urlToImage:
          "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/09/169-2-1.png",
        publishedAt: "2024-09-24T08:00:12Z",
        content:
          "Samsung Pro Plus microSD card \r\nIf you're the owner of a relatively recent flagship smartphone and want to make sure you're getting the highest speeds out of your expanded storage, consider the Samsu… [+2455 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Vishesh Raisinghani",
        title:
          "Warren Buffett cautioned that you should be ready for any stock you buy to plunge ‘50% or more’",
        description:
          "The legendary investor says this type of person shouldn't own stocks.",
        url: "https://finance.yahoo.com/news/warren-buffett-cautioned-ready-stock-104500651.html",
        urlToImage:
          "https://media.zenfs.com/en/moneywise_327/91864839a9a0c977218a86637a5bea8e",
        publishedAt: "2024-09-02T10:45:00Z",
        content:
          "Warren Buffett cautioned that you should be ready for any stock you buy to plunge 50% or more\r\nOne of Warren Buffetts most famous pieces of advice is to be fearful when others are greedy and to be gr… [+4511 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Echo Wang and David French",
        title:
          "Exclusive-Data center operator Switch weighs IPO at about $40 billion valuation, sources say",
        description:
          "The owners of Switch are exploring an initial public offering (IPO) of the data center operator that could value it at about $40 billion, including debt...",
        url: "https://finance.yahoo.com/news/exclusive-data-center-operator-switch-130457441.html",
        urlToImage:
          "https://media.zenfs.com/en/reuters-finance.com/81e43dbec30b6decb758e23879109fc3",
        publishedAt: "2024-09-10T13:04:57Z",
        content:
          "By Echo Wang and David French\r\nNEW YORK (Reuters) - The owners of Switch are exploring an initial public offering (IPO) of the data center operator that could value it at about $40 billion, including… [+2346 chars]",
      },
    ],
    crypto: data.crypto
  },
  searchNews: [], // New state for search results
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
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
      state.status = "succeeded";
      state.searchNews = action.payload; // Set search news data
    });
    builder.addCase(fetchSearchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default newsDataSlice.reducer;
