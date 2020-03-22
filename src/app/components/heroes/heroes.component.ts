import { Component, OnInit } from '@angular/core'
import { HeroesService } from '$services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes()
  }

  showHeroe = (id: number) => this.router.navigate(['/heroe', id])
}

interface Heroe {
  nombre: string
  bio: string
  img: string
  aparicion: string
  casa: string
}
