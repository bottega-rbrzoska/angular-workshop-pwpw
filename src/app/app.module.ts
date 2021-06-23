import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ProfileComponent } from './main/profile/profile.component';
import { CounterComponent } from './main/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
