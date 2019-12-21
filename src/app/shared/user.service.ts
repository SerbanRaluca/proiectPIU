import { User } from './user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class UserService{

    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

    users:User[]=[
        new User(
            "Raluca",
            "Serban",
            "raluca@gmail.com",
            "1234",
            "Cluj Napoca",
             new Date("18-08-1997"),
            'CANDIDAT',
        ),
        new User(
            "Cristian",
            "Moldovan",
            "moldo@gmail.com",
            "1234",
            "Cluj Napoca",
             new Date("19-07-1997"),
            'ANGAJATOR',
        )
    ]  

    constructor(){
        this.currentUserSubject = new BehaviorSubject<string>(sessionStorage.getItem('name'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    setUser(user:string){
       sessionStorage.setItem("name",user);
       this.currentUserSubject.next(user);
    }

    saveUser(user:User){
       this.users.push(user);
       console.log(this.users);
    }
}