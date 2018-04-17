import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // inject Router if we need to use it
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    //assume we are doing complex calculation
    //navigate allows us to use routerLink programatically
    //using absolute servers path with prefix /
    this.router.navigate(['/servers']);
  }
}
