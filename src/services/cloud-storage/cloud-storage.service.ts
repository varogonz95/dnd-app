import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class CloudStorageService {

	private readonly DEFAULT_BUCKET = '/avatars'
	private storage: firebase.storage.Storage

	constructor() {
		this.storage = firebase.storage()
	}

	public async delete(file: string) {
		return this.storage.ref(`${this.DEFAULT_BUCKET}/${file}`).delete()
	}

	public async getDownloadUrl(file: string) {
		return this.storage.ref(`${this.DEFAULT_BUCKET}/${file}`).getDownloadURL()
	}

	public async upload(data: Blob | Uint8Array | ArrayBuffer, filename: string, metadata?: firebase.storage.UploadMetadata) {
		return await this.storage.ref(`${this.DEFAULT_BUCKET}/${filename}`)
						 		 .put(data, metadata)
	}
}
