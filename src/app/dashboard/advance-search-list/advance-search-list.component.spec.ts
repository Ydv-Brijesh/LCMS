import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchListComponent } from './advance-search-list.component';

describe('AdvanceSearchListComponent', () => {
  let component: AdvanceSearchListComponent;
  let fixture: ComponentFixture<AdvanceSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
