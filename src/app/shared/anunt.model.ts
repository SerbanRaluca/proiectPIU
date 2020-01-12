export class Anunt {

  constructor(
    public titlu: string,
    public nume: string,
    public categorie: string,
    public locatie: string,
    public poza: string,
    public descriere: string,
    public salariu_min: number,
    public applied: boolean,
    public favorit: boolean
  ) {
  }
}

export class FreelancerFavorit {
  constructor(
    public frelanceriFav: Anunt[]
  ) {

  }
}
