import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path : 'reactive', component: ReactiveformComponent
  },
  {
    path : 'templateDriven', component: TemplateDrivenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
