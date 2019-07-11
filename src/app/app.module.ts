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

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'talent', component: TalentComponent, data: { title: 'Talent' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'solutions', component: SolutionsComponent, data: { title: 'Solutions' } },
  { path: 'recruiting', component: RecruitingComponent, data: { title: 'Recruiting' } },
  { path: 'chunkofwork', component: ChunkofworkComponent, data: { title: 'Chunk of Work' } }
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
    ChunkofworkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
