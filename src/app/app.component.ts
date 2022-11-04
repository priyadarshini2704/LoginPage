import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookWebpage';
  login:any = true;



constructor(public router:Router){}

loginpg() {
  this.router.navigate(['/Login'])
  this.login=false
}
}


