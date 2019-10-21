import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteMainComponent } from './site/site-main/site-main.component';
import { HomeComponent } from './site/home/home.component';
import { ProjectsComponent } from './site/projects/projects.component';
import { ContactComponent } from './site/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: SiteMainComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
