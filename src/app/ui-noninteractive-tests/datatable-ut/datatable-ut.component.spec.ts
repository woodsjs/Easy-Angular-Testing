import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableUtComponent } from './datatable-ut.component';

describe('ui-noninteractive - DatatableUtComponent', () => {
  let component: DatatableUtComponent;
  let fixture: ComponentFixture<DatatableUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
