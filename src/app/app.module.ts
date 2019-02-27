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
import { AlertBootstrapComponent } from './components/utils/alert-bootstrap/alert-bootstrap.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    NavBarComponent,
    AlertBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule, // including search module
    OrderModule,
    NgxPaginationModule
  ],
  providers: [HeroesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
