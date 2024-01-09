import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepComponent } from './table.component';

describe('TableListComponent', () => {
  let component: TablepComponent ;
  let fixture: ComponentFixture<TablepComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablepComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
