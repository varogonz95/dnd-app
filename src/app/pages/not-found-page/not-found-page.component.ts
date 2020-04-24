import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'not-found-page',
	template: `
		<section class="hero is-medium is-light">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Ups!</h1>
					<p>Lo que sea que estabas buscando no pudimos encontrarlo <b>:'(</b></p>
				</div>
			</div>
		</section>
	`,
	styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
