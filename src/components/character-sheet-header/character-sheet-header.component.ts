import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharacterSheetHeader } from '../../data/character-sheet-header';

@Component({
	selector: 'character-sheet-header',
	templateUrl: './character-sheet-header.component.html',
	styleUrls: ['./character-sheet-header.component.css']
})
export class CharacterSheetHeaderComponent implements OnInit {

	@Input() header: CharacterSheetHeader
	@Input() imageSrc: string
	
	@Output() onImageChange = new EventEmitter<File>()

	public readonly defaultImage = 'assets/images/noimage.png'

	constructor() { }

	ngOnInit() {
	}

	public addSubClass() {
		this.header.class.subclasses.push({ name: '' })
	}

	public removeSubClass(index: number) {
		this.header.class.subclasses.splice(index, 1)
	}

	public async imageChange(event: Event) {
		const input = event.target as HTMLInputElement
		this.onImageChange.emit(input.files.item(0))
	}
}
