import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { CharacterSheet } from 'src/app/data/character-sheet';
import { Races } from 'src/app/data/races';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'character-form',
	templateUrl: './character-form.component.html',
	styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

	public user: firebase.User
	public character: CharacterSheet
	public races = Races
	public collection: AngularFirestoreCollection<CharacterSheet>

	constructor(
		private fireauth: AngularFireAuth,
		private store: AngularFirestore) {
		this.character = this.createDefaultCharacter()
		this.collection = this.store.collection('character-sheets')
	}

	ngOnInit() {
		this.user = this.fireauth.auth.currentUser
		console.log(this.user);
	}

	public saveForm() {
		this.character.uid = this.user.uid
		this.collection.add(this.character)
			.then(doc => {
				console.log(doc)
			})
	}

	public createDefaultCharacter() : CharacterSheet {
		return {
			uid: null,
			name: "",	
			class: null,
			level: 0,
			background: "",
			race: null,
			alignment: "",

			expCurrent: 0,
			expNext: 1000,

			armorClass: 0,
			initiative: 0,
			speed: 0,

			hitPoints: 0,
			hitPointsMax: 0,
			tmpHitPoints: 0,

			hitDice: 0,
			hitDiceTotal: 0,

			deathSavesSuccess: [false, false, false],
			deathSavesFailures: [false, false, false],

			personalityTraits: "",
			ideals: "",
			bonds: "",
			flaws: "",
			featuresTraits: "",

			attacks: [
				{name: "", bonus: 0, damageType: ""},
				{name: "", bonus: 0, damageType: ""},
				{name: "", bonus: 0, damageType: ""},
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
					abilities: [
						{ name: "Athletics", value: 0 },
					]
				},
				{
					name: "Dexterity",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					abilities: [
						{ name: "Acrobatics", value: 0 },
						{ name: "Sleight of Hand", value: 0 },
						{ name: "Stealth", value: 0 },
					]
				},
				{
					name: "Constitution",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					abilities: []
				},
				{
					name: "Intelligence",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					abilities: [
						{ name: "Arcana", value: 0 },
						{ name: "History", value: 0 },
						{ name: "Investigation", value: 0 },
						{ name: "Nature", value: 0 },
						{ name: "Religion", value: 0 },
					]
				},
				{
					name: "Wisdom",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					abilities: [
						{ name: "Animal handling", value: 0 },
						{ name: "Insight", value: 0 },
						{ name: "Medicine", value: 0 },
						{ name: "Perception", value: 0 },
						{ name: "Suvival", value: 0 },
					]
				},
				{
					name: "Charisma",
					value: 0,
					modifier: 0,
					savingThrows: 0,
					abilities: [
						{ name: "Deception", value: 0 },
						{ name: "Intimidation", value: 0 },
						{ name: "Performance", value: 0 },
						{ name: "Persuasion", value: 0 },
					]
				},
			],

			passiveWisdom: 0,

			proficienciesLanguages: "",
			equipment: "",
			notes: ""
		}
	}
}