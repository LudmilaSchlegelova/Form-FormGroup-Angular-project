import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeDbService {
  constructor() {}

  getUserName() {
    setTimeout(() => {
      return 'Janko';
    }, 10000);
  }
  getUserPassword() {
    setTimeout(() => {
      return '987';
    }, 10000);
  }
}
