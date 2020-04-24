import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'dump-data',
	template: `
		<div class="box has-background-light" *ngIf="!isProd">
			<pre>{{data | json}}</pre>
		</div>`,
	styleUrls: ['./dump-data.component.css']
})
export class DumpDataComponent implements OnInit {

	@Input() public data: any
	public isProd = environment.production

	constructor() { }

	ngOnInit() {
	}

}
