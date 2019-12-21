import { AnuntJob } from './anuntJob.model';
import { Anunt } from './anunt.model';

export class JobApplication{
    constructor(public job:AnuntJob,public status:string){}
}

export class FreelancerApplication{
    constructor(public job:Anunt,public status:string){}
}