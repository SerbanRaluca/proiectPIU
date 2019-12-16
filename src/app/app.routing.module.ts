import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {AdaugareAnuntComponent} from './employee/adaugare-anunt/adaugare-anunt.component';
import {CautareJobComponent} from './employee/cautare-job/cautare-job.component';
import {CandidatRegistrationComponent} from './registration/candidat-registration/candidat-registration.component';
import {EmployerRegistrationComponent} from './registration/employer-registration/employer-registration.component';
import {ChooseRegistrationComponent} from './registration/choose-registration/choose-registration.component';
import {LoginComponent} from './login/login.component';
import {EmployerComponent} from './employer/employer.component';
import {CautareFreelancerComponent} from './employer/cautare-freelancer/cautare-freelancer.component';
import {AdaugareAnuntJobComponent} from './employer/adaugare-anunt-job/adaugare-anunt-job.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'candidat', component: EmployeeComponent, children: [
      {path: ' ', redirectTo: 'cautare'},
      {path: 'cautare', component: CautareJobComponent, data: {label: 'Cauta job'}},
      {path: 'anunt', component: AdaugareAnuntComponent, data: {label: 'Adauga anunt freelancer'}}
    ]
  },
  {
    path: 'angajator', component: EmployerComponent, children: [
      {path: 'cautare', component: CautareFreelancerComponent, data: {label: 'Cauta freelancer'}},
      {path: 'anunt', component: AdaugareAnuntJobComponent, data: {label: 'Adauga anunt job'}},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'chooseRegistration', component: ChooseRegistrationComponent},
  {path: 'candidatRegistration', component: CandidatRegistrationComponent},
  {path: 'employerRegistration', component: EmployerRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
