import { Component, OnInit } from '@angular/core';
import {GithubService} from '../service.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GithubService]
})
export class GithubComponent implements OnInit {

  user:any;
  repos:any;
  username:string;

ngOnInit() {
  this.username="saiki96";

}
  
  constructor(private _githubService:GithubService) 
  {
   console.log("init....");
   
    }

  

  
search()
{
  
this._githubService.updateusername(this.username);

 this._githubService.getUser().subscribe(user=>{
   this.username=user;
   
   console.log(user.name);
   }); 

    this._githubService.getRepos().subscribe(repos=>{
     this.user=repos;
     
    });
}
}
