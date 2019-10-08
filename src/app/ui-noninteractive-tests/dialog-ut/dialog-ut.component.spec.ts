import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUtComponent } from './dialog-ut.component';

describe('ui-noninteractive - DialogUtComponent', () => {
  let component: DialogUtComponent;
  let fixture: ComponentFixture<DialogUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
