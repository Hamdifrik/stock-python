import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCommandeComponent } from './tableCommande.component';

describe('TableProductListComponent', () => {
  let component: TableCommandeComponent;
  let fixture: ComponentFixture<TableCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
