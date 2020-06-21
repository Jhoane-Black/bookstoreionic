import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HandleBookComponent } from './handle-book.component';

describe('HandleBookComponent', () => {
  let component: HandleBookComponent;
  let fixture: ComponentFixture<HandleBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleBookComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
