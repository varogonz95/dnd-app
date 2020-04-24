import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { SignInPage } from './pages/signin/signin.component';
import { redirectUnauthorizedTo, AngularFireAuthGuard, redirectLoggedInTo } from "@angular/fire/auth-guard";
import { CreateCharacterSheetPage } from './pages/create-character-sheet/create-character-sheet.component';
import { ViewCharacterSheetPage } from './pages/view-character-sheet/view-character-sheet.component';
import { CharacterSheetResolver } from './services/character-sheet-resolver/character-sheet.resolver';
import { CreateDungeonPartyPageComponent } from './pages/create-dungeon-party-page/create-dungeon-party-page.component';
// import { InvitePlayersPageComponent } from './pages/invite-players-page/invite-players-page.component';
import { JoinDungeonPartyPageComponent } from './pages/join-dungeon-party-page/join-dungeon-party-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DungeonPartyResolverService } from './services/dungeon-party-resolver/dungeon-party-resolver.service';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';

const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['signIn'])
const redirectLoggedInToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/home'
	},
	{
		path: 'home',
		component: HomePage,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn }
	},
	{
		path: 'signIn',
		component: SignInPage,
		canActivate: [AngularFireAuthGuard],
		data: {authGuardPipe: redirectLoggedInToHome}
	},
	{
		path: 'character-sheets/create',
		component: CreateCharacterSheetPage,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn }
	},
	{
		path: 'character-sheets/view/:id',
		component: ViewCharacterSheetPage,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn },
		resolve: {characterSheet: CharacterSheetResolver}
	},
	{
		path: 'dungeon-party/create',
		component: CreateDungeonPartyPageComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn }
	},
	/* {
		path: 'dungeon-party/invite/:dungeonPartyId',
		component: InvitePlayersPageComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn }
	}, */
	{
		path: 'dungeon-party/join/:id',
		component: JoinDungeonPartyPageComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn },
		resolve: { dungeonParty: DungeonPartyResolverService }
	},
	/* ERROR HANDLER PAGES */
	{
		path: 'not-found',
		component: NotFoundPageComponent,
	},
	{
		path: 'forbidden',
		component: ForbiddenPageComponent,
	},
	{
		path: '**',
		redirectTo: '/not-found',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
