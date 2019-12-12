import { AnuntJob } from './anuntJob.model';

export class JobApplication{
    constructor(public job:AnuntJob,public status:string){}
}