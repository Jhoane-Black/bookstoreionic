import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookType} from "@Resources/types/book.type";

@Injectable({providedIn: 'root'})
export class HandleBookFormClass {
    private _bookForm;

    public initForm() {
        this._bookForm = new FormGroup({
            book_title: new FormControl(undefined, [Validators.required]),
            book_editorial: new FormControl(undefined, [Validators.required]),
            book_saga: new FormControl(undefined, [Validators.required]),
            book_price: new FormControl(undefined, [Validators.required]),
            book_price_dis: new FormControl(0, [Validators.required])
        })
    }

    public getValues(): BookType {
        return {
            book_id: this._bookForm.value.book_id,
            book_title: this._bookForm.value.book_title,
            book_editorial: this._bookForm.value.book_editorial,
            book_saga: this._bookForm.value.book_saga,
            book_price: this._bookForm.value.book_price,
            book_price_dis: this._bookForm.value.book_price_dis
        }
    }

    public setFormValues(b: BookType) {
        this._bookForm = new FormGroup({
            book_title: new FormControl(b.book_title, [Validators.required]),
            book_editorial: new FormControl(b.book_editorial, [Validators.required]),
            book_saga: new FormControl(b.book_saga, [Validators.required]),
            book_price: new FormControl(b.book_price, [Validators.required]),
            book_price_dis: new FormControl(b.book_price_dis, [Validators.required])
        })
    }


    get bookForm() {
        return this._bookForm;
    }
}