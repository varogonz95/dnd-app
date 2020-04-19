import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { SignInComponent } from './pages/signin/signin.component';
import { redirectUnauthorizedTo, loggedIn, AngularFireAuthGuard, redirectLoggedInTo } from "@angular/fire/auth-guard";

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
		component: HomeComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn }
	},
	{
		path: 'signIn',
		component: SignInComponent,
		canActivate: [AngularFireAuthGuard],
		data: {authGuardPipe: redirectLoggedInToHome}
	},
	{
		path: 'character/create',
		component: CharacterFormComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToSignIn }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
