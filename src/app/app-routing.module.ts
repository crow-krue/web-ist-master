import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListNewsComponent } from "./list-news/list-news.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "news",
    component: ListNewsComponent
  },
  {
    path: "bad-news",
    redirectTo: "news"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
