import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { firestore } from 'firebase';

import { CharacterSheetService } from '../../../services/character-sheet/character-sheet.service';
import { PlayerInfoService } from '../../../services/player-info/player-info.service';
import { ProgressBarService } from '../../services/progress-bar/progress-bar.service';

import { CharacterSheetData } from '../../../data/character-sheet';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit {

	public displayModal = false
	public dataLoaded = false
	public playerCharactersSheets: CharacterSheetData[] = []

	constructor(
		private router: Router,
		private characterService: CharacterSheetService,
		private playerInfo: PlayerInfoService,
		private progressBar: ProgressBarService) {
	}

	ngOnInit() {
		const user = this.playerInfo.getUserInfo()
		this.progressBar.show()
		this.userCharacterSheetsObserver(user)
	}

	public joinParty() {
		
	}
	
	public redirectTo(route: any[]) {
		this.router.navigate(route)
	}
	
	public toggleJoinDungeonPartyModal() {
		this.displayModal = !this.displayModal
	}

	private userCharacterSheetsObserver(user: firebase.User) {
		if (user) {
			const sheetsQuery = this.queryCharacterSheets(user)
			this.observeCharacterSheetsSnapshot(sheetsQuery)
		}
	}

	private observeCharacterSheetsSnapshot(query: firestore.Query<DocumentData>) {
		query.onSnapshot(querySnapshot => {
			this.playerCharactersSheets.splice(0)
			const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as CharacterSheetData))
			this.playerCharactersSheets.push(...docs)
			this.progressBar.hide()
		})
	}

	private queryCharacterSheets(user: firebase.User) {
		return this.characterService.getByUserId(user.uid)
	}
}
