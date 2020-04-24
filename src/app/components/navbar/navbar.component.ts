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
	public displayNotifications = false
	public notifications: any[] = []

	private calcWindow: Window

	constructor(
		private fireauth: AngularFireAuth,
		private router: Router) { }

	ngOnInit() {
		this.fireauth.authState.subscribe(user => this.user = user)
	}

	public openCalculatorWindow() {
		if (!this.calcWindow || this.calcWindow.closed)
			this.calcWindow = window.open('http://chicken-dinner.com/5e/5e-point-buy.html', null, 'width=1080,height=800,location=no,menubar=no,resizable=yes')
		else this.calcWindow.focus()
	}

	public async signOut() {
		await this.fireauth.auth.signOut()
		await this.router.navigate(['/signIn'])
	}

	public toggleNotifications() {
		this.displayNotifications = !this.displayNotifications
	}
}
