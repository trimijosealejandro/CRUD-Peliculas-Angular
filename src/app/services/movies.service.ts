import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../interface/movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_ENDPOINT = 'http//localhost:8000/api';
  constructor(private httpClient:HttpClient) { }
  get(){
   return this.httpClient.get(this.API_ENDPOINT+'/movies');

  }
  save(movie:Movies){
const headers = new HttpHeaders({"Content-type":`application/json`});
return this.httpClient.post(this.API_ENDPOINT+'/movies',movie, {headers:headers});
  }
  put(movie:Movies){
    const headers = new HttpHeaders({"Content-type":`application/json`});
    return this.httpClient.put(this.API_ENDPOINT+'/movies/'+ movie.id,movie, {headers:headers});
      }
  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT+'/movies' + id);
  }
}
