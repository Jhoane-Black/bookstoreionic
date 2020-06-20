import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ClientType} from "@Resources/types/client.type";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	@Output() private accessToken = new EventEmitter<ClientType>();
	@Input() private urlLogin: string;

	public _LoginForm = new FormGroup({
		email: new FormControl(undefined, [Validators.required, Validators.email]),
		password: new FormControl(undefined, [Validators.required])
	})

	constructor(private sanitizer: DomSanitizer) {}

	public onSubmitForm(e) {
		e.preventDefault();
		console.log(e);
		console.log(this._LoginForm.value.email);
		console.log(this._LoginForm.value.password);
	}

	ngOnInit() {}
}
