import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProgressBarService {

	private visibleEvent = new EventEmitter<boolean>()
	
	public state: Observable<boolean>

	constructor() {
		this.state = this.visibleEvent
	}

	public show() {
		this.visibleEvent.emit(true)
	}
	
	public hide() {
		this.visibleEvent.emit(false)
	}
}