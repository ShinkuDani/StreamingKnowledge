import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StreamingService } from '../../services/streaming_service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilmsModel } from '../../models/filmsModels';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [FormsModule, HttpClientModule, CommonModule, RouterLink]
})
export class HomePageComponent {

  constructor( private service: StreamingService){

  }

  // Valor do Input 
  filmTitle:string = "Batman" 
  //Variavel que serve de modelo para os dados
  filmData!: FilmsModel 
  
  //Função public que chama a Função privada de service e apaga o input
  mostrarInformacao(){
    this.filmsInfo()
    this.filmTitle = ""
  }

  //Resseta o input
  resetarForm(form: NgForm){
    form.resetForm()
  }

  //Função privada que chama o service
  private filmsInfo(){
    this.service.getFilmInfo(this.filmTitle)
    .subscribe({
      next: (response) => {
        this.filmData = response
      }
    })
  }

  

}
