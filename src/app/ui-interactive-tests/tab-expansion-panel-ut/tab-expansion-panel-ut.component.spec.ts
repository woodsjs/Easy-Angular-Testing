import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExpansionPanelUtComponent } from './tab-expansion-panel-ut.component';

describe('TabExpansionPanelUtComponent', () => {
  let component: TabExpansionPanelUtComponent;
  let fixture: ComponentFixture<TabExpansionPanelUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabExpansionPanelUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpansionPanelUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
