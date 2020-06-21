import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ClientType} from "@Resources/types/client.type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "@services/login/login.service";
import {StoreAuthenticate} from "@Utils/class/store-auth.class";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
	@Output() private accessToken = new EventEmitter<ClientType>();
	@Input() private urlLogin: string;
	private onLoginSubscription: Subscription;

	public _LoginForm = new FormGroup({
		email: new FormControl(undefined, [Validators.required, Validators.email]),
		password: new FormControl(undefined, [Validators.required])
	})

	constructor(private loginService: LoginService, private storeAuth: StoreAuthenticate, private router: Router) {}

	public onSubmitForm(e) {
		e.preventDefault();
		console.log(e);
		console.log(this._LoginForm.value.email);
		console.log(this._LoginForm.value.password);
		this.onLoginSubscription = this.loginService.login({cli_email: this._LoginForm.value.email, cli_pass: this._LoginForm.value.password}).subscribe(
			value => {
				this.storeAuth.storeToken(value);
				this.resetForm();
				this.router.navigate(['/']);
			}
		);
	}

	private resetForm (): void {
		this._LoginForm = new FormGroup({
			email: new FormControl(undefined, [Validators.required, Validators.email]),
			password: new FormControl(undefined, [Validators.required])
		});
	}

	ngOnInit() {}

	ngOnDestroy(): void {
		if (this.onLoginSubscription) this.onLoginSubscription.unsubscribe();
	}
}
