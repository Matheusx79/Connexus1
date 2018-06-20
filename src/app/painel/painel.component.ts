import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router, private user:UserService,private sanityz:DomSanitizer) { }
  loadPost(){
    this.httpClient.get('http://localhost/api/loadpost')
    .subscribe(
      (data) => {
       	this.userPost = this.sanityz.bypassSecurityTrustHtml(data);

      }
    )

  }
  logout(){
  this.httpClient.get('http://localhost/api/logout')
    .subscribe(
      (data) => {
       	this.router.navigate(['/login']);

      }
    )
  }
insertPost(post){

  	  this.httpClient.get('http://localhost/api/insertpost?post='+post.value)
    .subscribe(
      (data) => {
       	post.value = '';
		this.loadPost();

      }
    )

  }
  ngOnInit() {
  this.user.validatePainel();
  this.httpClient.get('http://localhost/api/returnuser')
    .subscribe(
      (data) => {
      	this.userName = data[1];
      	this.userProf = data[6];
      	this.userCity = data[3];
      	this.userNiver = data[2];
      }
    )
  
   this.loadPost();

  }

}
