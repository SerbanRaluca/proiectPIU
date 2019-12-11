import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EmployeeComponent } from './employee/employee.component';
import { AdaugareAnuntComponent } from './employee/adaugare-anunt/adaugare-anunt.component';
import { CautareJobComponent } from './employee/cautare-job/cautare-job.component';
import { CautareCategorieComponent } from './employee/cautare-job/cautare-categorie/cautare-categorie.component';
import {CandidatRegistrationComponent} from './registration/candidat-registration/candidat-registration.component';
import {EmployerRegistrationComponent} from './registration/employer-registration/employer-registration.component';
import {ChooseRegistrationComponent} from './registration/choose-registration/choose-registration.component';
import {LoginComponent} from './login/login.component';
import {EmployerComponent} from './employer/employer.component';
import {CautareFreelancerComponent} from './employer/cautare-freelancer/cautare-freelancer.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'chooseRegistration', component: ChooseRegistrationComponent},
    {path: 'candidatRegistration', component: CandidatRegistrationComponent},
    {path: 'employerRegistration', component: EmployerRegistrationComponent},
    {
      path: 'candidat', component: EmployeeComponent, children: [
        {path: 'anunt', component: AdaugareAnuntComponent},
        {
          path: 'cautare', component: CautareJobComponent, children: [
            {path: 'categorie', component: CautareCategorieComponent}
          ]
        }
      ]
    },
    {
      path: 'angajator', component: EmployerComponent, children: [
        {path: 'anunt', component: AdaugareAnuntComponent},
        {
          path: 'cautare', component: CautareFreelancerComponent, children: [
            {path: 'categorie', component: CautareCategorieComponent}
          ]
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}