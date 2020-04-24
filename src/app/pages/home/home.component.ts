import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CharacterSheet } from 'src/app/data/character-sheet';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

	public userCharactersSheets: CharacterSheet[] = []
	private userStateSubscription: Subscription
	private collection: AngularFirestoreCollection<CharacterSheet>

	constructor(
		private store: AngularFirestore,
		private fireAuth: AngularFireAuth) {
		this.collection = this.store.collection('character-sheets')
	}

	ngOnInit() {
		this.userStateSubscription = this.fireAuth.authState.subscribe(
			async user => {
				if (user) {
					this.collection.ref.where("uid", "==", user.uid)
						.onSnapshot(querySnapshot => {
							this.userCharactersSheets.splice(0)
							const docs = querySnapshot.docs.map(doc => doc.data() as CharacterSheet)
							this.userCharactersSheets.push(...docs)
						})
				}
			})
	}

	ngOnDestroy() {
		this.userStateSubscription.unsubscribe()
	}
}
