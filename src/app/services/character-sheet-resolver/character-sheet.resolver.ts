import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CharacterSheetService } from '../../../services/character-sheet/character-sheet.service';
import { PlayerInfoService } from '../../../services/player-info/player-info.service';
import { first, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CharacterSheetResolver implements Resolve<any> {

	constructor(
		private service: CharacterSheetService, 
		private playerInfo: PlayerInfoService,
		private router: Router) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (route.paramMap.has('id')) {
			const doc = this.service.getByDocId(route.paramMap.get('id'))

			return doc.get().pipe(
				switchMap(data => data.get('uid') === this.playerInfo.getUserInfo().uid? of(doc) : this.router.navigateByUrl('/not-found')))
		}
		else {
			return this.router.navigateByUrl('/not-found')
		}
	}
}
