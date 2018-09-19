import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuService } from './core/menu/menu.service';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DropdownComponent } from './views/elements/dropdown/dropdown.component';
import { CreateCVComponent } from './views/cvmanagement/createcv.component';
import { ViewCVComponent } from './views/cvmanagement/viewcv.component';
import { CallbackComponent } from './views/linkedin/callback.component';


import appMenu from './views/menu';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'createcv', component: CreateCVComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'viewcv', component: ViewCVComponent },
  { path: 'login/callback', component: CallbackComponent },
  {
    path: 'elements',
    children: [
      { path: 'dropdown', component: DropdownComponent }
    ]
  },
  { path: '**', redirectTo: '/notfound' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
  constructor(private menu: MenuService) {
    menu.addMenu(appMenu);
  }
}
