import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PascalCasePipe } from '../utils/pipes/pascal-case.pipe';



@NgModule({
	declarations: [
		PascalCasePipe
	],
	imports: [
		CommonModule
	],
	exports: [
		PascalCasePipe
	],
})
export class UtilsModule { }
