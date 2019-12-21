import { Injectable } from '@angular/core';
import { Profil } from './user.profile';

@Injectable({
    providedIn: 'root'
})
export class ProfilesService {
  constructor() {}

  profiles:Profil[]=[];

  createProfile(user){

  }

  getProfile(username:string){

  }
}