import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/seguridad/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  isExpanded = false;
  currentUser: User;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor( private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
