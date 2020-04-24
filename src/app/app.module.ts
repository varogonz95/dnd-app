import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePage } from './pages/home/home.component';
import { SignInPage } from './pages/signin/signin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ViewCharacterSheetPage } from './pages/view-character-sheet/view-character-sheet.component';
import { CreateCharacterSheetPage } from './pages/create-character-sheet/create-character-sheet.component';
import { ComponentsModule } from '../components/components.module';
import { CharacterSheetService } from '../services/character-sheet/character-sheet.service';
import { UtilsModule } from '../utils/utils.module';
import { CloudStorageService } from '../services/cloud-storage/cloud-storage.service';
import { PlayerInfoService } from '../services/player-info/player-info.service';
import { FileToBase64Service } from '../services/file-to-base64/file-to-base64.service';
import { ProgressBarOutletComponent } from './components/progress-bar-outlet/progress-bar-outlet.component';
import { ProgressBarService } from './services/progress-bar/progress-bar.service';
import { PlayerCharacterSheetsComponent } from './components/player-character-sheets/player-character-sheets.component';
import { CardComponent } from './components/create-character-card/card.component';
import { CreateDungeonPartyPageComponent } from './pages/create-dungeon-party-page/create-dungeon-party-page.component';
import { InvitePlayersPageComponent } from './pages/invite-players-page/invite-players-page.component';
import { JoinDungeonPartyPageComponent } from './pages/join-dungeon-party-page/join-dungeon-party-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DungeonPartyFormComponent } from './components/dungeon-party-form/dungeon-party-form.component';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,

		ProgressBarOutletComponent,
		PlayerCharacterSheetsComponent,
		CardComponent,
		HomePage,
		SignInPage,
		ViewCharacterSheetPage,
		CreateCharacterSheetPage,
		CreateDungeonPartyPageComponent,
		InvitePlayersPageComponent,
		JoinDungeonPartyPageComponent,
		NotFoundPageComponent,
		DungeonPartyFormComponent,
		ForbiddenPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireAuthGuardModule,
		AngularFireModule.initializeApp(environment.firebase),

		// External modules
		// ServicesModule,
		UtilsModule,
		ComponentsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		CharacterSheetService,
		CloudStorageService,
		PlayerInfoService,
		FileToBase64Service,
		ProgressBarService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
