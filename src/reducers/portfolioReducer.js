import {
  FETCHSTOCKMONTHPORTFOLIO_START,
  FETCHSTOCKMONTHPORTFOLIO_SUCCESS,
  FETCHSTOCKMONTHPORTFOLIO_ERROR,
  FETCHSTOCKWEEKPORTFOLIO_START,
  FETCHSTOCKWEEKPORTFOLIO_SUCCESS,
  FETCHSTOCKWEEKPORTFOLIO_ERROR,
  FETCHSTOCKTHREEMONTHPORTFOLIO_START,
  FETCHSTOCKTHREEMONTHPORTFOLIO_SUCCESS,
  FETCHSTOCKTHREEMONTHPORTFOLIO_ERROR,
  FETCHSTOCKYEARPORTFOLIO_START,
  FETCHSTOCKYEARPORTFOLIO_SUCCESS,
  FETCHSTOCKYEARPORTFOLIO_ERROR,
  FETCHSTOCKDAYPORTFOLIO_START,
  FETCHSTOCKDAYPORTFOLIO_SUCCESS,
  FETCHSTOCKDAYPORTFOLIO_ERROR,
  FETCHSTOCKDETAILSPORTFOLIO_START,
  FETCHSTOCKDETAILSPORTFOLIO_SUCCESS,
  FETCHSTOCKDETAILSPORTFOLIO_ERROR,
  STOCKLATESTPORTFOLIO_START,
  STOCKLATESTPORTFOLIO_SUCCESS,
  STOCKLATESTPORTFOLIO_ERROR,
  STOCKRANGEDAYPORTFOLIO,
  STOCKRANGEMONTHPORTFOLIO,
  STOCKRANGETHREEMONTHPORTFOLIO,
  STOCKRANGEWEEKPORTFOLIO,
  STOCKRANGEYEARPORTFOLIO,
  GET_TRANSACTIONS_START,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
} from '../constants';

const defaultState = {
  stockDetails: [],
  stockDay: [],
  stockWeek: [],
  stockMonth: [],
  stockThreeMonth: [],
  stockYear: [],
  stockPortfolioLoading: false,
  searchStockResults: [],
  searchStockPortfolioLoading: false,
  stockLatestPortfolioData: [],
  stockRangePortfolio: [],
  stockGraphDataPortfolio: [],
  transactions: [],
};

const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_START:
      return {
        ...state,
        error: '',
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        error: '',
        transactions: action.payload,
      };
    case GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        transactions: action.payload,

      };
    case STOCKLATESTPORTFOLIO_START:
      return {
        ...state,
        error: '',
      };
    case STOCKLATESTPORTFOLIO_SUCCESS:
      return {
        ...state,
        error: '',
        stockLatestPortfolioData: action.payload,
      };
    case STOCKLATESTPORTFOLIO_ERROR:
      return {
        ...state,
        error: action.payload,
        stockLatestPortfolioData: action.payload,

      };

    case FETCHSTOCKDAYPORTFOLIO_START:
      return {
        ...state,
        stockPortfolioLoading: true,
        error: '',
      };
    case FETCHSTOCKDAYPORTFOLIO_SUCCESS:
      return {
        ...state,
        stockPortfolioLoading: false,
        error: '',
        stockGraphDataPortfolio: action.payload,
      };
    case FETCHSTOCKDAYPORTFOLIO_ERROR:
      return {
        ...state,
        stockPortfolioLoading: false,
        error: action.payload,
      };
    case STOCKRANGEDAYPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRangePortfolio: action.payload,
      };
    case FETCHSTOCKWEEKPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKWEEKPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphDataPortfolio: action.payload,
      };
    case FETCHSTOCKWEEKPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGEWEEKPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRangePortfolio: action.payload,
      };
    case FETCHSTOCKMONTHPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKMONTHPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphDataPortfolio: action.payload,
      };
    case STOCKRANGEMONTHPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRangePortfolio: action.payload,
      };
    case FETCHSTOCKMONTHPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHSTOCKTHREEMONTHPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKTHREEMONTHPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphDataPortfolio: action.payload,
      };
    case FETCHSTOCKTHREEMONTHPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGETHREEMONTHPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRangePortfolio: action.payload,
      };
    case FETCHSTOCKYEARPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKYEARPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphDataPortfolio: action.payload,
      };
    case FETCHSTOCKYEARPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGEYEARPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRangePortfolio: action.payload,
      };
    case FETCHSTOCKDETAILSPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKDETAILSPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockDetails: action.payload,
      };
    case FETCHSTOCKDETAILSPORTFOLIO_ERROR:
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

export default portfolioReducer;
