import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private isUserLoggedIn = signal(false);

  isLoggedIn(): boolean {
    return this.isUserLoggedIn();
  }

  checkCredentials(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isUserLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isUserLoggedIn.set(false);
  }
}
