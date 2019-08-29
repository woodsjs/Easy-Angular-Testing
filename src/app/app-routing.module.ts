import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterlinkTestComponent } from './routerlink-test/routerlink-test.component';
import { ActivatedRouteTestCompComponent } from './activatedroute-test/activatedroute-test';

const routes: Routes = [
  { path: 'routerlinktest', component: RouterlinkTestComponent },
  { path: 'activatedroutetest', component: ActivatedRouteTestCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
