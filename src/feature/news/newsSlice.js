import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from 'axios';

// Replace with your actual API key
const API_KEY = '511c1910ac754185af22ed6b70cde5bd'

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
    newsData: 
    {
        "business": [
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Matt Burgess, Andrew Couts",
            "title": "Hackers Threaten to Leak Planned Parenthood Data",
            "description": "Plus: Kaspersky’s US business sold, Nigerian sextortion scammers jailed, and Europe’s controversial encryption plans return.",
            "url": "https://www.wired.com/story/hackers-threaten-to-leak-planned-parenthood-data/",
            "urlToImage": "https://media.wired.com/photos/66db309b6f71f9df4e4fc4c9/191:100/w_1280,c_limit/PP-sec-roundup-1147032405.jpg",
            "publishedAt": "2024-09-07T11:30:00Z",
            "content": "Even those of you who do everything you can to secure those secrets can find yourself vulnerableespecially if youre using a YubiKey 5 authentication token. The multifactor authentication devices can … [+4335 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Nilay Patel",
            "title": "Why Google is back in court for another monopoly showdown",
            "description": "Google is back in antitrust court, this defending web advertising business.",
            "url": "https://www.theverge.com/24248923/google-antitrust-ad-trial-doj-monopoly-doubleclick-acquisition-decoder-podcast-interview",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/dI9YqyMa8PgGrxG8G5veTELMaPc=/0x0:2760x1839/1200x628/filters:focal(1661x854:1662x855)/cdn.vox-cdn.com/uploads/chorus_asset/file/25629479/decoder__3_.png",
            "publishedAt": "2024-09-19T14:30:47Z",
            "content": "Why Google is back in court for another monopoly showdown\r\nWhy Google is back in court for another monopoly showdown\r\n / Its round two in US v. Google; will Google take another L?\r\nToday on Decoder, … [+3165 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Amy Francombe",
            "title": "Nike's Next CEO Has One Hell of a Challenge Ahead",
            "description": "A ruinous pandemic business strategy, declining innovation, exodus of talent, and a “worst sneaker of all time” accolade has laid the world's biggest sports brand low.",
            "url": "https://www.wired.com/story/nikes-next-ceo-has-one-hell-of-a-challenge-ahead/",
            "urlToImage": "https://media.wired.com/photos/66f1e6854eb5c4cc31e13b66/191:100/w_1280,c_limit/Nike_Alamy.jpg",
            "publishedAt": "2024-09-24T09:35:29Z",
            "content": "It all started when Donahoe took over as CEO and made the controversial decision to restructure Nikes product and marketing departments, eliminating long-established categories such as running, footb… [+3351 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "PM to say Parliament return not 'business as usual'",
            "description": "The prime minister will make a speech in Downing Street before Parliament returns next week.",
            "url": "https://www.bbc.com/news/articles/clyn01p5npgo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4417/live/7d166480-63d8-11ef-a1ed-85b6b81afc59.jpg",
            "publishedAt": "2024-08-26T21:30:02Z",
            "content": "The PM will promise \"no more politics of performance, papering over the cracks, or division and distraction\"\r\nSir Keir Starmer will say on Tuesday that \"it will not be business as usual\" when Parliam… [+3764 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Mike Fazioli",
            "title": "Buy Microsoft Office For Windows or Mac Once, Use It Forever – Just $40, Ending Soon!",
            "description": "Get a lifetime license for Pro for Windows for 81% off or Home & Business for Mac for 63% off at StackSocial.",
            "url": "https://gizmodo.com/buy-microsoft-office-for-windows-or-mac-once-use-it-forever-just-40-ending-soon-2000497335",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/sale_WIN_primary_image.jpg",
            "publishedAt": "2024-09-11T14:35:50Z",
            "content": "Buying a Microsoft Office subscription straight from the source comes with one very big drawback you have to pay for it every year, over and over, or you lose access to its essential productivity too… [+2545 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Sherri L Smith",
            "title": "HP Elite x360 1040 G11 2-in-1 Review: The Crème de la Crème of Business Laptops",
            "description": "The HP Elite x360 1040 G11 2-in-1 is an excellent choice for consumers who want a durable convertible laptop with long battery life.",
            "url": "https://gizmodo.com/hp-elite-x360-1040-g11-2-in-1-review-the-creme-de-la-creme-of-business-laptops-2000491845",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/HP-Elite-x360-1040-G11-2-in-1-Hero.jpg",
            "publishedAt": "2024-08-30T10:05:15Z",
            "content": "HP laptops have always been all businessso much so that theyve become a long-time favorite among professionals or students who want laptops that can handle all their productivity tasks with a solid b… [+10964 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "How Intel Lost the Sony PlayStation Business",
            "description": "Intel lost a bid to design and manufacture Sony's PlayStation 6 chip in 2022, dealing a blow to its contract manufacturing business. The contract, worth potentially billions in revenue, went to rival AMD after Intel failed to agree on pricing with Sony, Reute…",
            "url": "https://games.slashdot.org/story/24/09/16/174231/how-intel-lost-the-sony-playstation-business",
            "urlToImage": "https://a.fsdn.com/sd/topics/intel_64.png",
            "publishedAt": "2024-09-16T18:00:00Z",
            "content": "Intel lost a bid to design and manufacture Sony's PlayStation 6 chip in 2022, dealing a blow to its contract manufacturing business. The contract, worth potentially billions in revenue, went to rival… [+793 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jason Guerrasio",
            "title": "Hollywood's new hot business strategy: Celebrity BFFs",
            "description": "From Taylor Swift helping Blake Lively to Ryan Reynolds teaming up with Rob McElhenney, Hollywood friendships are proving to be big business.",
            "url": "https://www.businessinsider.com/celebrity-friendships-hollywood-business-strategy-taylor-swift-blake-lively-2024-8",
            "urlToImage": "https://i.insider.com/66cf7b4b1aa2ac29ee352427?width=1200&format=jpeg",
            "publishedAt": "2024-08-29T09:17:02Z",
            "content": "Taylor Swift and Blake Lively are friends laughing to the bank, following right behind besties Ryan Reynolds and Rob McElhenney.Cindy Ord /Getty, Gareth Cattermole/TAS24/Getty, Gotham/Getty, Tyler Le… [+6891 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Holly Johnson",
            "title": "Chase Ink Business Unlimited Credit Card: Earn an Unlimited 1.5% Cash Back on All Spending",
            "description": "The Chase Ink Business Unlimited card keeps rewards simple with 1.5% cash back on all spending.",
            "url": "https://www.cnet.com/personal-finance/credit-cards/reviews/chase-ink-business-unlimited-credit-card-review/",
            "urlToImage": "https://www.cnet.com/personal-finance/assets/uploads/resize/aa96688941e32fdc3583b1199a57c6b51f5f97aa/m1/2023/06/ink-business-unlimited.jpg?auto=webp",
            "publishedAt": "2024-09-06T19:45:00Z",
            "content": "If you’re looking for a small business card that offers flat-rate rewards on all your business spending, the Ink Business Unlimited® Credit Card is one of the best options on the market today. Not on… [+8464 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Peter Kafka",
            "title": "OnlyFans figured out the best porn business on the internet",
            "description": "OnlyFans' success seems obvious in retrospect. But it turns out that connecting porn, creators, and subscriptions on one platform is a very, very good business.",
            "url": "https://www.businessinsider.com/onlyfans-business-profit-success-porn-user-generated-content-2024-9",
            "urlToImage": "https://i.insider.com/66db676ca0ff598b266593ab?width=1200&format=jpeg",
            "publishedAt": "2024-09-07T12:16:02Z",
            "content": "OnlyFans CEO Kelly Blair runs what may be the most profitable porn company ever.Dia Dipasupil/Getty Images\r\n<ul><li>OnlyFans is an astonishingly big, and astonishingly profitable business.</li><li>Th… [+3290 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Ashley Stewart",
            "title": "Leaked Microsoft pay data shows how much more AI employees make versus the rest of the company",
            "description": "Hundreds of Microsoft employees recently shared details about their pay and promotions in a spreadsheet viewed by Business Insider.",
            "url": "https://www.businessinsider.com/microsoft-pay-data-shows-how-much-more-ai-workers-make-2024-8",
            "urlToImage": "https://i.insider.com/66cc9b381aa2ac29ee341815?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T16:32:02Z",
            "content": "Microsoft AI CEO Mustafa Suleyman.PATRICK T. FALLON\r\n<ul><li>Hundreds of Microsoft employees recently shared details about their pay and promotions.</li><li>The data shows employees in Microsoft's ne… [+3277 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Joi-Marie McKenzie",
            "title": "Insider Today: Eldest-daughter syndrome",
            "description": "In this Saturday edition of Insider Today, we're talking about eldest-daughter syndrome, and kids flying business class.",
            "url": "https://www.businessinsider.com/insider-today-eldest-daughter-syndrome-kids-flying-business-class",
            "urlToImage": "https://i.insider.com/66db4ef81d8d2deb96ba16da?width=1200&format=jpeg",
            "publishedAt": "2024-09-21T11:09:02Z",
            "content": "Gracia Lam for Business Insider\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back to … [+6935 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Monica Humphries",
            "title": "I stayed on a private island off the coast of Panama. Take a look at the resort, where my room cost $980 a night.",
            "description": "Business Insider's author spent three nights exploring Isla Palenque, where private beaches and three-course meals filled her days.",
            "url": "https://www.businessinsider.com/panama-private-island-resort-isla-palenque-photos-2024-9",
            "urlToImage": "https://i.insider.com/66d9eb431d8d2deb96b97017?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T09:48:02Z",
            "content": "The author outside her casita at Isla Palenque. Monica Humphries/Business Insider\r\n<ul><li>I spent three nights at Isla Palenque, a private island resort off the coast of Panama.</li><li>My trip was … [+16384 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Juliana Kaplan",
            "title": "New business owners could get a $50,000 tax deduction under Kamala Harris's plan",
            "description": "Kamala Harris's next big economic proposal hinges on making it easier for you to start a small business.",
            "url": "https://www.businessinsider.com/kamala-harris-small-businesses-tax-breaks-cut-red-tape-2024-9",
            "urlToImage": "https://i.insider.com/66d76d3914a5cd1fcc8ce3e0?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T21:00:21Z",
            "content": "Kamala Harris wants to bolster small businesses.Scott Eisen/Getty Images\r\n<ul><li>Kamala Harris is aiming for 25 million new business applications in her first term.</li><li>To get there, she's propo… [+2793 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Julia Hood,Rebecca Knight,Tim Paradis",
            "title": "AI and worker well-being are top of mind for business leaders, according to execs from Accenture, Mastercard, Ancestry, and more",
            "description": "Participants in Business Insider's first Workforce Innovation virtual roundtable discuss the top focus areas at their companies.",
            "url": "https://www.businessinsider.com/top-business-execs-trending-insights-ai-worker-well-being-roundtable-2024-9",
            "urlToImage": "https://i.insider.com/66d1e1941d8d2deb96b7b660?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T19:03:55Z",
            "content": "Getty Images; Andrius Banelis for BI\r\nExecutives from 10 companies who are participants in our first-ever Workforce Innovation Board convened for a virtual roundtable on August 21.The group was asked… [+13747 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "John Towfighi",
            "title": "Small business owners could be poised for a 1990s-like boom",
            "description": "One economist warned entrepreneurs against letting fear of the economy guide emotional business decisions: \"There are bright days ahead.\"",
            "url": "https://www.businessinsider.com/recession-outlook-small-business-owner-economy-interest-rate-cuts-2024-9",
            "urlToImage": "https://i.insider.com/66e0aee85444ffafa7643c12?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T09:27:02Z",
            "content": "Daniel Harvey Gonzalez/In Pictures via Getty Images\r\n<ul><li>Small business owners are on the brink of a prosperous era, economist Phil Powell says.</li><li>The Federal Reserve is expected to cut rat… [+4970 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Olivia Singh",
            "title": "'The Golden Bachelorette' star Joan Vassos says Gerry Turner and the 'Bachelor' psychiatrist gave her 'the best advice' for dating as a widow",
            "description": "\"The Golden Bachelorette\" star Joan Vassos spoke to Business Insider about getting relationship advice from Golden Bachelor Gerry Turner.",
            "url": "https://www.businessinsider.com/joan-vassos-gerry-turner-golden-bachelorette-relationship-advice-2024-9",
            "urlToImage": "https://i.insider.com/66eb0419cfb7f307e572afef?width=1200&format=jpeg",
            "publishedAt": "2024-09-18T21:07:44Z",
            "content": "Joan Vassos stars on the inaugural season of \"The Golden Bachelorette.\"Brian Bowen Smith/Disney\r\n<ul><li>\"The Golden Bachelorette\" star Joan Vassos said she got dating advice from Golden Bachelor Ger… [+4438 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lian Kit Wee",
            "title": "Paramount's last-minute bidder wants to partner with a streaming service, report says",
            "description": "Edgar Bronfman Jr. wants to partner Paramount with a tech giant like Apple to boost its streaming business, Bloomberg reported.",
            "url": "https://www.businessinsider.com/edgar-bronfman-seeks-tech-company-partnership-paramount-apple-amazon-2024-8",
            "urlToImage": "https://i.insider.com/66cc20291aa2ac29ee340738?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T06:40:40Z",
            "content": "Edgar Bronfman Jr. wants Paramount to partner with a tech giant like Apple or Amazon to boost its streaming business.R. Diamond/Getty Images\r\n<ul><li>Edgar Bronfman Jr. wants Paramount to partner wit… [+2575 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Grace Kay",
            "title": "What it's like working at Tesla's Autopilot labeling facilities, where your keystrokes and bathroom breaks are tracked",
            "description": "Business Insider spoke with 17 former and current Tesla employees who labeled data to help train the company's Autopilot system.",
            "url": "https://www.businessinsider.com/tesla-autopilot-fsd-labeling-facilities-jobs-2024-9",
            "urlToImage": "https://i.insider.com/66cf6794397a168972021438?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T11:08:02Z",
            "content": "Much of Tesla's data annotation is done at its facility in Buffalo, New York.Frank Franklin II\r\n<ul><li>Tesla's driver-assist software relies on hundreds of data annotators to train it.</li><li>The t… [+8410 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Insider Inc.",
            "title": "The Road to IPO",
            "description": "Business Insider's virtual event full of insider tips on what makes a successful launch into the public markets.",
            "url": "https://www.businessinsider.com/events/the-road-to-ipo",
            "urlToImage": "https://media.tbistatic.com/bistudios/_00/dev/client/xxxxxx",
            "publishedAt": "2024-09-18T20:35:32Z",
            "content": "The Road to IPO<!-- Meta data --> <!-- Browser favicons --><!-- Google Tag Manager - for BI use GTM-NS64GV - for Insider use GTM-K2K9CK --> (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n… [+2861 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Peter Kafka,James Faris",
            "title": "WBD scored a crucial cable deal — by making HBO free for millions of people",
            "description": "A deal between Warner Bros. Discovery and Charter shows you how much pressure the pay-TV business is under.",
            "url": "https://www.businessinsider.com/wbd-hbo-max-charter-deal-tnt-nba-cable-2024-9",
            "urlToImage": "https://i.insider.com/66e31422bf0250c21492c5c8?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T16:22:23Z",
            "content": "A scene from \"House of the Dragon,\" HBO's most high-profile show. Millions of Charter subscribers will now get HBO and the rest of WBD's Max service for free.HBO\r\n<ul><li>Warner Bros. Discovery reach… [+3516 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Matt Turner",
            "title": "Insider Today: Nike's airball",
            "description": "In this Sunday edition of Insider Today, we're talking about Nike's business woes, and Larry Page's money man.",
            "url": "https://www.businessinsider.com/insider-today-nike-business-woes-larry-page-wayne-osborne",
            "urlToImage": "https://i.insider.com/66edf0b5d17aa3c7b2b4cbec?width=1200&format=jpeg",
            "publishedAt": "2024-09-22T11:08:02Z",
            "content": "Nike\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back to our Sunday edition. This is… [+5588 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "WIRED Staff",
            "title": "Everything You Need to Know About the WIRED & Octopus Energy Tech Summit 2024",
            "description": "Get ready for the return of the annual energy summit in Berlin on October 10.",
            "url": "https://www.wired.com/story/everything-you-need-to-know-about-the-wired-and-octopus-energy-tech-summit-2024/",
            "urlToImage": "https://media.wired.com/photos/66ec11b34fd95d32e45de686/191:100/w_1280,c_limit/WIRED_ETS_OCTOPUS-ENERGY_CH2C7245.jpg",
            "publishedAt": "2024-09-19T14:08:42Z",
            "content": "Returning for its second edition this October in Berlin, the WIRED &amp; Octopus Energy Tech Summit is bringing together Europes leading experts and visionaries in the green energy sector to explore … [+2167 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Fast Company"
            },
            "author": "Jared Newman",
            "title": "Why I ditched business cards for a QR code",
            "description": "With a QR code, you can easily share your info with anyone regardless of platform, and you have more control over what gets shared in the first place.\n\nAs of this week, I’ve hopefully handed out my last business card.",
            "url": "https://www.fastcompany.com/91194603/why-i-ditched-business-cards-for-a-qr-code",
            "urlToImage": "https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/wp-cms-2/2024/09/p-91194603-ditch-the-business-card-for-qr-code.jpg",
            "publishedAt": "2024-09-23T12:00:00Z",
            "content": "As of this week, Ive hopefully handed out my last business card.\r\nNot that I have no need to promote my humble newsletters or freelance work, but Id rather not have to carry a stack of business cards… [+1272 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Brittany Chang",
            "title": "This couple went on one cruise together. Now, they're moving onto a never-ending residential cruise ship.",
            "description": "A couple sold their business in Hawaii to move onto Villa Vie's residential cruise ship. Its never-ending voyage has been delayed by 3 months.",
            "url": "https://www.businessinsider.com/villa-vie-couple-sold-business-never-ending-residential-cruise-2024-8",
            "urlToImage": "https://i.insider.com/66c8c21b43b5e59d16b4be9a?width=1200&format=jpeg",
            "publishedAt": "2024-08-24T12:26:02Z",
            "content": "Lanette Canen and Johan Bodin sold their car rental business in Hawaii to move onto the residential cruise ship Villa Vie Odyssey.Lanette Canen\r\n<ul><li>A couple left Hawaii to move onto the resident… [+7504 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lloyd Lee",
            "title": "More and more big companies say AI regulation is a business risk",
            "description": "Some of the biggest names in AI, including Sam Altman, have called for AI regulation. But companies say it could come with business risks.",
            "url": "https://www.businessinsider.com/fortune-500-companies-ai-regulation-risk-factor-business-annual-reports-2024-8",
            "urlToImage": "https://i.insider.com/66d3d06c289b805d1db357f3?width=1200&format=jpeg",
            "publishedAt": "2024-09-02T03:02:03Z",
            "content": "As policymakers, like these European Union lawmakers, around the world decide how to regulate AI, some companies said that the laws could be a business risk.Jean-Francois Badias/AP\r\n<ul><li>Some of t… [+4550 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "Neither Trump nor Harris really gave us much detail about how they will fix the economy in the debate",
            "description": "Many industry leaders were disappointed with the lack of specifics, while others told BI that Harris nailed her business talking points.",
            "url": "https://www.businessinsider.com/trump-harris-economy-tech-debate-tariffs-taxes-2024-9",
            "urlToImage": "https://i.insider.com/66e1ae92a0ff598b26667cd3?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T15:10:42Z",
            "content": "Neither candidate provided much clarity on their economic policies, causing disappointment among some business leaders.Anadolu\r\n<ul><li>Harris and Trump didn't offer clarity on their economic plans, … [+4746 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "Mark Cuban offers to serve in the Harris White House",
            "description": "In an interview on Thursday, Cuban praised Harris as pro-business and said he is in regular communication with her team.",
            "url": "https://www.businessinsider.com/mark-cuban-kamala-harris-sec-capital-gains-business-2024-9",
            "urlToImage": "https://i.insider.com/66da0430a0ff598b2664f6c6?width=1200&format=jpeg",
            "publishedAt": "2024-09-05T19:32:58Z",
            "content": "Mark Cuban said Harris is uniquely open to listening to business leaders.Allen Berezovsky via Getty Images.\r\n<ul><li>Mark Cuban called Kamala Harris \"pro-business\" in an interview on Thursday.</li><l… [+2238 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Robin Madell",
            "title": "5 careers in the space industry that new grads should focus on, according to a VC",
            "description": "Various career paths can lead new grads to working in the space industry. Jobs on the rise include interior design, welding, and business development.",
            "url": "https://www.businessinsider.com/jobs-careers-space-industry-new-grads-2024-9",
            "urlToImage": "https://i.insider.com/66db3e42a0ff598b266569ae?width=1200&format=jpeg",
            "publishedAt": "2024-09-07T11:54:02Z",
            "content": "Chad Anderson, who has invested in dozens of space ventures, listed the top five careers in the space industry for current grads.Courtesy of Chad Anderson\r\n<ul><li>The global space economy is project… [+5175 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Joshua Nelken-Zitser",
            "title": "My small business fell for a counterfeit check scam. It dented my confidence and made me more cautious.",
            "description": "Eat Your Flowers bakery was scammed with a $7,500 counterfeit check. Loria Stern told BI it's added yet another challenge to running a small business.",
            "url": "https://www.businessinsider.com/running-small-business-hard-enough-without-scams-la-bakery-owner-2024-9",
            "urlToImage": "https://i.insider.com/66e2c40abf0250c214929688?width=1200&format=jpeg",
            "publishedAt": "2024-09-13T11:00:34Z",
            "content": "Loria Stern, the owner of Eat Your Flowers, next to her bakery's signature edible flower-pressed cake.Courtesy of Loria Stern\r\n<ul><li>An LA bakery fell victim to a counterfeit check scam last month … [+3795 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Shamsian,Melia Russell,Melissa Wiley,Priyanka Rajput",
            "title": "The most famous book set in every state",
            "description": "Business Insider's guide to the most famous books set in every state will take you on a literary trip around America.",
            "url": "https://www.businessinsider.com/most-famous-book-set-in-every-state",
            "urlToImage": "https://i.insider.com/66d9ec61a0ff598b2664d622?width=1200&format=jpeg",
            "publishedAt": "2024-09-10T17:09:11Z",
            "content": "We identified the most famous book set in every state.Natalia Bostan/Shutterstock\r\n<ul>\n<li>Business Insider identified the most famous book set in every state through surveys and research.</li>\n<li>… [+29044 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Maria Noyen",
            "title": "I fly business class with my kids whenever I can. People can complain, but they belong there as much as anyone else.",
            "description": "Monet Hambrick. who has traveled to over 35 countries with her daughters, books business-class tickets for them whenever she has enough points.",
            "url": "https://www.businessinsider.com/millennial-mom-flies-business-class-with-kids-2024-9",
            "urlToImage": "https://i.insider.com/66e9c032d17aa3c7b2b36e6b?width=1200&format=jpeg",
            "publishedAt": "2024-09-18T10:13:01Z",
            "content": "Monet Hambrick and her husband, James Hambrick, are avid travelers who want to instill that passion in their daughters.The Traveling Child\r\n<ul><li>Monet Hambrick is a full-time family travel blogger… [+3556 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Benjamin Zhang",
            "title": "JetBlue is fixing its business class' biggest weakness by building its own airport lounges",
            "description": "While JetBlue's Mint business class has been very well received, the lack of a dedicated airport lounge dampened the cabin's overall competitiveness.",
            "url": "https://www.businessinsider.com/jetblue-lounge-jfk-bos-mint-business-class-biggest-weakness-2024-9",
            "urlToImage": "https://i.insider.com/66ec36c2d17aa3c7b2b41a79?width=1200&format=jpeg",
            "publishedAt": "2024-09-19T18:20:16Z",
            "content": "JetBlue Reimagined Mint seating.Courtesy of JetBlue\r\n<ul><li>JetBlue Airways announced plans to build its first-ever airport lounges.</li><li>The first lounge will come online at New York's JFK Inter… [+3680 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lloyd Lee",
            "title": "Mark Cuban sees a new Democratic Party under Kamala Harris",
            "description": "Mark Cuban told Business Insider that he wants an open-minded candidate who won't be an \"ideologue.\" The DNC showed him Kamala Harris fit the bill.",
            "url": "https://www.businessinsider.com/mark-cuban-sees-new-democratic-party-under-kamala-harris-2024-8",
            "urlToImage": "https://i.insider.com/66ca79c61aa2ac29ee33faf2?width=1200&format=jpeg",
            "publishedAt": "2024-08-25T01:46:37Z",
            "content": "Mark Cuban has been touted as a future presidential candidate.BRENDAN SMIALOWSKI/Getty Images\r\n<ul><li>Mark Cuban told Business Insider he doesn't want an \"ideologue\" for President.</li><li>This week… [+3884 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Julia Hood",
            "title": "CEOs need to embrace a technologist mindset to lead innovation today, the Weber Shandwick's Chris Deri says",
            "description": "Chris Deri, the president of Weber Shandwick Collective's corporate-advisory business, says companies should be willing to test, learn, and fail.",
            "url": "https://www.businessinsider.com/c-suite-leaders-changes-in-workplace-ai-hybrid-policies-organization-2024-8",
            "urlToImage": "https://i.insider.com/66c84cda43b5e59d16b48caa?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T13:25:17Z",
            "content": "Chris Deri.Weber Shandwick Collective\r\n<ul><li>Chris Deri leads Weber Shandwick's corporate-advisory business and is on BI's Workforce Innovation board.</li><li>As an advisor to execs, he finds navig… [+7588 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "James Murdoch and 87 other corporate leaders sign a letter endorsing Kamala Harris",
            "description": "The 88 signatories include titans of Wall Street and Silicon Valley. Their support comes as both candidates try to present themselves as pro-business.",
            "url": "https://www.businessinsider.com/murdoch-cuban-corporate-executives-silicon-valley-wall-street-endorse-harris-2024-9",
            "urlToImage": "https://i.insider.com/66db10025444ffafa76319b8?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T14:52:15Z",
            "content": "Harris is trying to present herself as the pro-business candidate.CHRISTIAN MONTERROSA\r\n<ul><li>88 current and former executives from the business and tech worlds signed a letter endorsing Harris.</l… [+3201 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Hayley Cuccinello",
            "title": "The lowly bank branch is JPMorgan's key tool to reach the wealthy. Kristin Lemkau explains why.",
            "description": "Kristin Lemkau took over JPMorgan's US wealth business in 2019. After taking on First Republic, she is looking to branches for greater growth.",
            "url": "https://www.businessinsider.com/jpmorgan-kristin-lemkau-branches-wealth-management-advisors-2024-9",
            "urlToImage": "https://i.insider.com/66d8cd0c5444ffafa7625208?width=1200&format=jpeg",
            "publishedAt": "2024-09-05T09:45:02Z",
            "content": "JPMorgan Wealth Management CEO Kristin LemkauCourtesy of JPMorgan; Rebecca Zisser/BI\r\n<ul><li>Kristin Lemkau, formerly JPMorgan's CMO, took over its US wealth management unit in late 2019.</li><li>Cl… [+7504 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Taylor Rains,Pete Syme",
            "title": "Virgin is spending $17 billion on new planes and cabins. See inside its Airbus A330neo, with niche perks like Bluetooth.",
            "description": "Virgin Atlantic's Airbus A330neo debuted with an exclusive \"Retreat Suite\" business class and ditched bars for a new social space called the \"Loft.\"",
            "url": "https://www.businessinsider.com/virgin-a330neo-new-business-premium-economy-cabins-bluetooth-2024-9",
            "urlToImage": "https://i.insider.com/66da03045444ffafa762d717?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T12:43:16Z",
            "content": "Business Insider toured Virgin's new A330neo at the Farnborough Airshow in July.Taylor Rains/Business Insider\r\n<ul><li>Virgin Atlantic Airways has modernized its fleet with Airbus A350-1000s and Airb… [+11508 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Mia Jankowicz",
            "title": "Qantas mistakenly sells first-class flights at a massive discount",
            "description": "Qantas said the prices were \"too good to be true\" and, as a gesture of goodwill, has offered to rebook the 300 lucky passengers into business class.",
            "url": "https://www.businessinsider.com/qantas-mistakenly-sells-first-class-flights-at-massive-discount-2024-8",
            "urlToImage": "https://i.insider.com/66cc6b71c72ebc54a40eadac?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T11:49:38Z",
            "content": "A Qantas Airbus A380.Sebastian Kahnert/Getty Images\r\n<ul><li>Qantas blamed a coding error for drastically reduced first class fares.</li><li>Around 300 travelers bought tickets with discounts of up t… [+1940 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Erin Liam",
            "title": "I took a 50% pay cut to leave my sales job and work on a potato farm. I have no regrets.",
            "description": "Tyler Heppell says he has learned more about business while working on his family farm than he did in his sales job.",
            "url": "https://www.businessinsider.com/millennial-pay-cut-career-switch-leave-sales-job-potato-farming-2024-9",
            "urlToImage": "https://i.insider.com/66d133081d8d2deb96b78fb2?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T00:17:02Z",
            "content": "Tyler Heppell left his sales job to work on his family farm.Tyler Heppell\r\n<ul><li>Five years after working in sales, Tyler Heppell felt he had lost his purpose and quit.</li><li>He intended to work … [+4413 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "What would a Harris and Trump presidency each mean for union workers?",
            "description": "Both Harris and Trump are courting the union vote, but experts told Business Insider that a Harris administration would be far better for unions.",
            "url": "https://www.businessinsider.com/kamala-harris-donald-trump-presidency-union-workers-labor-policy-positions-2024-9",
            "urlToImage": "https://i.insider.com/66d1ecac392a3bda9f23a368?width=1200&format=jpeg",
            "publishedAt": "2024-09-01T10:23:02Z",
            "content": "Harris and Trump have each made a push to talk to union members and seek endorsements from leadership.Getty Images\r\n<ul><li>Both Harris and Trump are courting the union vote, as blue-collar workers a… [+7966 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Madison Hoff",
            "title": "20 high-paying and fast-growing jobs in the US",
            "description": "Business Insider ranked jobs based on projected employment growth from 2023 to 2033 and median pay. Software developers ranked No. 1 on our list.",
            "url": "https://www.businessinsider.com/high-paying-fast-growing-jobs-software-developers-nurses-managers-accountants-2024-9",
            "urlToImage": "https://i.insider.com/66d20d131d8d2deb96b7d5b9?width=1200&format=jpeg",
            "publishedAt": "2024-09-01T09:32:02Z",
            "content": "Nurse practitioners ranked No. 6 in Business Insider's analysis of high-paying and fast-growing US jobs.Houston Chronicle/Hearst Newspapers via Getty Images\r\n<ul><li>Business Insider analyzed high-pa… [+5634 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Monica Humphries",
            "title": "I spent 2 nights in an overgrown tiny house in Panama's rainforest for $300. Take a look inside.",
            "description": "Business Insider's author spent two nights in an overgrown tiny house, where it felt more like \"The Lord of the Rings\" than Panama's jungle.",
            "url": "https://www.businessinsider.com/inside-tiny-house-castle-panama-boquete-bambuda-castle-2024-9",
            "urlToImage": "https://i.insider.com/66e07cf05444ffafa76419e8?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T09:36:02Z",
            "content": "The Bambuda Castle property features both tiny homes, shared rooms, and cabins. Monica Humphries/Business Insider\r\n<ul><li>Bambuda Castle in Boquete, Panama, is home to towers, moats, and Hobbit-insp… [+7447 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Monica Humphries,Joey Hadden",
            "title": "We sailed in an interior cabin on Carnival and an ocean-view room on Royal Caribbean. We'd only book one again.",
            "description": "Business Insider's reporters went on 7-night sailings on Royal Caribbean and Carnival cruises and compared every detail of their ship cabins.",
            "url": "https://www.businessinsider.com/carnival-cruises-interior-room-royal-caribbean-ocean-view-cabin-photos-2022-10",
            "urlToImage": "https://i.insider.com/66df0ec883b8099cf9fcbb7c?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T20:37:50Z",
            "content": "Joey (L) and Monica (L) in their rooms.Joey Hadden/Business Insider, Monica Humphries/Business Insider\r\n<ul>\n<li>Two Business Insider reporters took cruises — one with Carnival and the other with Roy… [+13152 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kwan Wei Kevin Tan",
            "title": "Mark Cuban wants to take out Chinese knockoffs, and he says Kamala Harris is on the same page",
            "description": "\"Knockoffs are a plague on small businesses, that costs them time, money and may put them out of business,\" Cuban wrote in an X post on Wednesday.",
            "url": "https://www.businessinsider.com/mark-cuban-kamala-harris-take-out-chinese-knockoffs-2024-9",
            "urlToImage": "https://i.insider.com/66eb8364ce3009a0fac78243?width=1200&format=jpeg",
            "publishedAt": "2024-09-19T03:23:35Z",
            "content": "\"Knockoffs are a plague on small businesses, that costs them time, money and may put them out of business,\" Mark Cuban wrote in an X post on Wednesday.Kevork Djansezian via Getty Images; Peter Zay/An… [+2976 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Nora Redmond",
            "title": "Employers are increasingly tracking staff in the return-to-office world. One academic says it has its good, bad, and ugly.",
            "description": "The use of employee tracking tools is rising. An expert told Business Insider that there are benefits and disadvantages, depending on who you ask.",
            "url": "https://www.businessinsider.com/employee-surveillance-return-to-office-overwork-positives-negatives-2024-9",
            "urlToImage": "https://i.insider.com/66e95928d17aa3c7b2b33cac?width=1200&format=jpeg",
            "publishedAt": "2024-09-24T09:55:36Z",
            "content": "Oliver Kayas, a senior lecturer in the faculty of business and law at Liverpool John Moores University, told Business Insider that surveillance technology can reduce trust among staff.Nuthawut Somsuk… [+4570 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "John Towfighi",
            "title": "A millennial left his job to start a consulting business and booked $400k in revenue in the first year. He shares his advice on launching a startup.",
            "description": "Mario Vasquez Zuniga founded a consulting company in June 2023. He said getting regular meals with trusted advisors was key to building the business.",
            "url": "https://www.businessinsider.com/millenniall-quit-job-start-business-shares-advice-entrepreneurship-networking-mentor-2024-9",
            "urlToImage": "https://i.insider.com/66ead88ece3009a0fac7255f?width=1200&format=jpeg",
            "publishedAt": "2024-09-23T14:10:07Z",
            "content": "Mario Vasquez Zuniga founded a creative consulting business in June 2023 after leaving his salaried jobCourtesy of Mario Vasquez Zuniga\r\n<ul><li>Mario Vasquez Zuniga cofounded a consulting business l… [+6259 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kaila Yu",
            "title": "I regretted not getting a prenup when I got divorced. I won't make the same mistake if I ever get married again.",
            "description": "Lisa He started a business during her marriage and bought her husband out when they split. She wishes they had gotten a prenup.",
            "url": "https://www.businessinsider.com/regret-not-getting-prenup-wont-make-same-mistake-2024-8",
            "urlToImage": "https://i.insider.com/66cccecf43b5e59d16b55f0a?width=1200&format=jpeg",
            "publishedAt": "2024-08-27T09:07:02Z",
            "content": "Lisa He.Courtesy of Lisa He\r\n<ul><li>Lisa He divorced her ex-husband earlier this year and wished she had a prenup to protect her assets.</li><li>The emotional distance and lack of support during cri… [+4273 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Monica Humphries",
            "title": "This one simple perk was the biggest way I saved money while visiting one of the world's most expensive travel destinations",
            "description": "Free hotel breakfast saved Business Insider's author hundreds of dollars during a trip to Switzerland, one of the most expensive countries.",
            "url": "https://www.businessinsider.com/switzerland-save-money-free-hotel-breakfast-2024-8",
            "urlToImage": "https://i.insider.com/66ce08e71aa2ac29ee34a59b?width=1200&format=jpeg",
            "publishedAt": "2024-08-27T18:14:01Z",
            "content": "The author's hotel in Basel, Switzerland.Monica Humphries/Business Insider\r\n<ul><li>Switzerland is an expensive country to visit.</li><li>On a recent trip to Basel, I paid $38 for a burger and $607 p… [+2745 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "John Towfighi",
            "title": "A laid-off baby boomer got frustrated with the job hunt so he started his own business. He explains why age is an asset for entrepreneurs.",
            "description": "Joseph Loria, 61, launched his business after losing his job last year. Now he's his own boss and helping younger founders.",
            "url": "https://www.businessinsider.com/boomer-entrepreneur-started-business-be-own-boss-consulting-part-time-2024-8",
            "urlToImage": "https://i.insider.com/66c641f25da406397bf7c594?width=1200&format=jpeg",
            "publishedAt": "2024-08-25T10:08:02Z",
            "content": "Joseph Loria, 61, founded RetentionCX last year. It's a small business that helps companies improve their customer experience operations.Courtesy of Joseph Loria\r\n<ul><li>Joseph Loria, 61, launched a… [+3860 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "The Walmart heirs are worth $330 billion. Sam Walton's smart move in the 1950s is a big reason why.",
            "description": "Walmart founder Sam Walton gave each of his four children a 20% stake in the family business way back in the 1950s, protecting them from estate taxes.",
            "url": "https://www.businessinsider.com/walton-family-sam-walmart-stock-billionaires-estate-planning-inheritance-wealth-2024-8",
            "urlToImage": "https://i.insider.com/66c8a2411aa2ac29ee33a73a?width=1200&format=jpeg",
            "publishedAt": "2024-08-25T08:46:02Z",
            "content": "Rob, Alice and Jim Walton at a Walmart annual meeting in Fayetteville, Arkansas.Rick T. Wilking/Getty Images\r\n<ul><li>The Walton family is worth more than $330 billion, dwarfing Elon Musk's $237 bill… [+3525 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Tammy Barr",
            "title": "I spent 15 hours in Qatar Airways' business class. Parts of the trip felt like a bus ride, but it was pretty exceptional.",
            "description": "I flew 15 hours in Qatar Airways business class on two flights. The lie-flat seats and most amenities were great but there were some downsides.",
            "url": "https://www.businessinsider.com/flying-business-class-qatar-airways-review-2024-9",
            "urlToImage": "https://i.insider.com/66d09686392a3bda9f231adc?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T13:20:02Z",
            "content": "I enjoyed flying in business class with Qatar Airways. Tammy Barr\r\n<ul><li>I flew 15 hours in Qatar Airways business class on two different flights.</li><li>I booked Qsuites, but a plane change meant… [+7122 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Nora Redmond",
            "title": "RTO mandates can only ever be unfair, HR expert says",
            "description": "Daniela Herrera, a talent and DEI consultant, told Business Insider that RTO mandates are usually about firms trying to regain control of employees.",
            "url": "https://www.businessinsider.com/rto-mandates-are-always-unfair-expert-analysis-2024-8",
            "urlToImage": "https://i.insider.com/66cddbb71aa2ac29ee3485e1?width=1200&format=jpeg",
            "publishedAt": "2024-08-31T09:32:02Z",
            "content": "Daniela Herrera, a talent and DEI consultant, said the impact on company culture is often used to justify RTO mandates, but this may not be the real reason. Getty Images\r\n<ul><li>RTO mandates are cau… [+4312 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Joey Hadden",
            "title": "I spent 60 hours on overnight Amtrak trips. I wish I had known 9 things before taking long-haul journeys.",
            "description": "Business Insider's reporter took two 30-hour Amtrak trips in sleeper cars and learned some lessons the hard way about overnight train journeys.",
            "url": "https://www.businessinsider.com/things-you-should-know-before-overnight-amtrak-train-ride-regrets-2021-12",
            "urlToImage": "https://i.insider.com/66d081bf43b5e59d16b67d9c?width=1200&format=jpeg",
            "publishedAt": "2024-08-29T14:27:23Z",
            "content": "Business Insider's reporter spent 60 hours in Amtrak sleeper cars, and learned things about overnight train travel she regrets not knowing before.Joey Hadden/Business Insider\r\n<ul>\n<li>I regret not k… [+5200 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jaures Yip",
            "title": "4 things an executive learned from reporting to Airbnb CEO Brian Chesky",
            "description": "Vlad Loktev, former VP and GM of Airbnb's core hosting business, said he learned about embracing chaos, continuing growth, and top-down leadership.",
            "url": "https://www.businessinsider.com/airbnb-ceo-lessons-former-direct-report-2024-9",
            "urlToImage": "https://i.insider.com/66d73e0c14a5cd1fcc8cb596?width=1200&format=jpeg",
            "publishedAt": "2024-09-04T14:41:18Z",
            "content": "Vlad Loktev previously reported to Airbnb CEO Brian Chesky before becoming a VC. He says he learned a lot from his time under Chesky.Airbnb\r\n<ul><li>VC and former product exec Vlad Loktev recently sh… [+5952 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lara O'Reilly",
            "title": "Longtime Unilever media exec Luis Di Como is leaving amid a broader shake-up of the business",
            "description": "Di Como's departure after 33 years comes as Unilever undergoes a restructuring of its business. Other execs will assume new roles.",
            "url": "https://www.businessinsider.com/unilever-top-media-exec-luis-di-como-leave-amid-restructuring-2024-9",
            "urlToImage": "https://i.insider.com/66d89d4f1d8d2deb96b8d25c?width=1200&format=jpeg",
            "publishedAt": "2024-09-04T18:49:10Z",
            "content": "Unilever\r\n<ul><li>Luis Di Como, Unilever's global media head, will leave the company after 33 years.</li><li>Di Como's exit coincides with Unilever's major restructuring and cost-cutting measures.</l… [+2808 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Joey Hadden",
            "title": "I've been to 20 national parks and forests around the US. The North Rim of the Grand Canyon is the most underrated.",
            "description": "Business Insider's reporter has experienced crowds on the South Rim of the Grand Canyon. The North Rim is more peaceful since it's under-the-radar.",
            "url": "https://www.businessinsider.com/north-rim-of-the-grand-canyon-national-park-hidden-gem-2024-8",
            "urlToImage": "https://i.insider.com/66cca40bc72ebc54a40ec5ac?width=1200&format=jpeg",
            "publishedAt": "2024-08-28T09:36:02Z",
            "content": "The author enjoys the view from Rainbow Rim Trail.Joey Hadden/Business Insider\r\n<ul><li>The Grand Canyon's North Rim offers a peaceful alternative to the crowded South Rim.</li><li>The South Rim has … [+5845 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Cailey Griffin",
            "title": "My husband retired 5 years ago and I still run my own business. Our schedules are different, but we make it work.",
            "description": "Her husband retired five years ago, and she still runs her own business. She loves the work she does and has no plans to retire yet.",
            "url": "https://www.businessinsider.com/husband-retired-wife-still-working-retirement-plans-2024-8",
            "urlToImage": "https://i.insider.com/66c4f4b8b4912df3ae1d1813?width=1200&format=jpeg",
            "publishedAt": "2024-08-24T10:33:02Z",
            "content": "Ruth Furman still runs her own business while her husband retired five years ago.Photo credit: Mary Rendina Photography\r\n<ul><li>At 57, Ruth Furman still owns her own business and loves her work.</li… [+5175 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Samantha Grindell,Amanda Krause",
            "title": "Gwyneth Paltrow said she had to 'Google acronyms under the table' at Goop business meetings when she started the company",
            "description": "At the Forbes Power Women's Summit, Gwyneth Paltrow revealed she used to be embarrassed by how little she knew about business when she founded Goop.",
            "url": "https://www.businessinsider.com/gwyneth-paltrow-started-goop-without-business-expertise-2024-9",
            "urlToImage": "https://i.insider.com/66e1ca0883b8099cf9fd8d11?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T18:14:17Z",
            "content": "Gwyneth Paltrow spoke about her early days as Goop's CEO.Marc Piasecki/Getty Images\r\n<ul><li>Gwyneth Paltrow shared insight into her life as Goop's CEO at the Forbes Power Women's Summit 2024.</li><l… [+3147 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Bianca Chan",
            "title": "Meet the ex-Googler joining Goldman Sachs to build tech and cut costs for its investment banking and trading business",
            "description": "Goldman Sachs hires Melissa Goldman as global head of engineering of its biggest business. She outlines priorities and career advice in this Q&A.",
            "url": "https://www.businessinsider.com/goldman-sachs-hires-googles-melissa-goldman-new-tech-head-2024-9",
            "urlToImage": "https://i.insider.com/66eafa59d17aa3c7b2b3ba03?width=1200&format=jpeg",
            "publishedAt": "2024-09-18T17:44:51Z",
            "content": "Image courtesy of Melissa Goldman; Chelsea Jia Feng/BI\r\n<ul><li>Goldman Sachs hired a new global head of engineering for its global banking and markets unit.</li><li>Melissa Goldman starts her new ro… [+7275 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Shana Lebowitz,Marguerite Ward,Emily Canal,Rebecca Knight,Alexandra York,Jaures Yip",
            "title": "The list of major companies requiring employees to return to the office",
            "description": "Companies requiring workers to return to the office include Amazon, Apple, and BlackRock. View a list of RTO mandates across business and tech.",
            "url": "https://www.businessinsider.com/companies-requiring-return-to-office-rto-mandate",
            "urlToImage": "https://i.insider.com/66e9a0b2cfb7f307e5724656?width=1200&format=jpeg",
            "publishedAt": "2024-09-18T16:53:35Z",
            "content": "Amazon is the latest company to mandate employees return to the office.Nathan Stirk/Getty Images\r\n<ul><li>Many major companies are requiring employees to return to the office full or part-time.</li><… [+14051 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Brittany Chang",
            "title": "Royal Caribbean's next mega cruise ship is setting sail next year. Here's what we know about the $230-a-night vessel.",
            "description": "Royal Caribbean is in the business of building giant cruise ships. Its upcoming Star of the Seas — sailing in 2025 — will be another behemoth vessel.",
            "url": "https://www.businessinsider.com/royal-caribbean-star-of-the-seas-icon-of-the-seas-2023-10",
            "urlToImage": "https://i.insider.com/66f187b9cfb7f307e573e549?width=1200&format=jpeg",
            "publishedAt": "2024-09-23T19:29:19Z",
            "content": "Royal Caribbean says its next Icon class vessel, Star of the Seas, will set sail in August 2025, starting at about $1,610 per person for a seven-night cruise.Royal Caribbean\r\n<ul><li>Royal Caribbean … [+3394 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jyoti Mann",
            "title": "I was rejected by Meta 4 times before I landed a job there. Here's how I did it.",
            "description": "Sahriar Hossain told Business Insider how he landed a job at Meta after being rejected by the tech giant four times.",
            "url": "https://www.businessinsider.com/meta-engineer-rejected-four-times-job-career-tips-2024-9",
            "urlToImage": "https://i.insider.com/66f1387dcfb7f307e573cdb3?width=1200&format=jpeg",
            "publishedAt": "2024-09-23T14:34:40Z",
            "content": "Sahriar Hossain landed a job at Meta in January 2024Sahriar Hossain\r\n<ul><li>Shad Hossain secured a lead quality assurance engineer role at Meta in January 2024.</li><li>Hossain told BI about his jou… [+5653 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Intel Plans To Turn Foundry Business Into Subsidiary, Allow For Outside Funding",
            "description": "Intel shares surged 8% after announcing plans to make its foundry business an independent unit with its own board and potential for outside capital, part of CEO Pat Gelsinger's strategy to restructure the company amid financial challenges. The company is also…",
            "url": "https://slashdot.org/story/24/09/16/2214216/intel-plans-to-turn-foundry-business-into-subsidiary-allow-for-outside-funding",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2024-09-17T00:45:00Z",
            "content": "As part of CEO Pat Gelsinger's effort to turn around the struggling chipmaker, Intel said in a memo to employees that it will also sell off part of its stake in Altera. Gelsinger said the restructuri… [+2330 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "UK Business Secretary Says Right To Work From Home Boosts Productivity",
            "description": "Bruce66423 writes: Allowing flexible working and working from home creates a more productive, loyal workforce, the business secretary has said. In an interview with the Times, Jonathan Reynolds said employers \"need to judge people on outcomes and not a cultur…",
            "url": "https://news.slashdot.org/story/24/09/17/157254/uk-business-secretary-says-right-to-work-from-home-boosts-productivity",
            "urlToImage": "https://a.fsdn.com/sd/topics/uk_64.png",
            "publishedAt": "2024-09-17T15:25:00Z",
            "content": "Allowing flexible working and working from home creates a more productive, loyal workforce, the business secretary has said. In an interview with the Times, Jonathan Reynolds said employers \"need to … [+749 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lara O'Reilly",
            "title": "Brands are so scared of culture wars and controversy that it's ripping apart the media business",
            "description": "The recent toppling of the Global Alliance of Responsible Media is just the latest defeat in the political battle of brand safety.",
            "url": "https://www.businessinsider.com/brands-scared-of-culture-war-controversy-its-hurting-media-2024-8",
            "urlToImage": "https://i.insider.com/66ccb8aac72ebc54a40edb93?width=1200&format=jpeg",
            "publishedAt": "2024-08-27T12:05:02Z",
            "content": "Getty Images; iStock; Natalie Ammari/BI\r\n<ul><li>Elon Musk's X lawsuit led to the closure of the Global Alliance for Responsible Initiative.</li><li>Conservatives see this as a win for free speech ag… [+10718 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Emma Cosgrove",
            "title": "Nvidia might actually lose in this key part of the AI chip business",
            "description": "As AI matures, Nvidia, Groq, and Cerebras focus on inference chips to capture market share.",
            "url": "https://www.businessinsider.com/nvidia-may-lose-ai-inference-market-groq-cerebras-2024-8",
            "urlToImage": "https://i.insider.com/66d0c408392a3bda9f2349e3?width=1200&format=jpeg",
            "publishedAt": "2024-09-01T13:00:02Z",
            "content": "Justin Sullivan/Getty\r\n<ul><li>Inference made up 40% of Nvidia's $26.3 billion Q2 data center revenue.</li><li>Inference computing demand will increase as AI matures.</li><li>Companies like Groq and … [+4334 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Erica Sweeney",
            "title": "What business leaders should know about the SEC's cybersecurity disclosure rule",
            "description": "The SEC's cyber-incident-disclosure rule requires firms to report cyberattacks that materially affect their finances, operations, and investor trust.",
            "url": "https://www.businessinsider.com/what-to-know-about-sec-cybersecurity-rules-and-guidance",
            "urlToImage": "https://i.insider.com/66d729e31d8d2deb96b8286e?width=1200&format=jpeg",
            "publishedAt": "2024-09-10T13:15:36Z",
            "content": "Luca Soncini for BI\r\n<ul><li>Last year, the SEC mandated that public companies disclose material cybersecurity incidents.</li><li>Cybersecurity experts explained the rule, which can be confusing for … [+7659 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "More countries are openly flaunting their ties with Putin. They say it's just business.",
            "description": "Heavily-sanctioned Russia has been on a foreign policy blitz, with President Vladimir Putin meeting numerous top leaders from Asia this year.",
            "url": "https://www.businessinsider.com/russia-economy-asia-countries-flaunt-russia-putin-diplomacy-relationship-brics-2024-9",
            "urlToImage": "https://i.insider.com/66da5cde5444ffafa762fd4d?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T00:00:02Z",
            "content": "Russia's President Vladimir Putin met Mongolia's President Ukhnaagiin Khurelsukh recently. Mongolia did not arrest Putin even though the country is a ICC member.Vyacheslav Prokofyev/Pool/AFP/Getty Im… [+6237 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Nora Redmond",
            "title": "Study finds more workers returning to the office in Paris than other top global business hubs",
            "description": "A new study has found that the pattern of returning to the office differs between global financial hubs, raising the risk of economic disadvantage.",
            "url": "https://www.businessinsider.com/return-to-office-global-business-hubs-new-york-london-study-2024-9",
            "urlToImage": "https://i.insider.com/66d6df271d8d2deb96b8107f?width=1200&format=jpeg",
            "publishedAt": "2024-09-04T10:12:44Z",
            "content": "Employees have returned to the office at different rates across global centers of commerce, a new report has found. Mark Lennihan/Associated Press\r\n<ul><li>RTO mandates and employee preferences are b… [+3187 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Business Insider)",
            "title": "CD and Savings Rates Today: Grow Your Savings",
            "description": "If you're considering opening a savings account or CD today and want a competitive rate, Business Insider did the research to help you find the best rate across popular savings accounts and CD terms.",
            "url": "https://www.businessinsider.com/cd-rates-savings-rates-today-sunday-15-2024-9",
            "urlToImage": "https://i.insider.com/6647a7be20abc1efe8fb4296?width=1200&format=jpeg",
            "publishedAt": "2024-09-15T10:26:02Z",
            "content": "Affiliate links for the products on this page are from partners that compensate us and terms apply to offers listed (see our advertiser disclosure with our list of partners for more details). However… [+6152 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Business Insider)",
            "title": "CD and Savings Rates Today: Explore Today's Best Rates",
            "description": "If you're considering opening a savings account or CD today and want a competitive rate, Business Insider did the research to help you find the best rate across popular savings accounts and CD terms.",
            "url": "https://www.businessinsider.com/cd-rates-savings-rates-today-saturday-31-2024-8",
            "urlToImage": "https://i.insider.com/664f7c1320abc1efe8fcfff6?width=1200&format=jpeg",
            "publishedAt": "2024-08-31T10:35:01Z",
            "content": "Affiliate links for the products on this page are from partners that compensate us and terms apply to offers listed (see our advertiser disclosure with our list of partners for more details). However… [+6151 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Tom Warren",
            "title": "Microsoft’s new Qualcomm-powered Surface devices are heading into the workplace",
            "description": "Microsoft thinks Windows on Arm is ready for businesses. Its latest Qualcomm-powered Surface devices will be available for businesses on September 10th.",
            "url": "https://www.theverge.com/2024/9/4/24235594/microsoft-surface-pro-11-surface-laptop-7-businesses-launch",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/VGoEiz2IBoiSZegUT8GLuYKtEe0=/0x0:1600x900/1200x628/filters:focal(800x450:801x451)/cdn.vox-cdn.com/uploads/chorus_asset/file/25603016/Commercial_Blog_Image_1920_1600x900.png",
            "publishedAt": "2024-09-04T11:00:00Z",
            "content": "Photo by Chris Welch / The Verge\r\n\n \n\n Microsoft is ready to start selling its Qualcomm-powered Surface devices to businesses. Starting on September 10th, both the Surface Pro 11 and Surface Laptop 7… [+2668 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Jess Weatherbed",
            "title": "Samsung’s new AI smart TVs are getting seven years of OS updates",
            "description": "Samsung says it will provide seven years’ worth of Tizen operating system updates for its newer AI-powered TVs in a bid to fend off competition from Chinese rivals.",
            "url": "https://www.theverge.com/2024/8/27/24229429/samsung-ai-smart-tvs-tizen-os-seven-years-updates",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ODpChVx9AtqMeRmSzg6Dqem36jY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24000089/acastro_STK075_01.jpg",
            "publishedAt": "2024-08-27T09:59:59Z",
            "content": "Samsungs new AI smart TVs are getting seven years of OS updates\r\nSamsungs new AI smart TVs are getting seven years of OS updates\r\n / The Korean tech giant says the new policy will help defend its mar… [+1998 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Workers could get right to four-day week",
            "description": "Labour is said to be considering giving people more power to choose flexible working hours.",
            "url": "https://www.bbc.com/news/articles/c4gl5w83z7do",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c852/live/7dcce8d0-6681-11ef-a1fb-a5e6f79266d6.jpg",
            "publishedAt": "2024-08-30T03:54:03Z",
            "content": "Workers could be given the right to ask their employers to work a four-day week under government plans to increase flexible working.\r\nEmployees would still have to work their full hours to receive th… [+1326 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The New Yorker"
            },
            "author": "Vinson Cunningham",
            "title": "Monkey Business in “Chimp Crazy”",
            "description": "Vinson Cunningham writes about the HBO docuseries “Chimp Crazy,” directed by Eric Goode, about people who keep chimpanzees as pets.",
            "url": "https://www.newyorker.com/culture/on-television/monkey-business-in-chimp-crazy",
            "urlToImage": "https://media.newyorker.com/photos/66d9b88d2ff78cc969840f15/16:9/w_1280,c_limit/tonka-tonia-haddix.jpeg",
            "publishedAt": "2024-09-05T23:56:34Z",
            "content": "For me, the ur-story of humankinds interaction with other animals is the one that comes early in the Book of Genesis. God parades each species before Adam in a long and surely lively processioncattle… [+8133 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Jaclyn Diaz",
            "title": "Red Lobster off the hook? Federal judge approves restructuring plan",
            "description": "The restaurant chain announced Thursday that it received approval for its Chapter 11 plan, offering a glimmer of good news for the business, which has faced a series of struggles",
            "url": "https://www.npr.org/2024/09/06/nx-s1-5103675/red-lobster-bankruptcy",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3550x1997+0+128/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc9%2Fdf%2F13885c26486a8ecc65b77778eaa8%2Fap24249667200244.jpg",
            "publishedAt": "2024-09-06T16:21:33Z",
            "content": "Red Lobster is exiting its Chapter 11 bankruptcy after a federal judge approved the seafood restaurant chain's restructuring plan Thursday four months after the company first announced it had filed f… [+1685 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Taylor Rains",
            "title": "Airbus' A321XLR is about to launch. See what to expect on board the first airlines to fly the jet, like Qantas and American.",
            "description": "The A321XLR will kick-start a new era of long-haul flying in November. Many airlines will offer lie-flat business class for the up to 11-hour treks.",
            "url": "https://www.businessinsider.com/airbus-a321-xlr-plane-launch-new-routes-cabins-iberia-american-2024-9",
            "urlToImage": "https://i.insider.com/66d7611e289b805d1db3c90e?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T20:45:37Z",
            "content": "American is installing new lie-flat business class seats on its upcoming A321XLR narrowbody.American Airlines\r\n<ul><li>Spanish carrier Iberia is scheduled to fly the first Airbus A321XLR passenger fl… [+10744 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Melissa Noble",
            "title": "I built up a 6-figure business but didn't spend enough time with my kids. Now, I work 30% less and feel much happier.",
            "description": "I started my own business after my first kid was born and eventually made six figures. It was hard to feel  present with my kids, so I scaled it back.",
            "url": "https://www.businessinsider.com/scale-back-six-figure-business-income-family-time-2024-9",
            "urlToImage": "https://i.insider.com/66e191ae83b8099cf9fd71fc?width=1200&format=jpeg",
            "publishedAt": "2024-09-14T10:38:02Z",
            "content": "Melissa Noble was making six figures but didn't feel present with her kids.Courtesy of Melissa Noble\r\n<ul><li>After I had my first child, I decided to make a career change and started my own business… [+4084 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "David Pierce",
            "title": "In US v. Google, YouTube’s CEO defends the Google way",
            "description": "The Justice Department on Monday grilled YouTube CEO Neal Mohan, who previously worked on Google’s advertising team, on the company’s competitiveness.",
            "url": "https://www.theverge.com/2024/9/17/24247066/neal-mohan-us-v-google-testimony",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/VFZQAurqNPn3aXKEdV_xdW5uFho=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25606932/STK282_GOOGLE_ADS_D.jpg",
            "publishedAt": "2024-09-17T13:41:48Z",
            "content": "In US v. Google, YouTubes CEO defends the Google way\r\nIn US v. Google, YouTubes CEO defends the Google way\r\n / Neal Mohan had a long career on the ad team at Google, and the government had lots of qu… [+6600 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lian Kit Wee",
            "title": "I run a global tutoring business for rich families. To survive in this field, you have to ignore the wealth.",
            "description": "Adam Caller, who founded Tutors International, said he sees the downsides of wealth up close, like significant maintenance and big personal staffs.",
            "url": "https://www.businessinsider.com/tutor-rich-you-have-to-ignore-wealth-adam-caller-2024-8",
            "urlToImage": "https://i.insider.com/66d1c9d5392a3bda9f237c18?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T00:00:02Z",
            "content": "Adam Caller says that success in the travel tutor industry comes from not being distracted by clients' wealth.Courtesy of Adam Caller, Burazin/Getty, PhonlamaiPhoto/Getty, Tyler Le/BI\r\n<ul><li>Adam C… [+4010 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Palmer Haasch",
            "title": "These Mormon influencers turned their shocking scandal into a reality TV show. It's been good for business.",
            "description": "Mormon TikToker Taylor Frankie Paul got herself a Hulu reality show not by making content about her picture-perfect family, but by blowing it up entirely.",
            "url": "https://www.businessinsider.com/taylor-frankie-paul-mayci-neeley-mormon-wives-interview-business-influencing-2024-9",
            "urlToImage": "https://i.insider.com/66e89fa3d17aa3c7b2b3301c?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T19:15:08Z",
            "content": "Getty Images; iStock; Natalie Ammari/BI\r\n<ul><li>Hulu's \"The Secret Lives of Mormon Wives\" follows eight Mormon mom influencers.</li><li>The show began filming in the aftermath of Taylor Frankie Paul… [+9610 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "KTLA Los Angeles"
            },
            "author": "Vivian Chow",
            "title": "Newport Beach officials crack down on homelessness, strengthen anti-camping law",
            "description": "Newport Beach officials are cracking down on homeless encampments following complaints from residents and local business owners. Locals said homeless...",
            "url": "https://ktla.com/news/local-news/newport-beach-cracks-down-on-homelessness-strengthen-anti-camping-law/",
            "urlToImage": "https://media.zenfs.com/en/ktla_articles_362/9930dd05c23abdb2772186e0bd455ca2",
            "publishedAt": "2024-08-30T01:46:27Z",
            "content": "Newport Beach officials are cracking down on homeless encampments following complaints from residents and local business owners.\r\nLocals said homeless individuals are constantly seen gathering at pop… [+3404 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Aditya Kalra and Krishn  Kaushik",
            "title": "India probing Netflix for visa violations, racial discrimination, email shows",
            "description": "NEW DELHI (Reuters) -India is investigating the business practices of U.S. streaming giant Netflix's local operations, including allegations of visa...",
            "url": "https://finance.yahoo.com/news/exclusive-india-probing-netflix-visa-075319619.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-22T07:53:19Z",
            "content": "By Aditya Kalra and Krishn Kaushik\r\nNEW DELHI (Reuters) -India is investigating the business practices of U.S. streaming giant Netflix's local operations, including allegations of visa violations and… [+3989 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Wes Davis",
            "title": "A former Essential Phone exec used company funds for Lamborghinis, claims lawsuit",
            "description": "A lawsuit claims that Osom Products founder Jason Keats misused funds for personal expenses and that company resources are exhausted.",
            "url": "https://www.theverge.com/2024/8/31/24233005/essential-phone-osom-products-ceo-lawsuit-personal-spending-lamborghinis-racing-mortgage",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/dA-asOi42t08FKJ1M6L0u-Ia0Vk=/0x0:1440x960/1200x628/filters:focal(720x480:721x481)/cdn.vox-cdn.com/uploads/chorus_asset/file/23285991/Spec_reveal_1.jpeg",
            "publishedAt": "2024-08-31T19:29:22Z",
            "content": "A former Essential Phone exec used company funds for Lamborghinis, claims lawsuit\r\nA former Essential Phone exec used company funds for Lamborghinis, claims lawsuit\r\n / A new lawsuit claims that Osom… [+1235 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Jess Weatherbed",
            "title": "Amazon is stuffing generative AI into its shopping experience",
            "description": "Amazon has introduced a batch of new generative AI tools that aim to improve the retail experience for both customers and sellers on the platform.",
            "url": "https://www.theverge.com/2024/9/19/24249046/amazon-generative-ai-tools-personalized-shopping-recommendations",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/87pZwBb8drggTN1YEfMBatJzYwk=/0x0:2640x1486/1200x628/filters:focal(1320x743:1321x744)/cdn.vox-cdn.com/uploads/chorus_asset/file/25629756/Amazon_AI_shopping_recs.jpeg",
            "publishedAt": "2024-09-19T16:29:27Z",
            "content": "Amazon is stuffing generative AI into its shopping experience\r\nAmazon is stuffing generative AI into its shopping experience\r\n / The retail giant is also releasing an AI video generator for making pr… [+3029 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hackaday"
            },
            "author": "Lewin Day",
            "title": "2024 Tiny Games Contest: Neat PCB Business Card Was Inspired By The Arduboy",
            "description": "The humble business card is usually a small slip of cardboard with some basic contact details on it — but as hackers know, it can be so much more. [Marian] has provided us a great example in …",
            "url": "https://hackaday.com/2024/09/13/2024-tiny-games-contest-neat-pcb-business-card-was-inspired-by-the-arduboy/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2024/09/text-iot-dynamic-spaces-e1726133472325.jpg",
            "publishedAt": "2024-09-13T18:30:47Z",
            "content": "The humble business card is usually a small slip of cardboard with some basic contact details on it — but as hackers know, it can be so much more. [Marian] has provided us a great example in the form… [+861 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "MyPillow Mogul Mike Lindell Says He’s Taking His Social Media Company Public",
            "description": "The pillow mogul's goofy social network will soon be joining forces with the stock market.",
            "url": "https://gizmodo.com/mypillow-mogul-mike-lindell-says-hes-taking-his-social-media-company-public-2000492903",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/MyPillow-CEO-Mike-Lindell-Gives-the-Thumbs-Up-from-a-Moving-Car.jpg",
            "publishedAt": "2024-08-30T13:10:54Z",
            "content": "You may have forgotten that Mike Lindell, the CEO of MyPillow, also owns his own social media network. Lindell, who, among other things, is an undying Donald Trump stan, started the site back in 2021… [+2740 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Grenfell Inquiry: Kingspan was dishonest and cynical",
            "description": "The company is headquartered in County Cavan and employs around 23,000 people globally.",
            "url": "https://www.bbc.com/news/articles/clyne526506o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/619d/live/9ccd73f0-6a21-11ef-b1b5-b3aeecf7a73c.jpg",
            "publishedAt": "2024-09-04T10:41:13Z",
            "content": "Kingspan has been heavily criticised in the final report of the Grenfell Tower inquiry.\r\nThe report said the Irish building products company was not directly responsible for the fire but behaved dish… [+315 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The State"
            },
            "author": "Chris Trainor",
            "title": "A new restaurant is headed to the former Yamato space in Columbia’s Harbison area",
            "description": "Yamato closed its doors earlier this year after decades in business. Now another restaurant is coming to the building along Columbiana Drive.",
            "url": "https://www.thestate.com/living/food-drink/article292292214.html",
            "urlToImage": "https://media.zenfs.com/en/the_state_mcclatchy_264/91c6458ba569309f0298d12f10b9d7fc",
            "publishedAt": "2024-09-11T15:05:23Z",
            "content": "Back in January, Yamato Japanese steakhouse closed its doors after decades in business in Columbia. But now the flames are set to return to that location.\r\nSukiya Japanese Steakhouse plans to open in… [+990 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "SWNS",
            "title": "Less than half the time on a business trip is spent doing work",
            "description": "Less than half the time on a business trip is spent doing work – with reading and watching TV filling time between meetings, research has found. A poll of...",
            "url": "https://uk.style.yahoo.com/less-half-time-business-trip-070840232.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/u0WzibQdve8RJ15WJ5qc6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/video.swns/4487b0bf926582688a5fc330d604ef46",
            "publishedAt": "2024-09-12T07:08:40Z",
            "content": "Less than half the time on a business trip is spent doing work with reading and watching TV filling time between meetings, research has found. A poll of 1,000 adults who have travelled for work spend… [+645 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Idaho Statesman"
            },
            "author": "Angela Palermo",
            "title": "Jury issues verdict in Big City Coffee lawsuit against Boise State administrators",
            "description": "Fendley in her complaint said her business was forced out of her location because of her support of the “thin blue line.”",
            "url": "https://www.idahostatesman.com/news/business/article292453374.html",
            "urlToImage": "https://media.zenfs.com/en/idaho_statesman_mcclatchy_articles_842/54e6899ee47c26686d1404bca3b66a67",
            "publishedAt": "2024-09-14T02:59:42Z",
            "content": "This is a breaking news story. Check back to idahostatesman.com for updates. To sign up for breaking news alerts, click here.\r\nBoise State University administrators owe Big City Coffee owner Sarah Fe… [+1712 chars]"
          }
        ],
        "finance": [
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Jason Parham",
            "title": "The Creators of 'Industry' Know Banking Is a Rigged Game",
            "description": "The HBO drama about the Machiavellian world of high finance is an undeniable hit—and cocreators Mickey Down and Konrad Kay say “coke and boats” is just the beginning.",
            "url": "https://www.wired.com/story/dial-up-industry-creators-mickey-down-konrad-kay/",
            "urlToImage": "https://media.wired.com/photos/66d0a31f62fe2c49d739f1c0/191:100/w_1280,c_limit/dial-up-Mickey-and-Konrad-Culture.jpg",
            "publishedAt": "2024-08-30T19:33:43Z",
            "content": "Ambition is a curse in the arena of high finance. At the prestigious London investment bank Pierpoint, which doubles as the backdrop for the Gen Z banking drama Industry, a cohort of university gradu… [+2880 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Ministers to meet UK chancellor to discuss budget",
            "description": "The first and deputy first ministers will travel to London to meet UK chancellor.",
            "url": "https://www.bbc.com/news/articles/c5yp1rjlr17o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/798f/live/a8500070-704e-11ef-a86f-096f0c281a8a.jpg",
            "publishedAt": "2024-09-12T05:23:16Z",
            "content": "First Minister Michelle ONeill and Deputy First Minister Emma Little Pengelly at the launch of a draft programme for government\r\nNorthern Ireland's first and deputy first ministers will travel to Lon… [+3303 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "Trump Campaign Gets Hit by Hacks and Crypto Scams",
            "description": "In multiple incidents over the past few weeks, the Trump family has shown that it's all in on crypto and vulnerable to all the hacks and scams that come with it.",
            "url": "https://gizmodo.com/trump-campaign-gets-hit-by-hacks-and-crypto-scams-2000494616",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/DonaldTrumpCyrpto.jpg",
            "publishedAt": "2024-09-04T14:25:12Z",
            "content": "Former President Donald Trump and his family are still, in the year 2024, all in on crypto. Its costing them cash and credibility. On Tuesday night, the X accounts of two Trump family membersLara and… [+3257 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Charissa Cheong",
            "title": "3 money mistakes even accounting professionals make, according to a personal finance expert who worked at EY and PwC",
            "description": "A former Big Four employee, who's now a financial literacy expert, shared three personal finance mistakes she saw ex-colleagues make.",
            "url": "https://www.businessinsider.com/pwc-ey-money-mistakes-personal-finance-expert-2024-9",
            "urlToImage": "https://i.insider.com/66e93b01d17aa3c7b2b338eb?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T10:01:32Z",
            "content": "Carla Hoppe founded Wealthbrite in 2021.IvanWeiss.London Ltd\r\n<ul><li>Carla Hoppe left a career at PwC and EY and started a financial literacy company.</li><li>She shared the common personal finance … [+6666 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Vittoria Elliott",
            "title": "The US Needs Deepfake Porn Laws. These States Are Leading the Way",
            "description": "Legislation addressing the crisis of deepfake porn is being proposed, passing, and failing at the state level all over the US. WIRED is keeping track of it all.",
            "url": "https://www.wired.com/story/deepfake-ai-porn-laws/",
            "urlToImage": "https://media.wired.com/photos/66d77fc0fb4327b24c9ef2c3/191:100/w_1280,c_limit/US-Legislation_Deepfake-Porn.jpg",
            "publishedAt": "2024-09-05T10:00:00Z",
            "content": "Last year, WIRED reported that deepfake pornography is only increasing, and researchers estimate that 90 percent of deepfake videos are of porn, the vast majority of which is nonconsensual porn of wo… [+2969 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Nature funding to be used to settle council pay deals",
            "description": "BBC Scotland News understands that ministers have written to councils telling them to divert the money.",
            "url": "https://www.bbc.com/news/articles/cwy7p2y1p1eo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/82fa/live/2a441c30-62c9-11ef-b43e-6916dcba5cbf.jpg",
            "publishedAt": "2024-08-25T10:34:02Z",
            "content": "Money set aside for restoring nature is to be diverted into funding wage settlements in Scotlands local authorities. \r\nBBC Scotland News understands that ministers have written to councils telling th… [+1679 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Trump’s New Crypto Project Is Reportedly Saving the Best Loot for Its Founders",
            "description": "In a thoroughly predictable development, Trump's new crypto project appears to be heavily weighted towards the already wealthy.",
            "url": "https://gizmodo.com/trumps-new-crypto-project-is-reportedly-saving-the-best-loot-for-its-founders-2000494963",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-and-his-sons-stand-with-JD-Vance-at-the-Republican-Convention.jpg",
            "publishedAt": "2024-09-05T13:20:07Z",
            "content": "Donald Trump and his progeny have been touting a new crypto project that they claim will bring newfound economic power to “the people.” However, a new report claims that instead of doing that, it may… [+2334 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "U.S. Coast Guard Hearing About Titan Sub Reveals Passengers’ Final Message",
            "description": "A Monday hearing revealed new details about the implosion of the Titan sub.",
            "url": "https://gizmodo.com/u-s-coast-guard-hearing-about-titan-sub-reveals-passengers-final-message-2000499368",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/oceangate-sub-logo.jpg",
            "publishedAt": "2024-09-16T21:15:02Z",
            "content": "Five people were killed June 18, 2023, in the Titan submersible that was journeying to see the wreckage of the Titanic, touching off a wave of scrutiny about the safety practices of OceanGate, the co… [+2355 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Swinney to make eradicating child poverty greatest priority",
            "description": "The First Minister will put fighting child poverty at the centre of his Programme for Government.",
            "url": "https://www.bbc.com/news/articles/cwyj0810304o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d5d0/live/a3307700-6a13-11ef-bf9f-39ea53f11e06.jpg",
            "publishedAt": "2024-09-04T05:18:27Z",
            "content": "John Swinney will unveil his Programme for Government on Wednesday\r\nJohn Swinney believes the Scottish government can still enhance the lives of children and their families ahead of setting out its s… [+6130 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Shubhangi Goel",
            "title": "Tyson's finance chief is out of the job. The Tyson heir got the gig at 32, making him the youngest Fortune 500 CFO.",
            "description": "John Randal Tyson, an heir of founder John W. Tyson, will not return to his executive role at Tyson Foods — but he's staying with the company.",
            "url": "https://www.businessinsider.com/john-tyson-heir-cfo-replaced-suspended-chief-financial-officer-2024-8",
            "urlToImage": "https://i.insider.com/66d143b0392a3bda9f236da1?width=1200&format=jpeg",
            "publishedAt": "2024-08-30T04:55:22Z",
            "content": "Tyson Foods' former CFO John Randal Tyson will not return to his position after a DWI charge.AP Photo/Danny Johnston\r\n<ul><li>Tyson Foods' former CFO John Randal Tyson will not return to his position… [+2711 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VentureBeat"
            },
            "author": "Jon Stojan",
            "title": "How ChainMyne is tailoring crypto solutions for elite investors",
            "description": "CONTRIBUTOR CONTENT: The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integration of digital assets into mainstream…",
            "url": "https://venturebeat.com/business/how-chainmyne-is-tailoring-crypto-solutions-for-elite-investors/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2024/09/Kims-shoot-shoot-15-juin-2024-Par-Randy-_I9A3725.jpg?w=1024?w=1200&strip=all",
            "publishedAt": "2024-09-09T17:20:21Z",
            "content": "The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integr… [+5626 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "'I'm trapped in a joint mortgage with my abuser'",
            "description": "An abuse survivor describes her ordeal as a charity calls for action to tackle financial abuse.",
            "url": "https://www.bbc.com/news/articles/cged39yw3y9o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ee78/live/4e392640-701f-11ef-8f0e-158a0a407ec6.jpg",
            "publishedAt": "2024-09-15T01:22:48Z",
            "content": "Economic abuse can take many forms (picture posed by a model)\r\nMore than a decade after leaving her abusive ex-husband, Lauren is still trapped in their joint mortgage.\r\nHer ex stopped making repayme… [+5449 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Water firms to say bill cap plan is 'material risk'",
            "description": "Industry lobby group Water UK to say regulator plans \"hamper\" its ability to improve its services.",
            "url": "https://www.bbc.com/news/articles/cx2lgl9kypno",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/41f5/live/d65115a0-64ae-11ef-9c1d-87eb61479cfa.jpg",
            "publishedAt": "2024-08-28T01:49:33Z",
            "content": "Water companies will say later today that a planned cap on bill increases would create a \"material risk\" they would fail to raise the investment needed to stop sewage spills. \r\nIn July, regulator Ofw… [+2410 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Ukraine's long-range drones using Western tech to hit Russia",
            "description": "Western technology and finance are helping Ukraine carry out hundreds of long-range strikes inside Russia.",
            "url": "https://www.bbc.com/news/articles/c6240qepyppo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1a04/live/e1c81760-655f-11ef-9851-c5606b77a2fd.png",
            "publishedAt": "2024-08-29T05:01:09Z",
            "content": "The Proletarsk oil depot in Russia's Rostov region burned for 10 days after it was hit by a Ukrainian drone\r\nWestern technology and finance are helping Ukraine carry out hundreds of long-range strike… [+6677 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "SNP choices contributing to financial pressure - watchdog",
            "description": "The Scottish Fiscal Commission is warning of “difficult decisions” ahead to balance the Scottish budget.",
            "url": "https://www.bbc.com/news/articles/c0rw9l40qxdo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d2ea/live/5e2a00e0-645a-11ef-b43e-6916dcba5cbf.jpg",
            "publishedAt": "2024-08-27T10:16:53Z",
            "content": "Finance Secretary Shona Robison says emergency spending curbs were \"unavoidable\" \r\nThe Scottish government's own decisions are to blame for much of the pressure\" facing the country's finances, a watc… [+4096 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Methodfi.com"
            },
            "author": "Daring Fireball Department of Commerce",
            "title": "[Sponsor] Method",
            "description": "API for balance transfers, personal finance management & loan origination. Access liabilities held at 15,000+ FIs in the US, covering 96% of consumer debt.",
            "url": "https://methodfi.com/",
            "urlToImage": "https://cdn.prod.website-files.com/5fc8640f295dcf4c80cf09ac/604677bdd43f473b7cda0f50_carbon%20(2).png",
            "publishedAt": "2024-09-24T01:01:03Z",
            "content": "Method Financial’s authentication technology allows instant access to a consumer’s full liability portfolio using just personal information and consent, eliminating the need for usernames and passwor… [+562 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple CFO Luca Maestri Stepping Down",
            "description": "Apple's Chief Financial Officer Luca Maestri is stepping down from his role, Apple announced today. Maestri is not leaving the company and will lead the Corporate Services teams, including information systems and technology, information security, and real est…",
            "url": "https://www.macrumors.com/2024/08/26/apple-cfo-luca-maestri-stepping-down/",
            "urlToImage": "https://images.macrumors.com/t/58W5iU0gQYKgD_bXJ2DvKCd4VgE=/1600x/article-new/2020/10/apple-logo-cash-feature.jpg",
            "publishedAt": "2024-08-26T20:39:39Z",
            "content": "Apple's Chief Financial Officer Luca Maestri is stepping down from his role on January 1, 2025, Apple announced today. Maestri is not leaving the company and will lead the Corporate Services teams, i… [+2018 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Tumblr, Bluesky Numbers Surge as X Is Shut Down Again in Brazil",
            "description": "Bluesky crossed 10 million users this week, adding 4 million new users since Musk's Brazil shenanigans.",
            "url": "https://gizmodo.com/tumblr-bluesky-numbers-surge-as-x-is-shut-down-again-in-brazil-2000501422",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/elon-musk-tennis.jpg",
            "publishedAt": "2024-09-20T18:30:23Z",
            "content": "Elon Musk has ruined the social media platform X, formerly known as Twitter, ever since the billionaire bought the company in late 2022, with far-right extremists getting more attention than ever. Bu… [+3317 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "The Trumps Have Gone Full Crypto With World Liberty Financial",
            "description": "An anonymous reader quotes a report from Wired: Eric and Donald Trump Jr., the sons of former president Donald Trump, have pledged to \"make finance great again\" with a new family-run crypto endeavor called World Liberty Financial. Introduced in a meandering l…",
            "url": "https://politics.slashdot.org/story/24/09/17/0449227/the-trumps-have-gone-full-crypto-with-world-liberty-financial",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-09-17T13:00:00Z",
            "content": "Eric and Donald Trump Jr., the sons of former president Donald Trump, have pledged to \"make finance great again\" with a new family-run crypto endeavor called World Liberty Financial. Introduced in a … [+2040 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "How SEC Mobile Phones Can Signal an Imminent Stock Price Drop",
            "description": "Mobile phone location data has linked site visits by US securities watchdogs to the headquarters of companies with measurable drops in their share prices -- even when no enforcement action is taken. From a report: When insiders sold shares right around a non-…",
            "url": "https://yro.slashdot.org/story/24/09/13/0410215/how-sec-mobile-phones-can-signal-an-imminent-stock-price-drop",
            "urlToImage": "https://a.fsdn.com/sd/topics/privacy_64.png",
            "publishedAt": "2024-09-13T04:30:00Z",
            "content": "When insiders sold shares right around a non-public visit by staff from the Securities and Exchange Commission, they avoided average losses of 4.9 per cent in the three months after the visit, accord… [+797 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Zinkula",
            "title": "A Gen Xer who grew her savings from $50k to $350k in 10 years shares the FIRE methods she's using to get to $1 million",
            "description": "A Gen Xer shares the FIRE strategies she uses to reach $1 million in savings and retire by age 55.",
            "url": "https://www.businessinsider.com/how-grow-savings-one-million-using-fire-methods-investing-saving-2024-9",
            "urlToImage": "https://i.insider.com/66d88dde1d8d2deb96b8bcb3?width=1200&format=jpeg",
            "publishedAt": "2024-09-05T10:03:02Z",
            "content": "Miriam, age 43, says she's on track to reach her retirement savings goal of at least $1 million by age 55. Miriam\r\n<ul><li>A Gen Xer has grown her savings from $50,000 to $375,000 over the past decad… [+5401 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kathleen Elkins",
            "title": "An ex-Googler explains how she achieved financial independence in her 20s and created a runway to quit and start her own company",
            "description": "Before quitting Google, Sherry Jiang built a sizable investment portfolio and downsized her lifestyle to increase her runway.",
            "url": "https://www.businessinsider.com/how-a-millennial-hit-financial-independence-and-quit-google-job-2024-8",
            "urlToImage": "https://i.insider.com/66ce1343c72ebc54a40f5517?width=1200&format=jpeg",
            "publishedAt": "2024-08-28T08:00:02Z",
            "content": "Sherry Jiang left Google in 2021 to work on a startup idea full-time.Courtesy of Sherry Jiang\r\n<ul><li>Sherry Jiang left Google in 2021 to start her own company, Peek, a personal finance platform.</l… [+6770 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "jstreaks@businessinsider.com (Jennifer Streaks)",
            "title": "The author of 'I Will Teach You to Be Rich' says 'phantom costs' add 50% to the monthly expenses of owning a home",
            "description": "Homeownership is not the only path to wealth, says \"I Will Teach You to Be Rich\" author Ramit Sethi, and phantom costs can actually derail your financial goals.",
            "url": "https://www.businessinsider.com/ramit-sethi-phantom-costs-increase-homeownership-expenses-2024-8",
            "urlToImage": "https://i.insider.com/66d1cd7b43b5e59d16b6f59a?width=1200&format=jpeg",
            "publishedAt": "2024-08-31T10:58:02Z",
            "content": "Affiliate links for the products on this page are from partners that compensate us and terms apply to offers listed (see our advertiser disclosure with our list of partners for more details). However… [+4694 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Finance",
            "title": "Apple announces its September event, new iPhone expected",
            "description": "Apple has announced the company will reveal its latest devices on Monday, September 9. It's widely expected the tech giant will unveil an iPhone 16 and more ...",
            "url": "https://finance.yahoo.com/video/apple-announces-september-event-iphone-193450848.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-08-26T19:34:50Z",
            "content": "Apple has announced the company will reveal its latest devices on Monday, September 9. It's widely expected the tech giant will unveil an iPhone 16 and more about its AI-focused Apple Intelligence pl… [+226 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Finance",
            "title": "Is now the time to move some money into long-term bonds?",
            "description": "With a potential Federal Reserve interest rate cut on the horizon, investors are wondering how this change might affect their finances. A key question...",
            "url": "https://finance.yahoo.com/video/now-time-move-money-long-162256723.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-13T16:22:56Z",
            "content": "With a potential Federal Reserve interest rate cut on the horizon, investors are wondering how this change might affect their finances. A key question emerges: which option will offer better returns … [+318 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Back-to-work scam warning after complaints hit peak",
            "description": "Post-summer life admin leaves some exposed to scams, campaigners say, as fraud and fears grow.",
            "url": "https://www.bbc.com/news/articles/clywrwryz3ko",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9b31/live/3ffa4f00-69e9-11ef-8ae1-911441021d16.jpg",
            "publishedAt": "2024-09-03T23:03:19Z",
            "content": "Disputes over fraud and scams have hit their highest level for at least six years, according to the financial ombudsman.\r\nNew figures show thousands of complaints about cases were made to the ombudsm… [+3033 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Microsoft and Abu Dhabi's MGX To Back $30 Billion BlackRock AI Infrastructure",
            "description": "An anonymous reader quotes a report from Data Center Dynamics: BlackRock plans to launch a new $30 billion artificial intelligence (AI) investment fund focused on data centers and energy projects. Microsoft and Abu Dhabi-backed investment company MGX are gene…",
            "url": "https://news.slashdot.org/story/24/09/18/2027246/microsoft-and-abu-dhabis-mgx-to-back-30-billion-blackrock-ai-infrastructure",
            "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
            "publishedAt": "2024-09-19T00:02:00Z",
            "content": "An anonymous reader quotes a report from Data Center Dynamics: BlackRock plans to launch a new $30 billion artificial intelligence (AI) investment fund focused on data centers and energy projects. Mi… [+1499 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Bradley Saacks",
            "title": "Inside $178 billion Man Group's Oxford gathering: Academic hotshots, internal rising stars, and $25 trillion in institutional capital",
            "description": "The 10th iteration of the Man Alternative Investment Summit shows how the biggest asset managers are growing more intertwined with their backers.",
            "url": "https://www.businessinsider.com/man-group-annual-oxford-event-for-institutional-investors-2024-9",
            "urlToImage": "https://i.insider.com/66e8a9babf0250c21493f05f?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T10:01:02Z",
            "content": "Man Group, run by CEO Robyn Grew, has long had a relationship with the University of Oxford.Planet One Images/Universal Images Group via Getty Images; Man Group\r\n<ul><li>$178 billion Man Group's annu… [+5972 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "The Associated Press",
            "title": "Hewlett Packard won't drop its UK claim against tech mogul Mike Lynch, who died when his yacht sank",
            "description": "Hewlett Packard Enterprise said Monday it won't drop its U.K. claim for damages against the estate of British tech mogul Mike Lynch, who was killed when his ...",
            "url": "https://www.yahoo.com/news/hewlett-packard-wont-drop-uk-173406700.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yy.0u4rQfws.81B0lMgbtQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/6ecc5467b8b78a78ca3908205091a249",
            "publishedAt": "2024-09-02T17:34:06Z",
            "content": "LONDON (AP) Hewlett Packard Enterprise said Monday it won't drop its U.K. claim for damages against the estate of British tech mogul Mike Lynch, who was killed when his superyacht sank last month.\r\nB… [+1627 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jordan Hart",
            "title": "You don't have to be a millionaire to retire before 50, accountant says. Here's how she did it.",
            "description": "Accountant Sonia Smith said she left the workforce and retired early with the help of a side hustle and strategic 401(k) savings.",
            "url": "https://www.businessinsider.com/accountant-retired-before-50-without-1-million-savings-2024-9",
            "urlToImage": "https://i.insider.com/66cf17e043b5e59d16b5df91?width=1200&format=jpeg",
            "publishedAt": "2024-09-04T10:07:02Z",
            "content": "Sonia Smith (left) retired from Corporate America thanks to a savings account and a side hustle.Sonia Smith; Nora Carol Photography/Getty Images\r\n<ul><li>Sonia Smith retired at 47 without millions, l… [+2871 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Brian Sozzi",
            "title": "Hasbro's three themes bringing in older consumers: CEO",
            "description": "Yahoo Finance Executive Editor Brian Sozzi sits down with Hasbro (HAS) CEO Chris Cocks at the Goldman Sachs Communicopia and Technology Conference to discuss...",
            "url": "https://finance.yahoo.com/video/hasbros-three-themes-bringing-older-213627511.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-10T21:36:27Z",
            "content": "Yahoo Finance Executive Editor Brian Sozzi sits down with Hasbro (HAS) CEO Chris Cocks at the Goldman Sachs Communicopia and Technology Conference to discuss the toy company's older customer base, it… [+2327 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters Videos",
            "title": "Volkswagen warns time running out as clashes with workers over cuts",
            "description": "STORY: Volkswagen held a tense staff meeting Wednesday.It was delayed for several minutes when its finance chief took to the stage to boos and shouts of...",
            "url": "https://finance.yahoo.com/video/volkswagen-warns-time-running-clashes-153531752.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-04T15:35:31Z",
            "content": "STORY: Volkswagen held a tense staff meeting Wednesday.\r\nIt was delayed for several minutes when its finance chief took to the stage to boos and shouts of \"goodbye.\"\r\nFinance chief Arno Antlitz argue… [+2014 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Setapp Mobile Launches in Open Beta as Alternative App Store in EU",
            "description": "Ukraine-based developer MacPaw has announced the open beta release of Setapp Mobile, its alternative app store for iOS devices in the European Union. This launch comes in the wake of the Digital Markets Act (DMA), which mandates support for third-party app ma…",
            "url": "https://www.macrumors.com/2024/09/17/macpaw-launches-setapp-mobile-eu/",
            "urlToImage": "https://images.macrumors.com/t/FcuTXBoAYF0qOYiaoI8SdrZ_oxU=/1920x/article-new/2024/09/setapp-mobile-1.jpg",
            "publishedAt": "2024-09-17T09:40:31Z",
            "content": "Ukraine-based developer MacPaw has announced the open beta release of Setapp Mobile, its alternative app store for iOS devices in the European Union. This launch comes in the wake of the Digital Mark… [+1877 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Adrian Marlow",
            "title": "You Can Grab iPhone 16 Pro for Free With This T-Mobile Preorder Deal",
            "description": "Both new and existing T-Mobile customers can net the brand-new Apple iPhone 16 for free thanks to this trade-in deal.",
            "url": "https://www.cnet.com/deals/you-can-grab-the-new-iphone-16-pro-for-free-with-this-t-mobile-preorder-deal/",
            "urlToImage": "https://www.cnet.com/a/img/resize/748ed884f2719d3431fa99a0a22dd08f68b9150a/hub/2024/09/10/ad541fa8-7c2d-4c11-9c32-9dd1b52d4e24/appleiphone16pro.png?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-09-13T11:51:42Z",
            "content": "With Apple's annual iPhone launch event being earlier this week, it means that a lot of people have been excited about the iPhone 16 lineup since Monday, and a lot of them have been just itching to p… [+1424 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Andrew Webster",
            "title": "What the hell did I just watch?",
            "description": "Francis Ford Coppola’s retrofuturistic parable Megalopolis stars Adam Driver, Aubrey Plaza, and Giancarlo Esposito, and hits theaters on September 27th.",
            "url": "https://www.theverge.com/24243766/megalopolis-review",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/V8imGnsB0aY1ya0uoy61gbihI34=/0x0:1200x600/1200x628/filters:focal(323x292:324x293)/cdn.vox-cdn.com/uploads/chorus_asset/file/25619025/Megalopolis_Still_01.jpg",
            "publishedAt": "2024-09-13T15:45:00Z",
            "content": "Francis Ford Coppolas long-gestating epic Megalopolis is a series of loosely connected ideas, tied together with an undercooked world and embarrassing dialogue.\r\nByAndrew Webster, an entertainment ed… [+6344 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Ines Ferré",
            "title": "Super Micro stock plunges 19% after company delays annual report following short-seller report",
            "description": "Super Micro stock plunged Wednesday after the company announced it would delay filing its annual report.",
            "url": "https://finance.yahoo.com/news/super-micro-stock-plunges-19-after-company-delays-annual-report-following-short-seller-report-200333718.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/spNM8C4FEAyNzbvL9fojsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/b5a30870-9a17-11ee-b777-f8340e7e9f83",
            "publishedAt": "2024-08-28T20:03:33Z",
            "content": "Super Micro Computer (SMCI) stock plunged 19% on Wednesday after the company said it would delay the filing of its annual report for its fiscal year that ended June 30.\r\nThe announcement comes a day … [+3683 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Samuel Axon",
            "title": "Apple shuffles CFOs for the first time in a decade",
            "description": "Shakeups of the C-suite at Apple are quite rare.",
            "url": "https://arstechnica.com/gadgets/2024/08/apple-shuffles-cfos-for-the-first-time-in-a-decade/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2017/02/apple-park-photo-1-building-trees-760x380.jpg",
            "publishedAt": "2024-08-27T17:31:54Z",
            "content": "Enlarge/ A building at Apple Park, the company's Cupertino, California, HQ.\r\n8\r\nApple has announced a major change on its leadership team: Longtime Chief Financial Officer Luca Maestri will step down… [+2031 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Vee Weir",
            "title": "5 Scenarios Where You Shouldn't Pay Off Your Debt",
            "description": "Commentary: In most cases, prioritizing debt payoff is the way to go, but here are a few exceptions to keep in mind.",
            "url": "https://www.cnet.com/personal-finance/5-scenarios-where-you-shouldnt-pay-off-your-debt/",
            "urlToImage": "https://www.cnet.com/a/img/resize/2ad5c078c276a0e973a6b04d826c82b79c140334/hub/2024/05/31/ab74e992-9327-4cfb-a1a2-45334f00dd2c/lights-utility-cost.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-09-20T09:00:04Z",
            "content": "The importance of paying off debt can't be understated. Not only does debt put pressure on overall financial circumstances; the financial worry is also scientifically linked to physiological and psyc… [+9671 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Tessa Campbell)",
            "title": "4 steps to take with your investments if the Fed cuts rates, according to financial planners",
            "description": "A slowing economy is a great time for investors to reevaluate their portfolios, reallocate cash into the stock market, and diversify their holdings.",
            "url": "https://www.businessinsider.com/fed-rate-cut-investing-strategy-financial-planners-2024-9",
            "urlToImage": "https://i.insider.com/66e32923bf0250c21492dbfc?width=1200&format=jpeg",
            "publishedAt": "2024-09-14T10:43:02Z",
            "content": "Paid non-client promotion: Affiliate links for the products on this page are from partners that compensate us (see our advertiser disclosure with our list of partners for more details). However, our … [+7095 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Thankfully, Trump Is Still Alive. Unfortunately, So Is His Misguided Crypto Project",
            "description": "Donald Trump officially announced details of his cryptocurrency project during an X space Monday night.",
            "url": "https://gizmodo.com/thankfully-trump-is-still-alive-unfortunately-so-is-his-misguided-crypto-project-2000499496",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-speaks-at-a-campaign-event-in-Tucson-Arizona.jpg",
            "publishedAt": "2024-09-17T18:20:21Z",
            "content": "Donald Trump dodged another bullet this weekend when a second assassination attempt against him was foiled at his golf course in West Palm Beach. In an apparent show of resilience on Monday, Trump ap… [+5933 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "UPI.com"
            },
            "author": "Clyde Hughes",
            "title": "Canada announces plans for 100% surtax on Chinese EVs",
            "description": "The Canadian government announced on Monday it will place a 100% surtax on all Chinese-made electric vehicles and a 25% surtax on imported Chinese steel and ...",
            "url": "https://www.upi.com/Top_News/World-News/2024/08/26/Canada-China-EVs-100-percent-surtax/7721724690347/",
            "urlToImage": "https://media.zenfs.com/en/united_press_international_articles_356/6f4139a58b7aa915fec512f3051d6ad1",
            "publishedAt": "2024-08-26T17:22:49Z",
            "content": "Aug. 26 (UPI) -- The Canadian government announced on Monday it will place a 100% surtax on all Chinese-made electric vehicles and a 25% surtax on imported Chinese steel and aluminum.\r\nThe government… [+2349 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kathleen Elkins",
            "title": "A day in the life of an American startup founder in Singapore who juggles timezones, 8 employees, and WhatsApp chats with hundreds of customers",
            "description": "\"I have to remind myself that with your own startup, the work never ends. So you have to create the boundaries yourself.\"",
            "url": "https://www.businessinsider.com/day-in-the-life-of-startup-founder-ceo-in-singapore-2024-9",
            "urlToImage": "https://i.insider.com/66e0ade183b8099cf9fd5a08?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T09:00:02Z",
            "content": "Sherry Jiang is the founder of the personal finance platform Peek.Courtesy of Sherry Jiang\r\n<ul><li>Sherry Jiang quit her job at Google to launch the personal finance platform Peek.</li><li>The 32-ye… [+7184 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Rock Paper Shotgun"
            },
            "author": "Nic Reuben",
            "title": "Remedy partner with Annapurna to co-finance Control 2 and explore Control and Alan Wake TV and film adaptations",
            "description": "Remedy were “thrilled as Finnish people can be” to announce yesterday that they’ve secured funding for a Control sequel in a co-financing deal with Annapurna, who are also helping the Alan Wake studio bring their connected universe to “film, TV, and beyond”.\n…",
            "url": "https://www.rockpapershotgun.com/remedy-partner-with-annapurna-to-co-finance-control-2-and-explore-control-and-alan-wake-tv-and-film-adaptations",
            "urlToImage": "https://assetsio.gnwcdn.com/control_ultimate_edition_2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            "publishedAt": "2024-08-30T09:04:36Z",
            "content": "Remedy were “thrilled as Finnish people can be” to announce yesterday that they’ve secured funding for a Control sequel in a co-financing deal with Annapurna, who are also helping the Alan Wake studi… [+2378 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "kcloonan@insider.com (Kelly Cloonan)",
            "title": "The number of bitcoin millionaires has soared 111% in the last year as the cryptocurrency rallies",
            "description": "The number of bitcoin millionaires has soared as  the crypto rallies. There have also been six new crypto billionaires minted in the past year.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-millionaires-crypto-rally-cryptocurrency-etf-billionaires-sec-ethereum-wealth-2024-8",
            "urlToImage": "https://www.businessinsider.com/public/assets/logos/og-image-logo-social.png?v=2023-11",
            "publishedAt": "2024-08-27T18:50:37Z",
            "content": "As crypto rallies, the number of bitcoin millionaires has more than doubled in the last year.\r\nAccording to a new report from New World Wealth and Henley &amp; Partners, the number of bitcoin million… [+2414 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Plaid Cymru attack Morgan over how Wales is funded",
            "description": "Plaid's leader says Welsh Labour and First Minister Eluned Morgan's support of the funding model is \"beyond comprehension\".",
            "url": "https://www.bbc.com/news/articles/c4gdj2qpewno",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/284a/live/3ed78050-6b9e-11ef-811b-09c4913a8684.jpg",
            "publishedAt": "2024-09-05T21:40:09Z",
            "content": "Plaid says Keir Starmer should be pushed by Eluned Morgan on how her government is funded\r\nThe first minister has been accused by Plaid Cymru of a \"ludicrous contradiction in terms\" over the way the … [+4945 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Scott Horsley",
            "title": "The Federal Reserve starts cutting interesting rates in a big moment for the economy",
            "description": "The Federal Reserve moved aggressively Wednesday to start cutting interest rates as easing inflation fears give way to concern about the job market.",
            "url": "https://www.npr.org/2024/09/18/nx-s1-5115909/federal-reserve-interest-rate-cut-inflation",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5521x3106+0+314/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F40%2Fdf%2F69e4c3394d79bd079965e91f22a8%2Fgettyimages-1852954823.jpg",
            "publishedAt": "2024-09-18T18:06:22Z",
            "content": "The Federal Reserve moved aggressively Wednesday to start cutting interest rates as easing inflation fears give way to growing concern about the job market. \r\nThe central bank lowered its benchmark i… [+2277 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alex Bitter",
            "title": "Ordering delivery has gotten wildly expensive",
            "description": "The cost of delivery from Uber Eats, DoorDash, and other services is high for many diners. But the companies say demand is still strong.",
            "url": "https://www.businessinsider.com/ordering-food-through-uber-eats-doordash-gotten-wildly-expensive-2024-9",
            "urlToImage": "https://i.insider.com/66d76d8614a5cd1fcc8ce411?width=1200&format=jpeg",
            "publishedAt": "2024-09-07T09:47:02Z",
            "content": "Uber Eats and DoorDash continued to attract customers despite a pullback in consumer spending.Getty\r\n<ul><li>Ordering food for delivery can cost twice as much as dining in.</li><li>Some diners say it… [+4748 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Rebecca Rommen",
            "title": "Investigators say 5 bodies were found in the same cabin of Mike Lynch's superyacht as prosecutors begin looking into 'crime hypothesis'",
            "description": "Prosecutors say a manslaughter investigation has been opened after the sinking of British tech tycoon Mike Lynch's superyacht.",
            "url": "https://www.businessinsider.com/5-bodies-found-same-cabin-mike-lynch-superyacht-investigators-2024-8",
            "urlToImage": "https://i.insider.com/66c9ea6d1aa2ac29ee33f898?width=1200&format=jpeg",
            "publishedAt": "2024-08-24T16:07:46Z",
            "content": "Rescue workers at a harbor in Porticello.Jonathan Brady - PA Images\r\n<ul><li>Investigators say five bodies were found in the same cabin of Mike Lynch's superyacht.</li><li>The \"Bayesian\" sank off the… [+1922 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Aditi Bharade",
            "title": "Hewlett Packard confirms it will continue to sue Mike Lynch's family for $4 billion after he died in a tragic yacht sinking",
            "description": "HP and Lynch have been embroiled in a lawsuit over the sale of Lynch's company Autonomy for 13 years. Lynch died when his superyacht sank in August.",
            "url": "https://www.businessinsider.com/hp-confirmed-will-continue-sue-mike-lynch-family-2024-9",
            "urlToImage": "https://i.insider.com/66d66fde1d8d2deb96b80b04?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T04:25:18Z",
            "content": "Mike Lynch, the late former chief executive of Autonomy Corp. Dan Kitwood/Getty Images\r\n<ul><li>HP will continue suing Mike Lynch's grieving family for up to $4 billion after his tragic death.</li><l… [+2358 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Beatrice Nolan",
            "title": "Adam Neumann's climate startup is quietly refunding investors after failing to launch a crypto token, report says",
            "description": "Flowcarbon has been refunding its Goddess Nature Token after failing to launch the token, Forbes reported.",
            "url": "https://www.businessinsider.com/adam-neumann-climate-startup-flowcarbon-refunding-investors-report-2024-9",
            "urlToImage": "https://i.insider.com/654bd7c2b788914e5552b1c5?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T11:07:50Z",
            "content": "Former WeWork CEO Adam Neumann.Shahar Azran/Getty Images\r\n<ul><li>Adam Neumann's climate tech startup is quietly refunding investors, Forbes reported.</li><li>Flowcarbon has reportedly been refunding… [+2474 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lian Kit Wee",
            "title": "Berkshire's vice-chair just cut his stake in Buffett's company",
            "description": "Ajit Jain, Berkshire Hathaway vice-chair, just sold half of his company stake. At the end of August, the company's  market cap surged to $1 trillion.",
            "url": "https://www.businessinsider.com/berkshire-ajit-jain-sold-139-million-shares-warren-buffett-2024-9",
            "urlToImage": "https://i.insider.com/66e3b667cfb7f307e57143c2?width=1200&format=jpeg",
            "publishedAt": "2024-09-13T04:46:25Z",
            "content": "Ajit Jain reduces his stake in Berkshire Hathaway by $139 million.Carlos Barria/Reuters\r\n<ul><li>Ajit Jain, Berkshire's vice-chair sold $139 million of the company's shares on Monday.</li><li>Jain wi… [+2512 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "In Russia, some crypto miners go underground - literally",
            "description": "Russia's southern republic of Dagestan has called for tougher measures against power-hungry cryptocurrency miners who local officials said were causing...",
            "url": "https://www.yahoo.com/news/russia-crypto-miners-underground-literally-082744650.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/2800a853d2012d642ba98c3ce728acfe",
            "publishedAt": "2024-09-24T08:27:44Z",
            "content": "MOSCOW (Reuters) - Russia's southern republic of Dagestan has called for tougher measures against power-hungry cryptocurrency miners who local officials said were causing electricity outages and seek… [+1349 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Netanyahu asks 'forgiveness' over hostage deaths as protests continue",
            "description": "It comes as Hamas said more hostages could be \"returned to their families in shrouds\" if a ceasefire isn't reached.",
            "url": "https://www.bbc.com/news/articles/cn02pz4wnyro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9776/live/45780950-6966-11ef-b43e-6916dcba5cbf.jpg",
            "publishedAt": "2024-09-02T22:10:38Z",
            "content": "Benjamin Netanyahu has asked for \"forgiveness\" from Israelis for failing to return six hostages found dead in Gaza on Saturday, as Hamas warned more could be \"returned to their families in shrouds\" i… [+4955 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Insider Inc.",
            "title": "The Road to IPO",
            "description": "Business Insider's virtual event full of insider tips on what makes a successful launch into the public markets.",
            "url": "https://www.businessinsider.com/events/the-road-to-ipo",
            "urlToImage": "https://media.tbistatic.com/bistudios/_00/dev/client/xxxxxx",
            "publishedAt": "2024-09-18T20:35:32Z",
            "content": "The Road to IPO<!-- Meta data --> <!-- Browser favicons --><!-- Google Tag Manager - for BI use GTM-NS64GV - for Insider use GTM-K2K9CK --> (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n… [+2861 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Peter Kafka",
            "title": "It took Larry Ellison just a single day to make enough money to buy Paramount",
            "description": "Wall Street loves AI. It's not really into media. Which is why it's no sweat for one of the world's richest men to buy a Hollywood studio.",
            "url": "https://www.businessinsider.com/oracle-larry-ellison-paramount-ai-stock-2024-9",
            "urlToImage": "https://i.insider.com/66e98d2ccfb7f307e5723a33?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T14:11:30Z",
            "content": "Larry Ellison, left, is one of the world's richest men. That means it's easy for him to finance the purchase of Paramount for his son, David, right.Clive Brunskill/Getty Images\r\n<ul><li>Oracle stock … [+2418 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Aditi Bharade",
            "title": "The Titan submersible's lead engineer says he told OceanGate CEO Stockton Rush, 'I'm not getting in it' when asked to do a test dive",
            "description": "OceanGate's former engineering director said he had refused to pilot the ill-fated submersible which imploded more than a year ago.",
            "url": "https://www.businessinsider.com/titan-engineer-told-ceo-not-getting-in-it-test-dive-2024-9",
            "urlToImage": "https://i.insider.com/66e8fc12d17aa3c7b2b33707?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T08:33:20Z",
            "content": "OceanGate Expeditions' Titan submersible.OceanGate Expeditions via AP, File\r\n<ul><li>OceanGate's former engineering director said he refused to take a dive in the ill-fated submersible.</li><li>Tony … [+2347 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "The Fed finally cut interest rates. Here's what comes next.",
            "description": "Don't expect an immediate impact from the Fed cutting interest rates. But that doesn't mean you can't start planning now.",
            "url": "https://www.businessinsider.com/federal-reserve-interest-rate-cuts-mortgage-investment-credit-savings-2024-9",
            "urlToImage": "https://i.insider.com/66ec1ba6d17aa3c7b2b40f8c?width=1200&format=jpeg",
            "publishedAt": "2024-09-19T12:50:38Z",
            "content": "iStock; BI\r\n<ul><li>This is an excerpt from the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Go big or go home.The Federal Reserve didn't h… [+2583 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Canada mulls surtax on Chinese critical mineral products, batteries, solar products",
            "description": "Canada said on Tuesday it was considering a potential surtax on Chinese critical mineral products, batteries and parts, solar products, and semiconductors, a...",
            "url": "https://finance.yahoo.com/news/canada-mulls-surtax-chinese-critical-153250591.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/10fcadccefceffb0bb984a8ca9245166",
            "publishedAt": "2024-09-10T15:32:50Z",
            "content": "OTTAWA (Reuters) - Canada said on Tuesday it was considering a potential surtax on Chinese critical mineral products, batteries and parts, solar products, and semiconductors, a move which could promp… [+1107 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Apple Newsroom"
            },
            "author": "John Gruber",
            "title": "Apple Announces Chief Financial Officer Transition",
            "description": "Apple today announced that Chief Financial Officer Luca Maestri will transition from his role on January 1, 2025.",
            "url": "https://www.apple.com/newsroom/2024/08/apple-announces-chief-financial-officer-transition/",
            "urlToImage": "https://www.apple.com/newsroom/images/default/apple-logo-og.jpg?202408262030",
            "publishedAt": "2024-08-27T16:36:18Z",
            "content": "August 26, 2024\r\nPRESS RELEASE\r\nApple announces Chief Financial Officer transition\r\nCUPERTINO, CALIFORNIA Apple today announced that Chief Financial Officer Luca Maestri will transition from his role… [+3377 chars]"
          },
          {
            "source": {
              "id": "time",
              "name": "Time"
            },
            "author": "Justin Worland",
            "title": "Companies Shouldn’t Overlook This IRA Fund That’s Boosting Local Climate Projects",
            "description": "The Greenhouse Gas Reduction Fund committed $27 billion to a range of organizations to support community climate and clean energy projects.",
            "url": "https://time.com/7018693/greenhouse-gas-reduction-fund-ira-climate/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/09/solar-installer-inflation-reduction-act.jpg?quality=85&w=1024&h=628&crop=1",
            "publishedAt": "2024-09-06T15:46:24Z",
            "content": "(To get this story in your inbox, subscribe to the TIME CO2 Leadership Report newsletter here.)\r\nLast month, the Greenhouse Gas Reduction Fund (GGRF) committed to sending $27 billion to a range of or… [+3721 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Zinkula,Madison Hoff",
            "title": "A millennial has been looking for a tech job for over a year after being laid off. He says AI and being Black have worked against him.",
            "description": "A millennial who's been looking for a job for a year shares the strategies he's tried and why he thinks his search has been so difficult.",
            "url": "https://www.businessinsider.com/millennial-cant-find-job-tech-blames-racial-discrimination-ai-2024-9",
            "urlToImage": "https://i.insider.com/66eda299cfb7f307e5738a90?width=1200&format=jpeg",
            "publishedAt": "2024-09-24T10:03:02Z",
            "content": "A millennial (not pictured) has been looking for a tech job for over a year after being laid off. Getty Images; Alyssa Powell/BI\r\n<ul><li>A millennial has been looking for a job after being laid off … [+8523 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Josh Lipton",
            "title": "Who are Nvidia's biggest competitors?",
            "description": "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights & Strategy Founder, CEO and...",
            "url": "https://finance.yahoo.com/video/nvidias-biggest-competitors-205250026.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8yFpXl1ApIWZn9n6rZOgnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/336a2cc0-64b1-11ef-aa6b-41c9a5f97821",
            "publishedAt": "2024-08-27T20:52:50Z",
            "content": "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights &amp; Strategy Founder, CEO and chief analyst Patrick Moorhead joins Ya… [+1601 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Moscow approves Unilever deal to offload Russian assets, RBC cites sources",
            "description": "MOSCOW (Reuters) -Consumer goods giant Unilever has received Russian government approval to sell its assets in Russia, the RBC business daily reported on...",
            "url": "https://finance.yahoo.com/news/moscow-approves-unilever-deal-offload-134537894.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/2a15c9fe46df18503b27e270a675f16a",
            "publishedAt": "2024-09-04T13:45:37Z",
            "content": "MOSCOW (Reuters) -Consumer goods giant Unilever has received Russian government approval to sell its assets in Russia, the RBC business daily reported on Wednesday, citing unnamed sources familiar wi… [+1837 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Seana Smith",
            "title": "Nvidia earnings: Options market predicting $300 billion swing in stock",
            "description": "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.  ...",
            "url": "https://finance.yahoo.com/video/nvidia-one-strategist-sees-stock-171500570.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-08-26T17:15:00Z",
            "content": "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.\r\nBayCrest equity derivatives managing director D… [+1427 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Finance",
            "title": "What working on Wall Street taught a former NFL star about money",
            "description": "No two roads to financial literacy are the same. Some learn lessons in school, some from parents, others through trial and error. In this episode of...",
            "url": "https://finance.yahoo.com/video/working-wall-street-taught-former-160000339.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-08-26T16:00:00Z",
            "content": "No two roads to financial literacy are the same. Some learn lessons in school, some from parents, others through trial and error.\r\nIn this episode of \"Financial Freestyle,\" host Ross Mac is joined by… [+1418 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Emmalyse Brownstein",
            "title": "America's most boring job is on the brink of extinction",
            "description": "Inside the desperate campaign to get Gen Z to become accountants",
            "url": "https://www.businessinsider.com/accountant-shortage-sexy-taxes-business-school-pwc-kpmg-2024-8",
            "urlToImage": "https://i.insider.com/66c8da1243b5e59d16b4cc2e?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T09:58:02Z",
            "content": "Jimmy Simpson for BI\r\nFor most of his youth, Bryan wanted to be an astrophysicist.He was obsessed with the Hubble telescope, and his bedroom ceiling was dotted with plastic glow-in-the-dark stars. Wh… [+12126 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Wesley Hilliard)",
            "title": "Apple CFO shakeup: Kevan Parekh replacing Luca Maestri",
            "description": "Luca Maestri has served as Apple's CFO for over a decade, but he's stepping down and being replaced by Kevan Parekh, Apple's current VP of Financial Planning and Analysis.Apple ParkKevan Parekh has spent 11 years at Apple and leads Financial Planning and Anal…",
            "url": "https://appleinsider.com/articles/24/08/26/apple-cfo-shakeup-kevan-parekh-replacing-luca-maestri",
            "urlToImage": "https://photos5.appleinsider.com/gallery/60820-125234-Apple-Park-23-xl.jpg",
            "publishedAt": "2024-08-26T20:57:37Z",
            "content": "Apple Park\r\nLuca Maestri has served as Apple's CFO for over a decade, but he's stepping down and being replaced by Kevan Parekh, Apple's current VP of Financial Planning and Analysis.\r\nKevan Parekh h… [+2123 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Clifford Colby",
            "title": "How to Claim Your Share of Cash App's $15 Million Legal Settlement",
            "description": "If you've used Cash App in the past six years, you could be eligible for up to a $2,500 payout for data breaches.",
            "url": "https://www.cnet.com/personal-finance/how-to-claim-your-share-of-cash-apps-15-million-legal-settlement/",
            "urlToImage": "https://www.cnet.com/a/img/resize/9fa2c8638cda96a58cfc9c428ad5807d8c4cc491/hub/2024/08/13/769a0417-531f-4547-9293-27c09393f4da/3.png?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-09-07T17:45:03Z",
            "content": "Cash App is one of the most popular payment services around, with more than 50 million users -- the service has even expanded into free tax filing and high-yield savings accounts. However, Cash App i… [+3225 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "Google finance une constellation de satellites (mais pas pour concurrencer Starlink)",
            "description": "Google participe au financement et au développement de la constellation FireSat, qui serviront à surveiller les feux de forêt afin de permettre aux pompiers d’intervenir le plus rapidement possible.",
            "url": "https://www.presse-citron.net/google-finance-une-constellation-de-satellites-mais-pas-pour-concurrencer-starlink/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/09/Google-logo.jpg",
            "publishedAt": "2024-09-17T16:31:00Z",
            "content": "Dans un communiqué, Google annonce un financement de 13 millions de dollars pour démarrer un projet baptisé FireSat, dont lobjectif est de lancer une nouvelle constellation de satellites. Cette const… [+3111 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "jsor@businessinsider.com (Jennifer Sor)",
            "title": "Tesla investor Ross Gerber says he's been dumping the stock because no one wants the company's cars or robots",
            "description": "\"We've seen sales go down, and that's what's happening. If you're expecting a great quarter, you're wrong. They're not selling any Teslas here.\"",
            "url": "https://markets.businessinsider.com/news/stocks/tesla-stock-outlook-elon-musks-cars-sales-robots-ross-gerber-2024-8",
            "urlToImage": "https://i.insider.com/66cc8a47c72ebc54a40eb3e4?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T15:44:13Z",
            "content": "One of Tesla's longtime investors has dumped around half his stake in Elon Musk's carmaker. \r\nAccording to longtime shareholder Ross Gerber, that's because no one seems interested in buying its cars … [+2486 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Harris and Trump face off for the first time tonight, but some corners of the business world are already over it",
            "description": "Kamala Harris and Donald Trump will face off on the debate stage at 9 p.m. ET, but some investors view it as a distraction for their money managers.",
            "url": "https://www.businessinsider.com/kamala-harris-donald-trump-presidential-debate-wall-street-tech-thoughts-2024-9",
            "urlToImage": "https://i.insider.com/66a8dbfdaab37011780b8f56?width=1200&format=jpeg",
            "publishedAt": "2024-09-10T12:54:00Z",
            "content": "Patrick Semansky/AP Images; Chip Somodevilla/Getty Images; Alyssa Powell/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's dail… [+7756 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Germany's Welcome Culture sours to Auf Wiedersehen",
            "description": "As Germany's far-right sees electoral success, migrants who arrived since 2015 say they feel unwelcome.",
            "url": "https://www.bbc.com/news/articles/clyvglq47y9o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9f28/live/2e878e30-7741-11ef-9ea5-c98d261e881d.jpg",
            "publishedAt": "2024-09-20T23:09:45Z",
            "content": "Anti-migrant far-right Alternative for Germany, or AfD, could win the most votes in Brandenburg's election\r\nOn Sunday, voters in the eastern German state of Brandenburg will vote for a new regional p… [+7178 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Public libraries in 'crisis' as councils cut services",
            "description": "Deprived communities lost more libraries since 2016 than richer areas did, the BBC finds",
            "url": "https://www.bbc.com/news/articles/cn9lexplel5o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/61c8/live/7d639590-6606-11ef-b04a-2f00cb1407e3.jpg",
            "publishedAt": "2024-09-02T23:13:06Z",
            "content": "More than 180 council-run libraries have either closed or been handed over to volunteer groups in the UK since 2016, BBC analysis has found.\r\nMore deprived communities were four times more likely to … [+7221 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Brett Arends",
            "title": "If ‘Medicare For All’ is so bad, why is Medicare so popular?",
            "description": "Seniors love Medicare. Does this make them communists?",
            "url": "https://www.marketwatch.com/story/if-medicare-for-all-is-so-bad-why-is-medicare-so-popular-c29bb1aa",
            "urlToImage": "https://images.mktw.net/im-67657181/social",
            "publishedAt": "2024-08-29T18:28:00Z",
            "content": "Brett Arends is an award-winning financial writer with many years experience writing about markets, economics and personal finance. He has received an individual award from the Society of American Bu… [+273 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kenneth Niemeyer",
            "title": "Here's why Gen Z loses more money to online scams than boomers",
            "description": "Gen Z reported losing the most money over average to online scams last year. Boomers lost less on average but lost most to romance scams.",
            "url": "https://www.businessinsider.com/gen-z-loses-more-money-to-online-scams-than-boomers-2024-8",
            "urlToImage": "https://i.insider.com/66d36d8414a5cd1fcc8c68ec?width=1200&format=jpeg",
            "publishedAt": "2024-09-01T10:43:02Z",
            "content": "According to the Better Business Bureau, people aged 18 to 24 reported the highest median losses to online scams last year.seksan Mongkhonkhamsao/Getty Images\r\n<ul><li>Gen Z reported the highest medi… [+3136 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "Where Harris is outspending Trump the most",
            "description": "Harris is spending most in Pennsylvania and is fueled by huge fundraising numbers. At a Wall Street event on Sunday, she raised $27 million",
            "url": "https://www.businessinsider.com/kamala-harris-outspending-donald-trump-pennsylvania-wall-street-fundraiser-2024-9",
            "urlToImage": "https://i.insider.com/66f18be8ce3009a0fac87392?width=1200&format=jpeg",
            "publishedAt": "2024-09-23T15:54:46Z",
            "content": "Harris raised a whopping $27 million at a Wall Street event, where she appealed to the AI and crypto community.Kevin Dietsch/Getty Images\r\n<ul><li>Harris is outspending Trump by nearly $5 million eve… [+3483 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kathleen Elkins",
            "title": "A real-estate investor who has financed properties with both 15- and 30-year mortgages has an obvious favorite. Why he'd always pick the shorter one.",
            "description": "Real estate investor Steve Lewis prefers a shorter-term loan for a few reasons, the main one being that it allows you to build equity much quicker.",
            "url": "https://www.businessinsider.com/real-estate-investor-explains-why-he-prefers-15-year-mortgages-2024-9",
            "urlToImage": "https://i.insider.com/66da30665444ffafa762f9eb?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T09:30:02Z",
            "content": "Real estate investor Steve Lewis and his wife Belkis reside in New Jersey.Courtesy of Steve Lewis\r\n<ul><li>Steve Lewis prefers to finance investment properties with a 15-year mortgage.</li><li>The pa… [+2746 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "Russia says it's the bigger person for not cutting Europe's natural gas supply — but that's not all there is to it",
            "description": "Russia supplied 40% of Europe's gas before the full-scale invasion of Ukraine. It's now down to 15%.",
            "url": "https://www.businessinsider.com/why-russia-hasnt-cut-europe-natural-gas-supply-economy-war-2024-9",
            "urlToImage": "https://i.insider.com/66f0d721cfb7f307e573c80c?width=1200&format=jpeg",
            "publishedAt": "2024-09-24T02:54:05Z",
            "content": "Russian President Vladimir Putin has asked his government to look into limiting the exports of commodities.Getty Images\r\n<ul><li>Russia's oil and gas profits are under pressure.</li><li>Before the wa… [+3790 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Seana Smith",
            "title": "MicroStrategy buys additional $1.11 billion worth of bitcoin",
            "description": "MicroStrategy (MSTR) has once again added more bitcoin (BTC-USD) holdings to its portfolio, purchasing an additional $1.11 billion worth of the...",
            "url": "https://finance.yahoo.com/video/microstrategy-buys-additional-1-11-152200387.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-13T15:22:00Z",
            "content": "MicroStrategy (MSTR) has once again added more bitcoin (BTC-USD) holdings to its portfolio, purchasing an additional $1.11 billion worth of the cryptocurrency. This brings MicroStrategy's total bitco… [+341 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Madeline Fitzgerald",
            "title": "The 10 most popular podcasts about money and finance",
            "description": "An estimated half-a-billion people listen to podcasts annually – enriching their morning commutes, workouts, and cleaning sessions with comedy shows, true crime deep dives, the news and self improvement programs.Read more...",
            "url": "https://qz.com/the-10-most-popular-podcasts-about-money-and-finance-1851639828",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8969f8a71f85b6b2bb6718aacad7cc6e.jpg",
            "publishedAt": "2024-09-04T18:07:00Z",
            "content": "An estimated half-a-billion people listen to podcasts annually enriching their morning commutes, workouts, and cleaning sessions with comedy shows, true crime deep dives, the news and self improvemen… [+953 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Rod Gilmour",
            "title": "'All politicians should be forced into space to see Earth's beauty'",
            "description": "Rachel Delacour is founder of climate tech firm Sweep. She sold her first company, BIME Analytics,  for $45m in 2015.",
            "url": "https://uk.finance.yahoo.com/news/climate-tech-sweep-environment-050004481.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/FAvpuHyS_bm7vci_nG6QdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05NjA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/779957e0-6f5b-11ef-afdd-be7f7235d57b",
            "publishedAt": "2024-09-13T05:00:04Z",
            "content": "Co-founder Rachel Delacour decided to pour all her energy into building carbon management software.\r\nRachel Delacour is founder of climate tech firm Sweep, which works with brands including LOreal (L… [+4318 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Kacper Pempel",
            "title": "Central Europe races against time as flood zones move",
            "description": "WROCLAW, Poland (Reuters) -Volunteers and emergency personnel worked through the night to fortify the Polish city of Wroclaw against approaching flood waters...",
            "url": "https://www.yahoo.com/news/more-areas-central-europe-race-065226399.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/15b4e6760252e598643bf23642d95a08",
            "publishedAt": "2024-09-18T06:52:26Z",
            "content": "By Kacper Pempel\r\nWROCLAW, Poland (Reuters) -Volunteers and emergency personnel worked through the night to fortify the Polish city of Wroclaw against approaching flood waters, while Hungary opened a… [+3764 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Cindy Lamothe",
            "title": "11 Moves To Make If Your Paycheck Can’t Keep Up in Your High-Cost-of-Living Area",
            "description": "Living in a high-cost area on a modest income presents unique challenges. For one, the cost of housing is astronomical, and then there's inflation to drive...",
            "url": "https://finance.yahoo.com/news/11-moves-paycheck-t-keep-180112625.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-19T18:01:12Z",
            "content": "Living in a high-cost area on a modest income presents unique challenges. For one, the cost of housing is astronomical, and then theres inflation to drive expenses up.\r\nCheck Out: How Can You Withdra… [+4850 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Lindsay Clark",
            "title": "Europe's largest city council: Oracle ERP allocated £2B in transactions to wrong year",
            "description": "Workers forced to manually correct setup that struggles to produce auditable accounts after customizations\nThe Oracle finance system implemented by stricken Birmingham City Council allocated £2 billion ($2.65 billion) in cash to the wrong financial year, leav…",
            "url": "https://www.theregister.com/2024/09/20/birmingham_oracle_finance_woes/",
            "urlToImage": "https://regmedia.co.uk/2023/04/25/shutterstock_birmingham.jpg",
            "publishedAt": "2024-09-20T12:20:07Z",
            "content": "The Oracle finance system implemented by stricken Birmingham City Council allocated £2 billion ($2.65 billion) in cash to the wrong financial year, leaving public sector workers to unpick the errors … [+2477 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Pedro Goncalves",
            "title": "UK’s cheapest supermarket revealed",
            "description": "A basket of 62 groceries was £110.58 at the discount retailer.",
            "url": "https://uk.finance.yahoo.com/news/uk-cheapest-supermarket-revealed-050005389.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/IPf.lVFavhJpzEXRfYY3rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/16bc64e0-6acd-11ef-bfdf-7383c09917a9",
            "publishedAt": "2024-09-05T05:00:05Z",
            "content": "Aldi has yet again been named the cheapest supermarket in the UK, with an average household basket full of groceries and other essentials coming in at £110.58 in August.\r\nLidl came a close second, wi… [+2441 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "David Pierce",
            "title": "The best smartphone photos of the year",
            "description": "Plus, a new podcast from the Wirecutter and another on the Sony hack, Blink Twice hits theaters, the new Ring Video Doorbell, and more in this week’s Installer.",
            "url": "https://www.theverge.com/2024/8/25/24226795/best-smartphone-photos-2024-hollywood-hack-blink-twice-installer",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/EmKE7TJltRCG5tCEG-1Thl6nbks=/0x0:2760x1839/1200x628/filters:focal(1380x920:1381x921)/cdn.vox-cdn.com/uploads/chorus_asset/file/25586057/installer_49.png",
            "publishedAt": "2024-08-25T12:00:00Z",
            "content": "The best smartphone photos of the year\r\nThe best smartphone photos of the year\r\n / Plus, in this weeks Installer: A bunch of great new tech podcasts, Rings new doorbell, and a tech thriller in theate… [+11431 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "9to5Mac"
            },
            "author": "Ryan Christoffel",
            "title": "Apple announces CFO transition coming next year, names Luca Maestri successor",
            "description": "Apple has announced a major change for its executive team. The company’s current CFO (Chief Financial Officer), Luca Maestri, will transition out of his role after the end of 2024.\n\n\n\n more…",
            "url": "https://9to5mac.com/2024/08/26/apple-announces-cfo-transition-coming-next-year-names-luca-maestri-successor/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Security-researcher-used-Apple-systems-to-scam-2.5M.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-08-26T20:49:41Z",
            "content": "Apple has announced a major change for its executive team. The companys current CFO (Chief Financial Officer), Luca Maestri, will transition out of his role after the end of 2024.\r\nHere is the announ… [+1876 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Jessica Lyons",
            "title": "North Korean scammers plan wave of stealth attacks on crypto companies, FBI warns",
            "description": "Feds warn of 'highly tailored, difficult-to-detect social engineering campaigns'\nThe FBI has warned that North Korean operatives are plotting \"complex and elaborate\" social engineering attacks against employees of decentralized finance (DeFi) organizations, a…",
            "url": "https://www.theregister.com/2024/09/05/fbi_north_korean_scammers_prepping/",
            "urlToImage": "https://regmedia.co.uk/2024/09/04/shutterstock_1951277734.jpg",
            "publishedAt": "2024-09-05T01:17:42Z",
            "content": "The FBI has warned that North Korean operatives are plotting \"complex and elaborate\" social engineering attacks against employees of decentralized finance (DeFi) organizations, as part of ongoing eff… [+4200 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Autoblog"
            },
            "author": "Yahoo Finance",
            "title": "McLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance'",
            "description": "Filed under:\n Motorsports,McLaren\n Continue reading McLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance'\nMcLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance' originally appeared on Autoblog on …",
            "url": "https://www.autoblog.com/2024/08/26/mclaren-ceo-looks-to-follow-ferraris-blueprint-for-success-but-with-no-arrogance/",
            "urlToImage": "https://edgecast-img.yahoo.net/mysterio/api/58934F626782E91F7A7288BF40B26A92C71E5295086153288D095BDCB4D523D8/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/08/26101442/mclaren_artura_spider_london_premiere.jpeg",
            "publishedAt": "2024-08-26T15:00:00Z",
            "content": "CARMEL, Calif. McLaren CEO Michael Leiters believes that the British luxury supercar maker can succeed much like Ferrari has but in a somewhat different way.\r\nWe have one element in our brand, and it… [+3346 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Pras Subramanian",
            "title": "McLaren CEO looks to follow Ferrari's blueprint for success — but with 'no arrogance'",
            "description": "McLaren CEO Michael Leiters has a plan to differentiate itself from its main competitor.",
            "url": "https://finance.yahoo.com/news/mclaren-ceo-looks-to-follow-ferraris-blueprint-for-success--but-with-no-arrogance-133715235.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/10G7Hv1RlURtTbdvYHoIhw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/d810f780-6160-11ef-9a6d-899519bd9402",
            "publishedAt": "2024-08-26T13:37:15Z",
            "content": "CARMEL, Calif. McLaren CEO Michael Leiters believes that the British luxury supercar maker can succeed much like Ferrari has but in a somewhat different way.\r\nWe have one element in our brand, and it… [+3607 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "David Hollerith",
            "title": "Berkshire Hathaway tops $1 trillion market cap for first time as Buffett accelerates BofA stock sales",
            "description": "Berkshire Hathaway reached an exclusive territory Wednesday that in the US currently includes just six other companies — all from the tech world.",
            "url": "https://finance.yahoo.com/news/berkshire-hathaway-tops-1-trillion-market-cap-for-first-time-as-buffett-accelerates-bofa-stock-sales-145441665.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yu9L5HGZGMkK6OVuIgETZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/fb844670-654a-11ef-ad5f-b0e749579145",
            "publishedAt": "2024-08-28T14:54:41Z",
            "content": "Warren Buffett's Berkshire Hathaway (BRK-A, BRK-B) surpassed a market cap of $1 trillion for the first time on Wednesday as it continues to sell some holdings in Bank of America (BAC).\r\nBerkshire is … [+2868 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Autoblog"
            },
            "author": "Yahoo Finance",
            "title": "America's EV charging network is growing but not fast enough",
            "description": "Filed under:\n By the Numbers,Government/Legal,Green,Driving,Ownership,Electric\n Continue reading America's EV charging network is growing but not fast enough\nAmerica's EV charging network is growing but not fast enough originally appeared on Autoblog on Sat, …",
            "url": "https://www.autoblog.com/2024/09/07/americas-ev-charging-network-is-growing-but-not-fast-enough/",
            "urlToImage": "https://edgecast-img.yahoo.net/mysterio/api/EF71F8DEE8526F8DD3448AB0177920DD85C1184E52983DFDA7C0157B2B53AE9C/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/03/01000049/IMG_7444-copy.jpg",
            "publishedAt": "2024-09-07T11:00:00Z",
            "content": "In a report, the White House released new figures on the build-out of the nations EV charging network, a small positive development in what is typically a sore spot for EV adoption.\r\nIn its third qua… [+4325 chars]"
          },
          {
            "source": {
              "id": "die-zeit",
              "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Bitcoin und Ether: Commerzbank mit neuem Angebot für Kryptowährungen",
            "description": "Hier finden Sie Informationen zu dem Thema „Bitcoin und Ether“. Lesen Sie jetzt „Commerzbank mit neuem Angebot für Kryptowährungen“.",
            "url": "https://www.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen",
            "urlToImage": "https://img.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen-image-group/wide__1300x731",
            "publishedAt": "2024-09-19T11:56:54Z",
            "content": "Die Commerzbank baut das boomende Geschäft mit Kryptowährungen mit einem neuen Angebot für Firmenkunden aus. Dafür hat das Geldinstitut eine Partnerschaft mit der Deutsche-Börse-Tochter Crypto Financ… [+1464 chars]"
          },
          {
            "source": {
              "id": "polygon",
              "name": "Polygon"
            },
            "author": "Oli Welsh",
            "title": "Alan Wake, Control TV and movie projects in the works from Annapurna",
            "description": "Remedy Entertainment has announced that it’s partnering with Annapurna to develop movie and TV adaptations of its much-loved supernatural game series, Alan Wake and Control. There’s no more detail on the projects than that — just the suggestion that the two c…",
            "url": "https://www.polygon.com/gaming/446186/alan-wake-control-movie-tv-annapurna-remedy",
            "urlToImage": "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24712474/ss_5a16ce565951479e142c56a23f19d88333d84945.1920x1080.jpg?quality=90&strip=all&crop=0%2C3.4613147178592%2C100%2C93.077370564282&w=1200",
            "publishedAt": "2024-08-30T12:29:52Z",
            "content": "Remedy Entertainment has announced that it’s partnering with Annapurna to develop movie and TV adaptations of its much-loved supernatural game series, Alan Wake and Control.\n\nThere’s no more detail o… [+2159 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Max Blau",
            "title": "Up against a 'ghost network' for mental health care? Here's what you can do",
            "description": "Insurers’ failures to update their provider directories have led to dire consequences for people seeking mental health care. Here's how you can navigate these challenges to find treatment.",
            "url": "https://www.npr.org/sections/shots-health-news/2024/09/20/nx-s1-5118420/mental-health-insurance-guide-ghost-network",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4894x2753+0+560/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fef%2Fb4%2F22dc644441aa8e1cda7c11073649%2Fgettyimages-460688633.jpg",
            "publishedAt": "2024-09-22T11:00:00Z",
            "content": "Its hard to know if your health insurance plan is as good as advertised. You pay a monthly premium to access a network of health providers. But call the numbers in your provider directory, and youre … [+9621 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "US charges Hamas leaders over 7 October attack on Israel",
            "description": "Six top members of Hamas are charged with crimes including the murder of Americans and terrorism.",
            "url": "https://www.bbc.com/news/articles/c9wj285xyp8o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/fd9e/live/15f24b70-6a3b-11ef-a7d6-79d10b74e945.jpg",
            "publishedAt": "2024-09-03T21:43:11Z",
            "content": "The US has charged several Hamas leaders in connection with the Palestinian group's deadly attack on Israel on 7 October last year.\r\nThe justice department said it was indicting six Hamas members wit… [+1278 chars]"
          }
        ],
        "stock": [
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "MyPillow Mogul Mike Lindell Says He’s Taking His Social Media Company Public",
            "description": "The pillow mogul's goofy social network will soon be joining forces with the stock market.",
            "url": "https://gizmodo.com/mypillow-mogul-mike-lindell-says-hes-taking-his-social-media-company-public-2000492903",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/MyPillow-CEO-Mike-Lindell-Gives-the-Thumbs-Up-from-a-Moving-Car.jpg",
            "publishedAt": "2024-08-30T13:10:54Z",
            "content": "You may have forgotten that Mike Lindell, the CEO of MyPillow, also owns his own social media network. Lindell, who, among other things, is an undying Donald Trump stan, started the site back in 2021… [+2740 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "The Market Has Spoken: Trump Lost the Debate",
            "description": "Truth Social shares sank following Trump’s lousy performance and even the gamblers have begun to abandon him.",
            "url": "https://gizmodo.com/the-market-has-spoken-trump-lost-the-debate-2000497451",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/TrumpStock.jpg",
            "publishedAt": "2024-09-11T13:55:02Z",
            "content": "The market didnt like what it heard on Tuesday night as Trump and Kamala Harris faced off on the debate stage for the first time. Shares of the Trump Media &amp; Technology Group slipped more than 14… [+2175 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "People Are Setting Themselves on Fire and Getting Punched in the Face to Pump Their Crypto Coins",
            "description": "To compete against thousands of crypto meme coins flooding the market, creators are resorting to elaborate and sometimes dangerous stunts for attention.",
            "url": "https://www.wired.com/story/people-on-fire-punched-pump-crypto-coins/",
            "urlToImage": "https://media.wired.com/photos/66d9d2065e239f454e0afe33/191:100/w_1280,c_limit/090424-business-memecoins-fire.jpg",
            "publishedAt": "2024-09-12T11:00:00Z",
            "content": "The vast majority of these coins never get off the ground. Others attract early attention, then tank after the creator sells off their holdings without warning. A minority of the coins hold value ove… [+3667 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Stock market today: Dow hits record high while tech shares stumble ahead of Nvidia earnings",
            "description": "The Dow hit a record high on Monday. Tech shares edged lower ahead of the hotly anticipated Nvidia earning report scheduled for Wednesday.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-tech-shares-decline-nvidia-earnings-this-week-2024-8",
            "urlToImage": "https://i.insider.com/641471735f4f5400191a0fbe?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T20:10:10Z",
            "content": "US stocks were mixed on Monday with tech shares dragging the S&amp;P 500 and the Nasdaq Composite lower, while the Dow Jones Industrial Average climbed to a record high.\r\nAll eyes are on Nvidia earni… [+1913 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Gizmodo",
            "title": "Samsung’s Labor Day Sale: Record-Low Prices Signal a Stock Clearance on TVs",
            "description": "Samsung's Labor Day sale features unprecedented discounts on a wide range of TVs and appliances.",
            "url": "https://gizmodo.com/samsungs-labor-day-sale-record-low-prices-signal-a-stock-clearance-on-tvs-2000493084",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/samsung-tv-oled.jpg",
            "publishedAt": "2024-08-30T12:10:43Z",
            "content": "As the summer sun begins to set, the excitement of Labor Day sales sweeps in like a refreshing breeze, offering a chance to snag incredible deals just in time for the fall. Among the most anticipated… [+2451 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "Whatever Polymarket Is, It’s Not the Future of News",
            "description": "A betting market is gambling that financial incentives can be the ultimate arbiters of truth.",
            "url": "https://gizmodo.com/whatever-polymarket-is-its-not-the-future-of-news-2000491209",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Polymarket.jpg",
            "publishedAt": "2024-08-27T12:05:13Z",
            "content": "If youre a degenerate gambler then you probably already know that Polymarket is predicting that Trump will win the U.S. election. If youre not a degenerate gambler, then you may not even know what Po… [+10143 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Seana Smith",
            "title": "Nvidia earnings: Options market predicting $300 billion swing in stock",
            "description": "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.  ...",
            "url": "https://finance.yahoo.com/video/nvidia-one-strategist-sees-stock-171500570.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-08-26T17:15:00Z",
            "content": "The options market is predicting a big swing in Nvidia (NVDA) shares when the chip giant releases its second quarter earnings on Wednesday, August 28.\r\nBayCrest equity derivatives managing director D… [+1427 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Tessa Campbell)",
            "title": "4 steps to take with your investments if the Fed cuts rates, according to financial planners",
            "description": "A slowing economy is a great time for investors to reevaluate their portfolios, reallocate cash into the stock market, and diversify their holdings.",
            "url": "https://www.businessinsider.com/fed-rate-cut-investing-strategy-financial-planners-2024-9",
            "urlToImage": "https://i.insider.com/66e32923bf0250c21492dbfc?width=1200&format=jpeg",
            "publishedAt": "2024-09-14T10:43:02Z",
            "content": "Paid non-client promotion: Affiliate links for the products on this page are from partners that compensate us (see our advertiser disclosure with our list of partners for more details). However, our … [+7095 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "William Watts",
            "title": "A Fed rate cut with the stock market at a record high? Here’s what history says.",
            "description": "Do rate cuts with the stock market at or near all-time highs provide bulls additional fuel or do they portend trouble ahead? Dow Jones Market Data ran back...",
            "url": "https://finance.yahoo.com/news/fed-rate-cut-stock-market-184700095.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-19T12:39:00Z",
            "content": "The Federal Reserve on Wednesday cut interest rates with U.S. stocks trading near a record high, leaving investors searching for historical clues to the path ahead for markets.\r\nThe S&amp;P 500 SPX b… [+1871 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Shubhangi Goel",
            "title": "The next big market for weight-loss drugs: children",
            "description": "Novo Nordisk's weight loss drug, Saxenda, helped children ages six to 11 reduce their body mass index in a recent trial.",
            "url": "https://www.businessinsider.com/next-big-market-for-weight-loss-drugs-children-novo-trial-2024-9",
            "urlToImage": "https://i.insider.com/66e10e1683b8099cf9fd6a41?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T05:25:35Z",
            "content": "Novo Nordisk's Saxenda helped children lose weight in a 56-week trial.Thomson Reuters\r\n<ul><li>Novo Nordisk's Saxenda helped children reduce their BMI by 5.8% in a 56-week trial.</li><li>There are no… [+2949 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Stock market today: S&P 500 goes for 5-day win streak as markets look ahead to next week's Fed meeting",
            "description": "\"While we acknowledge risks of larger cuts at subsequent meetings, we think the Fed will start off with a 25bp cut next week,\" Bank of America said.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-win-streak-fed-rate-cut-next-week-2024-9",
            "urlToImage": "https://i.insider.com/66e43ad9bf0250c214932934?width=1200&format=jpeg",
            "publishedAt": "2024-09-13T13:34:36Z",
            "content": "US stocks were up on Friday as the S&amp;P 500 and Nasdaq 100 indexes attempted to extend their winning streak to five days.\r\nAfter benign inflation data and initial jobless claims were released earl… [+1604 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Zacks Equity Research",
            "title": "Warner Bros. Discovery Falls 28% YTD: How Should You Play the Stock?",
            "description": "WBD is suffering from declining revenues and a sluggish linear advertising market. Despite an expanded partner base, these should keep investors on the...",
            "url": "https://finance.yahoo.com/news/warner-bros-discovery-falls-28-135300596.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-23T13:53:00Z",
            "content": "Warner Bros. Discovery WBD shares have dipped 27.6% year to date, underperforming the broader Zacks Consumer Discretionary sectors return of 1.8%. \r\nWBD shares have also lagged the Zacks Broadcast Ra… [+4655 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Lawrence Nga, The Motley Fool",
            "title": "1 Solid AI Stock That's Not Nvidia or Palantir to Focus On in the Next Few Years",
            "description": "This AI company could reach trillions of dollars in market capitalization.",
            "url": "https://finance.yahoo.com/news/1-solid-ai-stock-thats-111500631.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-19T11:15:00Z",
            "content": "Artificial intelligence (AI) is probably one of the biggest trends that will change our daily lives in the coming decades. While AI is still in its early development stage, companies like Nvidia and … [+5665 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Americans are the richest they've ever been thanks to soaring real estate and stock prices",
            "description": "Americans have a cumulative net worth of $164 trillion, far surpassing the $20 trillion in debt they hold.",
            "url": "https://markets.businessinsider.com/news/stocks/americans-richest-theyve-ever-been-with-164-trillion-net-worth-2024-9",
            "urlToImage": "https://i.insider.com/66e341c4cfb7f307e5711fe7?width=1200&format=jpeg",
            "publishedAt": "2024-09-13T12:38:12Z",
            "content": "New data from the Federal Reserve reveals that Americans are the richest they've ever been.\r\nAmericans had a cumulative net worth of $163.8 trillion at the end of the second quarter, according to the… [+1825 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Shubhangi Goel",
            "title": "Nvidia just recorded the biggest single-day wipeout by a US company",
            "description": "Nvidia stock fell 9.5%, shedding $278.9 billion in valuation. The loss is tied to concerns that include the health of AI and the US economy.",
            "url": "https://www.businessinsider.com/nvidia-records-biggest-ever-single-day-market-value-loss-2024-9",
            "urlToImage": "https://i.insider.com/6616be9216bde8d4ead75ba5?width=1200&format=jpeg",
            "publishedAt": "2024-09-04T05:00:29Z",
            "content": "Nvidia's stock fell 9.5% due to concerns about AI and the US economy.Michael M. Santiago/Getty; Jenny Chang-Rodriguez/BI\r\n<ul><li>Nvidia's stock fell 9.5% due to concerns about AI and the US economy.… [+2930 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lian Kit Wee",
            "title": "Berkshire's vice-chair just cut his stake in Buffett's company",
            "description": "Ajit Jain, Berkshire Hathaway vice-chair, just sold half of his company stake. At the end of August, the company's  market cap surged to $1 trillion.",
            "url": "https://www.businessinsider.com/berkshire-ajit-jain-sold-139-million-shares-warren-buffett-2024-9",
            "urlToImage": "https://i.insider.com/66e3b667cfb7f307e57143c2?width=1200&format=jpeg",
            "publishedAt": "2024-09-13T04:46:25Z",
            "content": "Ajit Jain reduces his stake in Berkshire Hathaway by $139 million.Carlos Barria/Reuters\r\n<ul><li>Ajit Jain, Berkshire's vice-chair sold $139 million of the company's shares on Monday.</li><li>Jain wi… [+2512 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Emily Stewart",
            "title": "The agonizing uncertainty of America's so-so economy",
            "description": "The job market is getting weaker, and the economy feels trapped in limbo. Americans hate it.",
            "url": "https://www.businessinsider.com/economy-jobs-report-sentiment-consumers-elections-recession-inflation-mortgage-rates-2024-9",
            "urlToImage": "https://i.insider.com/66e4466ed17aa3c7b2b26af0?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T09:24:02Z",
            "content": "Getty Images; Jenny Chang-Rodriguez/BI\r\nI've spent the past couple of years gently correcting the people in my life that, despite their frustrations with the economy, we are not in a recession. Yes, … [+8459 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lakshmi Varanasi",
            "title": "Signal president says generative AI is 'definitely a bubble' and Nvidia's market is going to 'die for a second'",
            "description": "Signal's president Meredith Whittaker said AI is a bubble and that it urgently needs to be regulated.",
            "url": "https://www.businessinsider.com/signal-president-generative-ai-bubble-nvidia-openai-2024-8",
            "urlToImage": "https://i.insider.com/66d1211e43b5e59d16b6e1ca?width=1200&format=jpeg",
            "publishedAt": "2024-08-30T15:37:13Z",
            "content": "Signal President Meredith Whittaker.Photo by Doug Cody, courtesy of O'Reilly Media\r\n<ul><li>Generative AI is a bubble, according to Signal President Meredith Whittaker.</li><li>Whittaker said Nvidia'… [+2266 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Nvidia's Jensen Huang just crashed out of the $100 billion club after his net worth plunged by almost $10 billion",
            "description": "Nvidia CEO Jensen Huang's net worth plunged by about $10 billion to below $95 billion after the chipmaker's stock tanked on Tuesday.",
            "url": "https://www.businessinsider.com/nvidia-stock-price-jensen-huang-wealth-net-worth-ai-microchips-2024-9",
            "urlToImage": "https://i.insider.com/66d83586289b805d1db3eaa0?width=1200&format=jpeg",
            "publishedAt": "2024-09-04T11:00:25Z",
            "content": "Nvidia CEO Jensen Huang is no longer a member of a very exclusive club.Sam Yeh/AFP/Getty Images\r\n<ul><li>Nvidia's Jensen Huang fell out of the $100 billion club on Tuesday.</li><li>The chipmaker's st… [+2151 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Attiya Zainib",
            "title": "ConocoPhillips (COP): A Good Energy Stock to Add to Your Retirement Stock Portfolio",
            "description": "We recently published a list of Retirement Stock Portfolio: 12 Energy Stocks To Consider. In this article, we are going to take a look at where...",
            "url": "https://finance.yahoo.com/news/conocophillips-cop-good-energy-stock-195612333.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-14T19:56:12Z",
            "content": "We recently published a list of Retirement Stock Portfolio: 12 Energy Stocks To Consider. In this article, we are going to take a look at where ConocoPhillips (NYSE:COP) stands against other energy s… [+7379 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Fatima Farooq",
            "title": "Nano Dimension Ltd. (NNDM): A Penny Stock That Will Make You a Millionaire",
            "description": "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Nano Dimension Ltd...",
            "url": "https://finance.yahoo.com/news/nano-dimension-ltd-nndm-penny-181834040.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ALwDSwUGsf_HobICyufYog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/106d4291f55ba33d2e71f1639e18259f",
            "publishedAt": "2024-08-31T18:18:34Z",
            "content": "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Nano Dimension Ltd. (NASDAQ:NNDM) stands against the other p… [+6658 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Aly Lopez",
            "title": "I Tested the Viral Lemme Sleep Gummies. Here’s How It Impacted My Sleep Quality",
            "description": "With so many sleep aids on the market, choosing one brand is tricky. I saw this melatonin supplement on TikTok and decided to try it for a month.",
            "url": "https://www.cnet.com/health/sleep/i-tested-the-viral-lemme-sleep-gummies-heres-how-it-impacted-my-sleep-quality/",
            "urlToImage": "https://www.cnet.com/a/img/resize/628f8070b8041c7358c1bc1886c550bd8c861071/hub/2024/05/01/5327169b-b900-4965-9fe0-72dc6f581386/screenshot-2024-05-01-at-11-15-28am.png?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-09-10T15:30:00Z",
            "content": "It’s no secret that sleep is essential to our well-being. However, it's common to struggle with getting enough sleep. Long-term sleep deprivation can have severe consequences and health implications,… [+14320 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Fatima Farooq",
            "title": "Lantern Pharma Inc. (LTRN): A Penny Stock That Will Make You a Millionaire",
            "description": "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Lantern Pharma Inc...",
            "url": "https://finance.yahoo.com/news/lantern-pharma-inc-ltrn-penny-180227301.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zJ.tr9oD8bhOa54oN7UG9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/f570aae28e1052f5a4a089428411fb02",
            "publishedAt": "2024-08-31T18:02:27Z",
            "content": "We recently compiled a list of the 11 Penny Stocks That Will Make You A Millionaire. In this article, we are going to take a look at where Lantern Pharma Inc. (NASDAQ:LTRN) stands against the other p… [+6473 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NorthJersey.com"
            },
            "author": "Maria Francis, USA TODAY NETWORK",
            "title": "AI chipmaker giant NVIDIA stock takes a historic $279 billion plunge",
            "description": "NVIDIA share price tanks in record breaking fashion as tech stocks fall.",
            "url": "https://www.northjersey.com/story/news/2024/09/04/ai-chipmaker-giant-nvidia-stock-takes-a-historic-279-billion-plunge/75069992007/",
            "urlToImage": "https://media.zenfs.com/en/the-bergen-record/cd6510d9cf7b825998aea5039b58a08d",
            "publishedAt": "2024-09-04T15:48:47Z",
            "content": "NVIDIA shares have tanked almost 10% in the biggest single-day market value loss in U.S. history, spurring a massive sell off in large-cap tech stocks.\r\nThe company is widely known for making graphic… [+1094 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Neha Gupta",
            "title": "Snowflake Inc (SNOW): Top Buy-the-Dip Stock With High Growth Potential in Data Cloud Services",
            "description": "We recently compiled a list of the 7 Best Buy-the-Dip Stocks to Invest In. In this article, we are going to take a look at where Snowflake Inc (NYSE:SNOW...",
            "url": "https://finance.yahoo.com/news/snowflake-inc-snow-top-buy-065908493.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/v3X.EyY4UlOpH266t3ZPUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/4a25e1c441831c55a553ed49bcb06b8e",
            "publishedAt": "2024-09-07T06:59:08Z",
            "content": "We recently compiled a list of the 7 Best Buy-the-Dip Stocks to Invest In. In this article, we are going to take a look at where Snowflake Inc (NYSE:SNOW) stands against the other buy-the-dip stocks.… [+5460 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Tirthankar Chakraborty",
            "title": "This Is Why SMCI Stock is Falling, But Why It's Time to Buy",
            "description": "Short-seller report crashes Super Micro. Is it the right time to sell the SMCI stock, or remaining bullish will be helpful? Let's have a look -",
            "url": "https://finance.yahoo.com/news/why-smci-stock-falling-why-184500130.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/ebb8b8a767e89fdab119b9ddef47f7b2",
            "publishedAt": "2024-08-29T18:45:00Z",
            "content": "The meteoric rise in demand for artificial intelligence (AI) chips has helped the $25 billion server manufacturer Super Micro Computer, Inc.s SMCI shares to scale northward over the last three financ… [+5019 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Ines Ferré",
            "title": "Super Micro stock plunges 19% after company delays annual report following short-seller report",
            "description": "Super Micro stock plunged Wednesday after the company announced it would delay filing its annual report.",
            "url": "https://finance.yahoo.com/news/super-micro-stock-plunges-19-after-company-delays-annual-report-following-short-seller-report-200333718.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/spNM8C4FEAyNzbvL9fojsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/b5a30870-9a17-11ee-b777-f8340e7e9f83",
            "publishedAt": "2024-08-28T20:03:33Z",
            "content": "Super Micro Computer (SMCI) stock plunged 19% on Wednesday after the company said it would delay the filing of its annual report for its fiscal year that ended June 30.\r\nThe announcement comes a day … [+3683 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Grace Eliza Goodwin",
            "title": "Even retail's biggest comeback story isn't safe from economic worries",
            "description": "Abercrombie & Fitch's stock fell despite positive earnings after its CEO warned of economic uncertainties.",
            "url": "https://www.businessinsider.com/abercrombie-fitch-earnings-comeback-economic-worries-2024-8",
            "urlToImage": "https://i.insider.com/66cf5cf4397a168972020f90?width=1200&format=jpeg",
            "publishedAt": "2024-08-28T17:58:49Z",
            "content": "Abercrombie & Fitch reported earnings that beat expectations on Wednesday, but its growth may be slowing.SOPA Images/Getty Images\r\n<ul><li>Abercrombie & Fitch CEO suggested it may face a tumultuous f… [+3059 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Applying to jobs is tough, try doing it 2,200 times",
            "description": "Although unemployment is still relatively low, the job market is tough to crack. Take it from Kevin Cash, who has been rejected roughly 2,200 times.",
            "url": "https://www.businessinsider.com/job-search-rejections-unemployment-cant-find-work-2024-9",
            "urlToImage": "https://i.insider.com/66e2c4dccfb7f307e570c3d4?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T13:41:52Z",
            "content": "PeopleImages/Getty, Tyler Le/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Hi! Be careful g… [+7127 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Meet the 10 biggest wealth gainers this year — who've added a combined $360 billion to their fortunes in 2024",
            "description": "Nvidia's Jensen Huang, Meta's Mark Zuckerberg, and Oracle's Larry Ellison are all up over $50 billion this year thanks to soaring stock prices.",
            "url": "https://www.businessinsider.com/wealth-gain-rich-list-billionaires-nvidia-huang-meta-zuckerberg-buffett-2024-9",
            "urlToImage": "https://i.insider.com/66e44ecad17aa3c7b2b26f68?width=1200&format=jpeg",
            "publishedAt": "2024-09-14T09:50:02Z",
            "content": "Jim Walton, Alice Walton, and Rob Walton.REUTERS/Rick Wilking\r\n<ul><li>The 10 biggest wealth gainers have added a collective $360 billion in net worth so far in 2024.</li><li>Nvidia's Jensen Huang, M… [+5508 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Tom Carter",
            "title": "Elon Musk tells X staff to write a one-page summary of their achievements to get stock options, report says",
            "description": "In an email to staff reported by The Verge, Elon Musk told staff to submit a summary of their contributions to the company to get their stock options.",
            "url": "https://www.businessinsider.com/elon-musk-tells-x-staff-to-prove-deserve-stock-options-2024-8",
            "urlToImage": "https://i.insider.com/66cc57dcc72ebc54a40ead25?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T10:57:05Z",
            "content": "Tesla CEO Elon Musk told employees they would need to work \"long hours at a high intensity\" after taking over Twitter — and said those unwilling to do so should leave.Richard Bord/Getty Images\r\n<ul><… [+2350 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "jsor@businessinsider.com (Jennifer Sor)",
            "title": "Tesla investor Ross Gerber says he's been dumping the stock because no one wants the company's cars or robots",
            "description": "\"We've seen sales go down, and that's what's happening. If you're expecting a great quarter, you're wrong. They're not selling any Teslas here.\"",
            "url": "https://markets.businessinsider.com/news/stocks/tesla-stock-outlook-elon-musks-cars-sales-robots-ross-gerber-2024-8",
            "urlToImage": "https://i.insider.com/66cc8a47c72ebc54a40eb3e4?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T15:44:13Z",
            "content": "One of Tesla's longtime investors has dumped around half his stake in Elon Musk's carmaker. \r\nAccording to longtime shareholder Ross Gerber, that's because no one seems interested in buying its cars … [+2486 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Tirthankar Chakraborty",
            "title": "NVIDIA Wipes Out $400B in Value: Buy, Hold, or Sell NVDA Stock?",
            "description": "NVIDIA's shares lately took a beating as regulators launched a probe into the company's contracts. Is it the right time to sell the NVDA stock, or will...",
            "url": "https://finance.yahoo.com/news/nvidia-wipes-400b-value-buy-184500618.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/02c1245facc17eb1278e28574fc5cc1c",
            "publishedAt": "2024-09-09T18:45:00Z",
            "content": "NVIDIA Corporation NVDA witnessed a meteoric rise over the past few years due to the advent of artificial intelligence (AI). Its recent share repurchase has installed confidence among investors and t… [+5279 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Debasis Saha",
            "title": "Goldman Thinks Occidental Petroleum Corporation (OXY) Is A Long-Term AI Stock Set To Rally Eventually",
            "description": "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Occidental...",
            "url": "https://finance.yahoo.com/news/goldman-thinks-occidental-petroleum-corporation-174140096.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-13T17:41:40Z",
            "content": "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Occidental Petroleum Corporation (NYSE:OXY) stands against … [+5389 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Polo Rocha",
            "title": "Ally's stock drops 15% as its credit challenges grow",
            "description": "A top executive at the auto lender said that more borrowers struggled to repay their loans over the summer amid inflation and a tougher job market. Late...",
            "url": "https://finance.yahoo.com/news/allys-stock-drops-15-credit-152554710.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-10T15:25:54Z",
            "content": "Ally Financial said Tuesday that more borrowers struggled to repay their auto loans over the summer, prompting a 16% plunge in the company's stock.\r\n\"Our credit challenges have intensified,\" Chief Fi… [+3696 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Josh Lipton",
            "title": "Who are Nvidia's biggest competitors?",
            "description": "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights & Strategy Founder, CEO and...",
            "url": "https://finance.yahoo.com/video/nvidias-biggest-competitors-205250026.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8yFpXl1ApIWZn9n6rZOgnA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/336a2cc0-64b1-11ef-aa6b-41c9a5f97821",
            "publishedAt": "2024-08-27T20:52:50Z",
            "content": "Wall Street is waiting on the release of Nvidia's (NVDA) second quarter earnings results on Wednesday, August 28. Moor Insights &amp; Strategy Founder, CEO and chief analyst Patrick Moorhead joins Ya… [+1601 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Emily Stewart",
            "title": "The cult of Nvidia is getting really weird",
            "description": "Investors are obsessed with Nvidia thanks to its soaring stock price. The meme feels like GameStop, but there are also some good reasons for the cult.",
            "url": "https://www.businessinsider.com/nvidia-stock-price-earnings-party-investors-cult-investing-memes-2024-9",
            "urlToImage": "https://i.insider.com/66d8b4361d8d2deb96b8ee90?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T09:43:02Z",
            "content": "Everyone could probably stand to chill about Nvidia.Getty Images; Jenny Chang-Rodriguez/BI\r\nI probably do not have to tell you that Nvidia has really blown up over the past few years. The tech compan… [+11652 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Walmart heir Jim Walton just joined the $100 billion club",
            "description": "Jim Walton, whose father founded Walmart, joins the likes of Elon Musk and Jeff Bezos as one of the few people on the planet worth over $100 billion.",
            "url": "https://www.businessinsider.com/jim-walton-walmart-stock-100-billion-net-worth-wealth-retail-2024-9",
            "urlToImage": "https://i.insider.com/66d5db501d8d2deb96b80471?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T08:39:47Z",
            "content": "Jim Walton's net worth has surpassed $100 billion.Rick T. Wilking/Stringer/Getty Images\r\n<ul><li>Jim Walton's net worth just passed $100 billion for the first time.</li><li>The Walmart heir's wealth … [+2681 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Fatima Farooq",
            "title": "NVIDIA Corporation (NVDA) a Good Big Tech Stock to Buy Now?",
            "description": "We recently compiled a list of the 13 Best Big Tech Stocks To Buy Now. In this article, we are going to take a look at where NVIDIA Corporation (NASDAQ:NVDA)...",
            "url": "https://finance.yahoo.com/news/nvidia-corporation-nvda-good-big-211415800.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kZveoOmr3ngssVpudK1u4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/aa94e059977d3251b8b0630718e013fc",
            "publishedAt": "2024-09-16T21:14:15Z",
            "content": "We recently compiled a list of the 13 Best Big Tech Stocks To Buy Now. In this article, we are going to take a look at where NVIDIA Corporation (NASDAQ:NVDA) stands against the other big tech stocks.… [+5323 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Karen Friar",
            "title": "Stock market today: Stocks end banner week with big gains as jumbo Fed cut odds rise",
            "description": "The stage is set for strong weekly wins after Wall Street's expectations for a 0.5% rate cut by the Fed shot up.",
            "url": "https://finance.yahoo.com/news/live/stock-market-today-stocks-end-banner-week-with-big-gains-as-jumbo-fed-cut-odds-rise-133138647.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-13T13:31:38Z",
            "content": "US stocks gained ground Friday, posting strong weekly wins after Wall Street's expectations for a jumbo interest rate cut by the Federal Reserve shot up suddenly.\r\nThe S&amp;P 500 (^GSPC) rose 0.5% w… [+10878 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "David Hollerith",
            "title": "Berkshire Hathaway tops $1 trillion market cap for first time as Buffett accelerates BofA stock sales",
            "description": "Berkshire Hathaway reached an exclusive territory Wednesday that in the US currently includes just six other companies — all from the tech world.",
            "url": "https://finance.yahoo.com/news/berkshire-hathaway-tops-1-trillion-market-cap-for-first-time-as-buffett-accelerates-bofa-stock-sales-145441665.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yu9L5HGZGMkK6OVuIgETZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/fb844670-654a-11ef-ad5f-b0e749579145",
            "publishedAt": "2024-08-28T14:54:41Z",
            "content": "Warren Buffett's Berkshire Hathaway (BRK-A, BRK-B) surpassed a market cap of $1 trillion for the first time on Wednesday as it continues to sell some holdings in Bank of America (BAC).\r\nBerkshire is … [+2868 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "editorial-team@simplywallst.com (Simply Wall St)",
            "title": "Top 3 Dividend Stocks To Enhance Your Portfolio",
            "description": "In light of recent market fluctuations and mixed performances across major indices, investors are increasingly seeking stability amidst economic...",
            "url": "https://finance.yahoo.com/news/top-3-dividend-stocks-enhance-130926305.html",
            "urlToImage": "https://media.zenfs.com/en/simply_wall_st__316/297a096e5743176fa71b67c7278a433d",
            "publishedAt": "2024-09-06T13:09:26Z",
            "content": "In light of recent market fluctuations and mixed performances across major indices, investors are increasingly seeking stability amidst economic uncertainties. With value stocks outperforming growth … [+5090 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Maham Fatima",
            "title": "Palantir Technologies Inc. (PLTR): Redditors Are Bullish On This AI Stock",
            "description": "We recently compiled a list of the 10 Best AI Stocks to Buy According to Reddit. In this article, we are going to take a look at where Palantir Technologies ...",
            "url": "https://finance.yahoo.com/news/palantir-technologies-inc-pltr-redditors-072623918.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Pa5XksujEENKEEWlGELU5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/b3f9877ff0f15329165d74e07391a358",
            "publishedAt": "2024-09-09T07:26:23Z",
            "content": "We recently compiled a list of the 10 Best AI Stocks to Buy According to Reddit. In this article, we are going to take a look at where Palantir Technologies Inc. (NYSE:PLTR) stands against the other … [+7963 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Mashaid Ahmed",
            "title": "FuelCell Energy (FCEL): Hedge Funds Are Bullish On This Green Energy Penny Stock Now",
            "description": "We recently compiled a list of the 10 Best Green Energy Penny Stocks to Buy Now. In this article, we are going to take a look at where FuelCell Energy...",
            "url": "https://finance.yahoo.com/news/fuelcell-energy-fcel-hedge-funds-164649384.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-14T16:46:49Z",
            "content": "We recently compiled a list of the 10 Best Green Energy Penny Stocks to Buy Now. In this article, we are going to take a look at where FuelCell Energy (NASDAQ:FCEL) stands against the other green ene… [+7358 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Fahad Saleem",
            "title": "Jim Cramer Says Palantir Technologies Inc. (NYSE:PLTR) is a ‘Cold’ Stock",
            "description": "We recently published a list of Jim Cramer Latest Portfolio: 10 Stocks to Watch in September. Since Palantir Technologies Inc. (NYSE:PLTR) ranks 5th on the...",
            "url": "https://finance.yahoo.com/news/jim-cramer-says-palantir-technologies-133922534.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-20T13:39:22Z",
            "content": "We recently published a list of Jim Cramer Latest Portfolio: 10 Stocks to Watch in September. Since Palantir Technologies Inc. (NYSE:PLTR)  ranks 5th on the list, it deserves a deeper look.\r\nJim Cram… [+5271 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "editorial-team@simplywallst.com (Simply Wall St)",
            "title": "Top US Dividend Stocks To Consider In September 2024",
            "description": "As of mid-September 2024, the U.S. stock market has been experiencing a significant rally, with major indices like the S&P 500 and Nasdaq Composite wrapping ...",
            "url": "https://finance.yahoo.com/news/top-us-dividend-stocks-consider-110941999.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-16T11:09:41Z",
            "content": "As of mid-September 2024, the U.S. stock market has been experiencing a significant rally, with major indices like the S&amp;P 500 and Nasdaq Composite wrapping up their best week of the year. This p… [+4769 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Maria Aspan",
            "title": "Wall Street investors think Trump lost the debate, too",
            "description": "Shares in former President Trump’s company plunged the day after his debate with Vice President Harris.",
            "url": "https://www.npr.org/2024/09/11/nx-s1-5108849/wall-street-investors-think-trump-lost-the-debate-too",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5568x3132+0+290/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F22%2F39%2F299b1e534af1aa08e0b66384f9b7%2Fgettyimages-2170591870.jpg",
            "publishedAt": "2024-09-11T19:07:36Z",
            "content": "Even some of former President Donald Trumps most ardent supporters seem worried he lost Tuesdays debate with Vice President Kamala Harris.\r\nShares in Trump Media &amp; Technology Group, the parent co… [+1685 chars]"
          },
          {
            "source": {
              "id": "the-next-web",
              "name": "The Next Web"
            },
            "author": "Amanda Kavanagh",
            "title": "AI upskilling is essential for Python developers, says education expert",
            "description": "As generative AI continues to evolve at a rapid pace, programmers face a new challenge: mastering meaningful artificial intelligence. It seems that every workplace is pushing towards leveraging the technology — some with more consideration and ethics than oth…",
            "url": "https://thenextweb.com/news/ai-upskilling-is-essential-for-python-developers-says-education-expert",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F08%2FDesigner-3.jpeg&signature=fda7b7ac450926deb29ad79c9a06e7c6",
            "publishedAt": "2024-08-27T10:42:47Z",
            "content": "As generative AI continues to evolve at a rapid pace, programmers face a new challenge: mastering meaningful artificial intelligence.\r\nIt seems that every workplace is pushing towards leveraging the … [+4186 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Jing Pan",
            "title": "‘America is long overdue for a problem’: Jim Rogers says next market crash will be ‘the worst' — names 2 safe assets",
            "description": "The investing legend is “extremely worried.”",
            "url": "https://finance.yahoo.com/news/america-long-overdue-problem-jim-110500320.html",
            "urlToImage": "https://media.zenfs.com/en/moneywise_327/bdd1a1ab99342bb2950ede388eb44443",
            "publishedAt": "2024-08-27T11:05:00Z",
            "content": "America is long overdue for a problem: Jim Rogers says next market crash will be the worst' names 2 safe assets\r\nThe stock market has shown robust upward momentum in 2024, with both the S&amp;P 500 a… [+4330 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Sean Williams, The Motley Fool",
            "title": "Billionaires Warren Buffett, David Tepper, and Terry Smith Are Sending a Very Clear Warning to Wall Street -- Are You Paying Attention?",
            "description": "Some of Wall Street's most successful value-seeking money managers are retreating to the sidelines.",
            "url": "https://finance.yahoo.com/news/billionaires-warren-buffett-david-tepper-090600540.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-21T09:06:00Z",
            "content": "For the better part of two years, the bulls have been firmly in control on Wall Street. A resilient U.S. economy, coupled with excitement surrounding the rise of artificial intelligence (AI), have he… [+7644 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Adam Spatacco, The Motley Fool",
            "title": "A Once-in-a-Decade Investment Opportunity: 1 Artificial Intelligence (AI) Semiconductor Stock to Buy Hand Over Fist Right Now (Hint: It's Not Nvidia)",
            "description": "The AI chip market is expected to eclipse $200 billion by early next decade.",
            "url": "https://finance.yahoo.com/news/once-decade-investment-opportunity-1-123000805.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-19T12:30:00Z",
            "content": "One of the biggest opportunities among artificial intelligence (AI) investments is semiconductor stocks. Of course, some obvious opportunities include such powerhouses as Nvidia and Advanced Micro De… [+6332 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Scott Horsley",
            "title": "The latest jobs data provides a really confusing picture. Here are 4 things to know",
            "description": "There was both good news — and bad news — in the latest jobs report, providing an unclear picture as the Federal Reserve  weighs how much to cut interest rates.",
            "url": "https://www.npr.org/2024/09/06/nx-s1-5101748/jobs-labor-employment-hiring-economy-unemployment",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4800x2700+0+102/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F8c%2Fb2%2Ff19397f84ccc9e972c65036b84c4%2Fgettyimages-2167056379.jpg",
            "publishedAt": "2024-09-06T17:41:05Z",
            "content": "The latest monthly report on the U.S. jobs market had been eagerly anticipated as a key gut check on the health of the economy. Unfortunately, it delivered a mixed picture that doesn't offer clear co… [+3197 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Jose Karlo Mari Tottoc",
            "title": "Jim Cramer Says ‘Berkshire Hathaway (BRK-B) Is What I Call An Up Stock’",
            "description": "We recently compiled a list of the Top 10 Stocks on Jim Cramer’s Radar. In this article, we are going to take a look at where Berkshire Hathaway (NYSE:BRK-B)...",
            "url": "https://finance.yahoo.com/news/jim-cramer-says-berkshire-hathaway-103721842.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/MJF0wSMWqKYI8b.rKoTXYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/71b73ee0cc91ebfae2296b9726a1eba8",
            "publishedAt": "2024-09-06T10:37:21Z",
            "content": "We recently compiled a list of the Top 10 Stocks on Jim Cramers Radar. In this article, we are going to take a look at where Berkshire Hathaway (NYSE:BRK-B) stands against the other stocks on Jim Cra… [+9012 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Tom's Guide"
            },
            "author": "Kate Kozuch",
            "title": "Apple Watch 10 — should you wait or get Apple Watch Series 9 now?",
            "description": "In the market for a new Apple Watch, but not sure whether to buy the Apple Watch Series 9 or wait for Apple Watch 10? Here's what you can expect.",
            "url": "https://www.tomsguide.com/wellness/smartwatches/apple-watch-10-should-you-wait-or-get-apple-watch-series-9-now",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZfbsK.RT_jVdR5SZSmqZhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/toms_guide_826/9d6cd7f92f67e1e9121089304dec68ba",
            "publishedAt": "2024-08-31T05:00:24Z",
            "content": "When you buy through links on our articles, Future and its syndication partners may earn a commission.\r\nThe Apple Watch Series 10, or Apple Watch X, is likely close to making its big debut the next A… [+5245 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Intel's Dow Status Under Threat As Struggling Chipmaker's Shares Plunge",
            "description": "Intel's slumping share price could cost it a spot in the Dow Jones Industrial Average. Reuters reports: Analysts and investors said Intel was likely to be removed from the Dow, pointing to a near 60% decline in the company's shares this year that has made it …",
            "url": "https://slashdot.org/story/24/09/03/2225253/intels-dow-status-under-threat-as-struggling-chipmakers-shares-plunge",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2024-09-03T23:40:00Z",
            "content": "Analysts and investors said Intel was likely to be removed from the Dow, pointing to a near 60% decline in the company's shares this year that has made it the worst performer on the index and left it… [+810 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "editorial-team@simplywallst.com (Simply Wall St)",
            "title": "Return Trends At Kinder Morgan (NYSE:KMI) Aren't Appealing",
            "description": "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Firstly, we'll want to...",
            "url": "https://finance.yahoo.com/news/return-trends-kinder-morgan-nyse-110103936.html",
            "urlToImage": "https://media.zenfs.com/en/simply_wall_st__316/a369c58332e02384b731b98e1f4f054a",
            "publishedAt": "2024-08-24T11:01:03Z",
            "content": "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Firstly, we'll want to see a proven return on capital employed (ROCE) that is increasing, and secondly, … [+3407 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Svea Herbst-Bayliss",
            "title": "Exclusive-Elliott now owns enough of Southwest Airlines to call special meeting",
            "description": "Elliott Investment Management now holds 10% of Southwest Airlines' common stock, crossing the threshold that allows the hedge fund to call a special meeting ...",
            "url": "https://finance.yahoo.com/news/exclusive-elliott-now-owns-enough-230710463.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/ac5be277eee8680e79db285423d205b3",
            "publishedAt": "2024-09-02T23:07:10Z",
            "content": "By Svea Herbst-Bayliss\r\nNEW YORK (Reuters) - Elliott Investment Management now holds 10% of Southwest Airlines' common stock, crossing the threshold that allows the hedge fund to call a special meeti… [+2549 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Anusuya Lahiri",
            "title": "Baidu's Robotaxi Has been Getting Closer To Scalable Adoption With Unit Economics Breakeven In Sight: Goldman Sachs",
            "description": "Goldman Sachs analyst Lincoln Kong maintained a Buy rating on Baidu, Inc (NASDAQ:BIDU) with a price target of $129. Kong rerated the stock after hosting an...",
            "url": "https://finance.yahoo.com/news/baidus-robotaxi-getting-closer-scalable-155349384.html",
            "urlToImage": "https://media.zenfs.com/en/Benzinga/b0572b905b5dc219794b3bf70364702f",
            "publishedAt": "2024-08-26T15:53:49Z",
            "content": "Baidu's Robotaxi Has been Getting Closer To Scalable Adoption With Unit Economics Breakeven In Sight: Goldman Sachs\r\nGoldman Sachs analyst Lincoln Kong maintained a Buy rating on Baidu, Inc (NASDAQ:B… [+2912 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "editorial-team@simplywallst.com (Simply Wall St)",
            "title": "Returns At United Parcel Service (NYSE:UPS) Appear To Be Weighed Down",
            "description": "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Typically, we'll want to...",
            "url": "https://finance.yahoo.com/news/returns-united-parcel-nyse-ups-140013209.html",
            "urlToImage": "https://media.zenfs.com/en/simply_wall_st__316/a39992589d6ac28a1addf81f10e5a992",
            "publishedAt": "2024-09-06T14:00:13Z",
            "content": "To find a multi-bagger stock, what are the underlying trends we should look for in a business? Typically, we'll want to notice a trend of growing return on capital employed (ROCE) and alongside that,… [+3229 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Zinkula",
            "title": "A Gen Xer who grew her savings from $50k to $350k in 10 years shares the FIRE methods she's using to get to $1 million",
            "description": "A Gen Xer shares the FIRE strategies she uses to reach $1 million in savings and retire by age 55.",
            "url": "https://www.businessinsider.com/how-grow-savings-one-million-using-fire-methods-investing-saving-2024-9",
            "urlToImage": "https://i.insider.com/66d88dde1d8d2deb96b8bcb3?width=1200&format=jpeg",
            "publishedAt": "2024-09-05T10:03:02Z",
            "content": "Miriam, age 43, says she's on track to reach her retirement savings goal of at least $1 million by age 55. Miriam\r\n<ul><li>A Gen Xer has grown her savings from $50,000 to $375,000 over the past decad… [+5401 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Beatrice Nolan",
            "title": "Elon Musk is on track to become the world's first trillionaire by 2027, report says",
            "description": "Musk's wealth, which is closely tied to his Tesla stake, has fluctuated over the past few years.",
            "url": "https://www.businessinsider.com/elon-musk-trillionaire-first-2027-tesla-wealth-money-2024-9",
            "urlToImage": "https://i.insider.com/66dec47083b8099cf9fcaa34?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T10:26:40Z",
            "content": "Elon Musk endorsed Trump in July.Steve Granitz/FilmMagic via Getty Images\r\n<ul><li>Elon Musk is projected to become a trillionaire by 2027, per Informa Connect Academy.</li><li>The report's predictio… [+2124 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Insider Inc.",
            "title": "The Road to IPO",
            "description": "Business Insider's virtual event full of insider tips on what makes a successful launch into the public markets.",
            "url": "https://www.businessinsider.com/events/the-road-to-ipo",
            "urlToImage": "https://media.tbistatic.com/bistudios/_00/dev/client/xxxxxx",
            "publishedAt": "2024-09-18T20:35:32Z",
            "content": "The Road to IPO<!-- Meta data --> <!-- Browser favicons --><!-- Google Tag Manager - for BI use GTM-NS64GV - for Insider use GTM-K2K9CK --> (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n… [+2861 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Erin Snodgrass,Jacob Shamsian",
            "title": "EXCLUSIVE: Sen. Elizabeth Warren backs DOJ investigation into Nvidia antitrust allegations",
            "description": "Nvidia's chipmaking dominance starves startups and competitors, Elizabeth Warren wrote in a letter to the Justice Department.",
            "url": "https://www.businessinsider.com/elizabeth-warren-backs-justice-department-nvidia-antitrust-investigation-2024-9",
            "urlToImage": "https://i.insider.com/66da1da95444ffafa762f2d8?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T12:15:02Z",
            "content": "US Sen. Elizabeth Warren is warning that Nvidia, led by CEO Jensen Huang, has too much dominance in the chipmaking market.REUTERS/Andrew Kelly; SAM YEH/AFP via Getty Images\r\n<ul><li>Sen. Elizabeth Wa… [+2888 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "The good, bad, and ugly of life after rate cuts",
            "description": "The Fed won its fight with inflation, but there's still work to be done.",
            "url": "https://www.businessinsider.com/federal-reserve-limited-jobs-mortgages-increased-wins-and-losses-2024-9",
            "urlToImage": "https://i.insider.com/66ed51fccfb7f307e5735a86?width=1200&format=jpeg",
            "publishedAt": "2024-09-20T11:11:34Z",
            "content": "Jerome PowellCarolyn Kaster/AP\r\n<ul><li>This is an excerpt from the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>One down. One to go.Wednes… [+2850 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jordan Hart",
            "title": "Google just stepped up its AI fight with Apple",
            "description": "Apple and Google are intensifying the AI arms race with rapid announcements, including making Gemini Live free following Apple's iPhone 16 launch.",
            "url": "https://www.businessinsider.com/google-stepped-up-ai-fight-apple-iphone-gemini-intelligence-2024-9",
            "urlToImage": "https://i.insider.com/66e86e47bf0250c21493ce45?width=1200&format=jpeg",
            "publishedAt": "2024-09-17T09:32:02Z",
            "content": "Gemini Live is now free for English-language Androids, days after Apple's iPhone announcement.Google/X\r\n<ul><li>Google made a Gemini Live announcement just days after Apple's AI-enabled iPhone launch… [+2272 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Geoff Weiss",
            "title": "In a rare act of defiance, a top K-pop group is going rogue",
            "description": "The high-profile spat is a rarity in the world of K-pop, where groups are developed and closely managed by massive record companies.",
            "url": "https://www.businessinsider.com/top-k-pop-group-newjeans-taking-on-record-giant-hybe-2024-9",
            "urlToImage": "https://i.insider.com/66e302f2bf0250c21492b46d?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T17:22:32Z",
            "content": "The high-profile spat is a rarity in the world of K-pop.The Chosunilbo JNS/Getty Images\r\n<ul><li>K-pop group NewJeans called out record label Hybe in a rogue YouTube livestream.</li><li>It marked a s… [+2295 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Fahad Saleem",
            "title": "Analyst Says Intel (INTC) is ‘Incapable’ of Being a Foundry",
            "description": "We recently published a list of Top 10 Trending AI Stocks Amid Latest News and Analyst Ratings. Since Intel Corp (NASDAQ:INTC) ranks 8th on the list, it...",
            "url": "https://finance.yahoo.com/news/analyst-says-intel-intc-incapable-202950232.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-12T20:29:50Z",
            "content": "We recently published a list of Top 10 Trending AI Stocks Amid Latest News and Analyst Ratings. Since Intel Corp (NASDAQ:INTC) ranks 8th on the list, it deserves a deeper look.\r\nThe reality is finall… [+6054 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Zacks Equity Research",
            "title": "3 Fidelity Mutual Funds to Buy Amid Recession Worries",
            "description": "Invest in Fidelity mutual funds like FIKAX, FIKGX and FCLKX, amid a surge in recession worries.",
            "url": "https://finance.yahoo.com/news/3-fidelity-mutual-funds-buy-135300603.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/3faeee7e1c1e94d283c6ec0640ac8a7c",
            "publishedAt": "2024-09-11T13:53:00Z",
            "content": "Though major U.S. indexes like the S&amp;P 500, the Nasdaq Composite and the Dow Jones Industrial Average have given investors positive returns of 15.2%, 13.4% and 8.1%, respectively, seasonal weakne… [+5746 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Windows Central"
            },
            "author": "jez@windowscentral.com (Jez Corden)",
            "title": "Apple and Microsoft battle for the #1 market cap crown as NVIDIA suffers the biggest single day drop in HISTORY",
            "description": "It's not a hot week for NVIDIA bag holders, as one of the world's biggest tech companies endures the largest single day stock drop in history, wiping $270 billion off its value.",
            "url": "https://www.windowscentral.com/microsoft/apple-and-microsoft-battle-for-the-1-market-cap-crown-as-nvidia-suffers-the-biggest-single-day-drop-in-history",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/L9j55HyDmDHbiNoAZPvWp8-1200-80.jpg",
            "publishedAt": "2024-09-04T12:04:09Z",
            "content": "What you need to know\r\n<ul><li>NVIDIA is a global tech company renowned for industry-leading graphics processing units, powering everything from home gaming to massive cloud server arrays. </li><li>N… [+4572 chars]"
          },
          {
            "source": {
              "id": "fox-news",
              "name": "Fox News"
            },
            "author": "Fox News Staff",
            "title": "Fox News AI Newsletter: AI version of dead actor",
            "description": "Stay up to date on the latest AI technology advancements and learn about the challenges and opportunities AI presents now and for the future.",
            "url": "https://www.foxnews.com/tech/fox-news-ai-newsletter-ai-version-dead-actor",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/Ian-Holm-Actor-AI.jpg",
            "publishedAt": "2024-09-07T12:30:27Z",
            "content": "Welcome to Fox News Artificial Intelligence newsletter with the latest AI technology advancements.\r\nIN TODAYS NEWSLETTER:\r\n- Alien: Romulus director defends AI version of dead actors likeness after f… [+1313 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Avi Kapoor",
            "title": "Wall Street's Most Accurate Analysts Give Their Take On 3 Financials Stocks With Over 12% Dividend Yields",
            "description": "During times of turbulence and uncertainty in the markets, many investors turn to dividend-yielding stocks. These are often companies that have high free...",
            "url": "https://finance.yahoo.com/news/wall-streets-most-accurate-analysts-210418161.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-19T21:04:18Z",
            "content": "Benzinga and Yahoo Finance LLC may earn commission or revenue on some items through the links below.\r\nDuring times of turbulence and uncertainty in the markets, many investors turn to dividend-yieldi… [+2842 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Collin Brantmeyer, The Motley Fool",
            "title": "The Smartest Dividend Stocks to Buy With $500 Right Now",
            "description": "Here are two reliable dividend-paying stocks poised for upside.",
            "url": "https://finance.yahoo.com/news/smartest-dividend-stocks-buy-500-101500065.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-15T10:15:00Z",
            "content": "For investors, dividend-paying stocks offer an immediate return, and those with consistent, rising payouts have performed even better, with less volatility than the benchmark S&amp;P 500. One explana… [+7516 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Affan Mir",
            "title": "UnitedHealth Group Incorporated (UNH): A Beginner Stock You Should Check Out",
            "description": "We recently compiled a list of the 10 Best Beginner Stocks To Buy Now. In this article, we are going to take a look at where UnitedHealth Group Incorporated ...",
            "url": "https://finance.yahoo.com/news/unitedhealth-group-incorporated-unh-beginner-153129680.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/BZethiGfzmapselBAdA_0g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/c34a56642082d17e3fa7c8675c6742b3",
            "publishedAt": "2024-08-29T15:31:29Z",
            "content": "We recently compiled a list of the 10 Best Beginner Stocks To Buy Now. In this article, we are going to take a look at where UnitedHealth Group Incorporated (NYSE:UNH) stands against the other beginn… [+9948 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Beth Pinsker",
            "title": "We’re heading for a $950 billion CD ‘maturity tsunami’ — what’s your next move?",
            "description": "Many 1-year CDs will come due right when interest rates are set to drop.",
            "url": "https://www.marketwatch.com/story/were-heading-for-a-950-billion-cd-maturity-tsunami-whats-your-next-move-7bd029cf",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/CX91xWgU2iuiSpkK7yCMpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/marketwatch_hosted_869/fba3b32e0c46442d8510b0d70d67b4d3",
            "publishedAt": "2024-08-31T14:18:00Z",
            "content": "Your rate on a CD renewal will likely not be as good as the one you got last year. - Getty Images/iStockphoto\r\nIf you are among the millions of American savers who heeded the call last year to lock i… [+5644 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "Struggling bitcoin miners may be revived by Fed rate decision, regardless of cut size",
            "description": "Whether the Federal Reserve delivers a 25 or 50 basis point rate cut, it could mean a turnaround for bitcoin miners, which have been struggling so far this year, market participants said.",
            "url": "https://www.marketwatch.com/story/struggling-bitcoin-miners-may-be-revived-by-fed-rate-decision-regardless-of-cut-size-db64c987",
            "urlToImage": "https://images.mktw.net/im-63283705/social",
            "publishedAt": "2024-09-17T19:51:00Z",
            "content": "Whether the Federal Reserve delivers an ordinary, or slightly larger interest-rate cut on Wednesday, it could trigger a turnaround for bitcoin miners, which have been struggling with higher borrowing… [+363 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "editorial-team@simplywallst.com (Simply Wall St)",
            "title": "Coal India And 2 More High-Yield Dividend Stocks On Indian Exchange",
            "description": "The Indian market has shown impressive momentum, climbing 1.7% in the last 7 days and achieving a remarkable 46% gain over the past year, with earnings...",
            "url": "https://finance.yahoo.com/news/coal-india-2-more-high-010659926.html",
            "urlToImage": "https://media.zenfs.com/en/simply_wall_st__316/f1f0f398416d2d2a408886a3ad9282ac",
            "publishedAt": "2024-08-28T01:06:59Z",
            "content": "The Indian market has shown impressive momentum, climbing 1.7% in the last 7 days and achieving a remarkable 46% gain over the past year, with earnings forecasted to grow by 17% annually. In this thr… [+5222 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Usman Kabir",
            "title": "Palantir Technologies Inc. (NYSE:PLTR): Microsoft Deal Is Game Changing",
            "description": "We recently published a list of 17 Trending AI Stocks on Latest Analyst Ratings and News. In this article, we are going to take a look at where Palantir...",
            "url": "https://finance.yahoo.com/news/palantir-technologies-inc-nyse-pltr-193755344.html",
            "urlToImage": "https://media.zenfs.com/en/insidermonkey.com/fe81fed2ec80fcb33dd80ffe48ca569e",
            "publishedAt": "2024-08-30T19:37:55Z",
            "content": "We recently published a list of 17 Trending AI Stocks on Latest Analyst Ratings and News. In this article, we are going to take a look at where Palantir Technologies Inc. (NYSE:PLTR) stands against t… [+5381 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Apple's event will serve as a litmus test for the wider AI industry",
            "description": "Apple's \"Glowtime\" event is kicking off today. The tech giant will unveil its newest iPhone, alongside AirPods, watches, and Apple Intelligence.",
            "url": "https://www.businessinsider.com/apple-unveiling-products-glowtime-event-iphone16-ai-airpods-2024-9",
            "urlToImage": "https://i.insider.com/66ded39fa0ff598b2665ae37?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T11:59:57Z",
            "content": "Apple\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back! Apple is gearing up to annou… [+6981 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Fast Company"
            },
            "author": "Reuters",
            "title": "Tupperware: a timeline of the iconic brand’s defining moments",
            "description": "The American icon filed for bankruptcy on Tuesday.\n\nTupperware Brands filed for bankruptcy protection on Tuesday, after years of struggling with poor demand for its food storage containers and rising financial losses.",
            "url": "https://www.fastcompany.com/91193616/tupperware-timeline-iconic-brands-defining-moments",
            "urlToImage": "https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/wp-cms-2/2024/09/2024-09-19T021057Z_2_LYNXMPEK8H0SE_RTROPTP_4_TUPPEWARE-BANKRUPTCY.jpg",
            "publishedAt": "2024-09-19T15:16:04Z",
            "content": "Tupperware Brands filed for bankruptcy protection on Tuesday, after years of struggling with poor demand for its food storage containers and rising financial losses.\r\nHeres a look at some of the key … [+4224 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Nalak Das",
            "title": "Why Super Micro Computer (SMCI) Stock Is Offering Handsome Returns",
            "description": "Super Micro Computer (SMCI) is expected to generate strong sales in future supported by robust demand for its servers powered by high-end generative AI chips...",
            "url": "https://finance.yahoo.com/news/why-super-micro-computer-smci-123900212.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/53d9a3fd304ab73d580828e5367313eb",
            "publishedAt": "2024-08-27T12:39:00Z",
            "content": "Super Micro Computer Inc. SMCI has benefited on the back of robust demand for servers powered by high-end generative artificial intelligence (AI) chipsets. SMCI designs, develops, manufactures and se… [+4029 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Mark Zuckerberg could become the richest person on the planet after a $51 billion wealth surge this year",
            "description": "Meta CEO Mark Zuckerberg has gained an unmatched $51 billion in net worth this year, and could surpass Elon Musk and Jeff Bezos with a bit of luck.",
            "url": "https://www.businessinsider.com/mark-zuckerberg-meta-net-worth-wealth-rich-list-musk-bezos-2024-9",
            "urlToImage": "https://i.insider.com/66e05e3fa0ff598b266622d5?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T09:23:47Z",
            "content": "Meta CEO Mark Zuckerberg.Getty\r\n<ul><li>Mark Zuckerberg could become the world's wealthiest person after surging up the rich list.</li><li>The Meta CEO has gained $51 billion this year and recently r… [+3700 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Ana Altchek",
            "title": "The unofficial Nvidia earnings watch party at an NYC bar is the latest sign the AI hype isn't going anywhere",
            "description": "Just when you think the buzz around Nvidia's earnings has reached a fever pitch, there's an unofficial watch party for the earnings results at a bar.",
            "url": "https://www.businessinsider.com/nvidia-earnings-watch-party-bar-nyc-2024-8",
            "urlToImage": "https://i.insider.com/66ce47401aa2ac29ee34d7d3?width=1200&format=jpeg",
            "publishedAt": "2024-08-27T21:43:31Z",
            "content": "Nvidia's much-anticipated quarterly earnings report has attracted a watch party at a New York City bar.Getty/Steve Prezant\r\n<ul><li>Nvidia's second-quarter earnings will be closely watched by the tec… [+3197 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Brian Sozzi",
            "title": "Nvidia gets ready to take over the stock market (again)",
            "description": "Nvidia is about to set the tone for the broader market.",
            "url": "https://finance.yahoo.com/news/nvidia-gets-ready-to-take-over-the-stock-market-again-123030277.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/cOeNrWPviHgisBPbsErhJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/9dee0580-62d6-11ef-bebd-cc5d273ad6be",
            "publishedAt": "2024-08-25T11:37:10Z",
            "content": "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:\r\n<ul><li>The chart of the day\r\n</li><li>What we're watching\r\n</li><li>What we… [+4220 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Cory Renauer, The Motley Fool",
            "title": "2 High-Yield Dow Jones Dividend Stocks to Buy Now and Hold Forever",
            "description": "With yields above 5% at recent prices, this pair of stocks could provide a nice boost for your passive income stream.",
            "url": "https://finance.yahoo.com/news/2-high-yield-dow-jones-105100272.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-22T10:51:00Z",
            "content": "Are you looking for a reliable way to increase the passive income your stock portfolio produces? The Dow Jones Industrial Average is a great place to start looking, and it won't take long. The centur… [+4612 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Manali Pradhan, The Motley Fool",
            "title": "Move Over, Nvidia: Billionaires Are Selling Its Shares and Buying Up These 2 Artificial Intelligence (AI) Stocks Instead",
            "description": "Many billionaires are shifting some of their AI investments toward Super Micro Computer and Microsoft.",
            "url": "https://finance.yahoo.com/news/move-over-nvidia-billionaires-selling-083300873.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-21T08:33:00Z",
            "content": "Wall Street has fallen in love with the artificial intelligence (AI) trend. This is not surprising, considering that PwC analysts expect AI to add nearly $15.7 trillion to the global economy annually… [+7436 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Fatima Gulzar",
            "title": "American Express Company (AXP): A Good Credit Card Stock to Add to Your Portfolio",
            "description": "We recently compiled a list of the 10 Best Credit Card Stocks to Buy Now. In this article, we are going to take a look at where American Express Company...",
            "url": "https://finance.yahoo.com/news/american-express-company-axp-good-192052977.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-14T19:20:52Z",
            "content": "We recently compiled a list of the 10 Best Credit Card Stocks to Buy Now. In this article, we are going to take a look at where American Express Company (NYSE:AXP) stands against the other credit car… [+8406 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Zacks Equity Research",
            "title": "Are You a Value Investor? This 1 Stock Could Be the Perfect Pick",
            "description": "Whether you're a value, growth, or momentum investor, finding strong stocks becomes easier with the Zacks Style Scores, a top feature of the Zacks Premium...",
            "url": "https://finance.yahoo.com/news/value-investor-1-stock-could-134012762.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/d0d4ab152198da2f423d92da8a7d22ee",
            "publishedAt": "2024-09-06T13:40:12Z",
            "content": "For new and old investors, taking full advantage of the stock market and investing with confidence are common goals.\r\nMany investors also have a go-to methodology that helps guide their buy and sell … [+1972 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Debasis Saha",
            "title": "Goldman Thinks Costco Wholesale Corporation (COST) Is A Long-Term AI Stock Set To Rally Eventually",
            "description": "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Costco Wholesale ...",
            "url": "https://finance.yahoo.com/news/goldman-thinks-costco-wholesale-corporation-174127522.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-13T17:41:27Z",
            "content": "We recently published a list of Beyond the Tech Giants: 35 Non-Tech AI Opportunities. In this article, we are going to take a look at where Costco Wholesale Corporation (NASDAQ:COST) stands against t… [+5009 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Zinkula,Madison Hoff",
            "title": "A millennial has been looking for a tech job for over a year after being laid off. He says AI and being Black have worked against him.",
            "description": "A millennial who's been looking for a job for a year shares the strategies he's tried and why he thinks his search has been so difficult.",
            "url": "https://www.businessinsider.com/millennial-cant-find-job-tech-blames-racial-discrimination-ai-2024-9",
            "urlToImage": "https://i.insider.com/66eda299cfb7f307e5738a90?width=1200&format=jpeg",
            "publishedAt": "2024-09-24T10:03:02Z",
            "content": "A millennial (not pictured) has been looking for a tech job for over a year after being laid off. Getty Images; Alyssa Powell/BI\r\n<ul><li>A millennial has been looking for a job after being laid off … [+8523 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Paige Bennett",
            "title": "14 of the best specialty items to get at Aldi this month for $5 or less",
            "description": "This September, Aldi is stocking its shelves with seasonal fall desserts, unique pizzas, fun dips, and quick meals, all for $5 or less each.",
            "url": "https://www.businessinsider.com/best-cheap-things-to-get-at-aldi-september-2024-9",
            "urlToImage": "https://i.insider.com/66d20f9f1d8d2deb96b7d725?width=1200&format=jpeg",
            "publishedAt": "2024-09-01T10:28:02Z",
            "content": "This month, Aldi is carrying seasonal and special items like lobster bites and pumpkin-shaped pizzas. Aldi\r\n<ul><li>This September, Aldi is releasing a ton of limited-edition and seasonal finds for $… [+5511 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Cailey Griffin",
            "title": "My husband retired 5 years ago and I still run my own business. Our schedules are different, but we make it work.",
            "description": "Her husband retired five years ago, and she still runs her own business. She loves the work she does and has no plans to retire yet.",
            "url": "https://www.businessinsider.com/husband-retired-wife-still-working-retirement-plans-2024-8",
            "urlToImage": "https://i.insider.com/66c4f4b8b4912df3ae1d1813?width=1200&format=jpeg",
            "publishedAt": "2024-08-24T10:33:02Z",
            "content": "Ruth Furman still runs her own business while her husband retired five years ago.Photo credit: Mary Rendina Photography\r\n<ul><li>At 57, Ruth Furman still owns her own business and loves her work.</li… [+5175 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Matt Turner",
            "title": "Insider Today: Nike's airball",
            "description": "In this Sunday edition of Insider Today, we're talking about Nike's business woes, and Larry Page's money man.",
            "url": "https://www.businessinsider.com/insider-today-nike-business-woes-larry-page-wayne-osborne",
            "urlToImage": "https://i.insider.com/66edf0b5d17aa3c7b2b4cbec?width=1200&format=jpeg",
            "publishedAt": "2024-09-22T11:08:02Z",
            "content": "Nike\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back to our Sunday edition. This is… [+5588 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Ana Altchek",
            "title": "People pronounce 'Nvidia' in 2 different ways. Only one is correct.",
            "description": "It seems like Nvidia is all anyone in tech can talk about these days. So it's a good idea to make sure you're pronouncing it the correct way.",
            "url": "https://www.businessinsider.com/nvidia-how-to-pronounce-correct-way-2024-8",
            "urlToImage": "https://i.insider.com/66d1c72d1d8d2deb96b79c01?width=1200&format=jpeg",
            "publishedAt": "2024-08-30T15:07:21Z",
            "content": "Some people pronounce Nvidia as \"Nuh-Vidia.\" But that's actually incorrect, according to the company.I-hwa Cheng/Getty\r\n<ul><li>Nvidia is the world's most important stock at the moment — but some peo… [+2301 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "How Much Will the iPhone 16 Cost?",
            "description": "Apple's next-generation iPhone 16 series is expected to launch on September 20 and will compete in a quickly evolving smartphone market, and with some notable upgrades rumored, the new models could see price changes compared to previous years.\n\n\n\n\n\nSuccessive…",
            "url": "https://www.macrumors.com/2024/09/06/how-much-will-iphone-16-cost/",
            "urlToImage": "https://images.macrumors.com/t/xcTabKWMzOGvrlv91McWob6xGn0=/2000x/article-new/2024/06/iPhone-16-Pro-Front-Update-Blue.jpg",
            "publishedAt": "2024-09-06T12:43:10Z",
            "content": "Apple's next-generation iPhone 16 series is expected to launch on September 20 and will compete in a quickly evolving smartphone market, and with some notable upgrades rumored, the new models could s… [+4373 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Nilanjan Choudhury",
            "title": "Chevron Stock Near 52-Week Lows: Is It Good Enough to Invest?",
            "description": "CVX remains one of the best-positioned global integrated oil companies to achieve sustainable production growth.",
            "url": "https://finance.yahoo.com/news/chevron-stock-near-52-week-134800913.html",
            "urlToImage": "https://media.zenfs.com/en/zacks.com/0caaa20aeade0884d0a3a6fed86f758b",
            "publishedAt": "2024-09-05T13:48:00Z",
            "content": "Shares of Chevron Corporation CVX have dropped by nearly 9% over the past three months to close at $142.07 on Wednesday, near 52-week lows of $139.62. Having underperformed its rival ExxonMobil XOM, … [+6618 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Linkedin's job-seeking solution comes with both success and shame",
            "description": "A debate has raged online over LinkedIn's #opentowork banner and the risks some believe it comes with.",
            "url": "https://www.businessinsider.com/linkedin-job-seekers-open-to-work-banner-recruiters-2024-8",
            "urlToImage": "https://i.insider.com/66d70bdd1d8d2deb96b81436?width=1200&format=jpeg",
            "publishedAt": "2024-09-03T13:20:51Z",
            "content": "Rebecca Zisser/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back, and happy birthd… [+7499 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Police"
            },
            "author": "Timi Cantisano",
            "title": "One of the best microSD cards you can buy is now down to an all-time low price",
            "description": "Stock up on storage with this 512GB card",
            "url": "https://www.androidpolice.com/samsung-512gb-microsd-30-deal/",
            "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/09/169-2-1.png",
            "publishedAt": "2024-09-24T08:00:12Z",
            "content": "Samsung Pro Plus microSD card \r\nIf you're the owner of a relatively recent flagship smartphone and want to make sure you're getting the highest speeds out of your expanded storage, consider the Samsu… [+2455 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Vishesh Raisinghani",
            "title": "Warren Buffett cautioned that you should be ready for any stock you buy to plunge ‘50% or more’",
            "description": "The legendary investor says this type of person shouldn't own stocks.",
            "url": "https://finance.yahoo.com/news/warren-buffett-cautioned-ready-stock-104500651.html",
            "urlToImage": "https://media.zenfs.com/en/moneywise_327/91864839a9a0c977218a86637a5bea8e",
            "publishedAt": "2024-09-02T10:45:00Z",
            "content": "Warren Buffett cautioned that you should be ready for any stock you buy to plunge 50% or more\r\nOne of Warren Buffetts most famous pieces of advice is to be fearful when others are greedy and to be gr… [+4511 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Echo Wang and David French",
            "title": "Exclusive-Data center operator Switch weighs IPO at about $40 billion valuation, sources say",
            "description": "The owners of Switch are exploring an initial public offering (IPO) of the data center operator that could value it at about $40 billion, including debt...",
            "url": "https://finance.yahoo.com/news/exclusive-data-center-operator-switch-130457441.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/81e43dbec30b6decb758e23879109fc3",
            "publishedAt": "2024-09-10T13:04:57Z",
            "content": "By Echo Wang and David French\r\nNEW YORK (Reuters) - The owners of Switch are exploring an initial public offering (IPO) of the data center operator that could value it at about $40 billion, including… [+2346 chars]"
          }
        ],
        "crypto": [
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "People Are Setting Themselves on Fire and Getting Punched in the Face to Pump Their Crypto Coins",
            "description": "To compete against thousands of crypto meme coins flooding the market, creators are resorting to elaborate and sometimes dangerous stunts for attention.",
            "url": "https://www.wired.com/story/people-on-fire-punched-pump-crypto-coins/",
            "urlToImage": "https://media.wired.com/photos/66d9d2065e239f454e0afe33/191:100/w_1280,c_limit/090424-business-memecoins-fire.jpg",
            "publishedAt": "2024-09-12T11:00:00Z",
            "content": "The vast majority of these coins never get off the ground. Others attract early attention, then tank after the creator sells off their holdings without warning. A minority of the coins hold value ove… [+3667 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Andy Greenberg, Lily Hay Newman, Dhruv Mehrotra",
            "title": "Iranian Hackers Tried to Give Hacked Trump Campaign Emails to Dems",
            "description": "Plus: The FBI dismantles the largest-ever China-backed botnet, the DOJ charges two men with a $243 million crypto theft, Apple’s MacOS Sequoia breaks cybersecurity tools, and more.",
            "url": "https://www.wired.com/story/iran-hackers-trump-democrats-emails/",
            "urlToImage": "https://media.wired.com/photos/66ed82cf42ad37094e1a41eb/191:100/w_1280,c_limit/GettyImages-2172740225.jpg",
            "publishedAt": "2024-09-21T10:30:00Z",
            "content": "The week was dominated by news that thousands of pagers, walkie-talkies and other devices were exploding across Lebanon on Tuesday and Wednesday in an attack targeting the militant group Hezbollah. A… [+6624 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Flappy Bird Is Coming Back and Stinks of Crypto",
            "description": "An iconic mobile game is being resurrected, but is it all in the name of crypto?",
            "url": "https://gizmodo.com/flappy-bird-is-coming-back-and-stinks-of-crypto-2000498857",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Flappy-Bird-on-a-phone.jpg",
            "publishedAt": "2024-09-16T12:40:12Z",
            "content": "Flappy Bird, the highly addictive, arcade-style mobile game about a bird named Faby is coming back to an app store near you. Unfortunately, there’s a possibility that the iconic game may be tied up i… [+2487 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "A Violent Gang Has Been Breaking Into Houses and Forcing Homeowners to Fork Over Their Crypto",
            "description": "The criminals overlooked how easy it can be to trace crypto.",
            "url": "https://gizmodo.com/a-violent-gang-has-been-breaking-into-houses-and-forcing-homeowners-to-fork-over-their-crypto-2000501683",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/An-image-of-Bitcoin-cryptocurrency.jpg",
            "publishedAt": "2024-09-23T12:20:35Z",
            "content": "Cybercriminals are well practiced at breaking into crypto owners’ online accounts to steal their DeFi wealth. However, one such gang has, until recently, been deploying real, on-the-ground burglars t… [+3139 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Trump’s New Crypto Project Is Reportedly Saving the Best Loot for Its Founders",
            "description": "In a thoroughly predictable development, Trump's new crypto project appears to be heavily weighted towards the already wealthy.",
            "url": "https://gizmodo.com/trumps-new-crypto-project-is-reportedly-saving-the-best-loot-for-its-founders-2000494963",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-and-his-sons-stand-with-JD-Vance-at-the-Republican-Convention.jpg",
            "publishedAt": "2024-09-05T13:20:07Z",
            "content": "Donald Trump and his progeny have been touting a new crypto project that they claim will bring newfound economic power to “the people.” However, a new report claims that instead of doing that, it may… [+2334 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Crypto Bros More Likely to Have Psychopathic Traits, Study Finds",
            "description": "A new peer-reviewed study claims that cryptocurrency enthusiasts are higher in \"Dark Triad\" traits than your average person.",
            "url": "https://gizmodo.com/crypto-bros-more-likely-to-have-psychopathic-traits-study-finds-2000493304",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/A-bitcoin-token-1.jpg",
            "publishedAt": "2024-08-30T19:00:06Z",
            "content": "Cryptocurrency is an industry notably rife with fraudsters, nutjobs, and criminals. Now, in a development that just makes sense, an academic team has published a study asserting that people who are r… [+2920 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "Trump Campaign Gets Hit by Hacks and Crypto Scams",
            "description": "In multiple incidents over the past few weeks, the Trump family has shown that it's all in on crypto and vulnerable to all the hacks and scams that come with it.",
            "url": "https://gizmodo.com/trump-campaign-gets-hit-by-hacks-and-crypto-scams-2000494616",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/DonaldTrumpCyrpto.jpg",
            "publishedAt": "2024-09-04T14:25:12Z",
            "content": "Former President Donald Trump and his family are still, in the year 2024, all in on crypto. Its costing them cash and credibility. On Tuesday night, the X accounts of two Trump family membersLara and… [+3257 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Crypto Mining Company Denies Causing Health Problems in Texas Town",
            "description": "\"We are unaware of any scientific basis to conclude that any sounds from our facility can cause the types of conditions alleged,\" the crypto company said in a statement to Gizmodo.",
            "url": "https://gizmodo.com/crypto-mining-company-denies-causing-health-problems-in-texas-town-2000498078",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Constellation-Energy-Handley-Generating-Station-in-Fort-Worth.jpg",
            "publishedAt": "2024-09-12T20:00:22Z",
            "content": "Cryptocurrency mining is stressing the Texas power grid and causing “unexplained health problems,” for residents of some small towns in the state, according to a new report from the San Antonio Expre… [+4312 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Thankfully, Trump Is Still Alive. Unfortunately, So Is His Misguided Crypto Project",
            "description": "Donald Trump officially announced details of his cryptocurrency project during an X space Monday night.",
            "url": "https://gizmodo.com/thankfully-trump-is-still-alive-unfortunately-so-is-his-misguided-crypto-project-2000499496",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-speaks-at-a-campaign-event-in-Tucson-Arizona.jpg",
            "publishedAt": "2024-09-17T18:20:21Z",
            "content": "Donald Trump dodged another bullet this weekend when a second assassination attempt against him was foiled at his golf course in West Palm Beach. In an apparent show of resilience on Monday, Trump ap… [+5933 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "kcloonan@insider.com (Kelly Cloonan)",
            "title": "The number of bitcoin millionaires has soared 111% in the last year as the cryptocurrency rallies",
            "description": "The number of bitcoin millionaires has soared as  the crypto rallies. There have also been six new crypto billionaires minted in the past year.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-millionaires-crypto-rally-cryptocurrency-etf-billionaires-sec-ethereum-wealth-2024-8",
            "urlToImage": "https://www.businessinsider.com/public/assets/logos/og-image-logo-social.png?v=2023-11",
            "publishedAt": "2024-08-27T18:50:37Z",
            "content": "As crypto rallies, the number of bitcoin millionaires has more than doubled in the last year.\r\nAccording to a new report from New World Wealth and Henley &amp; Partners, the number of bitcoin million… [+2414 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Snapchat finally launched an iPad app",
            "description": "More than a decade after launching on the iPhone, Snapchat has finally brought its app to the iPad, allowing it to fill the entire screen.",
            "url": "https://www.theverge.com/2024/8/27/24229641/snapchat-launches-ipad-app",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/WCE64hNJuG7ijx0VhUB43TMKonc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24489389/236563_Apple_iPad_9th_gen_DSeifert_0001.jpg",
            "publishedAt": "2024-08-27T16:01:36Z",
            "content": "Snapchat finally launched an iPad app\r\nSnapchat finally launched an iPad app\r\n / After more than a decade, Snapchat is now fully supported on the iPad.\r\nByEmma Roth, a news writer who covers the stre… [+1150 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "Trump Sons Plan Crypto Startup",
            "description": "To make America the \"crypto capital of the planet,\" former U.S. President Donald Trump promised crypto-friendly policies, writes Politico, which \"could have a new beneficiary: his own family.\"\n\n\nTrump has vowed to enact an array of pro-crypto policies in a bi…",
            "url": "https://news.slashdot.org/story/24/09/01/1914233/trump-sons-plan-crypto-startup",
            "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
            "publishedAt": "2024-09-01T19:17:00Z",
            "content": "Trump has vowed to enact an array of pro-crypto policies in a bid to win votes — and campaign cash — from digital asset enthusiasts in recent months. Now, he's weaving the overtures into his pitch fo… [+2290 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Sony’s PlayStation PC push now includes a controller customization app",
            "description": "Sony is launching a new Accessories app on PC that lets you customize your PS5’s DualSense Edge controller by changing button assignments, stick sensitivity, and more.",
            "url": "https://www.theverge.com/2024/8/27/24229509/sony-playstation-dualsense-edge-controller-app-pc",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/XUf-sI_wim2W8a7grJJGD96hWcA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24374432/236487_Sony_DualSense_Edge_AKrales_0075.jpg",
            "publishedAt": "2024-08-27T13:59:17Z",
            "content": "Sonys PlayStation PC push now includes a controller customization app\r\nSonys PlayStation PC push now includes a controller customization app\r\n / You can use the new Accessories app to change your Dua… [+1531 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "James Earl Jones, voice of Darth Vader, has died at 93",
            "description": "James Earl Jones, the voice of Darth Vader, has died at age 93. While he was best known for his work in Star Wars, he also starred in The Lion King as Mufasa.",
            "url": "https://www.theverge.com/2024/9/9/24240301/james-earl-jones-darth-vader-voice-died",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/efF0fSvjnwhOzns_J507SwUsqL4=/0x0:3000x2000/1200x628/filters:focal(1709x869:1710x870)/cdn.vox-cdn.com/uploads/chorus_asset/file/25613089/492713228.jpg",
            "publishedAt": "2024-09-09T22:00:54Z",
            "content": "James Earl Jones, voice of Darth Vader, has died at 93\r\nJames Earl Jones, voice of Darth Vader, has died at 93\r\n / His distinguished career in film, TV, and theater spanned decades.\r\nByEmma Roth, a n… [+1395 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "iOS 18 will launch next week with new ways to customize your homescreen",
            "description": "Apple has confirmed that it’s launching iOS 18 on September 16th, alongside macOS Sequoia, watchOS 11, and visionOS 2.",
            "url": "https://www.theverge.com/2024/9/9/24240230/ios-18-release-date-iphone-16",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/4ZnVLvvbomnz74Q2sVcFYQvh9_Q=/0x0:2040x1360/1200x628/filters:focal(695x673:696x674)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931303/236791_Apple_iPhone_15_and_15_Plus_review_DSeifert_0006.jpg",
            "publishedAt": "2024-09-09T20:58:24Z",
            "content": "iOS 18 will launch next week with new ways to customize your homescreen\r\niOS 18 will launch next week with new ways to customize your homescreen\r\n / But well have a little longer to wait to gain acce… [+1436 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Steven Levy",
            "title": "The NSA Has a Podcast—Here's How to Decode It",
            "description": "The spy agency that dared not speak its name is now the Joe Rogan of the SIGINT set. And the pod's actually worth a listen.",
            "url": "https://www.wired.com/story/the-nsa-has-a-podcast-heres-how-to-decode-it-no-such-podcast/",
            "urlToImage": "https://media.wired.com/photos/66da1e7d18525d876d48cb87/191:100/w_1280,c_limit/Plaintext-NAS-Podcast-Business-1964677275.jpg",
            "publishedAt": "2024-09-06T13:00:00Z",
            "content": "My first story for WIREDyep, 31 years agolooked at a group of crypto rebels who were trying to pry strong encryption technology from the government-classified world and send it into the mainstream. N… [+4430 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "Germany Seizes 47 Crypto Exchanges Used By Ransomware Gangs",
            "description": "German law enforcement seized 47 cryptocurrency exchange services \"that facilitated illegal money laundering activities for cybercriminals,\" according to BleepingComputer, \"including ransomware gangs.\" \n\nLong-time Slashdot reader Arrogant-Bastard shares their…",
            "url": "https://news.slashdot.org/story/24/09/23/0018238/germany-seizes-47-crypto-exchanges-used-by-ransomware-gangs",
            "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
            "publishedAt": "2024-09-23T01:41:00Z",
            "content": "German law enforcement seized 47 cryptocurrency exchange services \"that facilitated illegal money laundering activities for cybercriminals,\" according to BleepingComputer, \"including ransomware gangs… [+1343 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "SpyAgent Android Malware Steals Your Crypto Recovery Phrases From Images",
            "description": "SpyAgent is a new Android malware that uses optical character recognition (OCR) to steal cryptocurrency wallet recovery phrases from screenshots stored on mobile devices, allowing attackers to hijack wallets and steal funds. The malware primarily targets Sout…",
            "url": "https://it.slashdot.org/story/24/09/06/220250/spyagent-android-malware-steals-your-crypto-recovery-phrases-from-images",
            "urlToImage": "https://a.fsdn.com/sd/topics/security_64.png",
            "publishedAt": "2024-09-07T00:10:00Z",
            "content": "A malware operation discovered by McAfee was traced back to at least 280 APKs distributed outside of Google Play using SMS or malicious social media posts. This malware can use OCR to recover cryptoc… [+1229 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "The Trumps Have Gone Full Crypto With World Liberty Financial",
            "description": "An anonymous reader quotes a report from Wired: Eric and Donald Trump Jr., the sons of former president Donald Trump, have pledged to \"make finance great again\" with a new family-run crypto endeavor called World Liberty Financial. Introduced in a meandering l…",
            "url": "https://politics.slashdot.org/story/24/09/17/0449227/the-trumps-have-gone-full-crypto-with-world-liberty-financial",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-09-17T13:00:00Z",
            "content": "Eric and Donald Trump Jr., the sons of former president Donald Trump, have pledged to \"make finance great again\" with a new family-run crypto endeavor called World Liberty Financial. Introduced in a … [+2040 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Utah social media law requiring age verification blocked by judge",
            "description": "A federal judge has blocked child safety legislation in Utah that would introduce age verification on social media platforms, saying it likely violates the First Amendment.",
            "url": "https://www.theverge.com/2024/9/11/24241685/utah-netchoice-social-media-child-safety-law-blocked",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/8eAKFY2zb3w6ieH-0l-lnq5vfS0=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25263000/STK461_INTERNET_CHILD_SAFETY_Stock_A_CVirginia.jpg",
            "publishedAt": "2024-09-11T14:02:12Z",
            "content": "Utah social media law requiring age verification blocked by judge\r\nUtah social media law requiring age verification blocked by judge\r\n / A federal judge granted the injunction requested by NetChoice.… [+2260 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Maria Aspan",
            "title": "Wall Street investors think Trump lost the debate, too",
            "description": "Shares in former President Trump’s company plunged the day after his debate with Vice President Harris.",
            "url": "https://www.npr.org/2024/09/11/nx-s1-5108849/wall-street-investors-think-trump-lost-the-debate-too",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5568x3132+0+290/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F22%2F39%2F299b1e534af1aa08e0b66384f9b7%2Fgettyimages-2170591870.jpg",
            "publishedAt": "2024-09-11T19:07:36Z",
            "content": "Even some of former President Donald Trumps most ardent supporters seem worried he lost Tuesdays debate with Vice President Kamala Harris.\r\nShares in Trump Media &amp; Technology Group, the parent co… [+1685 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VentureBeat"
            },
            "author": "Jon Stojan",
            "title": "How ChainMyne is tailoring crypto solutions for elite investors",
            "description": "CONTRIBUTOR CONTENT: The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integration of digital assets into mainstream…",
            "url": "https://venturebeat.com/business/how-chainmyne-is-tailoring-crypto-solutions-for-elite-investors/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2024/09/Kims-shoot-shoot-15-juin-2024-Par-Randy-_I9A3725.jpg?w=1024?w=1200&strip=all",
            "publishedAt": "2024-09-09T17:20:21Z",
            "content": "The cryptocurrency world has undergone many transformations in recent years. The global crypto market capitalization is currently at $2.19 trillion, which highlights the growing acceptance and integr… [+5626 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "US takes aim at Shein and Temu with new import rule proposal",
            "description": "The Biden administration is addressing an import exemption companies use to avoid tariffs when shipping products from China to the US.",
            "url": "https://www.theverge.com/2024/9/13/24243653/us-biden-shein-import-rules-de-minimis-loop-hole",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/rkF1kZElayq1eiYhw5kXXUHh7jU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25545715/STK481_STK432_CONGRESS_GOVERNMENT_CIVRGINIA_C.jpg",
            "publishedAt": "2024-09-13T14:35:02Z",
            "content": "US takes aim at Shein and Temu with new import rule proposal\r\nUS takes aim at Shein and Temu with new import rule proposal\r\n / Chinese e-commerce giants use the de minimis exemption to cheaply ship p… [+2634 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Telegram will now hand over your phone number and IP if you’re a criminal suspect",
            "description": "Telegram has updated its privacy policy, which now says it will disclose a user’s IP address and phone number if the company receives a request from authorities.",
            "url": "https://www.theverge.com/2024/9/23/24252276/telegram-disclose-user-data-legal-requests-criminal-activity",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/VbJ3LeF21b0wZ-YmzjkwK2qjuHU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24008016/acastro_STK085_Telegram_01.jpg",
            "publishedAt": "2024-09-23T18:59:03Z",
            "content": "Telegram will now hand over your phone number and IP if youre a criminal suspect\r\nTelegram will now hand over your phone number and IP if youre a criminal suspect\r\n / If Telegram receives a valid ord… [+2682 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "SpaceX’s historic Polaris Dawn mission: how to watch the launch",
            "description": "SpaceX is set to launch four astronauts into space on August 27th as part of the Polaris Dawn mission, where privately trained astronauts will perform a spacewalk for the first time.",
            "url": "https://www.theverge.com/2024/8/26/24228803/spacex-polaris-dawn-mission-launch-date-time-watch-live",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/oQ-fcRvPy6DE5CBxdjUIUDjZWSk=/0x0:6000x4076/1200x628/filters:focal(3000x2038:3001x2039)/cdn.vox-cdn.com/uploads/chorus_asset/file/25589816/2168615976.jpg",
            "publishedAt": "2024-08-26T20:15:00Z",
            "content": "SpaceXs historic Polaris Dawn mission: how to watch the launch\r\nSpaceXs historic Polaris Dawn mission: how to watch the launch\r\n / For the first time, privately trained astronauts will perform a spac… [+3106 chars]"
          },
          {
            "source": {
              "id": "the-verge",
              "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Google is using AI to make fake podcasts from your research",
            "description": "Google’s AI note-taking app, NotebookLM, will now let you generate a conversation between two AI “hosts” about your research.",
            "url": "https://www.theverge.com/2024/9/11/24242138/google-notebook-llm-ai-fake-podcasts-research",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/nck9Dm4pv6IqJTOKtsk51oa7W5Y=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25362060/STK_414_AI_CHATBOT_R2_CVirginia_C.jpg",
            "publishedAt": "2024-09-11T21:30:29Z",
            "content": "Google is using AI to make fake podcasts from your research\r\nGoogle is using AI to make fake podcasts from your research\r\n / Googles note-taking app can now generate lively audio discussions with two… [+2764 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Donald Trump Launches New $99 NFTs to Shake Down His Loyal Idiots",
            "description": "\"These cards show me dancing and even me holding some bitcoins,\" Trump says.",
            "url": "https://gizmodo.com/donald-trump-launches-new-99-nfts-to-shakedown-his-loyal-idiots-2000491755",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/trump-trading-cards.jpg",
            "publishedAt": "2024-08-28T12:15:05Z",
            "content": "Donald Trump has sold a lot of garbage that brandished his name over the years. Terrible steaks, ridiculous college courses, gaudy sneakers, and $60 public domain bibles, just to name a few. But Trum… [+4363 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "Aaron Katersky, Meredith Deliso",
            "title": "Key witness in FTX fraud case set to be sentenced",
            "description": "Former crypto executive Caroline Ellison had pleaded guilty in connection with the federal fraud and conspiracy case involving the crypto trading platform FTX.",
            "url": "https://abcnews.go.com/US/caroline-ellison-ftx-sentence-federal-case/story?id=113940919",
            "urlToImage": "https://i.abcnewsfe.com/a/c0445bf8-3256-4d9d-8d29-d832d4d2af48/caroline-ellison-gty-gmh-240924_1727203740489_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-09-24T09:33:01Z",
            "content": "Caroline Ellison, a key witness in the FTX case, is set to be sentenced on Tuesday for her role in one of the largest financial frauds in history.\r\nEllison, 29, a former crypto executive, had pleaded… [+2928 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Government of Bhutan Holds Over $825 Million, or Nearly a Third of Its GDP, in Bitcoin, Arkham Data Shows",
            "description": "The government of Bhutan is currently holding over $828 million in bitcoin, according to onchain data by Arkham Intelligence. From a report: \"Unlike most governments, Bhutan's BTC does not come from law enforcement asset seizures, but from bitcoin mining oper…",
            "url": "https://slashdot.org/story/24/09/23/1940238/government-of-bhutan-holds-over-825-million-or-nearly-a-third-of-its-gdp-in-bitcoin-arkham-data-shows",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-09-23T20:05:00Z",
            "content": "The government of Bhutan is currently holding over $828 million in bitcoin, according to onchain data by Arkham Intelligence. From a report: \"Unlike most governments, Bhutan's BTC does not come from … [+1208 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "In Russia, some crypto miners go underground - literally",
            "description": "Russia's southern republic of Dagestan has called for tougher measures against power-hungry cryptocurrency miners who local officials said were causing...",
            "url": "https://www.yahoo.com/news/russia-crypto-miners-underground-literally-082744650.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/2800a853d2012d642ba98c3ce728acfe",
            "publishedAt": "2024-09-24T08:27:44Z",
            "content": "MOSCOW (Reuters) - Russia's southern republic of Dagestan has called for tougher measures against power-hungry cryptocurrency miners who local officials said were causing electricity outages and seek… [+1349 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "Whatever Polymarket Is, It’s Not the Future of News",
            "description": "A betting market is gambling that financial incentives can be the ultimate arbiters of truth.",
            "url": "https://gizmodo.com/whatever-polymarket-is-its-not-the-future-of-news-2000491209",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Polymarket.jpg",
            "publishedAt": "2024-08-27T12:05:13Z",
            "content": "If youre a degenerate gambler then you probably already know that Polymarket is predicting that Trump will win the U.S. election. If youre not a degenerate gambler, then you may not even know what Po… [+10143 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Beatrice Nolan",
            "title": "Adam Neumann's climate startup is quietly refunding investors after failing to launch a crypto token, report says",
            "description": "Flowcarbon has been refunding its Goddess Nature Token after failing to launch the token, Forbes reported.",
            "url": "https://www.businessinsider.com/adam-neumann-climate-startup-flowcarbon-refunding-investors-report-2024-9",
            "urlToImage": "https://i.insider.com/654bd7c2b788914e5552b1c5?width=1200&format=jpeg",
            "publishedAt": "2024-09-12T11:07:50Z",
            "content": "Former WeWork CEO Adam Neumann.Shahar Azran/Getty Images\r\n<ul><li>Adam Neumann's climate tech startup is quietly refunding investors, Forbes reported.</li><li>Flowcarbon has reportedly been refunding… [+2474 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hackaday"
            },
            "author": "Dave Rowntree",
            "title": "Hacking an NVIDIA CMP 170HX Crypto GPU for EM Sim Work",
            "description": "A few years back NVIDIA created a dedicated cryptocurrency mining GPU, the CMP 170HX. This was a heavily restricted version of its flagship A100 datacenter accelerator, using the same GA100 …read more",
            "url": "https://hackaday.com/2024/09/11/hacking-an-nvidia-cmp-170hx-crypto-gpu-for-em-sim-work/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2024/09/cmp-170hx-watercool-4-featured.png",
            "publishedAt": "2024-09-11T23:00:00Z",
            "content": "A few years back NVIDIA created a dedicated cryptocurrency mining GPU, the CMP 170HX. This was a heavily restricted version of its flagship A100 datacenter accelerator, using the same GA100 chip. It … [+2354 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Yaël Bizouati-Kennedy",
            "title": "I’m an Economist: Here Are My Predictions for Crypto in 2025",
            "description": "The crypto space has been on a huge recovery path in 2024 -- a year which saw the approval of spot Bitcoin ETFs (exchange-traded funds) in January, deemed by...",
            "url": "https://finance.yahoo.com/news/m-economist-predictions-crypto-2025-140053579.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/m9fItbamLFIl7Z4gRb0LIA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/2275020d68eed566369c9e83ca65ef52",
            "publishedAt": "2024-09-02T14:00:53Z",
            "content": "The crypto space has been on a huge recovery path in 2024 a year which saw the approval of spot Bitcoin ETFs (exchange-traded funds) in January, deemed by many a landmark decision for the crypto indu… [+4954 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "Here Are 64 Years of RadioShack Catalogs to Browse Online for Free",
            "description": "For more than seven decades, RadioShack published a paper catalog. It's pages are a glorious testament to the electronics hobbyist.",
            "url": "https://gizmodo.com/here-are-64-years-of-radioshack-catalogs-to-browse-online-for-free-2000491654",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/08/RadioShack2000.jpg",
            "publishedAt": "2024-08-27T19:10:46Z",
            "content": "For more than 70 years, RadioShack was an electronics hobbyist’s paradise. It went bankrupt multiple times in the past decade and now its been sold for parts. Its X account famously shills crypto wit… [+2737 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "The NSA Has a Podcast",
            "description": "Steven Levy, writing for Wired: My first story for WIRED -- yep, 31 years ago -- looked at a group of \"crypto rebels\" who were trying to pry strong encryption technology from the government-classified world and send it into the mainstream. Naturally I attempt…",
            "url": "https://yro.slashdot.org/story/24/09/09/2021250/the-nsa-has-a-podcast",
            "urlToImage": "https://a.fsdn.com/sd/topics/privacy_64.png",
            "publishedAt": "2024-09-09T20:41:00Z",
            "content": "My first story for WIRED -- yep, 31 years ago -- looked at a group of \"crypto rebels\" who were trying to pry strong encryption technology from the government-classified world and send it into the mai… [+2126 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matthew Gault",
            "title": "It’s Possible to Clone YubiKeys Thanks to a Newly Discovered Vulnerability",
            "description": "If you’ve got several hours, lots of technical knowledge, and an oscilloscope, you can clone a YubiKey.",
            "url": "https://gizmodo.com/its-possible-to-clone-yubikeys-thanks-to-a-newly-discovered-vulnerability-2000494682",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/YubicoKeys.jpg",
            "publishedAt": "2024-09-04T16:05:51Z",
            "content": "Security researchers have discovered a vulnerability in YubiKey 5 that would allow a dedicated and resourceful hacker to clone the device. As first spotted by Ars Technica, the vulnerability is thank… [+3017 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Kyle Orland, Ars Technica",
            "title": "New AI Model Can Simulate 'Super Mario Bros.' After Watching Gameplay Footage",
            "description": "Despite its limitations, the makers of \"MarioVGG\" think AI video could one day replace game engines.",
            "url": "https://www.wired.com/story/new-ai-model-can-simulate-super-mario-bros-after-watching-gameplay-footage/",
            "urlToImage": "https://media.wired.com/photos/66db3fcaf197ff1a100fea26/191:100/w_1280,c_limit/AI-Learns-Simulate-Mario-Culture-2XFKJMX.jpg",
            "publishedAt": "2024-09-06T19:14:40Z",
            "content": "Last month, Google's GameNGen AI model showed that generalized image diffusion techniques can be used to generate a passable, playable version of Doom. Now, researchers are using some similar techniq… [+6020 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "Aaron Katersky",
            "title": "Former FTX executive Caroline Ellison urges leniency ahead of sentencing",
            "description": "The former crypto executive said she deserves no prison time for her role in one of the largest financial frauds in history.",
            "url": "https://abcnews.go.com/US/former-ftx-executive-caroline-ellison-urges-leniency-ahead/story?id=113930323",
            "urlToImage": "https://s.abcnews.com/images/US/Ellison-rt-ml-240923_1727104072731_hpMain_16x9t_992.jpg?w=1600",
            "publishedAt": "2024-09-23T15:51:29Z",
            "content": "Former FTX executive Caroline Ellison said she deserves no prison time for her role in one of the largest financial frauds in history and federal prosecutors seem inclined to agree.\r\nEllison's attorn… [+2960 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "Aaron Katersky",
            "title": "Sam Bankman-Fried appeals fraud conviction tied to FTX collapse",
            "description": "Sam Bankman-Fried, the founder of bankrupt crypto exchange FTX, was convicted because of a \"false narrative,\" according to his defense team.",
            "url": "https://abcnews.go.com/Business/sam-bankman-fried-appeals-fraud-conviction-tied-ftx/story?id=113674953",
            "urlToImage": "https://i.abcnewsfe.com/a/b78151ad-b612-4ab7-8401-dc1743b2078c/sbf-ap-mo-20240913_1726257990728_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-09-13T20:34:12Z",
            "content": "Sam Bankman-Fried, the founder of bankrupt crypto exchange FTX, was convicted because of a \"false narrative\" told by federal prosecutors at a trial \"tainted\" by errors, his attorneys argued in a new … [+1542 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Mirror.xyz"
            },
            "author": null,
            "title": "Lazarus Group laundered $200M from 25 crypto hacks to fiat",
            "description": "How Lazarus Group laundered $200M from 25+ crypto hacks to fiat from 2020–2023",
            "url": "https://zachxbt.mirror.xyz/B0-UJtxN41cJhpPtKv0v2LZ8u-0PwZ4ecMPEdX4l8vE",
            "urlToImage": "https://images.mirror-media.xyz/publication-images/dz6aTouAEhCLIszRIzGkT.png?height=965&width=1930",
            "publishedAt": "2024-09-15T01:09:25Z",
            "content": "Table of contents\r\n1). Introduction\r\n2). CoinBerry, Unibright, &amp; CoinMetro hacks\r\n3). Nexus Mutual founder hack\r\n4). EasyFi hack\r\n5). Bondly hack\r\n6). Unreported hacks\r\n7). MGNR and PolyPlay hack… [+28987 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Digital Trends"
            },
            "author": "Carli Velocci",
            "title": "Flappy Bird creator denounces remake, claims it’s tied to crypto",
            "description": "The original creator of Flappy Bird has said he is not involved in the project, which also might have crypto ties.",
            "url": "https://www.digitaltrends.com/gaming/flappy-bird-mobile-remake-creator-denounce/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/09/flabby-bird-new.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2024-09-16T19:00:08Z",
            "content": "Flappy Bird Foundation\r\nThe original creator of Flappy Bird has disavowed the just-announced mobile remake, connecting it to crypto and distancing himself from the project.\r\nThe new game, announced l… [+3373 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "Neither Trump nor Harris really gave us much detail about how they will fix the economy in the debate",
            "description": "Many industry leaders were disappointed with the lack of specifics, while others told BI that Harris nailed her business talking points.",
            "url": "https://www.businessinsider.com/trump-harris-economy-tech-debate-tariffs-taxes-2024-9",
            "urlToImage": "https://i.insider.com/66e1ae92a0ff598b26667cd3?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T15:10:42Z",
            "content": "Neither candidate provided much clarity on their economic policies, causing disappointment among some business leaders.Anadolu\r\n<ul><li>Harris and Trump didn't offer clarity on their economic plans, … [+4746 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "Where Harris is outspending Trump the most",
            "description": "Harris is spending most in Pennsylvania and is fueled by huge fundraising numbers. At a Wall Street event on Sunday, she raised $27 million",
            "url": "https://www.businessinsider.com/kamala-harris-outspending-donald-trump-pennsylvania-wall-street-fundraiser-2024-9",
            "urlToImage": "https://i.insider.com/66f18be8ce3009a0fac87392?width=1200&format=jpeg",
            "publishedAt": "2024-09-23T15:54:46Z",
            "content": "Harris raised a whopping $27 million at a Wall Street event, where she appealed to the AI and crypto community.Kevin Dietsch/Getty Images\r\n<ul><li>Harris is outspending Trump by nearly $5 million eve… [+3483 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Stefan Krempl",
            "title": "Crypto Wars: Hungarian Presidency continues fight against encryption",
            "description": "According to a draft by the Council, EU member states should implement recommendations from the \"Going Dark\" expert group to address the \"encryption problem\".",
            "url": "https://www.heise.de/en/news/Crypto-Wars-Hungarian-Presidency-continues-fight-against-encryption-9939732.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/7/4/0/6/2/shutterstock_1099002740-91479fefadcd9774.jpg",
            "publishedAt": "2024-09-23T01:27:12Z",
            "content": "Contents\r\nThis article was originally published in\r\nGerman\r\nand has been automatically translated.\r\nThe Hungarian Presidency of the Council of the EU has proposed that the highly controversial consid… [+4356 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Crypto scammers hack OpenAI's press account on X",
            "description": "OpenAI's official newsroom account on X was compromised by cryptocurrency scammers.",
            "url": "https://techcrunch.com/2024/09/23/crypto-scammers-hack-openais-press-account-on-x/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/openAI-spiral-color-v2.jpg?resize=1200,675",
            "publishedAt": "2024-09-23T22:49:57Z",
            "content": "OpenAI’s official press account on X was compromised by cryptocurrency scammers. Or, at least that’s what appears to have happened. \r\nLate Monday afternoon, OpenAI Newsroom, an account OpenAI recentl… [+2175 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Stock market today: S&P 500 goes for 5-day win streak as markets look ahead to next week's Fed meeting",
            "description": "\"While we acknowledge risks of larger cuts at subsequent meetings, we think the Fed will start off with a 25bp cut next week,\" Bank of America said.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-win-streak-fed-rate-cut-next-week-2024-9",
            "urlToImage": "https://i.insider.com/66e43ad9bf0250c214932934?width=1200&format=jpeg",
            "publishedAt": "2024-09-13T13:34:36Z",
            "content": "US stocks were up on Friday as the S&amp;P 500 and Nasdaq 100 indexes attempted to extend their winning streak to five days.\r\nAfter benign inflation data and initial jobless claims were released earl… [+1604 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Stefan Krempl",
            "title": "Crypto Wars: Ungarischer Ratsvorsitz setzt Kampf gegen Verschlüsselung fort",
            "description": "Laut einem Entwurf der Ratsspitze sollen die EU-Staaten die Empfehlungen der \"Going Dark\"-Expertengruppe zum Knacken des \"Verschlüsselungsproblems\" umsetzen.",
            "url": "https://www.heise.de/news/Crypto-Wars-Ungarischer-Ratsvorsitz-setzt-Kampf-gegen-Verschluesselung-fort-9939717.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/7/4/0/5/5/shutterstock_1099002740-91479fefadcd9774.jpg",
            "publishedAt": "2024-09-22T20:36:00Z",
            "content": "Inhaltsverzeichnis\r\nDie ungarische Ratspräsidentschaft der EU hat vorgeschlagen, die heftig umstrittenen Überlegungen der Hochrangigen Expertengruppe der EU zum Datenzugang für eine wirksame Strafver… [+4760 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "'Flappy Bird' resurrection is likely a ploy to push crypto",
            "description": "\"Flappy Bird\" was slated to relaunch in 2024 after more than ten years of absence from the App Store — but there are signs that it's just a crypto Ponzi scheme.Image generated with Bing Image CreatorOn Thursday, a group of alleged \"Flappy Bird fans\" announced…",
            "url": "https://appleinsider.com/articles/24/09/13/flappy-bird-resurrection-is-likely-a-ploy-to-push-crypto",
            "urlToImage": "https://photos5.appleinsider.com/gallery/61043-125907-generatedwithbing-xl.jpg",
            "publishedAt": "2024-09-13T20:11:56Z",
            "content": "\"Flappy Bird\" was slated to relaunch in 2024 after more than ten years of absence from the App Store — but there are signs that it's just a crypto Ponzi scheme.\r\nOn Thursday, a group of alleged \"Flap… [+1822 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Stock market today: Dow hits record high while tech shares stumble ahead of Nvidia earnings",
            "description": "The Dow hit a record high on Monday. Tech shares edged lower ahead of the hotly anticipated Nvidia earning report scheduled for Wednesday.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-tech-shares-decline-nvidia-earnings-this-week-2024-8",
            "urlToImage": "https://i.insider.com/641471735f4f5400191a0fbe?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T20:10:10Z",
            "content": "US stocks were mixed on Monday with tech shares dragging the S&amp;P 500 and the Nasdaq Composite lower, while the Dow Jones Industrial Average climbed to a record high.\r\nAll eyes are on Nvidia earni… [+1913 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Madeline Duley",
            "title": "I’m a Crypto Investor: 5 Coins I Think Will Make Me the Most Money in 2025",
            "description": "Diving into the world of cryptocurrency offers explosive growth potential, but comes with significant risk. While crypto can be volatile, the key is finding ...",
            "url": "https://finance.yahoo.com/news/m-crypto-investor-5-coins-120147359.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-18T12:01:47Z",
            "content": "Diving into the world of cryptocurrency offers explosive growth potential, but comes with significant risk. While crypto can be volatile, the key is finding coins that provide significant returns wit… [+6189 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Jgc.org"
            },
            "author": null,
            "title": "Cracking an old ZIP file to help open source the ANC's \"Vula\" secret crypto code",
            "description": "It's not often that you find yourself staring at code that few people have ever seen, code that was an important part in bringing down the a...",
            "url": "https://blog.jgc.org/2024/09/cracking-old-zip-file-to-help-open.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7c14emcAhruoYELH_YTk0Gl_SMkPPV8rRdmnjs21QQGiGZoAGn0rnBR2SeSXd4bAQqF83Kgu6bRKkeGjhWXPpzlqJfKkrnuMfNlfZ0CCej9dmGMDlQvDP24Ka3iorprn474jZ_ZUCANTiu9EBC0FLUmjpug9avwL4eoCx3qeX9afO2v3SsqaGdg/w1200-h630-p-k-no-nu/171421935.png",
            "publishedAt": "2024-09-07T16:41:11Z",
            "content": "$ bkcrack -C ALLBAS.ZIP -k 98e0f009 48a0b11a c70f8499 -D ALLBAS-DECRYPTED.ZIP\r\nbkcrack 1.7.0 - 2024-05-26\r\n[07:52:22] Writing decrypted archive ALLBAS-DECRYPTED.ZIP\r\n100.0 % (81 / 81)\r\n$ bkcrack -C C… [+3417 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "America through the looking glass: The crypto bros crowdfunding a new country",
            "description": "How a group of Silicon Valley tech entrepreneurs plan to create \"the network state.\"",
            "url": "https://www.bbc.com/news/articles/cwyl171lyewo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e9d9/live/c146b410-7504-11ef-b282-4535eb84fe4b.png",
            "publishedAt": "2024-09-19T23:22:07Z",
            "content": "Do you look at the possibility of political turbulence ahead of Novembers US presidential election and think: democracy could be in trouble? So does a group of tech entrepreneurs backed by big Silico… [+15307 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Megan Pratz",
            "title": "In interview on X, Trump addresses apparent assassination attempt for the first time",
            "description": "Former President Donald Trump spoke for the first time about the apparent assassination attempt on him Sunday at his golf course and talking to President Biden on Monday.",
            "url": "https://www.npr.org/2024/09/16/nx-s1-5115024/x-interview-trump-assassination-attempt-election",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5039x2834+0+440/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fcc%2F40%2F145eee5c4a3d80ff8522b4fca9b6%2Fgettyimages-2171858505.jpg",
            "publishedAt": "2024-09-17T02:11:33Z",
            "content": "In an interview on the social media platform X, former President Donald Trump spoke publicly for the first time about the apparent attempted assassination the U.S. Secret Service thwarted on Sunday.\r… [+2156 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Decentralized Dog",
            "title": "Bitcoin's Four-Year Cycle Declared \"Dead\" Amid Weakest Post-Halving Performance By Outline Venture",
            "description": "Industry experts are challenging the long-held belief that Bitcoin's price performance is intrinsically linked to the cryptocurrency's quadrennial halving...",
            "url": "https://finance.yahoo.com/news/bitcoins-four-cycle-declared-dead-133703692.html",
            "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/518f0854609b09d611006490a920471a",
            "publishedAt": "2024-09-04T13:37:03Z",
            "content": "Bitcoin's Four-Year Cycle Declared \"Dead\" Amid Weakest Post-Halving Performance By Outline Venture\r\nIndustry experts are challenging the long-held belief that Bitcoin's price performance is intrinsic… [+1360 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "Luke Barr",
            "title": "Americans lost $5.6 billion in cryptocurrency scams in 2023: FBI",
            "description": "The impacts of these schemes are devastating.",
            "url": "https://abcnews.go.com/Politics/americans-lost-56-billion-cryptocurrency-scams-2023-fbi/story?id=113514484",
            "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
            "publishedAt": "2024-09-09T17:22:21Z",
            "content": "Americans lost $5.6 billion in cryptocurrency scams in 2023, according to a new report released by the FBI on Monday.\r\nScammers use elaborate tactics to assure potential victims that their investment… [+2955 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Matt Turner",
            "title": "Insider Today: Nike's airball",
            "description": "In this Sunday edition of Insider Today, we're talking about Nike's business woes, and Larry Page's money man.",
            "url": "https://www.businessinsider.com/insider-today-nike-business-woes-larry-page-wayne-osborne",
            "urlToImage": "https://i.insider.com/66edf0b5d17aa3c7b2b4cbec?width=1200&format=jpeg",
            "publishedAt": "2024-09-22T11:08:02Z",
            "content": "Nike\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Welcome back to our Sunday edition. This is… [+5588 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "To get paid by Russian customers, some Chinese banks are taking documents across borders to get them stamped, reported Reuters",
            "description": "Smaller local Chinese banks are overlooking US sanctions to process payments with Russia because they do not have global businesses to worry about.",
            "url": "https://www.businessinsider.com/russia-economy-chinese-banks-dont-care-us-sanctions-payments-workarounds-2024-9",
            "urlToImage": "https://i.insider.com/66d52002289b805d1db35dbf?width=1200&format=jpeg",
            "publishedAt": "2024-09-02T05:52:33Z",
            "content": "Trade between Russia and China is worth hundreds of billions of dollars.Sergei Savostyanov/Pool/AFP/Getty Images\r\n<ul><li>Chinese state banks are winding down transactions with Russia to avoid US san… [+2531 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Kyle Orland",
            "title": "New AI model “learns” how to simulate Super Mario Bros. from video footage",
            "description": "Despite limitations, \"MarioVGG\" makers think AI video could one day replace game engines.",
            "url": "https://arstechnica.com/ai/2024/09/new-ai-model-learns-how-to-simulate-super-mario-bros-from-video-footage/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/09/MarioVGG_output_grid-536x380.gif",
            "publishedAt": "2024-09-05T17:29:40Z",
            "content": "At first glance, these AI-generated Super Mario Bros. videos are pretty impressive. The more you watch, though, the more glitches you'll see.\r\n13\r\nLast month, Google's GameNGen AI model showed that g… [+3237 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Kellan Jansen",
            "title": "Suze Orman: 1 Reason You Should ‘Absolutely’ Own Bitcoin",
            "description": "Suze Orman is a financial host and author, and in a recent interview with CNBC, she said she believes \"everyone should absolutely\" own the cryptocurrency...",
            "url": "https://finance.yahoo.com/news/suze-orman-1-reason-absolutely-140020553.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-23T14:00:20Z",
            "content": "Suze Orman is a financial host and author, and in a recent interview with CNBC, she said she believes everyone should absolutely own the cryptocurrency bitcoin. Usually, people who support bitcoin as… [+3271 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Threadreaderapp.com"
            },
            "author": null,
            "title": "We created a new account in Telegram and started looking for a job in Estonia",
            "description": "@holger_r: A few months ago we ran a small experiment. We created a new account in Telegram and started looking for a job. We joined channels that were directly about jobs in Estonia. Here’s what happened. We...…",
            "url": "https://threadreaderapp.com/thread/1828526705306411410.html",
            "urlToImage": "https://threadreaderapp.com/images/screenshots/thread/1828526705306411410.jpg",
            "publishedAt": "2024-08-28T15:48:44Z",
            "content": "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "Mathilde Rochefort",
            "title": "Crypto : les start-up françaises en perte de vitesse",
            "description": "Elles ne font pas le poids face à l’IA.",
            "url": "https://www.presse-citron.net/crypto-les-start-up-francaises-en-perte-de-vitesse/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/01/crypto.jpg",
            "publishedAt": "2024-09-05T17:00:05Z",
            "content": "En France, les start-up françaises spécialisées dans les technologies de la blockchain lèvent moins de fonds quavant. Cette tendance sexplique par différents facteurs, et a le potentiel dêtre inversé… [+3019 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techmeme.com"
            },
            "author": null,
            "title": "Some tech and crypto firms, and Wyoming rush to launch their own stablecoins to profit from a recovering crypto market, as experts say tokens are of little use (Nikou Asgari/Financial Times)",
            "description": "Nikou Asgari / Financial Times:\nSome tech and crypto firms, and Wyoming rush to launch their own stablecoins to profit from a recovering crypto market, as experts say tokens are of little use  —  But some industry experts warn that tokens are a ‘novelty asset…",
            "url": "https://www.techmeme.com/240905/p4",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fbb5bd564-e48b-4cfc-8e9f-8d07f305c087.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2024-09-05T06:15:05Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 2:15 AM ET, September 5, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo … [+71 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hipertextual"
            },
            "author": "Gabriel Erard",
            "title": "¿Es el nuevo ‘Flappy Bird’ una estafa cripto? El creador del juego original se despega del proyecto",
            "description": "La semana pasada, Flappy Bird volvió a ser noticia al anunciarse su regreso oficial tras más de 10 años. Detrás del proyecto se presentaba The Flappy Bird Foundation, una organización que afirmaba haber comprado los derechos del juego y su marca registrada. C…",
            "url": "http://hipertextual.com/2024/09/nuevo-flappy-bird-estafa-cripto",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/09/Flappy-Bird-1.jpg",
            "publishedAt": "2024-09-16T14:19:39Z",
            "content": "La semana pasada, Flappy Bird volvió a ser noticia al anunciarse su regreso oficial tras más de 10 años. Detrás del proyecto se presentaba The Flappy Bird Foundation, una organización que afirmaba ha… [+2074 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Maria Aspan",
            "title": "Truth Social reaches a tricky milestone. Will Donald Trump cash out his stake?",
            "description": "Trump can now start selling his majority stake in the Truth Social parent company, as a lockup on insider sales expires. But that could tank the price of the stock.",
            "url": "https://www.npr.org/2024/09/18/nx-s1-5117429/trump-media-truth-social-tricky-business-milestone-shares-sale-djt",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6000x3375+0+313/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F19%2F9d%2Fd8f405fb4c8380bfb89e031203e9%2Fgettyimages-2173005326.jpg",
            "publishedAt": "2024-09-19T09:21:53Z",
            "content": "Trump Media's future is becoming even more uncertain.\r\nThe parent company of Truth Social, the social media company majority-owned by former president Donald Trump, is turning a complicated corner on… [+2906 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "More than 20% of Kamala Harris' July fundraising haul came from California, thanks to the tech world",
            "description": "Kamala Harris raised $12.5 million from individual California donors in July, driven by tech sector support from Google and Alphabet employees.",
            "url": "https://www.businessinsider.com/harris-july-fundraising-california-tech-silicon-valley-2024-8",
            "urlToImage": "https://i.insider.com/66ccb4871aa2ac29ee343019?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T17:22:31Z",
            "content": "Harris has far more support from the tech world than Biden did.ANGELA WEISS/Getty Images\r\n<ul><li>Among individual Harris donors in July, more than 20% hailed from her home state, raising $12.5 mil.<… [+2765 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kenneth Niemeyer",
            "title": "Here's why Gen Z loses more money to online scams than boomers",
            "description": "Gen Z reported losing the most money over average to online scams last year. Boomers lost less on average but lost most to romance scams.",
            "url": "https://www.businessinsider.com/gen-z-loses-more-money-to-online-scams-than-boomers-2024-8",
            "urlToImage": "https://i.insider.com/66d36d8414a5cd1fcc8c68ec?width=1200&format=jpeg",
            "publishedAt": "2024-09-01T10:43:02Z",
            "content": "According to the Better Business Bureau, people aged 18 to 24 reported the highest median losses to online scams last year.seksan Mongkhonkhamsao/Getty Images\r\n<ul><li>Gen Z reported the highest medi… [+3136 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Alice Tecotzky",
            "title": "James Murdoch and 87 other corporate leaders sign a letter endorsing Kamala Harris",
            "description": "The 88 signatories include titans of Wall Street and Silicon Valley. Their support comes as both candidates try to present themselves as pro-business.",
            "url": "https://www.businessinsider.com/murdoch-cuban-corporate-executives-silicon-valley-wall-street-endorse-harris-2024-9",
            "urlToImage": "https://i.insider.com/66db10025444ffafa76319b8?width=1200&format=jpeg",
            "publishedAt": "2024-09-06T14:52:15Z",
            "content": "Harris is trying to present herself as the pro-business candidate.CHRISTIAN MONTERROSA\r\n<ul><li>88 current and former executives from the business and tech worlds signed a letter endorsing Harris.</l… [+3201 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kwan Wei Kevin Tan,Jacob Shamsian",
            "title": "Lawyers for Caroline Ellison, Sam Bankman-Fried's ex, want zero prison time for her",
            "description": "Ellison's lawyers requested a non-custodial sentence for her in a court filing made on Tuesday.",
            "url": "https://www.businessinsider.com/lawyers-caroline-ellison-sam-bankman-fried-ex-zero-jail-time-2024-9",
            "urlToImage": "https://i.insider.com/66e11eca83b8099cf9fd6b6a?width=1200&format=jpeg",
            "publishedAt": "2024-09-11T09:11:01Z",
            "content": "\"Caroline Ellison is a young person of enormous talent and promise, with a deep commitment to helping others,\" lawyers for Caroline Ellison wrote in a sentencing memorandum filed on Tuesday.Michael M… [+2822 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "Struggling bitcoin miners may be revived by Fed rate decision, regardless of cut size",
            "description": "Whether the Federal Reserve delivers a 25 or 50 basis point rate cut, it could mean a turnaround for bitcoin miners, which have been struggling so far this year, market participants said.",
            "url": "https://www.marketwatch.com/story/struggling-bitcoin-miners-may-be-revived-by-fed-rate-decision-regardless-of-cut-size-db64c987",
            "urlToImage": "https://images.mktw.net/im-63283705/social",
            "publishedAt": "2024-09-17T19:51:00Z",
            "content": "Whether the Federal Reserve delivers an ordinary, or slightly larger interest-rate cut on Wednesday, it could trigger a turnaround for bitcoin miners, which have been struggling with higher borrowing… [+363 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Vox"
            },
            "author": "Whizy Kim",
            "title": "Crypto is betting it all on the 2024 elections",
            "description": "It’s probably been a minute since you saw Larry David, Tom Brady, or Matt Damon on TV extolling the benefits of crypto. That’s because the era of feverish crypto hype — interrupted by a cascade of highly publicized scandals — has largely passed since its heyd…",
            "url": "https://www.vox.com/money/371597/crypto-politics-spending-2024-elections-trump",
            "urlToImage": "https://platform.vox.com/wp-content/uploads/sites/2/2024/09/GettyImages-1358554531.jpg?quality=90&strip=all&crop=0%2C10.736125403161%2C100%2C78.527749193677&w=1200",
            "publishedAt": "2024-09-12T22:57:14Z",
            "content": "Its probably been a minute since you saw Larry David, Tom Brady, or Matt Damon on TV extolling the benefits of crypto. Thats because the era of feverish crypto hype interrupted by a cascade of highly… [+14071 chars]"
          },
          {
            "source": {
              "id": "die-zeit",
              "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Bitcoin und Ether: Commerzbank mit neuem Angebot für Kryptowährungen",
            "description": "Hier finden Sie Informationen zu dem Thema „Bitcoin und Ether“. Lesen Sie jetzt „Commerzbank mit neuem Angebot für Kryptowährungen“.",
            "url": "https://www.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen",
            "urlToImage": "https://img.zeit.de/news/2024-09/19/commerzbank-mit-neuem-angebot-fuer-kryptowaehrungen-image-group/wide__1300x731",
            "publishedAt": "2024-09-19T11:56:54Z",
            "content": "Die Commerzbank baut das boomende Geschäft mit Kryptowährungen mit einem neuen Angebot für Firmenkunden aus. Dafür hat das Geldinstitut eine Partnerschaft mit der Deutsche-Börse-Tochter Crypto Financ… [+1464 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Rupert Goodwins",
            "title": "China’s quantum* crypto tech may be unhackable, but it's hardly a secret",
            "description": "* Quite Unlikely A New Technology’s Useful, Man\nOpinion We have a new call to arms in the 21st century battlefront between the West and China. The Middle Kingdom is building an uncrackable national infrastructure based on quantum key distribution (QKD). The l…",
            "url": "https://www.theregister.com/2024/09/16/opinion_column_quantum/",
            "urlToImage": "https://regmedia.co.uk/2016/01/14/photon_image_via_shutterstock.jpg",
            "publishedAt": "2024-09-16T08:30:15Z",
            "content": "Opinion We have a new call to arms in the 21st century battlefront between the West and China. The Middle Kingdom is building an uncrackable national infrastructure based on quantum key distribution … [+4749 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techmeme.com"
            },
            "author": null,
            "title": "Docs and sources reveal how OpenSea morphed into a \"lite\" version of Meta lost between the cultures of Big Tech and crypto, as the SEC and FTC make inquiries (Ben Weiss/The Verge)",
            "description": "Ben Weiss / The Verge:\nDocs and sources reveal how OpenSea morphed into a “lite” version of Meta lost between the cultures of Big Tech and crypto, as the SEC and FTC make inquiries  —  The rise and fall of NFTs made and unmade OpenSea — the largest marketplac…",
            "url": "https://www.techmeme.com/240828/p37",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/pCwqXK1QlqEXEQXfvBGv8c_VhBU=/0x0:1750x1167/1200x628/filters:focal(875x584:876x585)/cdn.vox-cdn.com/uploads/chorus_asset/file/25458127/247119_NFTs_Fraud_JMarshall_LEDE_STILL.jpg",
            "publishedAt": "2024-08-29T02:55:00Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 10:55 PM ET, August 28, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo v… [+168 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Jessica Lyons",
            "title": "North Korean scammers plan wave of stealth attacks on crypto companies, FBI warns",
            "description": "Feds warn of 'highly tailored, difficult-to-detect social engineering campaigns'\nThe FBI has warned that North Korean operatives are plotting \"complex and elaborate\" social engineering attacks against employees of decentralized finance (DeFi) organizations, a…",
            "url": "https://www.theregister.com/2024/09/05/fbi_north_korean_scammers_prepping/",
            "urlToImage": "https://regmedia.co.uk/2024/09/04/shutterstock_1951277734.jpg",
            "publishedAt": "2024-09-05T01:17:42Z",
            "content": "The FBI has warned that North Korean operatives are plotting \"complex and elaborate\" social engineering attacks against employees of decentralized finance (DeFi) organizations, as part of ongoing eff… [+4200 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Linux Kernel 6.11 is Out",
            "description": "Linux creator Linus Torvalds has released version 6.11 of the open-source operating system kernel. The new release, while not considered major by Torvalds, introduces several notable improvements for AMD hardware users and Arch Linux developers. ZDNet: This l…",
            "url": "https://linux.slashdot.org/story/24/09/16/1928224/linux-kernel-611-is-out",
            "urlToImage": "https://a.fsdn.com/sd/topics/linux_64.png",
            "publishedAt": "2024-09-16T19:28:00Z",
            "content": "Check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your GitHub releases to SourceForge quickly a… [+228 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Small Business Trends"
            },
            "author": "Pratik Dholakiya",
            "title": "Top Web3 PR Marketing Agencies in 2024",
            "description": "These are the top Web3 public relations agencies available to companies in 2024.",
            "url": "https://smallbiztrends.com/?p=1493414",
            "urlToImage": "https://media.smallbiztrends.com/2024/08/MarketAcross.png",
            "publishedAt": "2024-09-01T02:03:18Z",
            "content": "As the blockchain, crypto and Web3 space continues to grow, specialized public relations is more important than ever. Enter Web3 PR agencies: the superheroes of this niche, empowering their clients t… [+7374 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "Jean-Yves Alric",
            "title": "Crypto, Tech : Donald Trump révèle ses placements financiers avec de grosses surprises",
            "description": "Le milliardaire a diversifié son patrimoine.",
            "url": "https://www.presse-citron.net/crypto-tech-donald-trump-revele-ses-placements-financiers-avec-de-grosses-surprises/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/08/Donald-Trump-finances.jpg",
            "publishedAt": "2024-09-01T15:56:45Z",
            "content": "Il sen serait probablement passé, mais cest une obligation à laquelle chaque candidat à la Maison-Blanche doit se soumettre. Donald Trump a dû déclarer son patrimoine à lUS Office of Government Ethic… [+2910 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Phys.Org"
            },
            "author": "Tanner Stening",
            "title": "Do crypto enthusiasts actually make up a significant voting bloc in the US?",
            "description": "Former President Donald Trump is making a push to appeal to so-called \"crypto\" voters this election cycle, promising to unveil a plan that would turn the U.S. into the \"crypto capital of the planet.\"",
            "url": "https://phys.org/news/2024-09-crypto-enthusiasts-significant-voting-bloc.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/crypto.jpg",
            "publishedAt": "2024-09-04T16:07:04Z",
            "content": "Former President Donald Trump is making a push to appeal to so-called \"crypto\" voters this election cycle, promising to unveil a plan that would turn the U.S. into the \"crypto capital of the planet.\"… [+5082 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "GameSpot"
            },
            "author": "Blair Marnell",
            "title": "Flappy Bird Creator Reacts To The Return Of His Game",
            "description": "Comebacks in gaming are nothing new in the industry, but last week's announcement about the return of Flappy Bird caught some people by surprise. The game was a huge hit on app stores after its release in 2013, but the game's creator Dong Nguyen had it abrupt…",
            "url": "https://www.gamespot.com/articles/flappy-bird-creator-reacts-to-the-return-of-his-game/1100-6526502/",
            "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1837/18375603/4367649-flappybird.jpg",
            "publishedAt": "2024-09-16T16:39:00Z",
            "content": "Comebacks in gaming are nothing new in the industry, but last week's announcement about the return of Flappy Bird caught some people by surprise. The game was a huge hit on app stores after its relea… [+1511 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Atlantic"
            },
            "author": "Lora Kelley",
            "title": "The Tech-Trump Alliance",
            "description": "A conversation with Ali Breland about the long-simmering ideas animating Silicon Valley’s rightward turn",
            "url": "https://www.theatlantic.com/newsletters/archive/2024/08/the-tech-trump-alliance/679656/",
            "urlToImage": "https://cdn.theatlantic.com/thumbor/PDOnLAFCKF0m11wXiFhezSlNUaI=/5x172:3905x2203/1200x625/media/img/mt/2024/08/GettyImages_629843762/original.jpg",
            "publishedAt": "2024-08-29T21:42:00Z",
            "content": "This is an edition of The Atlantic Daily, a newsletter that guides you through the biggest stories of the day, helps you discover new ideas, and recommends the best in culture. Sign up for it here.So… [+8430 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Android Authority"
            },
            "author": "Ryan McNeal",
            "title": "Original Flappy Bird creator wants you to know he does not support the new game",
            "description": "The original creator is distancing himself from the new Flappy Bird game.",
            "url": "https://www.androidauthority.com/flappy-bird-creator-speaks-3481908/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/09/Flappy-Bird.jpg",
            "publishedAt": "2024-09-15T19:20:15Z",
            "content": "<ul><li>The creator of Flappy Bird, Dong Nguyen, has now commented about the games return.</li><li>Nguyen says he has nothing to do with the revival.</li><li>Nguyen also states that he did not sell a… [+1780 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Rolling Stone"
            },
            "author": "Stephen Rodrick",
            "title": "Crypto Comes For Sherrod Brown: $32 Million in Ads Boosting His Opponent",
            "description": "Crypto companies are spending $800,000 a day to take out Sherrod Brown, one of their chief critics in Congress, and replace him with an ally.",
            "url": "http://www.rollingstone.com/politics/politics-features/sherrod-brown-crypto-bernie-moreno-millions-1235102478/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/09/sherrod-brown-crypto-onslaught.jpg?w=1600&h=900&crop=1",
            "publishedAt": "2024-09-15T13:00:00Z",
            "content": "The end of 2023 was not a great time for the crypto industry. In November, Sam Bankman-Fried, the founder of the FTX cryptocurrency exchange, learned that no amount of Michael Lewis gymnastics could … [+7487 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin millionaires have doubled in a year — thanks to Bitcoin ETFs",
            "description": "The global population of crypto millionaires has surged by 95% over the past year, driven by the rise of Bitcoin ETFs and other crypto assets, according to a new report.Read more...",
            "url": "https://qz.com/bitcoin-millionaires-bitcoin-etfs-crypto-wealth-report-1851635391",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/062353e99b06fb5380e6c622d0ee26cb.jpg",
            "publishedAt": "2024-08-29T14:15:00Z",
            "content": "In This Story\r\nThe global population of crypto millionaires has surged by 95% over the past year, driven by the rise of Bitcoin ETFs and other crypto assets, according to a new report.\r\nThe latest Cr… [+1311 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techmeme.com"
            },
            "author": null,
            "title": "According to a court filing on August 30, SEC seeks a change in the FTX's bankruptcy plan and says it may challenge any distributions involving crypto assets (Amitoj Singh/CoinDesk)",
            "description": "Amitoj Singh / CoinDesk:\nAccording to a court filing on August 30, SEC seeks a change in the FTX's bankruptcy plan and says it may challenge any distributions involving crypto assets  —  The SEC said that it may challenge any transactions of distributions inv…",
            "url": "https://www.techmeme.com/240902/p3",
            "urlToImage": "https://www.coindesk.com/resizer/PTxwsR00COVeSk8dvk8WcxMl2ws=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SUDBT5BUYFA3FFL6D46BWNOBU4.jpg",
            "publishedAt": "2024-09-02T09:50:17Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 5:50 AM ET, September 2, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo … [+182 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Cracked.com"
            },
            "author": "JM McNab",
            "title": "Kevin Smith Somehow Made a Million Dollars From His NFT Movie",
            "description": "‘KillRoy Was Here’ was rejected by streamers",
            "url": "https://www.cracked.com/article_43611_kevin-smith-somehow-made-a-million-dollars-from-his-nft-movie.html",
            "urlToImage": "https://s3.crackedcdn.com/phpimages/article/9/4/8/1151948.jpg",
            "publishedAt": "2024-09-17T13:00:00Z",
            "content": "If youre a fan of director Kevin Smith, youve probably seen movies like Clerks, Mallrats and Dogma, but one of his films has hardly been viewed by anyone at all (and, sadly, it isnt Yoga Hosers).\r\nIn… [+2751 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Brandon Vigliarolo",
            "title": "Predator spyware updated withn dangerous new features, also now harder to track",
            "description": "Plus: Trump family X accounts hijacked to promote crypto scam; Fog ransomware spreads; Hijacked PyPI packages; and more\nInfosec in brief After activating its chameleon field and going to ground following press attention earlier this year, the dangerous Predat…",
            "url": "https://www.theregister.com/2024/09/09/predator_spyware_trump_crypto/",
            "urlToImage": "https://regmedia.co.uk/2023/05/26/shutterstock_predator.jpg",
            "publishedAt": "2024-09-09T02:00:23Z",
            "content": "Infosec in brief After activating its chameleon field and going to ground following press attention earlier this year, the dangerous Predator commercial spyware kit is back with upgrades.\r\nInsikt Gro… [+7116 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "Jean-Yves Alric",
            "title": "Vous pensez être à l’abri des arnaques à la crypto ? Erreur fatale…",
            "description": "Un nouveau rapport nous invite à redoubler de vigilance.",
            "url": "https://www.presse-citron.net/vous-pensez-etre-a-labri-des-arnaques-a-la-crypto-erreur-fatale/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/01/unsplash-kanchanara-bitcoin.jpg",
            "publishedAt": "2024-09-11T14:57:09Z",
            "content": "Cest un signal dalarme que pousse le Federal Bureau of Investigation (FBI) dans un rapport récemment publié. La police fédérale américaine indique en effet que les investisseurs ont perdu un montant … [+2431 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Droid Life"
            },
            "author": "Kellen",
            "title": "OSOM Reportedly Shutting Down After Making Just One Crypto Phone",
            "description": "We haven’t talked about OSOM much over the past couple of years because I made a promise that if their first phone was a crypto phone, we wouldn’t see any reason to continue a conversation around it. Sure enough, the first OSOM phone was a crypto phone known …",
            "url": "https://www.droid-life.com/2024/09/04/osom-reportedly-shutting-down-after-making-just-one-crypto-phone/",
            "urlToImage": "https://www.droid-life.com/wp-content/uploads/2022/05/OSOM-OV1-1-600x315-cropped.jpg",
            "publishedAt": "2024-09-04T17:35:10Z",
            "content": "We haven’t talked about OSOM much over the past couple of years because I made a promise that if their first phone was a crypto phone, we wouldn’t see any reason to continue a conversation around it.… [+1054 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Jessica Lyons",
            "title": "'Hadooken' Linux malware targets Oracle WebLogic servers",
            "description": "Nastyware seeks creds, mines crypto, and plants ransomware that isnt deployed - for now?\nAn unknown attacker is exploiting weak passwords to break into Oracle WebLogic servers and deploy an emerging Linux malware called Hadooken, according to researchers from…",
            "url": "https://www.theregister.com/2024/09/13/hadooken_attacks_oracle_weblogic/",
            "urlToImage": "https://regmedia.co.uk/2024/09/12/shutterstock_streetfighter-8_bit-art.jpg",
            "publishedAt": "2024-09-13T00:31:12Z",
            "content": "An unknown attacker is exploiting weak passwords to break into Oracle WebLogic servers and deploy an emerging Linux malware called Hadooken, according to researchers from cloud security outfit Aqua.\r… [+2029 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Journal du geek"
            },
            "author": "Arthur Nicolle",
            "title": "Le nouveau Flappy Bird sera dopé aux cryptos et fait déjà polémique",
            "description": "Le créateur original du jeu affirme n'avoir aucun lien avec la nouvelle version prévue pour la fin d'année.",
            "url": "https://www.journaldugeek.com/2024/09/17/le-nouveau-flappy-bird-sera-dope-aux-cryptos-et-fait-deja-polemique/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/09/flappy-bird-2-crypto.jpg",
            "publishedAt": "2024-09-17T06:36:12Z",
            "content": "La semaine dernière, nous apprenions le retour inattendu de Flappy Bird. Entre 2013 et 2014, le petit jeu mobile a rencontré un succès si fulgurant que son créateur a fini par le supprimer. De peur q… [+3702 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "HYPEBEAST"
            },
            "author": "info@hypebeast.com (Hypebeast)",
            "title": "'Flappy Bird' Creator Confirms Non-Involvement in Game's Upcoming Reboot",
            "description": "Dong Nguyen, the creator of the original Flappy Bird, has clarified that he is not involved in the game's upcoming reboot from The Flappy Bird Foundation.The developer took to X to confirm his non-involvement, simply writing, \"No, I have no related with their…",
            "url": "https://hypebeast.com/2024/9/flappy-bird-creator-dong-nguyen-not-involved-game-reboot",
            "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F09%2F16%2Fflappy-bird-creator-dong-nguyen-not-involved-game-reboot-tw.jpg?w=1080&cbr=1&q=90&fit=max",
            "publishedAt": "2024-09-17T06:55:54Z",
            "content": "Dong Nguyen, the creator of the original Flappy Bird, has clarified that he is not involved in the game’s upcoming reboot from The Flappy Bird Foundation.\r\nThe developer took to X to confirm his non-… [+981 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "LARRY NEUMEISTER",
            "title": "Sam Bankman-Fried's lawyers claim in an appeal that he was judged too quickly",
            "description": "Lawyers for Sam Bankman-Fried claim in an appeal filed Friday that the imprisoned FTX founder was the victim of a rush to judgment by a public that wrongly...",
            "url": "https://finance.yahoo.com/news/sam-bankman-frieds-lawyers-claim-211607560.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-09-13T21:16:07Z",
            "content": "NEW YORK (AP) Lawyers for Sam Bankman-Fried claim in an appeal filed Friday that the imprisoned FTX founder was the victim of a rush to judgment by a public that wrongly believed he was guilty of ste… [+2923 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Crypto insurance: What is it and why do we need it?",
            "description": "Cryptocurrency is recognized as a high-risk investment, and unlike assets held in banks or brokerage accounts, your crypto holdings aren’t federally insured. With the increasing prevalence of crypto theft and scams, it’s no surprise that investors seek ways t…",
            "url": "https://qz.com/crypto-insurance-1851641007",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9b3e22ce8f1d552090c7878678e2d743.jpg",
            "publishedAt": "2024-09-09T09:00:00Z",
            "content": "Insurance companies are cautiously entering the cryptocurrency market, offering limited coverage that addresses certain scenarios but not all. Cryptocurrency insurance typically covers virtual assets… [+814 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Lloyd Lee",
            "title": "Mark Cuban sees a new Democratic Party under Kamala Harris",
            "description": "Mark Cuban told Business Insider that he wants an open-minded candidate who won't be an \"ideologue.\" The DNC showed him Kamala Harris fit the bill.",
            "url": "https://www.businessinsider.com/mark-cuban-sees-new-democratic-party-under-kamala-harris-2024-8",
            "urlToImage": "https://i.insider.com/66ca79c61aa2ac29ee33faf2?width=1200&format=jpeg",
            "publishedAt": "2024-08-25T01:46:37Z",
            "content": "Mark Cuban has been touted as a future presidential candidate.BRENDAN SMIALOWSKI/Getty Images\r\n<ul><li>Mark Cuban told Business Insider he doesn't want an \"ideologue\" for President.</li><li>This week… [+3884 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin is below $60,000 because crypto whales are dumping it",
            "description": "Bitcoin fell below $60,000 again on Wednesday, triggered by a significant amount of tokens transferred to popular crypto exchanges. This reversed the gains made over the weekend following the Fed Chair’s speech. The leading cryptocurrency decreased by more th…",
            "url": "https://qz.com/bitcoin-falls-below-60-000-massive-sell-off-1851634397",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9db5937f47f217865c878ee479ec1cf4.jpg",
            "publishedAt": "2024-08-28T17:42:00Z",
            "content": "In This Story\r\nBitcoin fell below $60,000 again on Wednesday, triggered by a significant amount of tokens transferred to popular crypto exchanges. This reversed the gains made over the weekend follow… [+1567 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "A guide to handling crypto during a divorce",
            "description": "Going through a divorce can be a complicated, stressful, and drawn-out process. One of the most critical aspects that divorcing spouses must address is their finances. While managing traditional assets can be relatively straightforward, the rise of cryptocurr…",
            "url": "https://qz.com/deal-cryptocurrency-during-a-divorce-1851634146",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d5cdb964e244e0d39dcd63feee8031df.jpg",
            "publishedAt": "2024-09-04T09:00:00Z",
            "content": "It is crucial to have a fundamental understanding of cryptocurrency and its mechanisms, especially during divorce proceedings, where the identification and valuation of assets are central to the proc… [+731 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Sidhartha Shukla",
            "title": "Telegram-Linked Crypto Token Sheds $2.7 Billion After CEO Held",
            "description": "(Bloomberg) -- A digital asset from a blockchain project linked to Telegram Messenger LLP has lost about $2.7 billion in market value, reflecting the...",
            "url": "https://finance.yahoo.com/news/telegram-linked-crypto-token-sheds-024028188.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_technology_68/16293302e547efd69baf02cb8ebd07a5",
            "publishedAt": "2024-08-26T02:40:28Z",
            "content": "(Bloomberg) -- A digital asset from a blockchain project linked to Telegram Messenger LLP has lost about $2.7 billion in market value, reflecting the uncertainty sparked by the detention of the messa… [+2735 chars]"
          }
        ]
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
