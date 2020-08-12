import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  private baseURL = 'https://api.github.com/users';

  public getGithubUsers() {
    return this.http.get(this.baseURL);
  }

  public getProfileDetails(userProfileUrl) {
    return this.http.get(userProfileUrl);
  }

  public getUserReposList(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
