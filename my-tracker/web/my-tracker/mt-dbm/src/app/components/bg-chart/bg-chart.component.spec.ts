import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgChartComponent } from './bg-chart.component';

describe('BgChartComponent', () => {
  let component: BgChartComponent;
  let fixture: ComponentFixture<BgChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
