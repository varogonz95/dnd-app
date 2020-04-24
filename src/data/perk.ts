import { Ability } from './ability';

export interface Perk {
	name: string
	value: number
	modifier: number
	savingThrows: number
	savingThrowsChk: boolean
	abilities: Ability[]
}