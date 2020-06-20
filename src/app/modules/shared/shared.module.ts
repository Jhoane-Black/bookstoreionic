import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@Dummies/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenericWarningComponent } from '@Dummies/generic-warning/generic-warning.component';

@NgModule({
	declarations: [
		LoginComponent,
		GenericWarningComponent,
	],
	imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterModule, FormsModule],
	exports: [
		LoginComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		RouterModule,
		GenericWarningComponent,
	],
})
export class SharedModule {}
