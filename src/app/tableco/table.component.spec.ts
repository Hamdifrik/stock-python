import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecoComponent } from './table.component';

describe('TablecoComponent', () => {
  let component: TablecoComponent ;
  let fixture: ComponentFixture<TablecoComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecoComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
