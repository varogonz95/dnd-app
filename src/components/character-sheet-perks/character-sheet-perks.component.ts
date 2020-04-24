import { Component, OnInit, Input } from '@angular/core';
import { Perk } from 'src/data/perk';

@Component({
  selector: 'character-sheet-perks',
  templateUrl: './character-sheet-perks.component.html',
  styleUrls: ['./character-sheet-perks.component.css']
})
export class CharacterSheetPerksComponent implements OnInit {

	@Input() 
	public proficiencyBonus: number

	@Input()
	public perks: Perk[]

	@Input()
	public passiveWisdom: number

	constructor() { }

	ngOnInit() {
	}

	public calcPerkModifier(value: number) {
		// f(x) = (x/2) - 5
		// f(10) = 0
		// f(14) = 2
		// f(8) = -1
		return Math.floor((value/2) - 5)
	}

	public recalcProficiencies(perk: Perk) {
		perk.modifier = this.calcPerkModifier(perk.value)
		perk.savingThrows = perk.savingThrowsChk? perk.modifier + this.proficiencyBonus : 0
		
		perk.abilities.forEach(ability => 
			ability.value = ability.checked? 
				perk.modifier + this.proficiencyBonus : 0)
	}

}
