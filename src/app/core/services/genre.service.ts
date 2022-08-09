import { Injectable } from '@angular/core';
import { Genre } from 'src/app/shared/models/Genre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }
  
  getAllGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>("https://localhost:7007/api/Genres");
  }

   addGenre(genre:Genre):Observable<Genre>{
     return this.httpClient.post<Genre>("https://localhost:7007/api/Genres/add", genre)
   }

   //deleteGenre(genre:Genre):Observable<boolean>{
  //   return this.httpClient.delete<boolean>("https://movieshopapi.azurewebsites.net/api/Genres/Delete", genreId)
  // }

}
