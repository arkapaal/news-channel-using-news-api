import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles=[
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Bitcoin Price Prediction June 2024 – Here’s Why $100k May Be Next",
        "description": "Bitcoin price started this week relatively slowly, but BTC is still trading around $69k as we explore the bitcoin price… Continue reading Bitcoin Price Prediction June 2024 – Here’s Why $100k May Be Next\nThe post Bitcoin Price Prediction June 2024 – Here’s Wh…",
        "url": "https://readwrite.com/bitcoin-price-prediction-june-2024-heres-why-100k-may-be-next/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Bitcoin-price.jpg",
        "publishedAt": "2024-05-27T14:21:36Z",
        "content": "Bitcoin price started this week relatively slowly, but BTC is still trading around $69k as we explore the bitcoin price forecast and why $100k is “on the table” for June.\r\nBitcoin Price Forecast for … [+3622 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX",
        "description": "Prominent investment management firm VanEck announced that it is about to list Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF)… Continue reading VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX\nThe post VanEck Set to Launch Spot Bitcoi…",
        "url": "https://readwrite.com/vaneck-set-to-launch-spot-bitcoin-etf-on-australias-asx/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ea85a934-c8fc-4d65-9279-ff85bb79fbae.webp",
        "publishedAt": "2024-06-17T15:43:51Z",
        "content": "Prominent investment management firm VanEck announced that it is about to list\r\n Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF) listed on the domestic Australian Securities Exchange … [+1968 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin trades above supports, bank collapses are a good omen",
        "description": "Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within… Continue reading Bitcoin trades above supports, bank collapses are a good omen\nThe post Bitcoin trades above supports, bank col…",
        "url": "https://readwrite.com/bitcoin-trades-above-supports-bank-collapses-are-a-good-omen/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/fc23b9c7-9438-4ba4-a436-fabd4fed874e.webp",
        "publishedAt": "2024-06-05T11:32:13Z",
        "content": "Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within a narrow range, hinting at a possible breakout.\r\nJamie Coutts Real V… [+2258 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Olaleye Komolafe",
        "title": "Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocurrencies",
        "description": "TLDR   Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency. Market experts believe Ethereum (ETH) could dip… Continue reading Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocur…",
        "url": "https://readwrite.com/bitcoin-and-ethereum-traders-flee-short-term-bearish-trends-rotating-funds-to-alternative-cryptocurrencies/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Featured-Image-for-Rebel-Satoshi.jpg",
        "publishedAt": "2024-06-20T03:37:47Z",
        "content": "TLDR  \r\n\u003Cul\u003E\u003Cli\u003EBitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency.\u003C/li\u003E\u003Cli\u003EMarket experts believe Ethereum (ETH) could dip below the $2,900 price mark.\u003C/li\u003E\u003Cli\u003ERebe… [+3670 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Winklevoss twins donate $1M in Bitcoin to Trump’s campaign",
        "description": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s… Continue reading Winklevoss twins donate $1M in Bitcoin to Trump’s campaign\nThe post Winklevoss twins donate $1M in Bitcoin to Trump’s c…",
        "url": "https://readwrite.com/winklevoss-twins-donate-1m-in-bitcoin-to-trumps-campaign/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/GQij8RdakAU8Vor-min-scaled.jpeg",
        "publishedAt": "2024-06-21T16:32:19Z",
        "content": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s 2024 presidential campaign.\r\nThe presumptive Republican nominee’s campaign re… [+3507 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin and Ethereum ETNs listed on London Stock Exchange",
        "description": "The London Stock Exchange (LSE) has begun trading Bitcoin (BTC) and Ethereum (ETH) exchange-traded notes (ETNs), potentially paving the way… Continue reading Bitcoin and Ethereum ETNs listed on London Stock Exchange\nThe post Bitcoin and Ethereum ETNs listed o…",
        "url": "https://readwrite.com/bitcoin-and-ethereum-etns-listed-on-london-stock-exchange/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/1bf8e383-82ee-4843-b701-549b9475eb3f.webp",
        "publishedAt": "2024-05-28T13:11:16Z",
        "content": "The London Stock Exchange (LSE) has begun trading Bitcoin (BTC) and Ethereum (ETH) exchange-traded notes (ETNs), potentially paving the way for the UK to become Europe’s crypto hub, according to Alex… [+2638 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "BlackRock’s Bitcoin ETF overtakes Grayscale’s GBTC",
        "description": "BlackRock’s spot Bitcoin (BTC) exchange-traded fund (ETF), IBIT, has overtaken Grayscale’s GBTC to become the largest product of its kind.… Continue reading BlackRock’s Bitcoin ETF overtakes Grayscale’s GBTC\nThe post BlackRock’s Bitcoin ETF overtakes Grayscal…",
        "url": "https://readwrite.com/blackrocks-bitcoin-etf-overtakes-grayscales-gbtc/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/7a340d79-5b46-4ae2-b016-80aff63a33cd.webp",
        "publishedAt": "2024-05-29T14:37:44Z",
        "content": "BlackRock’s spot Bitcoin (BTC) exchange-traded fund (ETF), IBIT, has overtaken Grayscale’s GBTC to become the largest product of its kind.\r\nAccording to data shared by the company, this shift occurre… [+2603 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin futures trading sets another record as crypto confidence climbs",
        "description": "According to data shared by CoinGlass, Bitcoin (BTC) traders have set a new record for the highest-ever positions on BTC-tracked… Continue reading Bitcoin futures trading sets another record as crypto confidence climbs\nThe post Bitcoin futures trading sets an…",
        "url": "https://readwrite.com/bitcoin-futures-trading-sets-another-record-as-crypto-confidence-climbs/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cf5c9062-2edb-4cce-afff-1410e6d7acce.webp",
        "publishedAt": "2024-06-07T19:56:27Z",
        "content": "According to data shared by CoinGlass, Bitcoin (BTC) traders have set a new record for the highest-ever positions on BTC-tracked futures, with open interest surpassing $37.7 billion on Thursday. This… [+1929 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update",
        "description": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting… Continue reading Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update\nThe p…",
        "url": "https://readwrite.com/why-should-you-invest-in-this-learn-to-earn-bitcoin-alternative-cilinix-crypto-presale-update/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cilinix-crypto-99btc-presale-update.jpg",
        "publishedAt": "2024-06-15T15:43:59Z",
        "content": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting it to $2 million.\r\nThe new 99Bitcoins (99BTC) token is perfo… [+4730 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin and Ethereum stable despite leverage flush",
        "description": "Over the weekend, Bitcoin (BTC) and Ethereum (ETH) showed little price movement following a significant $400 million leverage flush out… Continue reading Bitcoin and Ethereum stable despite leverage flush\nThe post Bitcoin and Ethereum stable despite leverage …",
        "url": "https://readwrite.com/bitcoin-and-ethereum-stable-despite-leverage-flush/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6fa97e87-0b76-4506-b3f6-2f1b460a8732.webp",
        "publishedAt": "2024-06-11T01:47:24Z",
        "content": "Over the weekend, Bitcoin (BTC) and Ethereum (ETH) showed little price movement following a significant $400 million leverage flush out on Friday, which led to a decline in open interest and trading … [+2043 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Australia’s first spot Bitcoin ETF launches on CBOE exchange",
        "description": "Monochrome Asset Management has launched Australia’s first spot Bitcoin Exchange Traded Fund (ETF) on the CBOE exchange, providing investors with… Continue reading Australia’s first spot Bitcoin ETF launches on CBOE exchange\nThe post Australia’s first spot Bi…",
        "url": "https://readwrite.com/australias-first-spot-bitcoin-etf-launches-on-cboe-exchange/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/018cda41-fe86-45f3-a035-4c3326ca569a.webp",
        "publishedAt": "2024-06-04T14:39:11Z",
        "content": "Monochrome Asset Management has launched Australia’s first spot Bitcoin Exchange Traded Fund (ETF) on the CBOE exchange, providing investors with a regulated framework to access Bitcoin (BTC).\r\nThe E… [+1568 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Snowden backs Bitcoin after NYSE technical glitch",
        "description": "In the wake of a significant market disruption caused by a technical glitch on the New York Stock Exchange (NYSE),… Continue reading Snowden backs Bitcoin after NYSE technical glitch\nThe post Snowden backs Bitcoin after NYSE technical glitch appeared first on…",
        "url": "https://readwrite.com/snowden-backs-bitcoin-after-nyse-technical-glitch/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/16793c62-15b1-41b6-bf15-8a79580832f7.jpeg",
        "publishedAt": "2024-06-04T15:09:13Z",
        "content": "In the wake of a significant market disruption caused by a technical glitch on the New York Stock Exchange (NYSE), NSA whistleblower Edward Snowden has once again voiced his support for Bitcoin (BTC)… [+2574 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "US Justice Department Indicts Creators of Bitcoin-Anonymizing 'Samouri' Wallet",
        "description": "America's Justice Department \"indicted the creators of an application that helps people spend their bitcoins anonymously,\" writes Reason.com:\n\n \nThey're accused of \"conspiracy to commit money laundering.\" Why \"conspiracy to commit\" as opposed to just \"money l…",
        "url": "https://slashdot.org/story/24/06/09/0126246/us-justice-department-indicts-creators-of-bitcoin-anonymizing-samouri-wallet",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-06-09T01:35:00Z",
        "content": "They provided a privacy tool that may have enabled other people to do illegal things with their bitcoin\r\nThey were literally going around telling folks that they were gray and black market friendly. … [+516 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Mt. Gox transfers $840M in Bitcoin as repayment deadline nears",
        "description": "The now-defunct crypto exchange Mt. Gox has moved 12,240 BTC, worth approximately $840 million at current prices, into a new… Continue reading Mt. Gox transfers $840M in Bitcoin as repayment deadline nears\nThe post Mt. Gox transfers $840M in Bitcoin as repaym…",
        "url": "https://readwrite.com/mt-gox-transfers-840m-in-bitcoin-as-repayment-deadline-nears/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/3021a8fe-94d0-416d-9322-6e1bbef13520.webp",
        "publishedAt": "2024-05-28T13:20:14Z",
        "content": "The now-defunct crypto exchange Mt. Gox has moved 12,240 BTC, worth approximately $840 million at current prices, into a new wallet address, according to data from blockchain analytics firm Arkham In… [+1473 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Olaleye Komolafe",
        "title": "Up or Down For Bitcoin Next? Bonk Sees Fresh Interest; Rebel Satoshi Arcade Becomes New Meme Favorite",
        "description": "TLDR Bitcoin’s next move is set to be bullish amid ongoing consolidation. Bonk prepares for further upsides as demand picks… Continue reading Up or Down For Bitcoin Next? Bonk Sees Fresh Interest; Rebel Satoshi Arcade Becomes New Meme Favorite\nThe post Up or …",
        "url": "https://readwrite.com/up-or-down-for-bitcoin-next-bonk-sees-fresh-interest-rebel-satoshi-arcade-becomes-new-meme-favorite/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Rebel-Satoshi-Arcade.jpg",
        "publishedAt": "2024-05-31T08:31:13Z",
        "content": "TLDR\r\n\u003Cul\u003E\u003Cli\u003EBitcoins next move is set to be bullish amid ongoing consolidation.\u003C/li\u003E\u003Cli\u003EBonk prepares for further upsides as demand picks up.\u003C/li\u003E\u003Cli\u003ERebel Satoshi Arcade is a new memecoin to watch… [+3933 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin falls as far right candidates gain in EU elections",
        "description": "It was a risk-off day in Asia as concerns about the Chinese property market and potential changes to the Bank… Continue reading Bitcoin falls as far right candidates gain in EU elections\nThe post Bitcoin falls as far right candidates gain in EU elections appe…",
        "url": "https://readwrite.com/bitcoin-price-up-down-institutional-investment/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/01f80a58-cfc7-41a1-8477-31c99d2ed621.webp",
        "publishedAt": "2024-06-12T00:53:13Z",
        "content": "It was a risk-off day in Asia as concerns about the Chinese property market and potential changes to the Bank of Japan’s bond purchase program weighed on investor sentiment.\r\nBitcoin, the leading cry… [+2006 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Bitcoin Price Prediction as BTC Hits $71k – Time To Buy?",
        "description": "Bitcoin’s price performance this week has been pretty solid, with the BTC price now hovering around $71,000. After trading in… Continue reading Bitcoin Price Prediction as BTC Hits $71k – Time To Buy?\nThe post Bitcoin Price Prediction as BTC Hits $71k – Time …",
        "url": "https://readwrite.com/bitcoin-price-prediction-as-btc-hits-71k-time-to-buy/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/binance-delist-2.jpeg",
        "publishedAt": "2024-06-05T14:55:20Z",
        "content": "Bitcoin’s price performance this week has been pretty solid, with the BTC price now hovering around $71,000. After trading in the $67,000 to $68,000 range for several weeks, this surge has reignited … [+4860 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Owen Good",
        "title": "Trump pledges more cryptocurrency support, putting distance between himself and Biden",
        "description": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the… Continue reading Trump pledges more cryptocurrency support, putting distance between himself and Biden\nThe post Trump pledges more cryptocur…",
        "url": "https://readwrite.com/trump-pledges-more-cryptocurrency-support-putting-distance-between-himself-and-biden/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/5gPabAcZQ829oWArrj6otg.jpg",
        "publishedAt": "2024-06-12T21:56:40Z",
        "content": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the United States.\r\nIn an all-caps rant posted to Trumps Truth Social platform, the R… [+961 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Ethereum Mass Institutional Adoption An Enormous Tailwind For Kai Cat Coin",
        "description": "Ethereum is poised for a major rally, say many cryptocurrency market analysts. The second largest coin by market cap after… Continue reading Ethereum Mass Institutional Adoption An Enormous Tailwind For Kai Cat Coin\nThe post Ethereum Mass Institutional Adopti…",
        "url": "https://readwrite.com/ethereum-mass-institutional-adoption-an-enormous-tailwind-for-kai-cat-coin/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Ethereum-1.jpg",
        "publishedAt": "2024-05-31T03:29:12Z",
        "content": "Ethereum is poised for a major rally, say many cryptocurrency market analysts. The second largest coin by market cap after Bitcoin, a recent May 14th report in Yahoo Finance said Ethereum among other… [+3994 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "Biden Veto Angers Crypto Industry as It Floods 2024 Election With Cash",
        "description": "President Joe Biden vetoed a resolution late Friday that passed through both the U.S. House and Senate and was widely supported by the cryptocurrency industry. And it’s just the latest move from a president who’s put himself firmly in the crosshairs of powerf…",
        "url": "https://gizmodo.com/biden-veto-angers-crypto-2024-election-trump-cash-money-1851516813",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/181d3375cd4f63fe5ded9cddb176293f.jpg",
        "publishedAt": "2024-06-03T20:40:00Z",
        "content": "President Joe Biden vetoed a resolution late Friday that passed through both the U.S. House and Senate and was widely supported by the cryptocurrency industry. And its just the latest move from a pre… [+4169 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Olaleye Komolafe",
        "title": "Grayscale Survey Highlights Bitcoin’s Significance In 2024 US Elections; as New Meme Proves Popular",
        "description": "TLDR Grayscale’s report reveals Bitcoin’s (BTC) growing influence in the 2024 elections, with more voters considering candidates’ stances on crypto.… Continue reading Grayscale Survey Highlights Bitcoin’s Significance In 2024 US Elections; as New Meme Proves …",
        "url": "https://readwrite.com/grayscale-survey-highlights-bitcoins-significance-in-2024-us-elections-as-new-meme-proves-popular/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/11/RECQ-Investment-potential.jpg",
        "publishedAt": "2024-06-12T16:01:05Z",
        "content": "TLDR\r\n\u003Cul\u003E\u003Cli\u003EGrayscale’s report reveals Bitcoin’s (BTC) growing influence in the 2024 elections, with more voters considering candidates’ stances on crypto.\u003C/li\u003E\u003Cli\u003ERebel Satoshi Arcade (RECQ) is a … [+4862 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Fort Worth Star-Telegram"
        },
        "author": "Jaida Joyner",
        "title": "Elderly Texas woman withdrew $40K from bank for Bitcoin scam. Citizen, police intervened",
        "description": "A concerned bystander saw the woman depositing large amounts of money into a Bitcoin ATM. Here’s what the scammer did.",
        "url": "https://www.star-telegram.com/news/local/crime/article289280835.html",
        "urlToImage": "https://media.zenfs.com/en/fort_worth_star_telegram_mcclatchy_952/5c230a028d640b6d1938bc3cc8478e85",
        "publishedAt": "2024-06-14T18:50:11Z",
        "content": "A sharp-eyed citizens quick thinking saved an elderly North Texas woman from losing thousands of dollars in a Bitcoin scam, according to police.\r\nOfficers in White Settlement received a call from a c… [+1789 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Nathan Rennolds",
        "title": "Former Chinese takeaway worker jailed for money laundering after police seized 61,000 bitcoins — currently worth $4 billion",
        "description": "Authorities were alerted when the British-Chinese woman attempted to buy London properties valued at $29.7 million, $15.8 million, and $5.7 million.",
        "url": "https://www.businessinsider.com/chinese-takeaway-worker-jailed-bitcoin-money-laundering-scheme-2024-5",
        "urlToImage": "https://i.insider.com/6651af4b20abc1efe8fdac1b?width=1200&format=jpeg",
        "publishedAt": "2024-05-25T11:09:35Z",
        "content": "Crown Prosecution Service\r\n\u003Cul\u003E\u003Cli\u003EA British-Chinese woman has been sentenced to more than six years in prison for money laundering.\u003C/li\u003E\u003Cli\u003EPolice seized 61,000 bitcoins — now worth more than $4 bil… [+2776 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.",
        "description": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu,… Continue reading Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.\nThe post Did Altcoin Hunters Miss Meme Coin Season? KAI…",
        "url": "https://readwrite.com/did-altcoin-hunters-miss-meme-coin-season-kai-cat-says-not-even-close/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/KAI-Cat-Says-Not-Even-Close.jpg",
        "publishedAt": "2024-06-17T03:24:24Z",
        "content": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu, Dogwifhat, Bonk, Pepe, and PopCat were on top of the cryptocurrency leaderboards for … [+3105 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "MicroStrategy raises its bond sale to buy even more bitcoin",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_de419e95-ff2a-4ff9-98d8-6a6c716414a1",
        "urlToImage": null,
        "publishedAt": "2024-06-14T19:47:21Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "CoinDesk",
        "title": "Crypto Investment Products Saw Nearly $2B in Inflows Last Week: CoinShares",
        "description": "Crypto investment products took on nearly $2 billion in inflows last week, according to a new report from CoinShares. Bitcoin (BTC) led investment...",
        "url": "https://finance.yahoo.com/video/crypto-investment-products-saw-nearly-163514266.html",
        "urlToImage": "https://media.zenfs.com/en/coindesk_75/6cb7f867b53c51edd13e932a55c899d7",
        "publishedAt": "2024-06-10T16:35:14Z",
        "content": "Crypto investment products took on nearly $2 billion in inflows last week, according to a new report from CoinShares. Bitcoin (BTC) led investment activity at over $1.97 billion of inflows, as U.S.-l… [+231 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Joe Biden campaign engages with crypto industry ahead of US election",
        "description": "President Joe Biden has begun seeking input from the the cryptocurrency industry amid the presidential race. This crypto-friendly approach is… Continue reading Joe Biden campaign engages with crypto industry ahead of US election\nThe post Joe Biden campaign en…",
        "url": "https://readwrite.com/joe-biden-campaign-engages-with-crypto-industry-ahead-of-us-election/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/91caa6fd-1910-48a0-ab60-fd16436f7829.webp",
        "publishedAt": "2024-05-30T15:51:02Z",
        "content": "President Joe Biden has begun seeking input from the the cryptocurrency industry amid the presidential race. This crypto-friendly approach is a significant departure from when Biden proposed imposing… [+2158 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Jose García",
        "title": "Hay una persona que lleva desde 2016 intentando demostrar que es el creador de Bitcoin. Ha mentido \"extensa y repetidamente\"",
        "description": "En este mundo hay dos cosas que muchísimas personas tienen ganas de descubrir: uno, qué es el One Piece. Dos, quién es Satoshi Nakamoto, el creador de Bitcoin. Seguramente descubramos antes lo primero que lo segundo, porque las cosas como son: quien esté detr…",
        "url": "https://www.xataka.com/criptomonedas/hay-persona-que-lleva-2016-intentando-demostrar-que-creador-bitcoin-ha-mentido-extensa-repetidamente",
        "urlToImage": "https://i.blogs.es/8ea349/original/840_560.jpeg",
        "publishedAt": "2024-05-27T17:01:24Z",
        "content": "En este mundo hay dos cosas que muchísimas personas tienen ganas de descubrir: uno, qué es el One Piece. Dos, quién es Satoshi Nakamoto, el creador de Bitcoin. Seguramente descubramos antes lo primer… [+7501 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Owen Good",
        "title": "Brazil’s biggest bank opens investment app to crypto trades",
        "description": "Brazil’s largest bank has opened up cryptocurrency trading to all users of its investment platform, allowing them to sell Bitcoin… Continue reading Brazil’s biggest bank opens investment app to crypto trades\nThe post Brazil’s biggest bank opens investment app…",
        "url": "https://readwrite.com/brazil-cryptocurrency-crypto-trading-app/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/brazilCryopto.jpg",
        "publishedAt": "2024-06-12T19:16:39Z",
        "content": "Brazils largest bank has opened up cryptocurrency trading to all users of its investment platform, allowing them to sell Bitcoin and Ethereum directly.\r\nGuto Antunes, the chief executive of Itau Unib… [+924 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "5 Best Meme Coins to Buy Now – Next 100x Cryptos?",
        "description": "Today we’re diving into five crypto gems that can multiply your investment as the crypto outlook looks super bullish. Bitcoin… Continue reading 5 Best Meme Coins to Buy Now – Next 100x Cryptos?\nThe post 5 Best Meme Coins to Buy Now – Next 100x Cryptos? appear…",
        "url": "https://readwrite.com/5-best-meme-coins-to-buy-now-next-100x-cryptos/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/five-best-meme-coins-to-buy-in-june.jpg",
        "publishedAt": "2024-06-10T09:21:41Z",
        "content": "Today we’re diving into five crypto gems that can multiply your investment as the crypto outlook looks super bullish.\r\nBitcoin is strong again, staying at $70,000. This makes people in the crypto mar… [+6529 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "Ethereum se acerca a su máximo histórico por los ETF. El Bitcoin pasó por lo mismo y no fue como se esperaba",
        "description": "La Comisión de Bolsa y Valores (SEC) de Estados Unidos ha aprobado los fondos cotizados en bolsa (ETF) de Ethereum. Era un movimiento muy esperado, que llega unos cuatro meses después de que se aprobaran los ETF de Bitcoin. Pero el recibimiento está siendo mu…",
        "url": "https://www.xataka.com/criptomonedas/ethereum-se-acerca-a-su-maximo-historico-etf-bitcoin-paso-no-fue-como-se-esperaba",
        "urlToImage": "https://i.blogs.es/c2a462/jievani-weerasinghe-ethereum/840_560.jpeg",
        "publishedAt": "2024-05-28T10:05:37Z",
        "content": "La Comisión de Bolsa y Valores (SEC) de Estados Unidos ha aprobado los fondos cotizados en bolsa (ETF) de Ethereum. Era un movimiento muy esperado, que llega unos cuatro meses después de que se aprob… [+3699 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Bitcoin Miners Cash in on BTC Rally as Crypto Exchange Transfers Hit Two-Month High",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_994de99a-e456-4854-ba88-1e78d3fd837b",
        "urlToImage": null,
        "publishedAt": "2024-06-12T15:39:27Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Bitcoin Mining Sector Is Attracting Growing Investor Interest Following Core Scientific Deal: JPMorgan",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_94295bc8-374f-4f31-9652-24ebea6877a8",
        "urlToImage": null,
        "publishedAt": "2024-06-24T10:42:43Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "XRP Price Prediction As Ripple Lawsuit With SEC Has This New Update",
        "description": "XRP has definitely been a frustrating altcoin to own during this bull run due to its slow price movements. Besides… Continue reading XRP Price Prediction As Ripple Lawsuit With SEC Has This New Update\nThe post XRP Price Prediction As Ripple Lawsuit With SEC H…",
        "url": "https://readwrite.com/xrp-price-prediction-as-ripple-lawsuit-with-sec-has-this-new-update/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/b196d123-7464-4c4a-8950-4d68007086db.jpg",
        "publishedAt": "2024-05-31T09:47:19Z",
        "content": "XRP has definitely been a frustrating altcoin to own during this bull run due to its slow price movements. Besides a couple of spikes to $0.8-$0.9 area, XRP price remained mostly flat for the past ye… [+5217 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Conor Kenny Reviews a New Learn-to-Earn Crypto Presale with 100x Potential",
        "description": "The new Learn-to-Earn token, $99BTC, keeps doing well in its presale, with more experts, including Conor Kenny, considering its high… Continue reading Conor Kenny Reviews a New Learn-to-Earn Crypto Presale with 100x Potential\nThe post Conor Kenny Reviews a Ne…",
        "url": "https://readwrite.com/conor-kenny-reviews-a-new-learn-to-earn-crypto-presale-with-100x-potential/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/conor-kenny-reviews-99btc.jpg",
        "publishedAt": "2024-06-10T12:40:24Z",
        "content": "The new Learn-to-Earn token, $99BTC, keeps doing well in its presale, with more experts, including Conor Kenny, considering its high upside potential.\r\nExperts are optimistic about the new cryptocurr… [+4545 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Centralized exchanges see lowest Ethereum holdings in years",
        "description": "In the wake of the approval of spot Ethereum exchange-traded funds (ETFs) in the United States on May 23, a… Continue reading Centralized exchanges see lowest Ethereum holdings in years\nThe post Centralized exchanges see lowest Ethereum holdings in years appe…",
        "url": "https://readwrite.com/centralized-exchanges-see-lowest-ethereum-holdings-in-years/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/2922fe38-0c5b-489a-a814-b22577d88937.webp",
        "publishedAt": "2024-06-03T21:02:05Z",
        "content": "In the wake of the approval of spot Ethereum exchange-traded funds (ETFs) in the United States on May 23, a significant shift in Ethereum holdings has occurred.\r\nAccording to data from CryptoQuant, c… [+2132 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Graeme Hanna",
        "title": "Donald Trump makes pledge to exonerate Ross Ulbricht",
        "description": "Donald Trump endured a frosty reception at the Libertarian National Convention on Saturday evening, but his pledge to exonerate Ross… Continue reading Donald Trump makes pledge to exonerate Ross Ulbricht\nThe post Donald Trump makes pledge to exonerate Ross Ul…",
        "url": "https://readwrite.com/donald-trump-makes-pledge-to-exonerate-ross-ulbricht/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/i3maL4azTOSDvQkuMPjPCg.jpg",
        "publishedAt": "2024-05-27T13:04:26Z",
        "content": "Donald Trump endured a frosty reception at the Libertarian National Convention on Saturday evening, but his pledge to exonerate Ross Ulbricht drew the biggest acclaim of the night. \r\nUlbricht is the … [+2090 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Ethereum ETFs set to attract billions in U.S. markets",
        "description": "The long-awaited arrival of Ethereum-based exchange-traded funds (ETFs) that can directly hold Ethereum (ETH) is just around the corner in… Continue reading Ethereum ETFs set to attract billions in U.S. markets\nThe post Ethereum ETFs set to attract billions i…",
        "url": "https://readwrite.com/ethereum-etfs-set-to-attract-billions-in-u-s-markets/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/f51feec9-bd97-41d7-b2bb-eb0f7b5e4a35.webp",
        "publishedAt": "2024-06-05T11:53:06Z",
        "content": "The long-awaited arrival of Ethereum-based exchange-traded funds (ETFs) that can directly hold Ethereum (ETH) is just around the corner in the United States.\r\nAccording to a report by crypto analytic… [+2120 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "New York Recovers $50 Million For Defrauded Gemini Earn Crypto Investors",
        "description": "An anonymous reader quotes a report from Reuters: New York Attorney General Letitia James has recovered $50 million from the cryptocurrency platform Gemini Trust to repay investors defrauded in its Gemini Earn program, she said on Friday. Gemini, run by billi…",
        "url": "https://slashdot.org/story/24/06/14/212206/new-york-recovers-50-million-for-defrauded-gemini-earn-crypto-investors",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-06-14T22:00:00Z",
        "content": "New York Attorney General Letitia James has recovered $50 million from the cryptocurrency platform Gemini Trust to repay investors defrauded in its Gemini Earn program, she said on Friday. Gemini, ru… [+974 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "Trump Promises He'd Commute the Life Sentence of 'Silk Road' Founder Ross Ulbricht",
        "description": "In 2011 Ross Ulbricht launched an anonymous, Tor-hidden \"darknet\" marketplace (with transactions conducted in bitcoin). By 2015 he'd been sentenced to life in prison for crimes including money laundering, distributing narcotics, and trafficking in fraudulent …",
        "url": "https://politics.slashdot.org/story/24/05/26/0240239/trump-promises-hed-commute-the-life-sentence-of-silk-road-founder-ross-ulbricht",
        "urlToImage": "https://a.fsdn.com/sd/topics/republicans_64.png",
        "publishedAt": "2024-05-26T03:34:00Z",
        "content": "In 2011 Ross Ulbricht launched an anonymous, Tor-hidden \"darknet\" marketplace (with transactions conducted in bitcoin). By 2015 he'd been sentenced to life in prison for crimes including money launde… [+2693 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Researchers Cracked an 11-Year-Old Password To a $3 Million Software-Based Crypto Wallet",
        "description": "An anonymous reader quotes a report from Wired: Two years ago when \"Michael,\" an owner of cryptocurrency, contacted Joe Grand to help recover access to about $2 million worth of bitcoin he stored in encrypted format on his computer, Grand turned him down. Mic…",
        "url": "https://yro.slashdot.org/story/24/05/28/2128235/researchers-cracked-an-11-year-old-password-to-a-3-million-software-based-crypto-wallet",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-05-28T21:30:00Z",
        "content": "Two years ago when \"Michael,\" an owner of cryptocurrency, contacted Joe Grand to help recover access to about $2 million worth of bitcoin he stored in encrypted format on his computer, Grand turned h… [+3457 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "fdemott@insider.com (Filip De Mott)",
        "title": "Stock market today: US indexes rally after cool inflation data",
        "description": "The Dow surged in the final hour of trading, closing nearly 600 points higher, after a key inflation metric cooled as expected.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-pce-cool-inflation-fed-rate-cuts-nvidia-2024-5",
        "urlToImage": "https://i.insider.com/665a2b9fd0b8e1c832caef44?width=1200&format=jpeg",
        "publishedAt": "2024-05-31T20:12:43Z",
        "content": "US indexes finished mostly higher on Friday after a key inflation metric left investors encouraged.\r\nThe S&amp;P 500 and Dow Jones Industrial Average rose, while the Nasdaq Composite was flat. Nvidia… [+1614 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "mfox@businessinsider.com (Matthew Fox)",
        "title": "Stock market today: US stocks edge lower as AI-fueled tech rally stalls",
        "description": "Shares of Nvidia were down an additional 2% in early Friday trades, while Dell, Broadcom, and Super Micro Computer were down between 1% and 2%.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-ai-fueled-tech-rally-stalls-nvidia-tops-2024-6",
        "urlToImage": "https://i.insider.com/66757c7c886e840164beb2f9?width=1200&format=jpeg",
        "publishedAt": "2024-06-21T13:35:45Z",
        "content": "US stocks moved slightly lower on Friday following a sharp reversal in tech stocks on Thursday.\r\nThe AI-fueled tech rally showed signs of exhaustion, with the stalwart Nvidia experiencing a near 7% s… [+1509 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MarketWatch"
        },
        "author": "Christine Idzelis",
        "title": "BlackRock’s bitcoin ETF on verge of eclipsing Grayscale’s fund",
        "description": "BlackRock is vying for the most assets managed by exchange-traded funds that track bitcoin prices, making a quick ascension to challenge the dominance of Grayscale Investments.",
        "url": "https://www.marketwatch.com/story/blackrocks-bitcoin-etf-on-verge-of-eclipsing-grayscales-fund-4c90e499",
        "urlToImage": "https://images.mktw.net/im-61553693/social",
        "publishedAt": "2024-05-29T21:14:00Z",
        "content": "BlackRock is vying for the most assets managed by exchange-traded funds that track bitcoin prices, making a quick ascension to challenge the dominance of Grayscale Investments. Soon after spot bitcoi… [+4241 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "heise online"
        },
        "author": "Dennis Schirrmacher",
        "title": "So knackten Sicherheitsforscher eine Bitcoin-Wallet mit 3 Millionen US-Dollar",
        "description": "Der Besitzer eines wertvollen Bitcoin-Wallets hat sein Passwort vergessen. Dank engagierter Sicherheitsforscher hat er nun wieder Zugriff.",
        "url": "https://www.heise.de/news/So-knackten-Sicherheitsforscher-eine-Bitcoin-Wallet-mit-3-Millionen-US-Dollar-9741600.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/0/2/4/6/1/shutterstock_1892311099-d956671ec1f746b9.jpg",
        "publishedAt": "2024-05-30T10:10:00Z",
        "content": "Stellen Sie sich vor, Sie besitzen ein Bitcoin-Wallet mit Kryptowährung im Wert von 3 Millionen US-Dollar. Weil Sie das Passwort vergessen haben, können Sie die Bitcoins aber nicht verkaufen und müss… [+2483 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Maximize Gains with This New Learn-to-Earn BRC-20 Crypto Presale",
        "description": "99Bitcoins, or $99BTC, is a new Learn-to-Earn project that allows users to acquire cryptocurrency by completing educational modules. With the… Continue reading Maximize Gains with This New Learn-to-Earn BRC-20 Crypto Presale \nThe post Maximize Gains with This…",
        "url": "https://readwrite.com/maximize-gains-with-this-new-learn-to-earn-brc-20-crypto-presale/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/maximize-gains-with-this-new-learn-to-earn-brc-20-crypto-presale-.jpg",
        "publishedAt": "2024-06-18T20:53:38Z",
        "content": "99Bitcoins, or $99BTC, is a new Learn-to-Earn project that allows users to acquire cryptocurrency by completing educational modules.\r\nWith the presale exceeding $2.2 million, early adopters might ben… [+4390 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "$2.4 Million Texas Home Listing Boasts Built-In 5,786 sq ft Data Center",
        "description": "A Zillow listing for a $2.4 million house in a Dallas suburb is grabbing attention for its 5,786-square-foot data center with immersion cooling tanks, massive server racks, and two separate power grids. Tom's Hardware reports: With a brick exterior, cute pavi…",
        "url": "https://tech.slashdot.org/story/24/06/17/1937244/24-million-texas-home-listing-boasts-built-in-5786-sq-ft-data-center",
        "urlToImage": "https://a.fsdn.com/sd/topics/supercomputing_64.png",
        "publishedAt": "2024-06-17T22:40:00Z",
        "content": "With a brick exterior, cute paving, and mini-McMansion arch stylings, the building certainly looks to be a residential home for the archetypal Texas family. Prospective home-buyers will thus be disap… [+1434 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Ethereum Name Service Bolts To Top 7d Gains (ENS). KAI Cat Raises $422K.",
        "description": "The hastening of Ether’s approval for regulated spot ETF trading continues to draw a flood of gains for Ethereum Layer-2… Continue reading Ethereum Name Service Bolts To Top 7d Gains (ENS). KAI Cat Raises $422K.\nThe post Ethereum Name Service Bolts To Top 7d …",
        "url": "https://readwrite.com/ethereum-name-service-bolts-to-top-7d-gains-ens-kai-cat-raises-422k/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Ethereum-Tokens.jpg",
        "publishedAt": "2024-06-04T03:15:57Z",
        "content": "The hastening of Ether’s approval for regulated spot ETF trading continues to draw a flood of gains for Ethereum Layer-2 token among retail trader on Internet cryptocurrency exchanges.\r\nEthereum Name… [+3180 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Possible Reasons for Crypto Market Drop Could Lead to a Bullish Breakout for This Token",
        "description": "The crypto market has experienced a significant drop in the past 24 to 48 hours, yet PlayDoge remains bullish as… Continue reading Possible Reasons for Crypto Market Drop Could Lead to a Bullish Breakout for This Token\nThe post Possible Reasons for Crypto Mar…",
        "url": "https://readwrite.com/possible-reasons-for-crypto-market-drop-could-lead-to-a-bullish-breakout-for-this-token/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/possible-reasons-for-crypto-market-drop-could-lead-to-a-bullish-breakout-for-this-token.jpg",
        "publishedAt": "2024-06-19T15:56:05Z",
        "content": "The crypto market has experienced a significant drop in the past 24 to 48 hours, yet PlayDoge remains bullish as investors rally to its presale, which has now reached nearly $5 million.\r\nThis article… [+3578 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "TodayTrader Reviews Low Market Cap Crypto Casino Presale Offering a Huge Airdrop",
        "description": "Crypto influencer TodayTrader, boasting 11.7k YouTube subscribers, reviewed Mega Dice, emphasizing the platform’s recent entry into blockchain with its native… Continue reading TodayTrader Reviews Low Market Cap Crypto Casino Presale Offering a Huge Airdrop\nT…",
        "url": "https://readwrite.com/todaytrader-reviews-low-market-cap-crypto-casino-presale-offering-a-huge-airdrop/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/todaytrader-reviews-a-high-potential-low-market-cap-crypto-casino-presale-offering-a-huge-airdrop.jpg",
        "publishedAt": "2024-06-09T22:50:19Z",
        "content": "Crypto influencer TodayTrader, boasting 11.7k YouTube subscribers, reviewed Mega Dice, emphasizing the platform’s recent entry into blockchain with its native token, DICE, currently in its presale ph… [+4076 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hackaday"
        },
        "author": "Jenny List",
        "title": "Generating a Lost Password By Traveling Back In Time",
        "description": "It’s probable that some of you reading this will have been approached in the past by people who’ve lost the password to their crypto wallets. They hear that you’re involved …read more",
        "url": "https://hackaday.com/2024/05/31/generating-a-lost-password-by-traveling-back-in-time/",
        "urlToImage": "https://hackaday.com/wp-content/uploads/2024/05/joe-grand-password-crack-featured.jpg",
        "publishedAt": "2024-05-31T17:00:00Z",
        "content": "It’s probable that some of you reading this will have been approached in the past by people who’ve lost the password to their crypto wallets. They hear that you’re involved in some kind of “hacking”,… [+1116 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "jsor@businessinsider.com (Jennifer Sor)",
        "title": "Stock market today: US stocks jump to records as investors cheer cooler May inflation data",
        "description": "Inflation remained flat for the month of May and rose just 3.3% from last year, cooler than what economists expected.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-inflation-report-cpi-fed-rate-cuts-outlook-2024-6",
        "urlToImage": "https://i.insider.com/65cd35346fcb546d2d4fef08?width=1200&format=jpeg",
        "publishedAt": "2024-06-12T13:37:48Z",
        "content": "US stocks jumped on Wednesday as traders took in a soft inflation report and revved up their hopes for Fed rate cuts by the end of the year. All three benchmark indexes ticked higher, with the Dow su… [+1937 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Achim Sawall",
        "title": "Bundeskriminalamt: BKA verkauft wohl Bitcoins von Movie2k für Milliarden Euro",
        "description": "Mehr als 3 Milliarden Euro liegen in Bitcoin-Wallets German Government BKA. Millionenwerte wurden bereits verkauft. Es dürfte sich um die legendären Movie2k.to-Milliarden handeln. (Bitcoin, Film)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbundeskriminalamt-bka-verkauft-wohl-bitcoins-von-movie2k-fuer-milliarden-euro-2406-186363.html&referer=https%3A%2F%2Ft.co%2F31e12561f5",
        "urlToImage": null,
        "publishedAt": "2024-06-23T13:33:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "NY prosecutors bring scam charges against Evolved Apes NFT",
        "description": "The United States Attorney’s Office for the Southern District of New York has charged three individuals — Mohamed-Amin Atcha, Mohamed… Continue reading NY prosecutors bring scam charges against Evolved Apes NFT\nThe post NY prosecutors bring scam charges again…",
        "url": "https://readwrite.com/evolved-apes-nft-rugpull-scam-charges-lawsuit/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/84ed3e9d-1e66-4340-8dcc-87aa6c74ee1d.webp",
        "publishedAt": "2024-06-07T18:50:12Z",
        "content": "The United States Attorney’s Office for the Southern District of New York has charged three individuals Mohamed-Amin Atcha, Mohamed Rilaz Waleedh, and Daood Hassan with wire fraud and money launderin… [+1884 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Singapore businesses targeted by ransomware hackers demanding crypto",
        "description": "Akira — a ransomware hacker group —that extorted $42 million from over 250 organizations across North America, Europe, and Australia… Continue reading Singapore businesses targeted by ransomware hackers demanding crypto\nThe post Singapore businesses targeted …",
        "url": "https://readwrite.com/singapore-ransomware-hackers-cryptocurrency/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ec534dd9-23f9-49c9-a822-d2ac59e6d942.webp",
        "publishedAt": "2024-06-11T02:46:01Z",
        "content": "Akira a ransomware hacker group that extorted $42 million from over 250 organizations across North America, Europe, and Australia within a year, is now actively targeting businesses in Singapore, acc… [+1968 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Trump backs cryptocurrency, vows to make America its leader",
        "description": "In a recent social media post, former President Donald J. Trump expressed his support for the burgeoning cryptocurrency industry. He… Continue reading Trump backs cryptocurrency, vows to make America its leader\nThe post Trump backs cryptocurrency, vows to mak…",
        "url": "https://readwrite.com/trump-cryptocurrency-support-libertarian-convention/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/8697482a-e519-400f-be7d-609e9dc5f096.webp",
        "publishedAt": "2024-05-27T17:20:16Z",
        "content": "In a recent social media post, former President Donald J. Trump expressed his support for the burgeoning cryptocurrency industry. He said:\r\nI am very positive and open minded to cryptocurrency compan… [+1767 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Hope C",
        "title": "Bitcoin’s Key Indicators Flash Bullish Signals, According to Trader",
        "description": "Popular trader Roman recently highlighted two classic technical indicators for BTC/USD, suggesting that Bitcoin (BTC) could be setting the stage for a...",
        "url": "https://finance.yahoo.com/news/bitcoin-key-indicators-flash-bullish-062132917.html",
        "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/7b85b6017b8299a38242d7fa828c52b1",
        "publishedAt": "2024-06-24T06:21:32Z",
        "content": "Bitcoins Key Indicators Flash Bullish Signals, According to Trader\r\nPopular trader Roman recently highlighted two classic technical indicators for BTC/USD, suggesting that Bitcoin (BTC) could be sett… [+1257 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Journal du geek"
        },
        "author": "Arthur Nicolle",
        "title": "Ce jeu de banane sur Steam mine-t-il du bitcoin sur votre PC ?",
        "description": "L'étrange phénomène Banana qui passionne les joueurs PC soulève des suspicions d'arnaque au bitcoin.",
        "url": "https://www.journaldugeek.com/2024/06/19/ce-jeu-de-banane-sur-steam-mine-t-il-du-bitcoin-sur-votre-pc/",
        "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/06/banana-jeu-steam.jpg",
        "publishedAt": "2024-06-19T14:29:58Z",
        "content": "Saviez-vous que l’un des jeux les plus populaires du moment consiste à ne rien faire ? En avril dernier, un ovni vidéoludique du nom de Banana a fait son apparition sur la plateforme Steam et s’est d… [+3365 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Journal du geek"
        },
        "author": "Amandine Jonniaux",
        "title": "Où vont vos bitcoins quand vous mourrez ?",
        "description": "Hériter d'un bitcoin n'est pas une mince affaire en 2024, mais certaines solutions existent.",
        "url": "https://www.journaldugeek.com/2024/05/29/cryptomonnaie-et-heritage-comment-transmettre-ses-actifs-crypto/",
        "urlToImage": "https://www.journaldugeek.com/app/uploads/2021/04/bitcoin-photo.jpg",
        "publishedAt": "2024-05-29T07:02:16Z",
        "content": "La question se pose de plus en plus. Au fur et à mesure que les cryptomonnaies se glissent dans la poche des Français, les difficultés liées à lhéritage donnent des sueurs froides aux ayants droit. I… [+4149 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Techmeme.com"
        },
        "author": null,
        "title": "BlackRock's iShares Bitcoin Trust becomes the largest bitcoin fund, holding $19.68B to surpass Grayscale's $19.65B and Fidelity's $11.1B since its 2024 launch (Bloomberg)",
        "description": "Bloomberg:\nBlackRock's iShares Bitcoin Trust becomes the largest bitcoin fund, holding $19.68B to surpass Grayscale's $19.65B and Fidelity's $11.1B since its 2024 launch  —  - Asset manager's product dethroned the Grayscale Bitcoin Trust  — Recently launched …",
        "url": "https://www.techmeme.com/240529/p14",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIKbVhpjsl78/v0/1200x800.jpg",
        "publishedAt": "2024-05-29T12:00:46Z",
        "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 8:00 AM ET, May 29, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo view … [+66 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "2 Crypto Presale Gems Experts Bet on for Massive Success – $SEAL and $99BTC",
        "description": "Today’s market offers investors a chance to get in on the ground floor of two intriguing presales: Sealana, a meme… Continue reading 2 Crypto Presale Gems Experts Bet on for Massive Success – $SEAL and $99BTC\nThe post 2 Crypto Presale Gems Experts Bet on for …",
        "url": "https://readwrite.com/2-crypto-presale-gems-experts-bet-on-for-massive-success-seal-and-99btc/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/2-crypto-presale-gems-experts-bet-on-for-massive-success.jpg",
        "publishedAt": "2024-06-20T20:31:14Z",
        "content": "Today’s market offers investors a chance to get in on the ground floor of two intriguing presales: Sealana, a meme coin nearing its launch, and 99Bitcoins, with a comprehensive Learn-to-Earn program.… [+5209 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Dogecoin Price Aims for Recovery – Is It Time to Buy the Dip?",
        "description": "Over the past few days, Dogecoin has experienced a notable drop, prompting many investors to ask: is this a good… Continue reading Dogecoin Price Aims for Recovery – Is It Time to Buy the Dip?\nThe post Dogecoin Price Aims for Recovery – Is It Time to Buy the …",
        "url": "https://readwrite.com/dogecoin-price-aims-for-recovery-is-it-time-to-buy-the-dip/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/dogecoin-price-prediction.jpg",
        "publishedAt": "2024-06-19T08:51:21Z",
        "content": "Over the past few days, Dogecoin has experienced a notable drop, prompting many investors to ask: is this a good time to buy Dogecoin?\r\nIn this article, we’ll analyze the current state of Dogecoin us… [+4160 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Daniel Ziegener",
        "title": "Kryptomining: Die Telekom will Bitcoin minen",
        "description": "Der Konzern werde bald in die \"digitale monetäre Photosynthese\" einsteigen, sagte ein Telekom-Vertreter auf einer Bitcoin-Konferenz (Telekom, Wirtschaft)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptomining-die-telekom-will-bitcoin-minen-2406-186136.html&referer=https%3A%2F%2Ft.co%2F99d13105ee",
        "urlToImage": null,
        "publishedAt": "2024-06-17T07:25:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Mastercard’s new ‘Crypto Credential’ service aims to simplify crypto transfers",
        "description": "Mastercard has unveiled its new “Crypto Credential” service, which aims to simplify peer-to-peer crypto transfers by replacing addresses with simple… Continue reading Mastercard’s new ‘Crypto Credential’ service aims to simplify crypto transfers\nThe post Mast…",
        "url": "https://readwrite.com/mastercards-new-crypto-credential-service-aims-to-simplify-crypto-transfers/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/1cb377c2-cf53-4390-9921-cc5890727c77.webp",
        "publishedAt": "2024-05-30T15:52:55Z",
        "content": "Mastercard has unveiled its new “Crypto Credential” service, which aims to simplify peer-to-peer crypto transfers by replacing addresses with simple aliases.\r\nThe service announced in a May 29 press … [+2376 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Judge orders SEC to pay crypto firm Debt Box’s legal fees",
        "description": "A U.S. federal judge has ordered the Securities and Exchange Commission (SEC) to pay approximately $1.8 million in legal fees… Continue reading Judge orders SEC to pay crypto firm Debt Box’s legal fees\nThe post Judge orders SEC to pay crypto firm Debt Box’s l…",
        "url": "https://readwrite.com/judge-orders-sec-to-pay-crypto-firm-debt-boxs-legal-fees/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/b2942371-1347-4665-a163-1486f22b7d23.webp",
        "publishedAt": "2024-05-29T14:39:56Z",
        "content": "A U.S. federal judge has ordered the Securities and Exchange Commission (SEC) to pay approximately $1.8 million in legal fees to crypto firm Digital Licensing Inc., also known as Debt Box, after dism… [+2092 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Crypto giants flex political muscle to reduce regulatory oversight",
        "description": "The crypto industry has emerged as a major force in US campaign finance, amassing a staggering $160 million war chest… Continue reading Crypto giants flex political muscle to reduce regulatory oversight\nThe post Crypto giants flex political muscle to reduce r…",
        "url": "https://readwrite.com/crypto-giants-flex-political-muscle-to-reduce-regulatory-oversight/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/piles-of-bitcoin-in-front-of-the-us-capitol-buildi-5lR06PVaT1mL7aIcKMw4Hg-TEUoCtpRSSe8x5zu8By1Xg.jpeg",
        "publishedAt": "2024-06-14T15:24:46Z",
        "content": "The crypto industry has emerged as a major force in US campaign finance, amassing a staggering $160 million war chest to support candidates favoring light-touch regulation.\r\nAccording to a June 14 Bl… [+2192 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Ritholtz.com"
        },
        "author": "Barry Ritholtz",
        "title": "At the Money: Gold, Bitcoin & Other Thematic Investments",
        "description": "At the Money: Gold, Bitcoin & Other Thematic Investments (June 12, 2024) How should you think about thematic investing? What place does Gold or Bitcoin, or countries like India and Japan have in your portfolio? Jan van Eck is CEO of Van Eck Funds, which overs…",
        "url": "https://ritholtz.com/2024/06/atm-gold-bitcoin-thematic/",
        "urlToImage": "https://ritholtz.com/wp-content/uploads/2024/04/At-the-Money.jpg",
        "publishedAt": "2024-06-12T16:00:42Z",
        "content": "At the Money: Gold, Bitcoin &amp; Other Thematic Investments (June 12, 2024)\r\nHow should you think about thematic investing? What place does Gold or Bitcoin, or countries like India and Japan have in… [+9984 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Presse-citron"
        },
        "author": "Romain Vitt",
        "title": "Pourquoi Greenpeace s’en prend au Bitcoin et à Wall Street ?",
        "description": "Dans un rapport explosif, Greenpeace dénonce les liens troublants entre le Bitcoin et Wall Street. Cette révélation soulève des questions cruciales sur l'avenir des cryptomonnaies et leur impact sur notre planète.",
        "url": "https://www.presse-citron.net/pourquoi-greenpeace-sen-prend-au-bitcoin-et-a-wall-street/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2021/04/Un-Bitcoin.jpg",
        "publishedAt": "2024-06-21T10:34:32Z",
        "content": "Au cur de la controverse se trouve le processus de minage du Bitcoin. Cette opération, basée sur le mécanisme de “preuve de travail” (PoW), nécessite une puissance de calcul colossale.\r\nSelon Greenpe… [+2648 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Threadreaderapp.com"
        },
        "author": null,
        "title": "Software MVPs can no longer be low quality",
        "description": "@hkarthik: It's probably past time to retire the philosophy of shipping a software MVP that makes trade offs on quality in order to collect user feedback early. This advice made sense when there wasn't much software...…",
        "url": "https://threadreaderapp.com/thread/1798770556571144638.html",
        "urlToImage": "https://threadreaderapp.com/images/screenshots/thread/1798770556571144638.jpg",
        "publishedAt": "2024-06-07T12:03:22Z",
        "content": "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Unleashed.chat"
        },
        "author": null,
        "title": "Unleashed Chat",
        "description": "Comments",
        "url": "https://unleashed.chat/",
        "urlToImage": null,
        "publishedAt": "2024-05-25T01:40:54Z",
        "content": "One button to deploy your own chat.\r\nOwn your data. Open-Source models. Private. Uncensored. Fast.\r\nUnleashed Chat is an AI chatbot service designed with real privacy in mind. It stands out\r\nwith its… [+414 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Threadreaderapp.com"
        },
        "author": null,
        "title": "Best of Google AI search results",
        "description": "@JeremiahDJohns: Google's new AI search results are having quite the week. Here's a thread with some of my favorite answers: \"smoking while pregnant\" As long as it's non-toxic \"train eight days a week\" \"gay characte...…",
        "url": "https://threadreaderapp.com/thread/1794543007129387208.html",
        "urlToImage": "https://threadreaderapp.com/images/screenshots/thread/1794543007129387208.jpg",
        "publishedAt": "2024-05-26T02:48:35Z",
        "content": "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Faz.net"
        },
        "author": "Daniel Schleidt",
        "title": "Einzelhandel: Funktioniert Bitcoin als Zahlungsmittel?",
        "description": "Ein Laufschuhhändler in Frankfurt akzeptiert Bitcoin als Zahlungsmittel. Ist das der Beginn einer neuen Ära im Einzelhandel oder nur ein riskanter Trend?",
        "url": "https://www.faz.net/aktuell/rhein-main/wirtschaft/funktioniert-bitcoin-als-zahlungsmittel-beim-shopping-im-alltag-19776310.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/647901017/1.9776308/facebook_teaser_fplus/nur-ein-marketing-gag.jpg",
        "publishedAt": "2024-06-10T05:38:16Z",
        "content": "An dem Laufschuh im Sportshop von Jost Wiebelhaus hing das übliche Preisschild, natürlich in Euro. 160 Euro, so viel kostete das Modell, das am 20. April im Frankfurter Laufshop über die Ladentheke g… [+526 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "Unos investigadores lograron crackear una vieja contraseña de un monedero cripto. El premio: tres millones de dólares",
        "description": "A Joe Grand, más conocido como \"Kingpin\", se le da bien crackear dispositivos protegidos por contraseñas imposibles. Lo hizo en 2022 con un monedero cripto de Trezor, y gracias a ello recuperó los dos millones de dólares de su propietario. Ahora ha vuelto a h…",
        "url": "https://www.xataka.com/seguridad/unos-investigadores-lograron-crackear-vieja-contrasena-monedero-cripto-premio-tres-millones-dolares",
        "urlToImage": "https://i.blogs.es/e3da04/joe/840_560.jpeg",
        "publishedAt": "2024-05-31T11:31:29Z",
        "content": "A Joe Grand, más conocido como \"Kingpin\", se le da bien crackear dispositivos protegidos por contraseñas imposibles. Lo hizo en 2022 con un monedero cripto de Trezor, y gracias a ello recuperó los do… [+3567 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Kenneth Niemeyer",
        "title": "How scammers use deepfakes of celebs to steal millions from fans",
        "description": "Scammers in Australia are using deepfakes of  Steve Irwin's son and other celebrities to trick fans into sending them millions in crypto.",
        "url": "https://www.businessinsider.com/deepfake-celebrity-scam-crypto-investment-platform-elon-musk-robert-irwin-2024-6",
        "urlToImage": "https://i.insider.com/665b50d2cc442a2f676d0156?width=1200&format=jpeg",
        "publishedAt": "2024-06-01T18:29:52Z",
        "content": "Robert Irwin, the son of famed conservationist Steve Irwin.Monica Schipper/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EScammers are using deepfake celebrity videos to steal from fans.\u003C/li\u003E\u003Cli\u003EFake photos of police arresti… [+2672 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Kenneth Niemeyer",
        "title": "The number of Ozempic and Wegovy scams has grown by 183% so far this year",
        "description": "Scammers are posing as doctors to sell Ozempic and Wegovy weight loss drugs on Facebook and Craigslist, all in an effort to steal your personal info.",
        "url": "https://www.businessinsider.com/ozempic-wegovy-scams-phishing-cyber-security-mcafee-ai-facebook-craigslist-2024-6",
        "urlToImage": "https://i.insider.com/666b52bee07904901818eba8?width=1200&format=jpeg",
        "publishedAt": "2024-06-15T15:51:03Z",
        "content": "An example of a fake ad claiming to sell Ozempic on Facebook.McAfee\r\n\u003Cul\u003E\u003Cli\u003EPhishing scams targeting weight loss drugs like Ozempic rose 183% from January to April.\u003C/li\u003E\u003Cli\u003ESocial media sites like F… [+2951 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Presse-citron"
        },
        "author": "Presse-citron",
        "title": "Cet ingénieur a perdu 500m€ dans une décharge mais il espère toujours les retrouver",
        "description": "Alors que le cours du Bitcoin se rapproche de son record historique, l'ingénieur James Howells compte bien retrouver l'accès à sa fortune.",
        "url": "https://www.presse-citron.net/cet-ingenieur-a-perdu-500me-dans-une-decharge-mais-il-espere-toujours-les-retrouver/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2024/06/decharge-poubelle.jpg",
        "publishedAt": "2024-06-16T06:10:15Z",
        "content": "La fortune de James Howells, un jeune britannique, est enfermée dans… un disque dur qui traine quelque part au milieu des ordures dune déchèterie de Newport, au Pays de Galles.\r\nEstimée à près de 500… [+2244 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Stephan Lamprecht",
        "title": "Kryptowährungen: Was Trumps Wiederwahl für Bitcoin bedeuten kann",
        "description": "Donald Trump hat sich vom Gegner zum Fan des Bitcoins gewandelt. Was das im Falle seiner Wiederwahl für den Kryptomarkt bedeutet. Eine Analyse von Stephan Lamprecht (Donald Trump, Politik)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrungen-was-trumps-wiederwahl-fuer-bitcoin-bedeuten-kann-2406-186165.html&referer=https%3A%2F%2Ft.co%2F3629817449",
        "urlToImage": null,
        "publishedAt": "2024-06-18T10:30:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "MasterCard quiere simplificar el envío de criptomonedas a Latinoamérica. Ha pedido ayuda a una empresa española",
        "description": "Las principales empresas financieras del mundo están poco a poco abrazando el mundo cripto. La apuesta es seria, pero las dinámicas son muy distintas. Un ejemplo lo tenemos ahora con Mastercard. \n\u003C!-- BREAK 1 --\u003E\nLa gran empresa de pagos lleva un par de años …",
        "url": "https://www.xataka.com/criptomonedas/mastercard-quiere-simplificar-envio-criptomonedas-a-latinoamerica-ha-pedido-ayuda-a-empresa-espanola",
        "urlToImage": "https://i.blogs.es/3d8e92/mastercard-crypto/840_560.jpeg",
        "publishedAt": "2024-05-30T14:02:24Z",
        "content": "Las principales empresas financieras del mundo están poco a poco abrazando el mundo cripto. La apuesta es seria, pero las dinámicas son muy distintas. Un ejemplo lo tenemos ahora con Mastercard. \r\nLa… [+1969 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Genbeta.com"
        },
        "author": "Marcos Merino",
        "title": "Perdió el acceso a 3 millones en bitcoins hace 11 años. Unos hackers los han recuperado tras dos meses de intentos",
        "description": "En el mundillo de las criptomonedas, los usuarios deben gestionar sus contraseñas con sumo cuidado, ya que perderlas puede traducirse en la pérdida de enormes cantidades de dinero (como hemos comprobado ya en múltiples ocasiones). Este fue el caso de Michael,…",
        "url": "https://www.genbeta.com/seguridad/perdio-acceso-a-3-millones-bitcoins-hace-11-anos-unos-hackers-han-recuperado-dos-meses-intentos",
        "urlToImage": "https://i.blogs.es/0eb89e/btc/840_560.jpeg",
        "publishedAt": "2024-05-31T12:56:57Z",
        "content": "En el mundillo de las criptomonedas, los usuarios deben gestionar sus contraseñas con sumo cuidado, ya que perderlas puede traducirse en la pérdida de enormes cantidades de dinero (como hemos comprob… [+2468 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Alvin Hemedez",
        "title": "Crypto Market Pullback Expected to Bounce Back Soon, PlayDoge Presale Still Going Strong",
        "description": "Over the past few days, the cryptocurrency market has experienced a pullback, but many traders and analysts are anticipating a… Continue reading Crypto Market Pullback Expected to Bounce Back Soon, PlayDoge Presale Still Going Strong\nThe post Crypto Market Pu…",
        "url": "https://readwrite.com/crypto-market-pullback-expected-to-bounce-back-soon-playdoge-presale-still-going-strong/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/crypto-market-pullback-expected-to-bounce-back-soon-playdoge-presale-still-going-strong.jpg",
        "publishedAt": "2024-06-21T16:56:38Z",
        "content": "Over the past few days, the cryptocurrency market has experienced a pullback, but many traders and analysts are anticipating a significant bounce soon.\r\nThe current dip in prices presents a potential… [+4004 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "‘Pharma Bro’ Martin Shkreli says he created Trumpcoin with Trump’s son",
        "description": "Martin Shkreli — known as the “Pharma Bro” — admitted on Tuesday to being behind the controversial TrumpCoin (DJT) token.… Continue reading ‘Pharma Bro’ Martin Shkreli says he created Trumpcoin with Trump’s son\nThe post ‘Pharma Bro’ Martin Shkreli says he cre…",
        "url": "https://readwrite.com/trumpcoin-martin-shkreli-djt-barron-trump-crypto-cryptocurrency/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/2fe1b805-6890-435e-abe5-4b83660e6de3.webp",
        "publishedAt": "2024-06-19T19:21:09Z",
        "content": "Martin Shkreli known as the “Pharma Bro” admitted on Tuesday to being behind the controversial TrumpCoin (DJT) token.\r\nAccording to a June 19 Coindesk report, Shkreli said during a recent X Space voi… [+3803 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Emily Stewart",
        "title": "The shadowy winner of bitcoin's new boom",
        "description": "Crypto.com is everywhere: the Lakers arena, Formula 1, UFC fights, commercials with Matt Damon and Eminem. But no one actually knows much about it.",
        "url": "https://www.businessinsider.com/crypto-com-commercial-eminem-matt-damon-coinbase-bitcoin-arena-2024-5",
        "urlToImage": "https://i.insider.com/664f5447239fda2da6cae48f?width=1200&format=jpeg",
        "publishedAt": "2024-05-28T09:47:01Z",
        "content": "Crypto.com is balancing between notability and infamy. It's walking softly but carrying a big ad budget.iStock; Rebecca Zisser/BI\r\nCrypto.com is everywhere. Its name is plastered on the home of argua… [+10860 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin surpasses $71,000 as investors keep pouring into spot Bitcoin ETFs",
        "description": "Investors are continuing to pour into spot Bitcoin ETFs, making Wednesday the best day since March, with the top cryptocurrency Bitcoin trading above $71,000 in themorning hours.Read more...",
        "url": "https://qz.com/bitcoin-crosses-71-000-as-spot-bitcoin-etfs-see-best-d-1851520662",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/35c94de803344abb282bd30b523fcf37.jpg",
        "publishedAt": "2024-06-05T14:39:00Z",
        "content": "Investors are continuing to pour into spot Bitcoin ETFs, making Wednesday the best day since March, with the top cryptocurrency Bitcoin trading above $71,000 in the morning hours.\r\nAccording to Bitco… [+1756 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Josh Lipton",
        "title": "Tesla vs. Toyota: Kevin Paffrath compares automaker growth",
        "description": "Financial analyst and YouTuber Kevin Paffrath (\"Meet Kevin\") joins Market Domination to discuss Tesla's valuation as CEO Elon Musk touted the company's AI...",
        "url": "https://finance.yahoo.com/video/tesla-vs-toyota-kevin-paffrath-120012460.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/27ZFfJow1uhhcUeEUtlUdw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/dc1afe00-2aad-11ef-9fbf-500b7a964617",
        "publishedAt": "2024-06-16T12:00:12Z",
        "content": "Financial analyst and YouTuber Kevin Paffrath (\"Meet Kevin\") joins Market Domination to discuss Tesla's valuation as CEO Elon Musk touted the company's AI initiatives at Thursday's shareholder meetin… [+4517 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin falls below $68,000 after defunct exchange transfers more than $9 billion",
        "description": "After rising to over $70,000 on Monday, the price of Bitcoin dropped below $68,000 Tuesday morning as the now-defunct Bitcoin exchange Mt. Gox transferred more than $9 billion worth of Bitcoin to an unknown wallet, possibly to repay its creditors. Read more...",
        "url": "https://qz.com/bitcoin-mt-gox-transfers-9-billion-1851503386",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a3ad0c6fa5922c8c6d1fbf5b05a3bb0a.jpg",
        "publishedAt": "2024-05-28T14:55:14Z",
        "content": "After rising to over $70,000 on Monday, the price of Bitcoin dropped below $68,000 Tuesday morning as the now-defunct Bitcoin exchange Mt. Gox transferred more than $9 billion worth of Bitcoin to an … [+1536 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hipertextual"
        },
        "author": "Gabriel Erard",
        "title": "FTX: uno de los principales socios de Sam Bankman-Fried irá a prisión",
        "description": "El juicio y la condena a Sam Bankman-Fried, quien cumple un castigo de 25 años en prisión, estuvo lejos de cerrar el caso FTX. Este martes, uno de los principales socios del cofundador del exchange de criptomonedas también fue sentenciado a la cárcel. Se trat…",
        "url": "http://hipertextual.com/2024/05/ftx-ryan-salame-condena-prision",
        "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/11/ftx-logo-1-scaled.jpg?fit=2560%2C1440&quality=55&strip=all&ssl=1",
        "publishedAt": "2024-05-28T18:15:00Z",
        "content": "El juicio y la condena a Sam Bankman-Fried, quien cumple un castigo de 25 años en prisión, estuvo lejos de cerrar el caso FTX. Este martes, uno de los principales socios del cofundador del exchange d… [+3467 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Techmeme.com"
        },
        "author": null,
        "title": "Crypto exchange Gemini says Gemini Earn users will get $2.18B in crypto back in kind, after the lending program folded in November 2022 (Sarah Wynn/The Block)",
        "description": "Sarah Wynn / The Block:\nCrypto exchange Gemini says Gemini Earn users will get $2.18B in crypto back in kind, after the lending program folded in November 2022  —  - Those funds will be distributed in kind, meaning Gemini Earn customers who lent one bitcoin w…",
        "url": "https://www.techmeme.com/240529/p18",
        "urlToImage": "https://www.tbstat.com/wp/uploads/2023/03/20230317_Gemini_Color-1200x675.jpg",
        "publishedAt": "2024-05-29T14:20:01Z",
        "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 10:20 AM ET, May 29, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo view… [+67 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "heise online"
        },
        "author": "Marie-Claire Koch",
        "title": "Londoner Kliniken: Cyberkriminelle veröffentlichen Daten",
        "description": "Infolge eines Cyberangriff auf einen Pathologiedienstleister sind Londoner Kliniken im Notbetrieb. Jetzt haben die Cyberkriminellen Daten veröffentlicht.",
        "url": "https://www.heise.de/news/Londoner-Kliniken-Cyberkriminelle-veroeffentlichen-Daten-9772418.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/8/6/9/2/shutterstock_1903368601-42d59511e7b60e92.jpg",
        "publishedAt": "2024-06-21T08:01:00Z",
        "content": "Nachdem ein Cyberangriff auf den Pathologiedienstleister Synnovis Londoner Kliniken, aber auch Arztpraxen, in eine prekäre Situation gebracht hat, veröffentlichten die Cyberkriminellen nun hunderte G… [+1661 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Donald Trump wants all the Bitcoin that's left to be made in the U.S.",
        "description": "Republican presidential candidate and former cryptocurrency skeptic Donald Trump wants all remaining Bitcoin to be made in the U.S.Read more...",
        "url": "https://qz.com/donald-trump-bitcoin-mining-us-joe-biden-cryptocurrency-1851535073",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3cce13674c269f93720bc617ad731697.jpg",
        "publishedAt": "2024-06-12T14:43:00Z",
        "content": "Republican presidential candidate and former cryptocurrency skeptic Donald Trump wants all remaining Bitcoin to be made in the U.S.\r\nBitcoin mining may be our last line of defense against a CBDC, Tru… [+1794 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Lewis Humphries",
        "title": "Run Line Betting – Baseball’s Point Spread Bet Explained",
        "description": "Unless you’re an avid baseball fan or bettor, you may not be familiar with run line betting. However, this popular… Continue reading Run Line Betting – Baseball’s Point Spread Bet Explained\nThe post Run Line Betting – Baseball’s Point Spread Bet Explained app…",
        "url": "https://readwrite.com/gambling/guides/run-line-betting/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Run-Line-Betting-Information-1-scaled.jpg",
        "publishedAt": "2024-06-04T07:25:39Z",
        "content": "Unless you’re an avid baseball fan or bettor, you may not be familiar with run line betting. However, this popular and potentially lucrative market can create superior value when backing short-price … [+10241 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Rocio Fabbro",
        "title": "Bitcoin falls below $61,000 after one of its worst weeks this year",
        "description": "Bitcoin briefly dropped below $61,000 on Monday morning as the cryptocurrency continues to shed value.Read more...",
        "url": "https://qz.com/bitcoin-cryptocurrency-market-price-declines-1851556355",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b3f1cb99725330cb044e7791c10d8896.jpg",
        "publishedAt": "2024-06-24T12:15:00Z",
        "content": "Bitcoin briefly dropped below $61,000 on Monday morning as the cryptocurrency continues to shed value.\r\nBitcoins price fell to as low as $60,860 its lowest level in more than a month before trading a… [+1821 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Alisha McDarris",
        "title": "We were paid $10,000 to move from Austin to Arkansas. It wasn't perfect, but we have no regrets.",
        "description": "My self-employed husband and I moved from Austin, Texas, to Arkansas after being offered $10,000 to do so.",
        "url": "https://www.businessinsider.com/paid-to-move-to-arkansas-helped-me-find-dream-city-2024-5",
        "urlToImage": "https://i.insider.com/6655f419239fda2da6cc0885?width=1200&format=jpeg",
        "publishedAt": "2024-05-28T19:44:19Z",
        "content": "My husband and I lived in Arkansas for a little over a year. Michael Warren/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EMy self-employed husband and I moved from Austin to Arkansas after being offered $10,000 to do so. \u003C/… [+4516 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Top Bitcoin buyer just acquired another $800 worth of the cryptocurrency",
        "description": "MicroStrategy stock jumped nearly 2.5% to $1,504 shortly after the market opened on Thursday as the company acquired another 11,931 Bitcoin for nearly $786 million. Shares are up more than 137% so far in 2024. Read more...",
        "url": "https://qz.com/microstrategy-acquires-12-000-more-bitcoin-for-800-mil-1851550513",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ffb02ec36754965ca48b825ce82c2dc9.jpg",
        "publishedAt": "2024-06-20T14:25:00Z",
        "content": "MicroStrategy stock jumped nearly 2.5% to $1,504 shortly after the market opened on Thursday as the company acquired another 11,931 Bitcoin for nearly $786 million. Shares are up more than 137% so fa… [+1026 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "A man recovered $3 million in Bitcoin after losing an 11-year-old password",
        "description": "A man in Europe recently recovered nearly $3 million in Bitcoin after thinking his password was lost forever.Read more...",
        "url": "https://qz.com/bitcoin-3-million-lost-password-recovered-1851508977",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8dfe88e2dc3e86e2250b6e8f2cbb4bc4.jpg",
        "publishedAt": "2024-05-30T15:25:00Z",
        "content": "A man in Europe recently recovered nearly $3 million in Bitcoin after thinking his password was lost forever.\r\nThe anonymous man, dubbed Michael, hired a team of security researchers who were able to… [+2052 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Beyond Bitcoin and Ether: 10 cryptocurrencies you need to know",
        "description": "Bitcoin and Ether—the top two cryptocurrencies—are always in the news because their price action determines where the cryptocurrency market will move. The Securities and Exchange Commission approved spot Bitcoin ETFs earlier this year and gave a green signal …",
        "url": "https://qz.com/bitcoin-ether-cryptocurrencies-dogecoin-solana-bnb-1851524662",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/09812958c9ec2050d90c0de100ae46bf.jpg",
        "publishedAt": "2024-06-10T09:00:00Z",
        "content": "BNB, previously known as Binance Coin, is a cryptocurrency created and issued by Binance, the largest crypto exchange by trading volume.\r\nBinance Chains native coin, BNB, was originally created on th… [+494 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Quartz Bot",
        "title": "The Nasdaq's record, Salesforce stock's bad day, GameStop spikes again: Markets news roundup",
        "description": "A man in Europe recently recovered nearly $3 million in Bitcoin after thinking his password was lost forever.Read more...",
        "url": "https://qz.com/nasdaq-dow-record-salesforce-gamestop-markets-stocks-1851512292",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d36cbaa6fa290cc04c1541047e343197.jpg",
        "publishedAt": "2024-06-01T13:00:00Z",
        "content": "GameStop stock climbed more than 30% in afternoon trading on Tuesday, following the completion of its latest share sale.\r\nThe company said Friday that it sold 45 million shares of common stock for ap… [+182 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "The 7 biggest cryptocurrency myths",
        "description": "Many people are new to cryptocurrency, which is why there is a lot of mystery surrounding it — leading some people to believe in myths. That’s because sometimes people receive half-baked information that doesn’t tell the whole story.Read more...",
        "url": "https://qz.com/bitcoin-cryptocurrency-myths-debunked-1851510287",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a950909b5704cc09ecb4fff8fc907aa0.jpg",
        "publishedAt": "2024-06-02T09:00:00Z",
        "content": "A common misconception about Bitcoin is that it was created after the 2008 financial crisis and, therefore, poses a threat to the U.S. dollar. Firstly, Bitcoin was created simultaneously with the 200… [+756 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin ETFs are an 'astonishing success,' Goldman Sachs exec says",
        "description": "At the Consensus 2024 conference hosted by CoinDesk, Goldman Sachs said that the new spot Bitcoin ETFs are an “astonishing success.”Read more...",
        "url": "https://qz.com/bitcoin-etfs-astonishing-success-says-goldman-exec-1851509596",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9ac279020b2e1132381998d8b9128355.jpg",
        "publishedAt": "2024-05-30T17:48:00Z",
        "content": "At the Consensus 2024 conference hosted by CoinDesk, Goldman Sachs said that the new spot Bitcoin ETFs are an astonishing success.\r\nMathew McDermott, the investment banks global head of digital asset… [+1400 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Joe Biden may accept crypto campaign donations through Coinbase, following Donald Trump",
        "description": "It looks like President Biden’s re-election campaign is mirroring the Trump campaign by considering accepting Bitcoin and cryptocurrency donations.Read more...",
        "url": "https://qz.com/just-like-trump-the-biden-campaign-may-also-accept-cry-1851537487",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/27ec70f7cad50a0c7c35327d28aa4070.jpg",
        "publishedAt": "2024-06-13T14:14:00Z",
        "content": "It looks like President Bidens re-election campaign is mirroring the Trump campaign by considering accepting Bitcoin and cryptocurrency donations.\r\nThe Biden campaign is considering accepting cryptoc… [+1368 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin sinks below $67,000 before inflation data and the Fed’s interest rate decision",
        "description": "Bitcoin’s price dropped below $67,000 on Tuesday morning as investors remained uncertain about inflation data and the Fed’s decision on whether to cut interest rates. On Wednesday, the Consumer Price Index (CPI) for May will be released in the morning, and th…",
        "url": "https://qz.com/bitcoin-dips-inflation-data-fed-s-rate-cut-decision-1851531998",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/cdb2c60e1786f45e06efa3d3086e3da1.jpg",
        "publishedAt": "2024-06-11T14:10:51Z",
        "content": "Bitcoins price dropped below $67,000 on Tuesday morning as investors remained uncertain about inflation data and the Feds decision on whether to cut interest rates. On Wednesday, the Consumer Price I… [+1170 chars]"
      }
    ]

  constructor() {
    super();
    console.log("Hello I am a constructor for news component")
    this.state={
      articles:this.articles,
      loading:false
    }
  }

  render() {
    return (
      <div class="container my-3">
        <h2>News You Need</h2>
        <h2>Top Headlines</h2>

        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItems  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} />
      </div>
        })}
        </div>
      </div>
    )
  }
}


export default News
