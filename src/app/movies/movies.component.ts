import { style } from '@angular/animations';
import { StylesCompileDependency } from '@angular/compiler';
import {Component} from '@angular/core';
import {Movies} from '../movie.datasource';
import {Movie} from '../movie';

@Component({
    selector: 'movies' , // etiket şeklinde app.component.html de çağırarak çalıştırırız
    templateUrl : 'movies.component.html'
})

export class MoviesComponent{
    title = "Movies List";
    movies = Movies;
    selectedMovie : Movie;


    onSelect(movie:Movie): void{
        this.selectedMovie =movie;
    }
  
}