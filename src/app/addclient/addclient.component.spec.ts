import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddClientComponent } from './addclient.component';



describe('TableListComponent', () => {
  let component: AddClientComponent;
  let fixture: ComponentFixture<AddClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
