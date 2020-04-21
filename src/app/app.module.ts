import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { SignInComponent } from './pages/signin/signin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		CharacterFormComponent,
		
		HomeComponent,
		SignInComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireAuthGuardModule,
		AngularFireModule.initializeApp(environment.firebase)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
