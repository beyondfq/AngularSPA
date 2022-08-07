import { Injectable } from '@angular/core';
import { Cast } from 'src/app/shared/models/Cast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http:HttpClient) { }

  getCastDetails(id: number): Observable<Cast> {
    return this.http.get<Cast>("https://movieshopapi.azurewebsites.net/api/Cast/" + id);
  }
}
