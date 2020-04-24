import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from '../../../services/email/email.service';
import { PlayerInfoService } from '../../../services/player-info/player-info.service';
import { Router } from '@angular/router';
import { DocumentReference } from '@angular/fire/firestore';
import { NgModel } from '@angular/forms';

@Component({
	selector: 'invite-players-page',
	templateUrl: './invite-players-page.component.html',
	styleUrls: ['./invite-players-page.component.css']
})
export class InvitePlayersPageComponent implements OnInit {

	@Input()
	public ref: DocumentReference

	public playerEmail = ""
	public isLoading = false
	public invitations: string[] = []

	private readonly emailsRegex = /[\;\s]/

	constructor(
		private router: Router,
		private emailService: EmailService,
		private playerInfo: PlayerInfoService) { }

	ngOnInit() {
	}

	public omit() {
		this.router.navigate(['/dungeon-party/join', this.ref.id])
	}

	public onSubmit() {

	}

	public removeInvitation(index: number) {
		this.invitations.splice(index, 1)
	}

	public async sendInvitations() {
		this.isLoading = true
		const docRef = await this.emailService.send({
			toUids: [this.playerEmail],
			message: {
				subject: `Tienes una invitación al Dungeon Party de ${ this.playerInfo.getUserInfo().displayName }! ⚔🐉`,
				html: '<p>Hello world</p>'
			}
		})


		docRef.onSnapshot(snapshot => {
			const data = snapshot.data()
			if (data.delivery && data.delivery.state === 'SUCCESS') {
				console.log('Invitation(s) delivered');
			}
		})

		this.invitations.push(this.playerEmail)
		this.playerEmail = ""
		this.isLoading = false
	}

	public transformToTags(input: HTMLInputElement, evt: InputEvent) {
		let emails: string[]

		if (this.emailsRegex.test(input.value) || (input.value.length > 0 && evt.data === ' ')) {
			emails = input.value.split(this.emailsRegex).filter(val => val.length > 0)
			this.invitations.push(...emails)
			input.value = ''
		}
	}
}
