import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmBPManagerComponent } from './dbm-bp.component';

describe('DbmAddBpComponent', () => {
  let component: DbmBPManagerComponent;
  let fixture: ComponentFixture<DbmBPManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbmBPManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmBPManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
