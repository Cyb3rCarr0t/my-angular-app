import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { ExampleComponent } from './example/example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent},
  { path: 'people-list', component: PeopleListComponent},
  { path: 'params-example/:urlParam/:anotherParam', component: ParamsExampleComponent},
  { path: 'user-info-form', component: UserInfoFormComponent},
  { path: 'user-info-display', component: UserInfoDisplayComponent},
  { path: 'event-handling', component: EventHandlingComponent},
  { path: 'counter-button', component: CounterButtonComponent},
  { path: 'counter-button-page', component: CounterButtonPageComponent},
  { path: '**', component: NotFoundPageComponent},
  { path: '', redirectTo: '/people-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
