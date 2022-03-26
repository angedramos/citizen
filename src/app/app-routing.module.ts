import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateCitizenComponent } from './validate-citizen/validate-citizen.component';
import { RegisterCitizenComponent } from './register-citizen/register-citizen.component';
import { ValidateDocumentComponent } from './validate-document/validate-document.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'validate-citizen' },
  { path: 'register-citizen', component: RegisterCitizenComponent },
  { path: 'validate-citizen', component: ValidateCitizenComponent },
  { path: 'validate-document', component: ValidateDocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
