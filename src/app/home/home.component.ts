import { Component, OnInit } from '@angular/core';
import { Movies } from '../interface/movies';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
API_ENDPOINT = 'http//localhost:8000/api';
movies:Movies[];
  constructor(private _movieService: MoviesService,) {
    this.getMovies();
   }

  ngOnInit(): void {
  }
delete(id){
  if(confirm('Seguro de eliminar')){
    this._movieService.delete(id).subscribe((data)=>{
      alert('eliminado con exito');
    },(error)=>{
      console.log(error);
    });
    this.getMovies();
  }
}
getMovies(){
  this._movieService.get().subscribe((data:Movies[]) =>{
    this.movies=data;
  },(error)=>{console.log(error);
  alert('Ocurrio un error');
  });
}
}
