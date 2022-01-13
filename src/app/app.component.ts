import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { };

  addColaborador() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  home() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}

