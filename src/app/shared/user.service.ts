import { User } from '../user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class Userservice{

    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

    constructor(){
        this.currentUserSubject = new BehaviorSubject<string>(sessionStorage.getItem('name'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    setUser(user:string){
       sessionStorage.setItem("name",user);
       this.currentUserSubject.next(user);
    }
}