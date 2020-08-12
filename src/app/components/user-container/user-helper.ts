import { UserService } from '../../providers/user.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserHelper {
  constructor(public service: UserService) { }
  async mapGithubUserData(data) {
    const userCardData = [];
    if (data) {
      data.forEach(async el => {
        const profileData = await this.getProfileDetails(el.url);
        console.log(profileData);
        const template: ProfileData = {
          id: el.id,
          name: profileData['name'],
          userName: profileData['login'],
          profileImg: profileData['avatar_url'],
          email: profileData['email'],
          followers: profileData['followers'],
          following: profileData['following'],
          company: profileData['company'],
          reposUrl: profileData['repos_url']
        };
        userCardData.push(template);
      });
    }
    return userCardData;
  }

  getProfileDetails(url) {
    return new Promise((resolve, reject) => {
      this.service.getProfileDetails(url).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(false);
        }
      );
    });
  }

  mapRepoServiceDataForForm(data) {
    const userRepoData = [];
    if (data) {
      data.forEach(el => {
        const template = {
          id: el.id,
          name: el.name,
          forksCount: el.forks_count,
          cloneUrl: el.clone_url
        }
        userRepoData.push(template);
      });
    }
    return userRepoData;
  }
}

export interface ProfileData {
  id: string;
  name: string;
  userName: string;
  profileImg: string;
  email: string;
  followers: string;
  following: string;
  company: string;
  reposUrl: string;
}
