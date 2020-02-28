import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigueSearchComponent } from './ligue-search.component';

describe('LigueSearchComponent', () => {
  let component: LigueSearchComponent;
  let fixture: ComponentFixture<LigueSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigueSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
