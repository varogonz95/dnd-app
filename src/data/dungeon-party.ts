import { DocumentReference } from '@angular/fire/firestore';

export interface DungeonParty {
	title: string
	storySections: {content: string}[]
	bannerUrl: string
	dmUid: string
	players: DocumentReference[],
	tokenId: string
	tokenExpiration: number
}