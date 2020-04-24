import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

@Component({
	selector: 'progress-bar-outlet',
	template: `<progress class="progress is-small is-danger is-radiusless" max="100" style="height: 5px;" [ngClass]="{'is-visible': isVisible, 'is-hidden': !isVisible}"></progress>`,
	styleUrls: ['./progress-bar-outlet.component.css']
})
export class ProgressBarOutletComponent implements OnInit {

	public isVisible = false

	constructor(private progressBar: ProgressBarService) {
	}

	ngOnInit() {
		this.progressBar.state.subscribe(visible => this.isVisible = visible)
	}

}
