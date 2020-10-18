import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {Movies} from './movie.datasource';
import {Observable , of} from 'rxjs';
import {LogginService} from './loggin.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor( private logginService: LogginService) { }

    getMovies(): Observable<Movie[]> {
        this.logginService.add('MovieService: listening log');
        return of(Movies) ;
    }

    getMovie(id): Observable<Movie>{
      this.logginService.add('MovieService: get detail by id: '+id)
      return of(Movies.find(movie=> movie.id === id));

    }
}
