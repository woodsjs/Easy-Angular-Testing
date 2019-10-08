import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtComponent } from './list-ut.component';

describe('ui-noninteractive - ListUtComponent', () => {
  let component: ListUtComponent;
  let fixture: ComponentFixture<ListUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
