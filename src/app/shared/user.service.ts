import { User } from '../user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class Userservice{

    private currentUser:User;

    setUser(user:User){
        this.currentUser=user;
    }

    getUser(){
        return this.currentUser;
    }
}