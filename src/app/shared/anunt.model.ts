export class Anunt {

  constructor(
    public titlu: string,
    public nume: string,
    public categorie: string,
    public locatie: string,
    public poza: string,
    public descriere: string,
    public salariu_min: number,
    public salariu_max: number,
    public applied: boolean
  ) {
  }
}
