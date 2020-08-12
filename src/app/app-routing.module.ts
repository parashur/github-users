import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserContainerComponent
  },
  {
    path: 'repos',
    component: RepoListComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
