import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSummaryPiechartComponent } from './portfolio-summary-piechart.component';

describe('PortfolioSummaryPiechartComponent', () => {
  let component: PortfolioSummaryPiechartComponent;
  let fixture: ComponentFixture<PortfolioSummaryPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSummaryPiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSummaryPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
