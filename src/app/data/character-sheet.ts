import { Classes } from './class';
import { Races } from './races';
import { Perk } from './perk';
import { Attack } from './attack';
import { Spell } from './spell';

export interface CharacterSheet {
	uid: string
	name: string
	class: Classes
	level: number
	background: string
	race: Races
	alignment: string
	
	expNext: number
	expCurrent: number

	armorClass: number
	initiative: number
	speed: number
	
	hitPoints: number
	hitPointsMax: number
	tmpHitPoints: number

	hitDice: number
	hitDiceTotal: number

	deathSavesSuccess: boolean[]
	deathSavesFailures: boolean[]

	personalityTraits: string
	ideals: string
	bonds: string
	flaws: string
	featuresTraits: string

	attacks: Attack[]
	spells: Spell[]
	
	proficiencyBonus: number
	inspiration: number

	perks: Perk[]

	passiveWisdom: number

	proficienciesLanguages: string
	equipment: string
	notes: string

	/*
	strength: number
	strengthModifier: number
	strengthST: number
	strengthSTB: boolean
	
	dexterity: number
	dexterityModifier: number
	dexterityST: number
	dexteritySTB: boolean
	
	acrobatics: number
	acrobaticsB: boolean
	
	sleightOfHand: number
	sleightOfHandB: boolean
	
	stealth: number
	stealthB: boolean

	constitution: number
	constitutionModifier: number
	constitutionST: number
	constitutionSTB: boolean

	intelligence: number
	intelligenceModifier: number
	intelligenceST: number
	intelligenceSTB: boolean
	
	arcana: number
	arcanaB: boolean
	
	history: number
	historyB: boolean
	
	investigation: number
	investigationB: boolean
	
	nature: number
	natureB: boolean
	
	religion: number
	religionB: boolean
	*/
}