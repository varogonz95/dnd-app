import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {

	transform(value: string): string {
		return value.split(' ')
					.map((word, index) => index > 0? word[0].toUpperCase() + word.substring(1) : word)
					.join('')
	}

}
