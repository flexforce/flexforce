import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle: string = 'hello';

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = router.routerState.snapshot.url;
        if (url === '/chunkofwork') {
          this.pageTitle = 'Chunk of Work';
        } else {
          this.pageTitle = this.formatTitle(url);
        }
      }
    });
  }

  formatTitle(url: string) {
    return url.charAt(1).toUpperCase() + url.slice(2);
  }
}
