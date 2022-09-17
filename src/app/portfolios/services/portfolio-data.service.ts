import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioSummary, AccountType, IPortfolioSummaries, ISummary } from "../models/portfolio-data.model";
import { Observable }  from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor(private http: HttpClient) {

  }

  portfolioSummaries() {
    return [
      new PortfolioSummary('ing001', 'ING Diba', 'Trading', 97165.87, 'EUR'),
      new PortfolioSummary('ii001', 'Interactive Investor', 'Trading', 28437.53, 'GBP'),
      new PortfolioSummary('ii002', 'Interactive Investor', 'ISA', 43949.78, 'GBP'),
      new PortfolioSummary('ii003', 'Interactive Investor', 'SIPP', 27040.22, 'GBP')
    ];
  }

  portfolioSummary() {
    return this.http.get<IPortfolioSummaries>(`${environment.investingApiUrl}/portfolios/summaries`);
  }


}
