import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';
import { UserHelper } from '../user-container/user-helper';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  repos = []
  constructor(private activatedRoute: ActivatedRoute, private service: UserService, private helper: UserHelper) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.username) {
        this.getRepoDetails(params.username);
      }
    });

  }

  getRepoDetails(username) {
    this.service.getUserReposList(username).subscribe((res: any) => {
      console.log(res);
      this.repos = this.helper.mapRepoServiceDataForForm(res);
    });
  }

}
