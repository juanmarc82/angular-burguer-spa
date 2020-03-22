import { Component, OnInit } from '@angular/core'
import { HeroesService, Heroe } from '$services/heroes.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Heroe[]
  heroesFound: Heroe[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params =>
        (this.heroesFound = this.heroeService.findHeroes(params['params']))
    )

    this.heroes = this.heroeService.getHeroes()
  }

  showHeroe = (id: number) => {
    const indexResult = this.heroes.findIndex(
      heroe => heroe.nombre === this.heroesFound[id].nombre
    )

    return this.router.navigate(['/heroe', indexResult])
  }
}
