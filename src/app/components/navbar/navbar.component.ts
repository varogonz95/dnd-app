import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public user: firebase.User

	constructor(
		private fireauth: AngularFireAuth,
		private router: Router) { }

	ngOnInit() {
		this.fireauth.authState.subscribe(user => {
			console.log(user);
			this.user = user
		})
	}

	async signOut() {
		await this.fireauth.auth.signOut()
		await this.router.navigate(['home'])
	}
}
