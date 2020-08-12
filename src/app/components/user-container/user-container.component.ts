import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { UserHelper } from './user-helper';
import * as data from './data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
  providers: [UserHelper]
})
export class UserContainerComponent implements OnInit {
  usersGithubInfo = [];
  userData = [];
  pokemanDataSet = [];
  constructor(private service: UserService, private helper: UserHelper, private router: Router) { }

  ngOnInit() {
    this.getPokeman();
  }

  async getPokeman() {
    this.service.getGithubUsers().subscribe(
      async res => {
        if (res) {
          this.usersGithubInfo = await this.helper.mapGithubUserData(data.sample);
          this.userData = this.usersGithubInfo;
        }
      }, err => {
        console.log('err');
      }
    );
  }

  search(key) {
    this.usersGithubInfo = this.userData;
    if (key) {
      const searchData = this.usersGithubInfo.filter(el => {
        return el['name'] ? el['name'].toLowerCase().includes(key.toLowerCase()) : '';
      });
      this.usersGithubInfo = searchData;
      console.log(searchData);
    } else {
      this.usersGithubInfo = this.userData;
    }
  }

  showrepos(data) {
    this.router.navigate(['/repos'], { queryParams: { username: data['userName'] } });
  }
}
