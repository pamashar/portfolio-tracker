import { Portfolio, Stock } from "./types/portfolio";

const PORTFOLIOS: Portfolio[] = [
  { id: crypto.randomUUID(), name: 'Revolut', type: 'revolut', avatarImageName: 'revolut.svg' },
  { id: crypto.randomUUID(), name: 'Trezor', type: 'trezor', avatarImageName: 'trezor.svg' },
]

const STOCKS: Stock[] = [
  {
    id: crypto.randomUUID(),
    name: 'BTC',
    price: 9500000
  },
  {
    id: crypto.randomUUID(),
    name: 'ETH',
    price: 260000
  },
  {
    id: crypto.randomUUID(),
    name: 'SOL',
    price: 19500
  },
  {
    id: crypto.randomUUID(),
    name: 'LTC',
    price: 10000
  },
  {
    id: crypto.randomUUID(),
    name: 'XRP',
    price: 240
  },
  {
    id: crypto.randomUUID(),
    name: 'SUI',
    price: 300
  },
]

export {
  PORTFOLIOS,
  STOCKS
};

