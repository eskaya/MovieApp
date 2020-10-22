import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {Movies} from './movie.datasource';
import {Observable , of} from 'rxjs';
import {LogginService} from './loggin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';

    constructor(
       private logginService: LogginService,
       private http: HttpClient
       ) { }

    getMovies(): Observable<Movie[]> {
        this.logginService.add('MovieService: listening log');
        return this.http.get<Movie[]>(this.apiMoviesUrl);
    }

    getMovie(id): Observable<Movie>{
      this.logginService.add('MovieService: get detail by id: '+id)
      return of(Movies.find(movie=> movie.id === id));

    }

    update(movie: Movie):Observable<any>{
      const httpOptions= {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      return this.http.put(this.apiMoviesUrl, movie, httpOptions)
    }

    add(movie: Movie): Observable<Movie> {
      return this.http.post<Movie>(this.apiMoviesUrl, movie);

    }

    delete(movie: Movie): Observable<Movie>{
      return this.http.delete<Movie>(this.apiMoviesUrl+'/'+movie.id)
    }
}
