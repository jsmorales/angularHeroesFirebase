import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HeroesServiceService} from './services/heroes-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
