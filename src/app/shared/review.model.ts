export class Review {

  constructor(
    public numeAngajator: string,
    public pozaAngajator: string,
    public numeFreelancer: string,
    public detaliiJob: string,
    public review: string,
    public rating: number,
    public date: Date
  ) {
  }
}

export class ReviewJob {

  constructor(
    public numeAngajat: string,
    public pozaAngajat: string,
    public numeJob: string,
    public detaliiJob: string,
    public review: string,
    public rating: number,
    public date: Date
  ) {
  }
}
