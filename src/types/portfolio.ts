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

type Investment = {
  id: string;
  name: Stock['name'];
  portfolioId: Portfolio['id'];
  stockId: Stock['id'];
  amount: number;
  averagePrice: number;
}

export type {
  Portfolio,
  Investment,
  Stock
};

