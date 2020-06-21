import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HandleClientComponent } from './handle-client.component';

describe('HandleClientComponent', () => {
  let component: HandleClientComponent;
  let fixture: ComponentFixture<HandleClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleClientComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
