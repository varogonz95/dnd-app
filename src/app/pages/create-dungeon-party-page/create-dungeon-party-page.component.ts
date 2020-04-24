import { Component, OnInit } from '@angular/core';
import { DungeonParty } from '../../../data/dungeon-party';
import { DungeonPartyService } from '../../../app/services/dungeon-party/dungeon-party.service';
import { Router } from '@angular/router';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { PlayerInfoService } from 'src/services/player-info/player-info.service';

@Component({
	selector: 'create-dungeon-party-page',
	templateUrl: './create-dungeon-party-page.component.html',
	styleUrls: ['./create-dungeon-party-page.component.css']
})
export class CreateDungeonPartyPageComponent implements OnInit {

	public isLoading = false
	public dungeonParty: DungeonParty

	public readonly maxlength = 1000

	constructor(
		private router: Router,
		private storeService: DungeonPartyService,
		private progressBar: ProgressBarService,
		private playerInfo: PlayerInfoService) {
		this.dungeonParty = this.storeService.createDefaultDungeonParty()
	}

	ngOnInit() {
	}

	public addStorySection() {
		this.dungeonParty.storySections.push({ content: '' })
	}

	public deleteStorySection(index: number) {
		this.dungeonParty.storySections.splice(index, 1)
	}

	public async saveAndStart() {
		this.isLoading = true
		this.progressBar.show()
		const dmUid = this.playerInfo.getUserInfo().uid
		const ref = await this.storeService.saveAsync({ ...this.dungeonParty, dmUid })
		this.progressBar.hide()
		this.router.navigate(['/dungeon-party/join', ref.id])
	}
}
