import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public user: firebase.User

	constructor(private fireauth: AngularFireAuth) { }

	ngOnInit() {
		this.fireauth.authState.subscribe(user => {
			console.log(user);
			this.user = user
		})
	}

	async signOut() {
		await this.fireauth.auth.signOut()
	}
}
