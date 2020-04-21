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

	private userStateSubscription: Subscription
	private collection: AngularFirestoreCollection<CharacterSheet>

	constructor(
		private store: AngularFirestore,
		private fireAuth: AngularFireAuth) {
		this.collection = store.collection('character-sheets')
	}

	ngOnInit() {
		this.userStateSubscription = this.fireAuth.authState.subscribe(user => {
			if (user) {
				this.collection.ref.where("uid", "==", user.uid)
					.get()
					.then(docs => {
						docs.docs.forEach(doc => console.log(doc.data()))
					})
			}
		})
	}

	ngOnDestroy() {
		this.userStateSubscription.unsubscribe()
	}
}
