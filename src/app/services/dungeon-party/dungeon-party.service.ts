import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { DungeonParty } from '../../../data/dungeon-party';

@Injectable({
	providedIn: 'root'
})
export class DungeonPartyService {

	private collection: AngularFirestoreCollection<DungeonParty>

	constructor(private store: AngularFirestore) {
		this.collection = store.collection('dungeon-parties')
	}

	public createDefaultDungeonParty(): DungeonParty {
		return {
			title: '',
			storySections: [{ content: '' }],
			bannerUrl: '',
			dmUid: '',
			players: [],
			tokenId: '',
			tokenExpiration: 0,
		}
	}

	public generateToken(dungeonParty: DungeonParty) {
		dungeonParty.tokenId = this.store.createId()
		dungeonParty.tokenExpiration = Date.now() + (2592 * Math.pow(1000, 6))
	}
	
	public getByDocId(docId: string) {
		return this.collection.doc<DungeonParty>(docId)
	}
	public getCollection(docId?: string) {
		return docId? this.collection : this.store.collection<DungeonParty>(`dungeon-parties/${docId}`)
	}

	public async saveAsync(dungeonParty: DungeonParty) {
		return this.collection.add(dungeonParty)
	}

}
