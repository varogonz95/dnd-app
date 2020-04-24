import { Injectable } from '@angular/core';
import { EmailDocument } from '../../data/email-document';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class EmailService {

	public readonly defaultFrom = 'D&D WebApp'
	
	private readonly mailsCollection = 'mails'
	private readonly collection: AngularFirestoreCollection

	constructor(private store: AngularFirestore) {
		this.collection = this.store.collection(this.mailsCollection)
	}

	public async send(email: EmailDocument) {
		return this.collection.add(email)
	}
}
