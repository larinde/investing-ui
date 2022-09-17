import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioSummary, AccountType, IPortfolioSummaries, ISummary } from '../../models/portfolio-data.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-portfolio-data',
  templateUrl: './portfolio-data.component.html',
  styleUrls: ['./portfolio-data.component.scss']
})

export class PortfolioDataComponent implements OnInit, OnDestroy {

  portfolioSummaries: PortfolioSummary[] = [];

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioDataService.portfolioSummary().subscribe((data) => {
      data.summaries.forEach(_data => {
        console.log("loading portfolio " + _data.accountType);
        this.portfolioSummaries.push(new PortfolioSummary('', _data.broker, _data.accountType, _data.totalValue, _data.currency))
      })
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
