import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable()
export class PlayerInfoService {

	private userInfo: User

	constructor(private fireAuth: AngularFireAuth) { }

	getUserInfo() {
		return !this.userInfo? this.userInfo = this.fireAuth.auth.currentUser : this.userInfo
	}
}
