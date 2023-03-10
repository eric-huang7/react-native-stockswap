import {
  MARKETGAINERS_FETCHING,
  MARKETGAINERS_SUCCESS,
  MARKETGAINERS_FAILURE,
  FETCHTICKERS_START,
  FETCHTICKERS_SUCCESS,
  FETCHTICKERS_ERROR,
  FETCHTICKERSALL_SUCCESS,
  MARKETLOSERS_FETCHING,
  MARKETLOSERS_SUCCESS,
  MARKETLOSERS_FAILURE,
  FETCHSTOCKMONTH_START,
  FETCHSTOCKMONTH_SUCCESS,
  FETCHSTOCKMONTH_ERROR,
  FETCHSTOCKWEEK_START,
  FETCHSTOCKWEEK_SUCCESS,
  FETCHSTOCKWEEK_ERROR,
  FETCHSTOCKTHREEMONTH_START,
  FETCHSTOCKTHREEMONTH_SUCCESS,
  FETCHSTOCKTHREEMONTH_ERROR,
  FETCHSTOCKYEAR_START,
  FETCHSTOCKYEAR_SUCCESS,
  FETCHSTOCKYEAR_ERROR,
  FETCHSTOCKDAY_START,
  FETCHSTOCKDAY_SUCCESS,
  FETCHSTOCKDAY_ERROR,
  FETCHSTOCKDETAILS_START,
  FETCHSTOCKDETAILS_SUCCESS,
  FETCHSTOCKDETAILS_ERROR,
  SEARCHSTOCK_START,
  SEARCHSTOCK_SUCCESS,
  SEARCHSTOCK_ERROR,
  STOCKLATEST_START,
  STOCKLATEST_SUCCESS,
  STOCKLATEST_ERROR,
  STOCKRANGEDAY,
  STOCKRANGEMONTH,
  STOCKRANGETHREEMONTH,
  STOCKRANGEWEEK,
  STOCKRANGEYEAR,
  RESET_STOCK_DATA
} from '../constants';

const defaultState = {
  gainers: [
    {
      id: '1',
      title: 'AT&T',
      symbol: 'T',
      percentage: '+3.25%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '30.78',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '2',
      title: 'Genesis Healthcare',
      symbol: 'GEN',
      percentage: '-35.06%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '12.73',
      priceHistory: [100, 99, 93, 87, 46, 40, 38, 45],
      dates: [
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '3',
      title: 'Therapeutics MD',
      symbol: 'TXMD',
      percentage: '+70.08%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '48.58',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '4',
      title: 'Tesla',
      symbol: 'TSLA',
      percentage: '-20.29%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '531.28',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '5',
      title: 'Walt Disney CO',
      symbol: 'DIS',
      percentage: '+10.21%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '154.82',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '6',
      title: 'Starbucks Company',
      symbol: 'SBUX',
      percentage: '+70.08%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '48.58',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '7',
      title: 'The Boeing Company',
      symbol: 'BA',
      percentage: '+20.29%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '531.28',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '8',
      title: 'Verizon Communications',
      symbol: 'VZ',
      percentage: '+10.21%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '154.82',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '9',
      title: 'Apple Inc.',
      symbol: 'AAPL',
      percentage: '+20.29%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '531.28',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '10',
      title: 'Zoom Video Communications',
      symbol: 'ZM',
      percentage: '+10.21%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'gainers',
      price: '154.82',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
  ],
  losers: [
    {
      id: '1',
      title: 'Coty',
      symbol: 'COTY',
      percentage: '-15.25%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'losers',
      price: '30.78',
    },
    {
      id: '2',
      title: 'Nio',
      symbol: 'NIO',
      percentage: '-8.90%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'losers',
      price: '30.78',
    },
    {
      id: '3',
      title: 'Canopy Growth',
      symbol: 'CGC',
      percentage: '-10.87%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'losers',
      price: '30.78',
    },
  ],
  highestByVolume: [
    {
      id: '1',
      title: 'FORD',
      symbol: 'F',
      percentage: '+0.75%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'HBV',
      price: '30.78',
    },
    {
      id: '2',
      title: 'General Electric',
      symbol: 'GE',
      percentage: '-1.08%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'HBV',
      price: '30.78',
    },
    {
      id: '3',
      title: 'Bank of America',
      symbol: 'BAC',
      percentage: '-1.05%',
      about:
        'Founded in 2001, this company creates new and exciting products that help change the world.',
      portfolioPercentage: '2',
      tradeDate: '10/20/2021',
      gain: '1.25',
      action: 'Sell',
      sector: 'Retail Trade',
      category: 'HBV',
      price: '30.78',
    },
  ],
  marketGainers: [],
  marketGainersTest: [
    {
      ticker: 'HLBZ',
      quote: {
        open: 23.1999,
        close: 22.9999,
        high: 23.1999,
        low: 22.7,
        volume: 85402,
        volumeWeightedAveragePrice: 22.9316,
        window: {
          startTime: 'Invalid date',
        },
      },
      change: 13.891,
      changePercent: 154.348,
    },
    {
      ticker: 'HLBZW',
      quote: {
        open: 1.35,
        close: 1.3399,
        high: 1.35,
        low: 1.33,
        volume: 2830,
        volumeWeightedAveragePrice: 1.3351,
        window: {
          startTime: 'Invalid date',
        },
      },
      change: 0.59,
      changePercent: 79.73,
    },
  ],
  marketLosers: [],
  tickers: [],
  tickersAll: [],
  stockDetails: [],
  stockDay: [],
  stockWeek: [],
  stockMonth: [],
  stockThreeMonth: [],
  stockYear: [],
  stockLoading: false,
  searchStockResults: [],
  searchStockLoading: false,
  stockLatestData: [],
  stockRange: [],
  stockGraphData: [],
  articles: [
    {
      id: '1',
      source: 'The Wall Street Journal',
      released: '3h',
      headline: 'Global Stocks Edge Higher on Optimism Over Economic Reopening',
      intro:
        'Stocks rose Wednesday after closing slightly below all-time highs a day earlier in one of the final sessions of 2020.',
      img:
        'https://images.unsplash.com/photo-1476711656344-4ffe053f6b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

const companyBoxReducer = (state = defaultState, action) => {
  switch (action.type) {
    //Ready for hook up
    case SEARCHSTOCK_START:
      return {
        ...state,
        searchStockLoading: true,
        error: '',
      };
    case SEARCHSTOCK_SUCCESS:
      return {
        ...state,
        searchStockLoading: false,
        error: '',
        searchStockResults: action.payload,
      };
    case SEARCHSTOCK_ERROR:
      return {
        ...state,
        searchStockLoading: false,
        error: action.payload,
      };
    case STOCKLATEST_START:
      return {
        ...state,
        error: '',
      };
    case STOCKLATEST_SUCCESS:
      return {
        ...state,
        error: '',
        stockLatestData: action.payload,
      };
    case STOCKLATEST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case MARKETGAINERS_FETCHING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case MARKETGAINERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        marketGainers: action.payload,
      };
    case MARKETGAINERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MARKETLOSERS_FETCHING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case MARKETLOSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        marketLosers: action.payload,
      };
    case MARKETLOSERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHTICKERS_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHTICKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tickers: action.payload,
      };
    case FETCHTICKERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHTICKERSALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tickersAll: action.payload,
      };
      case RESET_STOCK_DATA:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKDAY_START:
      return {
        ...state,
        stockLoading: true,
        error: '',
      };
    case FETCHSTOCKDAY_SUCCESS:
      return {
        ...state,
        stockLoading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKDAY_ERROR:
      return {
        ...state,
        stockLoading: false,
        error: action.payload,
      };
    case STOCKRANGEDAY:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKWEEK_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKWEEK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKWEEK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGEWEEK:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKMONTH_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKMONTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case STOCKRANGEMONTH:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKMONTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHSTOCKTHREEMONTH_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKTHREEMONTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKTHREEMONTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGETHREEMONTH:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKYEAR_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKYEAR_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKYEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGEYEAR:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKDETAILS_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockDetails: action.payload,
      };
    case FETCHSTOCKDETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        stockDetails: action.payload,

      };
    default:
      return state;
  }
};

export default companyBoxReducer;
