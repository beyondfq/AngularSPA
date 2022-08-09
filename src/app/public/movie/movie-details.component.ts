import { Component, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';
import { Genre } from 'src/app/shared/models/Genre';
import { GenreService } from 'src/app/core/services/genre.service';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!:MovieDetails[];
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    
  }

}
