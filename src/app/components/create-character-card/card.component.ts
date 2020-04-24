import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	
	@Input() headerText: string
	@Input() description: string
	@Input() image: string
	@Input() actionText: string
	
	@Output('onAction') action = new EventEmitter<void>()

	constructor() { }

	ngOnInit() {
	}

	public onAction() {
		this.action.emit()
	}

}
