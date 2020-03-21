import { Component, OnInit } from '@angular/core'
import { HeroesService } from '$services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes()
  }
}

interface Heroe {
  nombre: string
  bio: string
  img: string
  aparicion: string
  casa: string
}
