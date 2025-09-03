import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedDashComponent } from './med-dash.component';

describe('MedDashComponent', () => {
  let component: MedDashComponent;
  let fixture: ComponentFixture<MedDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
