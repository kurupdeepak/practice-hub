import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmBGManagerComponent } from './dbm-bg.component';

describe('DbmBGManagerComponent', () => {
  let component: DbmBGManagerComponent;
  let fixture: ComponentFixture<DbmBGManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbmBGManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmBGManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
