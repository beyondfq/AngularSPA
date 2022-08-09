import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastDetailsComponent } from './public/cast/cast-details.component';
import { CastComponent } from './public/cast/cast.component';
import { AddGenreComponent } from './public/genre/add-genre.component';
import { GenreComponent } from './public/genre/genre.component';
import { MovieDetailsComponent } from './public/movie/movie-details.component';
import { MovieComponent } from './public/movie/movie.component';

const routes: Routes = [
  { path: "", component: MovieComponent },
  { path: "Genre", component: GenreComponent },
  { path: "Add-Genre", component: AddGenreComponent },
  { path: "Movie-Details/:movieId", component: MovieDetailsComponent },
  { path: "Cast-Details/:castId", component: CastDetailsComponent },
  { path: "Cast", component: CastComponent },
  { path: "Account", loadChildren: () => import("./account/account.module").then(mod => mod.AccountModule) },
  { path: "Admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule) },
  { path: "User", loadChildren: () => import("./user/user.module").then(mod => mod.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
