import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LogInComponent } from './components/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ElectronicComponent } from './components/electronic/electronic.component';
import { NetflixHeaderComponent } from './netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './netflix/netflix-register/netflix-register.component';
import { NetflixIndexComponent } from './netflix/netflix-index/netflix-index.component';
import { BandingComponent } from './components/banding/banding.component';
import { ModelBindingComponent } from './components/model-binding/model-binding.component';
import { DemongIfComponent } from './components/demong-if/demong-if.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { NasaSwitchApiComponent } from './components/nasa-switch-api/nasa-switch-api.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    ElectronicComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    NetflixIndexComponent,
    BandingComponent,
    ModelBindingComponent,
    DemongIfComponent,
    DatabindingComponent,
    NasaSwitchApiComponent,
    ForDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NasaSwitchApiComponent]
})
export class AppModule { }
