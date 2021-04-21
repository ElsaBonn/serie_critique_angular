import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  errMsg: string;

  constructor(private authService: AuthService, private router: Router) {
    this.errMsg = '';
  }

  ngOnInit(): void {
  }

  onSubmitLogin(form: NgForm): void {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signIn(username, password)
      .then(() => {
        this.router.navigateByUrl('tvShows');
      })
      .catch(errMsg => this.errMsg = errMsg);

  }

}
