import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpChartComponent } from './bp-chart.component';

describe('BpChartComponent', () => {
  let component: BpChartComponent;
  let fixture: ComponentFixture<BpChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
