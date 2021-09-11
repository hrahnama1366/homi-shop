import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('mymodal')  myModal: any;

  username = '';
  password = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
