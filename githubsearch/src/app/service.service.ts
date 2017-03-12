import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

   private username="saiki96";
   private client_id="efd55e48ffecb3afd669";
   private client_secret="82129b00be5c639d3f2c849225ebb8a827960459";
   

  constructor(private http:Http) { 
   
   console.log("working service");
  }

  getUser()
  {
    return this.http.get('https://api.github.com/users/'+ this.username).map(res => res.json());

  }

  getRepos()
  {
    return this.http.get('https://api.github.com/users/'+ this.username+'/repos').map(res => res.json());

  }  

  updateusername(username:string)
  {
    this.username=username;
  }

}
