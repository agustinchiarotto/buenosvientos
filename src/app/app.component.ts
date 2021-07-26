import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'almendras';




onDeactivate() {
  document.body.scrollTop = 0;
  // Alternatively, you can scroll to top by using this other call:
  // window.scrollTo(0, 0)
}
}