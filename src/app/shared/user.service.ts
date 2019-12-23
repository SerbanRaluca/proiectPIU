import { User } from './user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profil } from './user.profile';

@Injectable({
    providedIn: "root"
})
export class UserService {

    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

    users: User[] = [
        new User(
            "Raluca",
            "Serban",
            "raluca@gmail.com",
            "Raluca Serban",
            "1234",
            "Cluj Napoca",
            new Date("18-08-1997"),
            22,
            'CANDIDAT',
            new Profil("raluca.jpg",[])
        ),
        new User(
            "Cristian",
            "Moldovan",
            "moldo@gmail.com",
            "Moldovan Cristian",
            "1234",
            "Cluj Napoca",
            new Date("19-07-1997"),
            22,
            'ANGAJATOR',
            new Profil("profil.png",[])
        )
    ]

    constructor() {
        this.currentUserSubject = new BehaviorSubject<string>(sessionStorage.getItem('name'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    setUser(user: string) {
        sessionStorage.setItem("name", user);
        this.currentUserSubject.next(user);
    }

    getUser(): User {
        if (sessionStorage.getItem('name') == 'Raluca Serban') {
            return this.users[0];
        }

        if (sessionStorage.getItem('name') == 'Moldovan Cristian') {
            return this.users[1];
        }
    }

    saveUser(user: User) {
        this.users.push(user);
        console.log(this.users);
    }
}