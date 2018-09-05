import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ui-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  isUserAuthorized = false;
  isUserAdministrator = false;
  loggedInUserName = '';
  isOrgAdmin = false;

  @ViewChild('topnav') topnav: ElementRef;

  constructor(private _router: Router,
    private _authService: AuthService
    ) {
    _router.events.subscribe(this.updateMenuAfterLogin.bind(this));
  }

  ngOnInit() { }

  toggle() {
    this.topnav.nativeElement.classList.toggle(['responsive']);
  }

  logout() {
    this._authService.logout();
    this._router.navigateByUrl('/');
  }

  updateMenuAfterLogin() {
    
  }
}
