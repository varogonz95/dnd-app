import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DungeonParty } from '../../../data/dungeon-party';
import { DungeonPartyService } from '../../../app/services/dungeon-party/dungeon-party.service';
import { ProgressBarService } from '../../../app/services/progress-bar/progress-bar.service';
import { PlayerInfoService } from '../../../services/player-info/player-info.service';

@Component({
  selector: 'dungeon-party-form',
  templateUrl: './dungeon-party-form.component.html',
  styleUrls: ['./dungeon-party-form.component.css']
})
export class DungeonPartyFormComponent implements OnInit {

	@Input()
	public isLoading = false

	@Input()
	public dungeonParty: DungeonParty

	public readonly maxlength = 1000

	constructor(
		private router: Router,
		private storeService: DungeonPartyService,
		private progressBar: ProgressBarService,
		private playerInfo: PlayerInfoService) {
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
