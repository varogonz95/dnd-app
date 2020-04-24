import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

import { DungeonPartyService } from '../dungeon-party/dungeon-party.service';
import { PlayerInfoService } from '../../../services/player-info/player-info.service';
import { DungeonParty } from '../../../data/dungeon-party';

@Injectable({
	providedIn: 'root'
})
export class DungeonPartyResolverService implements Resolve<any> {

	constructor(
		private router: Router,
		private service: DungeonPartyService,
		private playerInfo: PlayerInfoService) { }

	async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (route.paramMap.has('id')) {
			const docId = route.paramMap.get('id')
			const user = this.playerInfo.getUserInfo()
			const collection = this.service.getCollection(docId)

			return await this.hasPermission(user, collection) ? this.service.getByDocId(docId) : this.router.navigateByUrl('/forbidden')
		}
		else {
			return this.router.navigateByUrl('/forbidden')
		}
	}

	private async hasPermission(user: firebase.User, collection: AngularFirestoreCollection<DungeonParty>) {
		const dmUid = user.uid
		const playersQuery = await collection.ref.where('players', 'array-contains', dmUid).get()
		const collectionQuery = await collection.ref.get()
		const snapshot = collectionQuery.docs[0]

		return snapshot.get('dmUid') === dmUid || !playersQuery.empty
	}
}
