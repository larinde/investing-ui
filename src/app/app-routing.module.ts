import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDataComponent } from './portfolios/components/portfolio-data/portfolio-data.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PortfolioDataComponent];
