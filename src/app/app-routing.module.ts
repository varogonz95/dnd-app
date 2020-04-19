import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'character/create',
		component: CharacterFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
