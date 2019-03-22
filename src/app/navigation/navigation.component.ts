import { Component, OnInit } from '@angular/core';

import { GoogleLoginService } from '../../google-login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  googleClientId;
  googleClientSecret;

  constructor(private googleLoginService: GoogleLoginService) { }

  ngOnInit() {
    this.googleClientId = this.googleLoginService.getGoogleClientId();
    this.googleClientSecret = this.googleLoginService.getGoogleClientSecret();
  }
}
