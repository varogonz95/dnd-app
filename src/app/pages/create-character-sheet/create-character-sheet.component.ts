import { Component, OnInit } from '@angular/core';
import { CharacterSheet } from 'src/data/character-sheet';
import { Router } from '@angular/router';
import { FileToBase64Service } from 'src/services/file-to-base64/file-to-base64.service';
import { PlayerInfoService } from 'src/services/player-info/player-info.service';
import { CharacterSheetService } from 'src/services/character-sheet/character-sheet.service';

@Component({
	selector: 'create-character-sheet',
	template: `
		<character-sheet 
			headerText="Hoja de creación de personaje"
			[disabled]="isLoading"
			[loading]="isLoading"
			[playerName]="playerName"
			[character]="character" 
			[imageSrc]="imageSrc"
			(onSave)="saveSheet()" 
			(onImageChange)="onImageChange($event)">
		</character-sheet>
		<dump-data [data]="character"></dump-data>`,
	styleUrls: ['./create-character-sheet.component.css']
})
export class CreateCharacterSheetPage implements OnInit {

	public character: CharacterSheet
	public playerName: string
	public imageSrc: string
	public isLoading = false

	private imageHasChanged = false
	private imageFile: File

	constructor(
		private router: Router,
		private playerInfoService: PlayerInfoService,
		private base64Service: FileToBase64Service,
		private characterService: CharacterSheetService) {
		this.character = this.characterService.createDefaultCharacter()
	}

	ngOnInit() {
		this.playerName = this.playerInfoService.getUserInfo().displayName
		this.character.uid = this.playerInfoService.getUserInfo().uid
	}

	public async onImageChange(file: File) {
		this.imageHasChanged = true
		this.imageFile = file

		try {
			this.imageSrc = await (this.base64Service.encode(file) as Promise<string>)
		}
		catch (err) {
			console.error(err);
			alert('No se pudo cargar la imagen.\nPor favor intente nuevamente')
		}
	}

	public async saveSheet() {
		this.isLoading = true

		try {
			const doc = await this.characterService.createAsync(this.character)
		
			if (this.imageHasChanged) {
				await this.characterService.updateImageAsync(doc, this.imageFile)
			}

			await this.router.navigate(['/home'])
		}
		catch (err) {
			console.error(err)
			this.isLoading = false
			alert('Algo salió mal :(\nPor favor inténtelo nuevamente.')
		}
		finally {
			this.isLoading = false
		}
	}

}
