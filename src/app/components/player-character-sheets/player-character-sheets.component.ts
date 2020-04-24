import { Component, OnInit, Input } from '@angular/core';
import { CharacterSheetData } from 'src/data/character-sheet';

@Component({
	selector: 'player-character-sheets',
	templateUrl: './player-character-sheets.component.html',
	styleUrls: ['./player-character-sheets.component.css']
})
export class PlayerCharacterSheetsComponent implements OnInit {

	@Input() sheets: CharacterSheetData[] = []

	constructor() { }

	ngOnInit() {
	}

}
