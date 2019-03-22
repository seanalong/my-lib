import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  googleClientId : string = '15266582375-cleerd10jj00o7hj7o9epndnqjhd14jn.apps.googleusercontent.com';
  googleClientSecret : string = 'N1WstaPHpeL_g8vXbRZIBNbP';

  constructor() { }

  getGoogleClientId(): string {
    return this.googleClientId;
  }

  getGoogleClientSecret(): string {
    return this.googleClientSecret;
  }
  
}
