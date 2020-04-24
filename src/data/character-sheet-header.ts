import { Class } from './class';

export interface CharacterSheetHeader {
	name: string
	class: Class
	level: number
	background: string
	race: string
	alignment: string
	imageUrl: string
	
	expNext: number
	expCurrent: number
}