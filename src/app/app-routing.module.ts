import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  //  { path: '', redirectTo: 'films', pathMatch: 'full' },
  //  { path: 'films', loadChildren: './pages/films/films.module#FilmsPageModule' },
  //  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    // { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
    // { path: 'film-details', loadChildren: './pages/film-details/film-details.module#FilmDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
