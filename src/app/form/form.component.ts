import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../interface/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
movie: Movies;
id:any;
editar: boolen =false;
movies: Movies[];
  constructor(private _moviservice: MoviesService, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
      this.editar=true;
      this._moviservice.get().subscribe((data:Movie[])=>{
        this.movies=data;
       this.movie=this.movies.find((m)=>{return m.id==this.id});
      },(error)=>{
        console.log(error);
      });
    }else{
    this.editar=false;
    }
  }

  ngOnInit(): void {
  }
  saveMovie(){
    if(this.editar){
      this._moviservice.put(this.movie).subscribe((data) =>{
        alert('pelicula actualizada');
        console.log('data');
      },
      (error)=>{
        console.log(error);
      })

    }else{
      this._moviservice.save(this.movie).subscribe((data) =>{
        alert('pelicula guardada');
        console.log('data');
      },
      (error)=>{
        console.log(error);
      })
    }

  }

}
