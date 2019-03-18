import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: "health", component: NewsComponent},
  {path: "science", component: NewsComponent},
  {path: "technology", component: NewsComponent},
  {path: "business", component: NewsComponent},
  {path: "sports", component: NewsComponent},
  {path: "entertainment", component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
