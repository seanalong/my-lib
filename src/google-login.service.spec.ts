import { TestBed } from '@angular/core/testing';

import { GoogleLoginService } from './google-login-service.service';

describe('GoogleLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleLoginService = TestBed.get(GoogleLoginService);
    expect(service).toBeTruthy();
  });
});
