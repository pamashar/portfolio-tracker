import type {
  Investment,
  Portfolio,
  Stock
} from '@/types/portfolio';

const PORTFOLIOS: Portfolio[] = [
  { id: '1', name: 'Revolut', type: 'revolut', avatarImageName: 'revolut.svg' },
  { id: '2', name: 'Trezor', type: 'trezor', avatarImageName: 'trezor.svg' },
]

const STOCKS: Stock[] = [
  {
    id: '1',
    name: 'BTC',
    price: 9500000
  },
  {
    id: '2',
    name: 'ETH',
    price: 260000
  },
  {
    id: '3',
    name: 'SOL',
    price: 19500
  },
  {
    id: '4',
    name: 'LTC',
    price: 10000
  },
  {
    id: '5',
    name: 'XRP',
    price: 240
  },
  {
    id: '6',
    name: 'SUI',
    price: 300
  },
]

const INVESTMENTS: Investment[] = [
  {
    id: '1',
    portfolioId: '1',
    stockId: '1',
    name: "BTC",
    amount: 0.001,
    averagePrice: 5450000
  },
  {
    id: '2',
    portfolioId: '1',
    stockId: '2',
    name: "ETH",
    amount: 0.17,
    averagePrice: 340000
  },
  {
    id: '3',
    portfolioId: '1',
    stockId: '3',
    name: "SOL",
    amount: 1.71,
    averagePrice: 16500
  },
  {
    id: '4',
    portfolioId: '1',
    stockId: '4',
    name: "LTC",
    amount: 1.6,
    averagePrice: 8500
  },
]

export {
  PORTFOLIOS,
  INVESTMENTS,
  STOCKS
};

