import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Magneto' },
      { id: 16, name: 'Wolverine' },
      { id: 17, name: 'Deadpool' },
      { id: 18, name: 'Batman' },
      { id: 19, name: 'Spider-man' },
      { id: 20, name: 'Ant-man' },
      { id: 21, name: 'Iron-man' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]):number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
