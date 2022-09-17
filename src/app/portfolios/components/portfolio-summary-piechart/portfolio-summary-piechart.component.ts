import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { EChartsOption } from 'echarts';
import { PortfolioSummary } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-portfolio-summary-piechart',
  templateUrl: './portfolio-summary-piechart.component.html',
  styleUrls: ['./portfolio-summary-piechart.component.scss']
})

export class PortfolioSummaryPiechartComponent implements OnInit {

  @Input() portfolioSummaries: PortfolioSummary[] = [];

  portfolioChartOption: EChartsOption = {};

  chartTitle = "Investment Distribution";

  constructor() {
  }

  ngOnInit(): void {
    /*
          this._data = [
          { value: 97165.87, name: 'ING Diba - Trading' },
          { value: 28437.53, name: 'II - Trading' },
          { value: 43949.78, name: 'II - ISA' },
          { value: 27040.22, name: 'II - SIPP' }
        ];
     */
  }

  normalizeCurrencyInUSD(currency: string, amount: number ){
    //TODO

  }
  
  loadPortfolioSummary() {
    var _tmp: { value: number, name: string }[] = []; //array of objects
    this.portfolioSummaries.forEach(pd => {
      _tmp.push({ value: pd.totalValue, name: pd.accountType })
      console.log("--> chart  loaded Account: " + pd.brokerName + " " + pd.accountType + "  " + pd.currency + " " + pd.totalValue)
    });
    return _tmp;
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
 
    this.portfolioChartOption = {
      title: {
        text: 'Portfolio Chart'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Portfolio',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.loadPortfolioSummary()
        }
      ]
    };

  }

}
