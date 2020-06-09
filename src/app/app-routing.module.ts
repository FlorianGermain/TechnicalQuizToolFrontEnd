import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';


const routes: Routes = [
  {path:'',component : HomeComponent},
  {path:'edit-question',component : EditQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
