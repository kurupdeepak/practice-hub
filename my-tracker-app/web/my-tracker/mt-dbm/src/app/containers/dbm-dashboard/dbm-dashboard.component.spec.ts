import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmDashboardComponent } from './dbm-dashboard.component';

describe('BgDashboardComponent', () => {
  let component: DbmDashboardComponent;
  let fixture: ComponentFixture<DbmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
