import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-generic-warning',
	templateUrl: './generic-warning.component.html',
	styleUrls: ['./generic-warning.component.scss'],
})
export class GenericWarningComponent implements OnInit {
	@Input() text: string;
	@Input() emojiCode: string;
	constructor(private sanitizer: DomSanitizer) {}

	public displayEmoji() {
		return this.sanitizer.bypassSecurityTrustHtml(this.emojiCode ?? '&#128373;');
	}

	ngOnInit() {}
}
