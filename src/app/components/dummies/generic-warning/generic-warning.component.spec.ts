import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenericWarningComponent } from './generic-warning.component';

describe('GenericWarningComponent', () => {
	let component: GenericWarningComponent;
	let fixture: ComponentFixture<GenericWarningComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GenericWarningComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(GenericWarningComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
