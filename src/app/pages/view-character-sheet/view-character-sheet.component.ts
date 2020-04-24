import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

import { CharacterSheet } from '../../../data/character-sheet';
import { FileToBase64Service } from '../../../services/file-to-base64/file-to-base64.service';
import { CharacterSheetService } from '../../../services/character-sheet/character-sheet.service';
import { ProgressBarService } from '../../services/progress-bar/progress-bar.service';
import { PlayerInfoService } from '../../../services/player-info/player-info.service';

@Component({
	selector: 'view-character-sheet',
	template: `
		<character-sheet 
			headerText="Mi hoja de personaje"
			[canDelete]="true"
			[disabled]="isDisabled"
			[loading]="isLoading"
			[playerName]="playerName"
			[character]="character" 
			[imageSrc]="imageSrc"
			(onSave)="saveSheet()" 
			(onDelete)="deleteSheet()"
			(onImageChange)="onImageChange($event)">
		</character-sheet>
		<dump-data [data]="character"></dump-data>`,
	styleUrls: ['./view-character-sheet.component.css']
})
export class ViewCharacterSheetPage implements OnInit, OnDestroy {

	public isLoading = false
	public isDisabled = true
	public imageSrc: string
	public playerName: string
	public character: CharacterSheet
	public characterSubscription: Subscription

	private docRef: DocumentReference
	private imageHasChanged = false
	private imageFile: File

	constructor(
		private router: Router, 
		private activatedRoute: ActivatedRoute,
		private base64Service: FileToBase64Service,
		private playerInfo: PlayerInfoService,
		private characterService: CharacterSheetService,
		private progressBar: ProgressBarService) {
		this.character = this.characterService.createDefaultCharacter()
	}

	ngOnInit() {
		this.progressBar.show()
		this.playerName = this.playerInfo.getUserInfo().displayName
		this.fetchCharacterSheetData()
	}

	public async deleteSheet() {
		if (confirm('¿Estás seguro/a que deseas eliminar esta hoja de personaje?')) {
			try {
				this.isDisabled = true
				this.isLoading = true
				
				await this.characterService.deleteAsync(this.docRef)
				await this.router.navigate(['/home'])
			} 
			catch (err) {
				console.error(err)	
				alert('Ocurrió un error al eliminar la hoja de personaje.\nPor favor intente nuevamente')
			}
			finally {
				this.isDisabled = false
				this.isLoading = false
			}
		}
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
		this.isDisabled = true
		this.isLoading = true

		try {
			await this.characterService.updateAsync(this.docRef, this.character)

			if (this.imageHasChanged) {
				await this.characterService.updateImageAsync(this.docRef, this.imageFile)
			}
		}
		catch (err) {
			console.error(err)
			alert('Algo salió mal :(\nPor favor inténtelo nuevamente.')
		}
		finally {
			this.isDisabled = false
			this.isLoading = false
		}
	}

	private fetchCharacterSheetData() {
		const characterSheetDoc = this.activatedRoute.snapshot.data.characterSheet as AngularFirestoreDocument<CharacterSheet>
		
		this.characterSubscription = characterSheetDoc.get()
			.subscribe(
				snapshot => {
					this.docRef = snapshot.ref
					this.character = snapshot.data() as CharacterSheet
					this.imageSrc = this.character.header.imageUrl
					this.isDisabled = false
					this.progressBar.hide()
				}
			)
	}

	ngOnDestroy() {
		this.characterSubscription.unsubscribe()
	}
}