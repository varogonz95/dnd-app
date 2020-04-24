import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CharacterSheetPerksComponent } from './character-sheet-perks/character-sheet-perks.component';
import { CharacterSheetHeaderComponent } from './character-sheet-header/character-sheet-header.component';
import { CharacterSheetFormHeaderComponent } from './character-sheet-form-header/character-sheet-form-header.component';

import { UtilsModule } from '../utils/utils.module';
import { DumpDataComponent } from './dump-data/dump-data.component';

@NgModule({
	declarations: [
		CharacterSheetComponent,
		CharacterSheetHeaderComponent,
		CharacterSheetPerksComponent,
		CharacterSheetFormHeaderComponent,
		DumpDataComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		UtilsModule
	],
	exports: [
		CharacterSheetComponent,
		DumpDataComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
