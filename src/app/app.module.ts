import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
/* component */
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { SearchComponent } from './components/search/search.component';
/* services */
import { UserService } from './providers/user.service';
/* helper */
import { UserHelper } from './components/user-container/user-helper';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './components/repo-list/repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserContainerComponent,
    SearchComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [UserService, UserHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
