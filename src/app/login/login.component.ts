import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user:string;
    result:string = 'ss';
 	constructor(private httpClient:HttpClient, private router:Router, private user:UserService) { }

 	onClickMe(login,senha) 
 	{
	 this.user.authInit(login,senha);
  }

  	ngOnInit() 
  	{
      this.user.validateLogin();
  
  	}

}
