import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { HeroesServiceService } from '../../services/heroes-service.service';
import {Heroe} from '../../interfaces/hero.interface';
import {hasOwnProperty} from 'tslint/lib/utils';
import { AlertBootstrapComponent } from '../utils/alert-bootstrap/alert-bootstrap.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  form: FormGroup;
  Houses: any[] = [
    {
      name: 'Marvel'
    },
    {
      name: 'DC'
    }
  ];
  hero: any = {
    id: 0,
    name: '',
    house: 'DC'
  };
  new = true;
  params: any;
  alertBoot = new AlertBootstrapComponent();
  alertShow = false;
  alertMessage = '';
  alertClass = '';
  constructor(private serviceHeroes: HeroesServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      house: new FormControl('', [Validators.required]),
      bio: new FormControl('', [])
    });
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.params = params;
      if ( params.id !== 'new' ) {
        this.new = false;
        this.serviceHeroes.getHero(params.id).subscribe(data => {
          console.log(data);
          this.hero = data;
          if (!hasOwnProperty(this.hero, 'bio')) {
            this.hero.bio = '';
          }
          this.form.setValue(this.hero);
        });
      }
    });
  }

  ngOnInit() {
  }

  getSubmitForm() {
    console.log(this.form.value);
    const hero = this.form.value;
    if (this.new) {
      this.serviceHeroes.newHero(this.form.value).subscribe( data => {
          console.log(data);
          // this.router.navigate(['/hero', data['name']]);
          this.form.reset();
          // -------------------------------------------
          this.showAlert(this.alertBoot.CLASS_SUCCESS, 'El heroe ha sido creado.', 5000);
        },
        error => console.log(error));
    } else {
      this.serviceHeroes.updateHero(hero, this.params.id).subscribe(data => {
        console.log(data);
      },
        error => console.log(error));
    }

  }

  showAlert(alertClass: string, message: string, time: number) {
    this.alertShow = true;
    this.alertClass = alertClass;
    this.alertMessage = message;
    setTimeout(() => {
      this.alertShow = false;
    }, time);
  }
}
