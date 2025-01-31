type Portfolio = {
  id: number;
  name: string;
}

const PORTFOLIOS: Portfolio[] = [
  { id: 1, name: 'Binance' },
  { id: 2, name: 'Bybit' },
  { id: 3, name: 'Revolut' },
  { id: 4, name: 'Kraken' },
]

export { PORTFOLIOS, type Portfolio };

