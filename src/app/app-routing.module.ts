import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'my-app',
    loadChildren: () =>
      import('./main/my-app/my-app.module').then((m) => m.MyAppModule),
  },
  {
    path: 'sorting',
    loadChildren: () =>
      import('./main/sorting/sorting.module').then((m) => m.SortingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
