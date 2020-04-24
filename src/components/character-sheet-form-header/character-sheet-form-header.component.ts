import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'character-sheet-form-header',
	template: `
	<div class="columns">
		<div class="column">
			<h1 class="title has-text-left">{{headerText}}</h1>
		</div>
		<div class="column">
			<h1 class="title has-text-right">{{playerName}}</h1>
		</div>
	</div>`,
	styleUrls: ['./character-sheet-form-header.component.css']
})
export class CharacterSheetFormHeaderComponent implements OnInit {

	@Input() headerText: string
	@Input() playerName: string

	constructor() { }

	ngOnInit() {
	}

}
