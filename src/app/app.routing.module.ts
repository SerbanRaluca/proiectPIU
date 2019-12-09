import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EmployeeComponent } from './employee/employee.component';
import { AdaugareAnuntComponent } from './employee/adaugare-anunt/adaugare-anunt.component';
import { CautareJobComponent } from './employee/cautare-job/cautare-job.component';
import { CautareCategorieComponent } from './employee/cautare-job/cautare-categorie/cautare-categorie.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'candidat', component: EmployeeComponent, children: [
           {path:'anunt',component:AdaugareAnuntComponent},
           {path:'cautare',component:CautareJobComponent,children:[
               {path:'categorie',component:CautareCategorieComponent}
           ]}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}