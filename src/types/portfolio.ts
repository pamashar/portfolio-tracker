type PortfolioType = 'revolut' | 'trezor';
type Portfolio = {
  id: string;
  name: string;
  avatarImageName?: string;
  type: PortfolioType;
}

type StockName= 'BTC' | 'ETH' | 'SOL' | 'LTC' | 'XRP' | 'SUI';
type Stock = {
  id: string;
  name: StockName;
  price: number;
}

type Transaction = {
  id: string;
  portfolioId: Portfolio['id'];
  stockName: Stock['name'];
  stockId: Stock['id'];
  quantity: number;
  price: number;
  date: string;
}

type Investment = {
  id: string;
  stockName: Stock['name'];
  portfolioId: Portfolio['id'];
  stockId: Stock['id'];
  quantity: number;
  averagePrice: number;
}

type NewTransaction = Pick<Transaction, 'quantity'|'price'|'portfolioId'|'stockId'|'date'>

export type {
  Portfolio,
  Stock
};

export type {
  Investment,
  NewTransaction,
  Transaction,
};

