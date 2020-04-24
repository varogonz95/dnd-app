import { Injectable } from '@angular/core';

@Injectable()
export class FileToBase64Service {

	constructor() { }

	public async encode(file: File) {
		return new Promise<string | ArrayBuffer> ((resolve, reject) => {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => resolve(reader.result)
			reader.onerror = error => reject(error)
		})
	}
}
