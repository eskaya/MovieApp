import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const movies = [
      {id:1, name:'movie1', descriptions:'İyi Film', imgUrl:'1.jpg'},
      {id:2, name:'movie2', descriptions:'İyi Film', imgUrl:'2.jpg'},
      {id:3, name:'movie3', descriptions:'İyi Film', imgUrl:'3.jpg'},
      {id:4, name:'movie4', descriptions:'İyi Film', imgUrl:'4.jpg' },
      {id:5, name:'movie5', descriptions:'İyi Film', imgUrl:'5.jpg'},
      {id:6, name:'movie6', descriptions:'İyi Film', imgUrl:'6.jpg'},
      {id:7, name:'movie7', descriptions:'İyi Film', imgUrl:'7.jpg'}
  ];
  return{movies};
  }
  constructor() { }
}
