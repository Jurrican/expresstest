import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<nav>
		<ul>
			<li><a routerLink="/" routerLinkActive="active">Home</a></li>
			<li><a routerLink="/woanders" routerLinkActive="active">Woanders</a></li>
		</ul>
	</nav>
		<router-outlet></router-outlet>
		Hello Darkness my old friend!
	`,
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
}