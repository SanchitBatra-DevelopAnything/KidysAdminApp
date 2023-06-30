import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';

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

  public getItems(categoryKey : string) : Observable<any>
  {
    return this.http.get(this.dbUrl+"Categories/"+categoryKey+"/items.json");
  }

  public deleteItem(categoryKey:string , itemKey:string) : Observable<any>
  {
    return this.http.delete(this.dbUrl+"Categories/"+categoryKey+"/items/"+itemKey+".json");
  }

  public editItem(categoryKey : string , itemKey : string , updatedItem:any)
  {
    return this.http.put(this.dbUrl+"Categories/" + categoryKey + "/items/" + itemKey+".json" , updatedItem);
  }

  public getDistributorRequests() : Observable<any>
  {
    return this.http.get(this.dbUrl+"DistributorNotifications.json");
  }

  public makeDistributor(data:any) : Observable<any>
  {
    return this.http.post(this.dbUrl+"Distributors.json" , data);
  }

  public deleteNotification(key:any) :Observable<any> {
    return this.http.delete(this.dbUrl+"DistributorNotifications/"+key+".json");
  }

  public getDistributors() : Observable<any>
  {
    return this.http.get(this.dbUrl+"Distributors.json");
  }

  public deleteDistributor(key:any) : Observable<any>
  {
    return this.http.delete(this.dbUrl+"Distributors/"+key+".json");
  }

  public getActiveOrders():Observable<any>
  {
    return this.http.get(this.dbUrl+"activeDistributorOrders.json");
  }

  public getOrder( area : String,orderedBy:String , orderKey : String) : Observable<any>
  {
    return this.http.get(this.dbUrl+"activeDistributorOrders/"+area+"/"+orderedBy+"/"+orderKey+".json");
  }
}
