import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioDataService } from "./portfolios/services/portfolio-data.service";
import { PortfolioSummaryPiechartComponent } from './portfolios/components/portfolio-summary-piechart/portfolio-summary-piechart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PortfolioSummaryPiechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: ()=> import ('echarts')
    })
  ],
  providers: [PortfolioDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
