import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, DocumentData } from '@angular/fire/firestore';
import { CharacterSheet } from '../../data/character-sheet';
import { CloudStorageService } from '../cloud-storage/cloud-storage.service';

@Injectable()
export class CharacterSheetService {

	private readonly collection: AngularFirestoreCollection<CharacterSheet>

	constructor(
		store: AngularFirestore,
		private cloudStorageService: CloudStorageService) {
		this.collection = store.collection('character-sheets')
	}

	public createDefaultCharacter(): CharacterSheet {
		return {
			uid: null,

			header: {
				name: null,
				class: {
					name: null,
					subclasses: []
				},
				level: 1,
				background: null,
				race: null,
				alignment: null,
				imageUrl: null,

				expCurrent: 0,
				expNext: 1000
			},

			armorClass: 0,
			initiative: 0,
			speed: 0,

			hitInfo: {
				hitPoints: 0,
				hitPointsMax: 0,
				tmpHitPoints: 0,

				hitDice: 0,
				hitDiceTotal: 0
			},

			deathSavesSuccess: [false, false, false],
			deathSavesFailures: [false, false, false],

			personalityTraits: null,
			ideals: null,
			bonds: null,
			flaws: null,
			featuresTraits: null,

			attacks: [
				{ name: null, bonus: 0, damageType: null },
				{ name: null, bonus: 0, damageType: null },
				{ name: null, bonus: 0, damageType: null },
			],
			spells: [],

			proficiencyBonus: 0,
			inspiration: 0,

			perks: [
				{
					name: "Strength",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					savingThrowsChk: false,
					abilities: [
						{ name: "Athletics", value: 0, checked: false },
					]
				},
				{
					name: "Dexterity",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					savingThrowsChk: false,
					abilities: [
						{ name: "Acrobatics", value: 0, checked: false },
						{ name: "Sleight of Hand", value: 0, checked: false },
						{ name: "Stealth", value: 0, checked: false },
					]
				},
				{
					name: "Constitution",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					savingThrowsChk: false,
					abilities: []
				},
				{
					name: "Intelligence",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					savingThrowsChk: false,
					abilities: [
						{ name: "Arcana", value: 0, checked: false },
						{ name: "History", value: 0, checked: false },
						{ name: "Investigation", value: 0, checked: false },
						{ name: "Nature", value: 0, checked: false },
						{ name: "Religion", value: 0, checked: false },
					]
				},
				{
					name: "Wisdom",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					savingThrowsChk: false,
					abilities: [
						{ name: "Animal handling", value: 0, checked: false },
						{ name: "Insight", value: 0, checked: false },
						{ name: "Medicine", value: 0, checked: false },
						{ name: "Perception", value: 0, checked: false },
						{ name: "Suvival", value: 0, checked: false },
					]
				},
				{
					name: "Charisma",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					savingThrowsChk: false,
					abilities: [
						{ name: "Deception", value: 0, checked: false },
						{ name: "Intimidation", value: 0, checked: false },
						{ name: "Performance", value: 0, checked: false },
						{ name: "Persuasion", value: 0, checked: false },
					]
				},
			],

			passiveWisdom: 0,

			proficienciesLanguages: null,
			equipment: null,
			notes: null
		}
	}

	public async deleteAsync(id: string)
	public async deleteAsync(docRef: DocumentReference)
	public async deleteAsync(idOrDocRef: string | DocumentReference) {
		return typeof idOrDocRef === "string"? this.deleteAsyncFromId(idOrDocRef) : this.deleteAsyncFromDocRef(idOrDocRef)
	}

	public getCollection() {
		return this.collection
	}

	public getByDocId(docId: string) {
		return this.collection.doc<CharacterSheet>(docId)
	}

	public getByUserId(uid: string) {
		return this.collection.ref.where("uid", "==", uid)
	}

	public async createAsync(character: CharacterSheet) {
		return this.collection.add(character)
	}

	public async updateAsync(doc: DocumentReference, data: DocumentData) {
		return doc.set(data)
	}
	
	public async updateImageAsync(doc: DocumentReference, imageFile: File) {
		const uploadTask = await this.cloudStorageService.upload(imageFile, doc.id)
		const imageUrl = await uploadTask.ref.getDownloadURL()
		await doc.update('header.imageUrl', imageUrl)
	}
	
	private async deleteAsyncFromId(id: string) {
		let capturedError = null

		try {
			await this.cloudStorageService.delete(id)
		} 
		catch (error) {
			capturedError = error
		}
		finally {
			return capturedError !== null && capturedError.code !== 'storage/object-not-found'? this.collection.doc(id).delete() : Promise.reject(capturedError)
		}
	}

	private async deleteAsyncFromDocRef(docRef: DocumentReference) {
		let capturedError = null

		try {
			await this.cloudStorageService.delete(docRef.id)
		} 
		catch (error) {
			capturedError = error
		}
		finally {
			return capturedError !== null && capturedError.code === 'storage/object-not-found'? docRef.delete() : Promise.reject(capturedError)
		}
	}
}
