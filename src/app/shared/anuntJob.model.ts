export class AnuntJob {
  constructor(
    public categorie: string,
    public angajator: string,
    public logo: string,
    public titlu: string,
    public locatie: string,
    public descriere: string,
    public salariu: number,
    public aplied: boolean,
    public favorit: boolean,
    public nivel?: string,
    public status?: string
  ) {
  }
}

export class JobFavorit {
  constructor(
    public jobFav: AnuntJob[]
  ) {

  }
}
