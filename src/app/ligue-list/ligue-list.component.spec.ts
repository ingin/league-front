import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigueListComponent } from './ligue-list.component';

describe('LigueListComponent', () => {
  let component: LigueListComponent;
  let fixture: ComponentFixture<LigueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
