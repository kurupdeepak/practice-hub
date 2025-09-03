import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedFormComponent } from './med-form.component';

describe('MedFormComponent', () => {
  let component: MedFormComponent;
  let fixture: ComponentFixture<MedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
