import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCommandeComponent } from './editcommande.component';





describe('TableListComponent', () => {
  let component: EditCommandeComponent;
  let fixture: ComponentFixture<EditCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCommandeComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
