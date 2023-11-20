import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponentComponent } from './log-component/log-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { OfLogComponentComponent } from './of-log-component/of-log-component.component';
import { LogGuardServiceService } from './log-guard-service.service';

const routes: Routes = [
  { path: 'log', component: LogComponentComponent },
  { path: 'main', canActivate: [LogGuardServiceService], component: MainComponentComponent },
  { path: 'ofLog', canActivate: [LogGuardServiceService], component: OfLogComponentComponent },
  { path: '**', redirectTo: 'log' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
