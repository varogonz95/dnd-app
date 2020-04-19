import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";

@Component({
	selector: 'signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

	constructor(private fireAuth: AngularFireAuth) { }

	ngOnInit() {
	}

	public signin() {
		this.fireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
	}
}
