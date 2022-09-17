export class PortfolioData {
}

export interface IPortfolioSummaries {
    summaries: ISummary[]
}

export interface ISummary {
    broker: string
    accountType: string
    totalValue: number
    currency: string
}


export enum AccountType {
    TRADING_ACCOUNT = 'Trading',
    ISA_ACCOUNT = 'ISA',
    SIPP_ACCOUNT = 'SIPP'
}

export class PortfolioSummary {
    public accountId: string;
    public brokerName: string;
    public accountType: string;
    public totalValue: number;
    public currency: string;

    constructor(accountId: string, brokerName: string, accountType: string, totalValue: number, currency: string) {
        this.accountId = accountId;
        this.brokerName = brokerName;
        this.accountType = accountType;
        this.totalValue = totalValue;
        this.currency = currency
    }
}

export interface Portfolio {
    broker: string
    accountType: string
    positions: Position[]
}

export interface Position {
    symbol: string
    quantity: number
    description: string
    price: string
    change: string
    changeInPercentage: string
    marketValue: string
    bookCost: string
    gain: string
    gainInPercentage: string
    shortName: string
    averagePrice: string
    currency: string
}

