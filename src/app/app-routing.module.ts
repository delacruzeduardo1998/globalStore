import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DominicodeComponent } from './page/dominicode/dominicode.component';

const routes: Routes = [
  {path: 'dominicode', component: DominicodeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
