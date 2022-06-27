import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent},
  { path: 'people-list', component: PeopleListComponent},
  { path: 'params-example/:urlParam/:anotherParam', component: ParamsExampleComponent},
  { path: '**', component: NotFoundPageComponent},
  { path: '', redirectTo: '/people-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
