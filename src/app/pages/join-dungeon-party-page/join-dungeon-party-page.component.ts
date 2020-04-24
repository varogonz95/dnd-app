import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DungeonParty } from '../../../data/dungeon-party';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { DungeonPartyService } from 'src/app/services/dungeon-party/dungeon-party.service';

@Component({
	selector: 'join-dungeon-party-page',
	templateUrl: './join-dungeon-party-page.component.html',
	styleUrls: ['./join-dungeon-party-page.component.css']
})
export class JoinDungeonPartyPageComponent implements OnInit {

	public dungeonParty: DungeonParty

	constructor(
		private activatedRoute: ActivatedRoute,
		private service: DungeonPartyService) {
		this.dungeonParty = this.service.createDefaultDungeonParty()
	}

	ngOnInit() {
		const document: AngularFirestoreDocument<DungeonParty> = this.activatedRoute.snapshot.data.dungeonParty

		document.valueChanges()
			.subscribe(data => this.dungeonParty = data)
	}

	public refreshToken() {
		this.service.generateToken(this.dungeonParty)
	}
}
