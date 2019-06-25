import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TalentComponent } from './talent/talent.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { RecruitingComponent } from './recruiting/recruiting.component';
import { ChunkofworkComponent } from './chunkofwork/chunkofwork.component';
import { BragboardComponent } from './bragboard/bragboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'talent', component: TalentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'recruiting', component: RecruitingComponent },
  { path: 'chunkofwork', component: ChunkofworkComponent },
  { path: 'bragboard', component: BragboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TalentComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    SolutionsComponent,
    RecruitingComponent,
    ChunkofworkComponent,
    BragboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
