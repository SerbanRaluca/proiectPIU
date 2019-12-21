export class User {
  constructor(
    public prenume: string,
    public nume: string,
    public email: string,
    public parola: string,
    public oras: string,
    public dataNasterii: Date,
    public role: string
  ) {

  }
}

export class LoginDTO {
  constructor(
    public email: string,
    public password: string
  ) {

  }
}
