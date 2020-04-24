import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";

@Component({
	selector: 'signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SignInPage implements OnInit {

	private provider = new auth.GoogleAuthProvider()

	constructor(private fireAuth: AngularFireAuth) {
		this.provider.setCustomParameters({ prompt: "select_account" })
	}

	ngOnInit() {
	}

	public signin() {
		this.fireAuth.auth.signInWithRedirect(this.provider);
	}
}
