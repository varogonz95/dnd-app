import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CharacterSheet } from 'src/data/character-sheet';

@Component({
  selector: 'character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

	@Input() playerName: string
	@Input() headerText: string
	@Input() imageSrc: string
	@Input() character: CharacterSheet
	@Input() canDelete = false
	@Input('disabled') isDisabled = false
	@Input('loading') isLoading = false

	@Output() onSave = new EventEmitter<void>()
	@Output() onDelete = new EventEmitter<void>()
	@Output() onImageChange = new EventEmitter<File>()

	constructor() { }

	ngOnInit() { }
	
	public addSpell() {
		this.character.spells.push({name: '', description: ''})
	}

	public imageChange(file: File) {
		this.onImageChange.emit(file)
	}

	public removeSpell(index: number) {
		this.character.spells.splice(index, 1)
	}

	public save() {
		this.onSave.emit()
	}

	public deleteSheet() {
		this.onDelete.emit()
	}
}
