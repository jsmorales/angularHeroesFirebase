import { Pipe, PipeTransform } from '@angular/core';
import {hasOwnProperty} from 'tslint/lib/utils';

@Pipe({
  name: 'getKeys',
  pure: false // stay pend of changes!
})
export class GetKeysPipe implements PipeTransform {

  transform(value: any): any {
    const heroes = [];
    /*const keys = [];
    for (const key in value) {
      keys.push(key);
    }
    return keys;*/

    for (const key in value) {
      const hero = value[key];
      console.log(value);
      console.log(key);
      if (!hasOwnProperty(hero, 'bio')) {
        hero.bio = '';
      }
      hero.key$ = key;
      heroes.push(hero);
    }
    return heroes;
  }

}
