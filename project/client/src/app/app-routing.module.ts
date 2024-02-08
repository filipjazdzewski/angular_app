/* eslint-disable @typescript-eslint/typedef */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './modules/home/pages/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  // TODO: Change back to HomeComponent
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/exercises',
    title: 'Home',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule,
      ),
  },
  {
    path: 'exercises',
    loadChildren: () =>
      import('./modules/exercise/exercise-routing.module').then(
        (m) => m.ExerciseRoutingModule,
      ),
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'notfound',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
