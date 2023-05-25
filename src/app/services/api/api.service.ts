import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dbUrl = "https://kidysadminapp-default-rtdb.firebaseio.com/";
  constructor(private http:HttpClient) { }

  public getAdmins() : Observable<any>
  { 
    return this.http.get(this.dbUrl + "admins.json");
  }

  public getCategories() : Observable<any> {
    return this.http.get(this.dbUrl+"Categories.json");
  }

  public addItem(value:any , catKey:any) : Observable<any>
  {
    return this.http.post(this.dbUrl+"Categories/"+catKey+"/items.json" , value);
  }


}
