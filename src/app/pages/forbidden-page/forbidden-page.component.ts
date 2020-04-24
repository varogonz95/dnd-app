import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'forbidden-page',
	template: `
		<section class="hero is-medium is-light">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">¡Alto ahí escoria criminal!</h1>
					<p>Parece que intentas acceder a este sitio sin permisos <b>>:(</b></p>
				</div>
			</div>
		</section>
  `,
	styleUrls: ['./forbidden-page.component.css']
})
export class ForbiddenPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
