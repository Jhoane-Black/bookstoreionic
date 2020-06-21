import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientType} from "@Resources/types/client.type";

@Injectable({providedIn: 'root'})
export class HandleClientFormClass {
    private _clientForm;

    public initForm(): void {
        this._clientForm = new FormGroup({
            cli_nom: new FormControl(undefined, [Validators.required]),
            cli_ape: new FormControl(undefined, [Validators.required]),
            cli_pais: new FormControl(undefined, [Validators.required]),
            cli_email: new FormControl(undefined, [Validators.required, Validators.email]),
            cli_pass: new FormControl(undefined, [Validators.required]),
            cli_cc: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]{15,16}')]),
            cli_ccday: new FormControl(undefined, [Validators.required]),
            cli_ccmonth: new FormControl(undefined, [Validators.required]),
            cli_ccyear: new FormControl(undefined, [Validators.required]),
        });
    }

    public getFormValues (): ClientType {
        console.log('getForm values: ')
        return {
            cli_nom: this._clientForm.value.cli_nom,
            cli_ape: this._clientForm.value.cli_ape,
            cli_pais: this._clientForm.value.cli_pais,
            cli_email: this._clientForm.value.cli_email,
            cli_pass: this._clientForm.value.cli_pass,
            cli_cc: this._clientForm.value.cli_cc,
            cli_ccday: this._clientForm.value.cli_ccday,
            cli_ccmonth: this._clientForm.value.cli_ccmonth,
            cli_ccyear: this._clientForm.value.cli_ccyear
        }
    }

    public setForm(c: ClientType): void {
        this._clientForm = new FormGroup({
            cli_nom: new FormControl(c.cli_nom, [Validators.required]),
            cli_ape: new FormControl(c.cli_ape, [Validators.required]),
            cli_pais: new FormControl(c.cli_pass, [Validators.required]),
            cli_email: new FormControl(c.cli_email, [Validators.required, Validators.email]),
            cli_pass: new FormControl(c.cli_pass, [Validators.required]),
            cli_cc: new FormControl(c.cli_cc, [Validators.required, Validators.pattern('[0-9]{15,16}')]),
            cli_ccday: new FormControl(c.cli_ccday, [Validators.required]),
            cli_ccmonth: new FormControl(c.cli_ccmonth, [Validators.required]),
            cli_ccyear: new FormControl(c.cli_ccyear, [Validators.required]),
        })
    }


    get clientForm() {
        return this._clientForm;
    }
}