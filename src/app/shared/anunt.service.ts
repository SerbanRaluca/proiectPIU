import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Anunt } from './anunt.model';

@Injectable({
    providedIn: 'root'
})
export class AnuntService{

    private anunturi:Anunt[]=[];

    constructor(private http: HttpClient){}

    getAnunturi(){

    }

    saveAnunt(anunt:Anunt){
        this.http
        .post(
          'https://proiect-piu-47612.firebaseio.com/anunturi.json',
           anunt
        )
        .subscribe(data => {
          console.log(data);
        });
    }

}