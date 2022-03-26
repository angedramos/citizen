import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateCitizenComponent } from './validate-citizen/validate-citizen.component';
import { RegisterCitizenComponent } from './register-citizen/register-citizen.component';
import { ValidateDocumentComponent } from './validate-document/validate-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';




@NgModule({
  declarations: [
    AppComponent,
    ValidateCitizenComponent,
    RegisterCitizenComponent,
    ValidateDocumentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
