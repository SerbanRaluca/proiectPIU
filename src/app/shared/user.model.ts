import { Profil } from './user.profile';

export class User{
    constructor(
        public prenume: string,
        public nume: string,
        public email: string,
        public username:string,
        public parola: string,
        public oras: string,
        public dataNasterii: Date,
        public varsta:number,
        public role: string,
        public profil:Profil
      ) {
    
      }
}